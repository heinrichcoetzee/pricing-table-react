import React from 'react';
import './App.scss';
import PricingTable from './pages/PricingTable/PricingTable';

function App() {
  return (
    <div className="container-fluid">
      <header className="w-100 text-center">
        <h3>Pricing</h3>
      </header>
      <div>
        <PricingTable />
      </div>
    </div>
  );
}

export default App;
