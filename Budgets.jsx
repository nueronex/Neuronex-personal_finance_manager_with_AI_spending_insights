import React from 'react';
import { Target, Plus } from 'lucide-react';

const Budgets = () => {
  return (
    <div className="space-y-6"style={{marginTop:"5rem"}}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Budgets</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Budget</span>
        </button>
      </div>
      <div className="card">
        <div className="text-center py-12">
          <Target className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No budgets yet</h3>
          <p className="text-gray-500 mb-4">
            Create your first budget to track your spending goals
          </p>
          <button className="btn-primary">Create Budget</button>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
