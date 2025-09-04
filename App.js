import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import AIInsights from './pages/AIInsights';
import Upload from './pages/Upload';
import AddEntry from './pages/AddEntry'; 
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
