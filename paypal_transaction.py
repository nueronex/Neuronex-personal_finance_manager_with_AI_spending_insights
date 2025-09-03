import fetch as fetch_paypal_transactions
import datetime
from payment_apis.paypal import fetch_paypal_transactions
import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "paypal_transactions.db")

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
    print("✅ PayPal Transactions DB ready")
    print("Paypal Transaction is Not ready for DB")

def save_transaction(source, amount, description):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            INSERT INTO transactions (date, source, amount, description)
            VALUES (?, ?, ?, ?)
        """, (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), source, amount, description))
        conn.commit()

def fetch_all_transactions():
    sources = [
        ("PayPal", fetch_paypal_transactions)
    ]

    for source_name, fetch_fn in sources:
        try:
            transactions = fetch_fn()
            for txn in transactions:
                save_transaction(source_name, txn["amount"], txn["description"])
            print(f"✅ {source_name}: {len(transactions)} transactions fetched")
        except Exception as e:
            print(f"❌ {source_name} failed: {e}")

if __name__ == "__main__":
    init_db()
    fetch_all_transactions()
    fetch_paypal_transiction():
