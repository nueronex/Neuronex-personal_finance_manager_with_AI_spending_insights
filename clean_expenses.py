import sqlite3
import os
import pandas as pd

DB_PATH = os.path.join(os.path.dirname(clean_expenses.py), "postgresql://postgres:rACwFIpCkCYIkowmYKwtWtJruuPAUvQt@nozomi.proxy.rlwy.net:21912/railway")

def clean_expenses():

    conn = sqlite3.connect(DB_PATH)
    df = pd.read_sql_query("SELECT * FROM expenses", conn)

    print(f"🔍 Original records: {len(df)}")


    df["category"] = df["category"].str.strip().str.title()
    df["description"] = df["description"].fillna("").str.strip()


    df = df.drop_duplicates(subset=["date", "category", "amount", "description"], keep="first")


    df = df[df["amount"] >= 0]

    print(f"✅ Cleaned records: {len(df)}")

    conn.execute("DELETE FROM expenses")
    df.to_sql("expenses", conn, if_exists="append", index=False)

    conn.commit()
    conn.close()
    print("💾 Cleaning complete and saved to database.")

if clean_expenses.py == "__main__":
    clean_expenses()
