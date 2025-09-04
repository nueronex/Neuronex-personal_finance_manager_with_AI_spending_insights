import React from 'react';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="space-y-6"style={{marginTop:"5rem"}}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Spending Patterns</h3>
          </div>
          <p className="text-gray-600">
            Add more transactions to unlock AI-powered insights about your spending habits and patterns.
          </p>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Saving Opportunities</h3>
          </div>
          <p className="text-gray-600">
            Our AI will analyze your transactions to identify potential areas where you can save money.
          </p>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Budget Alerts</h3>
          </div>
          <p className="text-gray-600">
            Get intelligent alerts when you're approaching your budget limits or unusual spending is detected.
          </p>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Smart Recommendations</h3>
          </div>
          <p className="text-gray-600">
            Receive personalized financial recommendations based on your spending behavior and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
