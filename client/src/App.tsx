// src/App.tsx
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🕵️ Tab Activity Tracker</h1>
        <p>
          This tool monitors your tab activity and calculates a real-time <strong>Trust Score</strong>.
        </p>
      </header>
      <main className="main-content">
        <Tracker />
      </main>
      <footer className="footer">
        <p>
          Built with  using React + TypeScript | Logs stored securely in MongoDB
        </p>
      </footer>
    </div>
  );
}

export default App;
