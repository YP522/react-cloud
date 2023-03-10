import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className={`bg-white shadow-sm ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-xl font-bold">Mon site web</h1>
          <button onClick={handleDarkModeToggle}>
            {darkMode ? 'Thème clair' : 'Thème sombre'}
          </button>
        </div>
      </header>

      {/* Body */}
      <main className={`flex-1 ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bienvenue sur mon site web</h2>
            <p className="text-gray-700 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu magna ut tortor
              eleifend euismod. Nulla interdum nibh nec turpis sodales, vel maximus eros convallis.
              Nunc iaculis mi sapien, a convallis arcu volutpat vel. Fusce id lorem risus. Sed mollis
              enim ac metus bibendum pharetra. Morbi at eleifend enim. Donec vel hendrerit sem.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`bg-white shadow-sm ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}
      >
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-700">© 2023 Mon site web. Tous droits réservés.</p>
          <div>
            <a href="#" className="text-blue-500 hover:text-blue-600 mr-6">
              Mentions légales
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
