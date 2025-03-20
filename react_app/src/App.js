import React from 'react';
import useMedia from 'use-media';

function App() {
  const isMobile = useMedia({ maxWidth: '600px' });

  return (
    <div className="App">
      <header className="App-header">
        <h1>ヘッダー</h1>
      </header>
      <main className="App-main">
        <p>{isMobile ? 'スマホ表示' : 'PC表示'}</p>
      </main>
      <footer className="App-footer">
        <p>フッター</p>
      </footer>
    </div>
  );
}

export default App;