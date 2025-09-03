import pytesseract
from PIL import Image
import re
import sqlite3
import os
from datetime import datetime

# Path to Tesseract executable (Windows users need to set this)
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Define DB_PATH relative to the current working directory or a known path
DB_PATH = "postgresql://postgres:rACwFIpCkCYIkowmYKwtWtJruuPAUvQt@nozomi.proxy.rlwy.net:21912/railway" # Or specify a full path like "/content/receipts.db"

def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS receipts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                merchant TEXT,
                amount REAL,
                raw_text TEXT
            )
        """)
    print("Receipts DB ready")

def extract_amount(text):
    """Finds the largest number in the text (likely the total)."""
    amounts = re.findall(r"\d+\.\d{2}", text)
    if amounts:
        return max(map(float, amounts))
    return None

def scan_receipt(image_path):
    """OCR process"""
    try:
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img)

        merchant = text.split("\n")[0].strip()
        amount = extract_amount(text)
        date_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        with sqlite3.connect(DB_PATH) as conn:
            conn.execute("""
                INSERT INTO receipts (date, merchant, amount, raw_text)
                VALUES (?, ?, ?, ?)
            """, (date_str, merchant, amount, text))
            conn.commit()

        print(f"✅ Scanned: {merchant} - ₹{amount}")
        return {"merchant": merchant, "amount": amount, "raw_text": text}

    except Exception as e:
        print(f"❌ Error scanning {image_path}: {e}")
        return None

if __name__ == "__main__":
    init_db()
    # Example scan
    scan_receipt("sample_receipt.jpg")
