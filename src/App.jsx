// App.jsx
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Menu from './Menu';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3500); // show for 3.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeScreen isVisible={showWelcome} />
      {!showWelcome && <Menu />}
    </>
  );
};

export default App;
