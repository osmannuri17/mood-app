import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MoodSelector, { Mood } from './components/MoodSelector';
import MoodContent from './components/MoodContent';
import './App.css';

interface AppContainerProps {
  mood?: Mood;
}

const AppContainer = styled.div<AppContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  color: white;
  
  ${({ mood }) => {
    if (!mood) {
      return ``;
    }
    
    switch (mood) {
      case 'happy':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            opacity: 0.9;
            z-index: -1;
          }
        `;
      case 'sad':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            opacity: 0.9;
            z-index: -1;
          }
        `;
      case 'surprised':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            opacity: 0.9;
            z-index: -1;
          }
        `;
      case 'angry':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            opacity: 0.9;
            z-index: -1;
          }
        `;
      case 'thoughtful':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            opacity: 0.9;
            z-index: -1;
          }
        `;
      default:
        return ``;
    }
  }}
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 100;
  
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

// Yıldız bileşeni
const Star = ({ size, top, left, delay }: { size: 'small' | 'medium' | 'large', top: string, left: string, delay: string }) => {
  return (
    <div 
      className={`star ${size}`} 
      style={{ 
        top, 
        left, 
        animationDelay: delay 
      }} 
    />
  );
};

// Gezegen bileşeni
const Planet = ({ size, color, top, left, delay }: { size: number, color: string, top: string, left: string, delay: string }) => {
  return (
    <div 
      className="planet" 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        backgroundColor: color,
        boxShadow: `0 0 ${size/2}px ${color}`,
        top, 
        left, 
        animationDelay: delay 
      }} 
    />
  );
};

function App() {
  const [selectedMood, setSelectedMood] = useState<Mood | undefined>(undefined);
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [planets, setPlanets] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Yıldızları oluştur
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() > 0.8 ? 'large' : (Math.random() > 0.5 ? 'medium' : 'small');
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 5}s`;
      
      newStars.push(
        <Star key={i} size={size} top={top} left={left} delay={delay} />
      );
    }
    setStars(newStars);
    
    // Gezegenleri oluştur
    const newPlanets = [];
    const planetColors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#6B5CA5', '#72DDF7'];
    for (let i = 0; i < 5; i++) {
      const size = 10 + Math.random() * 20;
      const top = `${10 + Math.random() * 80}%`;
      const left = `${10 + Math.random() * 80}%`;
      const delay = `${Math.random() * 5}s`;
      const color = planetColors[i % planetColors.length];
      
      newPlanets.push(
        <Planet key={i} size={size} color={color} top={top} left={left} delay={delay} />
      );
    }
    setPlanets(newPlanets);
  }, []);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleBackClick = () => {
    setSelectedMood(undefined);
  };

  return (
    <AppContainer mood={selectedMood}>
      {stars}
      {planets}
      {selectedMood ? (
        <>
          <BackButton onClick={handleBackClick}>← Geri Dön</BackButton>
          <MoodContent mood={selectedMood} />
        </>
      ) : (
        <MoodSelector onMoodSelect={handleMoodSelect} />
      )}
    </AppContainer>
  );
}

export default App;
