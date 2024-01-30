import React from 'react';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Hello, React with TypeScript and Tailwind CSS!</h1>
        {/* Your other components/content go here */}
      </div>
    </div>
  );
};

export default App;
