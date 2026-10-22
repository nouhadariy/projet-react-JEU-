import React from 'react';
import ReactDOM from 'react-dom/client';
import JeuDe from './components/JeuDe';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div>
      <JeuDe cache={2} />
    </div>
  );
}

root.render(<App />);