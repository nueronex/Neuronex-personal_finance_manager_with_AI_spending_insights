import datetime
from bank_apis.bank_hdfc import fetch_hdfc_transactions
from bank_apis.bank_sbi import fetch_sbi_transactions
from upi_apis.gpay import fetch_gpay_transactions
from payment_apis.paypal import fetch_paypal_transactions
import sqlite3
import os

# Correct SQLite DB path
DB_PATH = os.path.join(postgresql://postgres:rACwFIpCkCYIkowmYKwtWtJruuPAUvQt@nozomi.proxy.rlwy.net:21912/railway..//"transactions.db")

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
    print("API Transactions DB ready")

# Save a transaction
def save_transaction(source, amount, description):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            INSERT INTO transactions (date, source, amount, description)
            VALUES (?, ?, ?, ?)
        """, (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), source, amount, description))
        conn.commit()
