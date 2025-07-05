// App.jsx
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import MenuPage from './MenuPage';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeScreen isVisible={showWelcome} />
      {!showWelcome && <MenuPage />}
    </>
  );
};

export default App;
