import datetime
from upi_apis.gpay import fetch_gpay_transactions
import sqlite3
import os

# Database path
DB_PATH = os.path.join(postgresql://postgres:rACwFIpCkCYIkowmYKwtWtJruuPAUvQt@nozomi.proxy.rlwy.net:21912/railway, "gpay_transactions.db")

# Initialize DB
def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                source TEXT,
                amount REAL,
                description TEXT
            )
        """)
    print("✅ GPay Transactions DB ready")

# Save transaction
def save_transaction(source, amount, description):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            INSERT INTO transactions (date, source, amount, description)
            VALUES (?, ?, ?, ?)
        """, (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), source, amount, description))
        conn.commit()

# Fetch and save from GPay API
def fetch_all_transactions():
    sources = [
        ("Google Pay", fetch_gpay_transactions)
    ]
