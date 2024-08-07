import React from 'react';
import AnimatedBackground from './components/animatedBackground';
import Sidebar from './components/sidebar';
import Content from './components/content';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <AnimatedBackground />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
