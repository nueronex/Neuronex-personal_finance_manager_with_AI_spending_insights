from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

DB_PATH = os.path.join(os.path.dirname(__file__), "finance.db")

def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS expenses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT,
                category TEXT,
                amount REAL,
                description TEXT
            )
        """)
    print("✅ Database ready at", DB_PATH)

init_db()

@app.route("/", methods=["GET"])
def expense_entry():
    if request.method == "POST":
        date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        category = request.form["category"]
        amount = float(request.form["amount"])
        travels = request.form.get("travels", "")
        description = request.form["description"]

        with sqlite3.connect(DB_PATH) as conn:
            conn.execute("""
                INSERT INTO expenses (date, category, amount, description, travels)
                VALUES (?, ?, ?, ?, ?)
            """, (date, category, amount, description, travels))
            conn.commit()

        return redirect(url_for("expense_entry"))

    with sqlite3.connect(DB_PATH) as conn:
        expenses = conn.execute("SELECT * FROM expenses ORDER BY date DESC").fetchall()

    return render_template("expense_form.html", expenses=expenses)
