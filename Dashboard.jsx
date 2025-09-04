import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import api from '../services/api';

const Dashboard = () => {
  const [financialData, setFinancialData] = useState({
    income: 0,
    spent: 0,
    balance: 0
  });
  
  const [upcomingBills, setUpcomingBills] = useState([
    {
      id: '1',
      name: 'Netflix',
      amount: 12.00,
      dueDate: '2024-06-25',
      category: 'entertainment'
    },
    {
      id: '2',
      name: 'Electricity',
      amount: 53.00,
      dueDate: '2024-06-25',
      category: 'utilities'
    },
    {
      id: '3',
      name: 'Water',
      amount: 45.00,
      dueDate: '2024-08-01',
      category: 'utilities'
    }
  ]);

  useEffect(() => {
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      const response = await api.get('/dashboard/summary');
      setFinancialData(response.data);
    } catch (error) {
      console.error('Error fetching financial data:', error);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'entertainment':
        return '🎬';
      case 'utilities':
        return '⚡';
      default:
        return '💰';
    }
  };

  return (
    <div className="space-y-6" style={{marginTop:"5rem"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Income</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ${financialData.income.toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Spent</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ${financialData.spent.toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Balance</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                ${financialData.balance.toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Breakdown</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No spending data available</p>
              <p className="text-sm">Add transactions to see your spending breakdown</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Bills</h3>
          <div className="space-y-3">
            {upcomingBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{getCategoryIcon(bill.category)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{bill.name}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(bill.dueDate), 'MMM dd')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${bill.amount.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(bill.dueDate), 'dd MMM')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
