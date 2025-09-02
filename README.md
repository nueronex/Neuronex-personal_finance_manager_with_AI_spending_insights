# Neuronex-personal_finance_manager_with_AI_spending_insights
Personal Finance Manager with AI Spending Insights 💸🤖

A Personal Finance Manager application that allows users to track their income, expenses, and savings goals with the added advantage of AI-powered insights.
The system is backed by a SQL pipeline for structured data storage and integrates AI models to provide personalized financial recommendations.

📌 Features

📊 Transaction Tracking – Log income and expenses with timestamps.

🏷 Category Management – Organize spending into categories (Food, Travel, Bills, etc.).

🎯 Budget & Goals – Define budgets and savings targets with real-time progress tracking.

🤖 AI Insights – Get recommendations to reduce overspending and improve savings.

📈 Analytics & Reports – Visual dashboards for financial summaries and trends.

🔒 Secure Storage – Data persistence with SQL database.

🛠 Tech Stack

Backend: Python / Node.js (depending on your implementation)

Database: SQL (MySQL / PostgreSQL) – schema & pipeline shown in Pipeline of SQL.pdf

AI Module: OpenAI API / ML Models for spending insights

Frontend (Optional): React / Flask / Django templates (as per your setup)

Deployment: Docker / Render / Railway / AWS

📂 Project Structure
personal_finance_manager_with_AI_spending_insights/
│── backend/                 # API & business logic
│── database/                # SQL scripts, schema, and pipeline
│── ai_module/               # AI-powered insight generator
│── frontend/                # Optional UI (React/HTML templates)
│── Pipeline of SQL.pdf      # SQL workflow & schema design
│── README.md                # Documentation

⚙ Installation & Setup
⿡ Clone the Repository
git clone https://github.com/nueronex/personal_finance_manager_with_AI_spending_insights.git
cd personal_finance_manager_with_AI_spending_insights

⿢ Setup Database

Open the SQL pipeline from Pipeline of SQL.pdf.

Execute the provided SQL schema on your database (MySQL/Postgres).

Update .env with your database credentials:

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=finance_db
OPENAI_API_KEY=your_openai_api_key

⿣ Setup Backend
cd backend
pip install -r requirements.txt   # (if Python)
# OR
npm install                      # (if Node.js)


Run server:

python app.py
# OR
npm run dev

⿤ (Optional) Setup Frontend
cd frontend
npm install
npm start

🚀 Deployment

Use Docker for containerized deployment.

Push backend to Render / Railway / AWS.

Host frontend on Vercel / Netlify.

Ensure DB is deployed on AWS RDS / Railway Postgres / MySQL.

🧪 Testing

Run backend tests:

pytest tests/     # if Python
npm test          # if Node.js

🔐 Environment Variables
Variable	Description
DB_HOST	Database host (default: localhost)
DB_PORT	Database port (3306 for MySQL)
DB_USER	Database username
DB_PASSWORD	Database password
DB_NAME	Database name
OPENAI_API_KEY	API key for AI spending insights
📊 Roadmap

 Add mobile-friendly UI

 Multi-currency support

 Advanced AI forecasting (predict next month’s spending)

 Export reports (PDF/CSV)

🤝 Contributing

Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Added feature")

Push branch (git push origin feature-name)

Open a Pull Request

🛡 License

This project is licensed under the MIT License.

👨‍💻 Author

Neuronex
🔗 GitHub
