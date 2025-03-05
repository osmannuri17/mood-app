import React from 'react';
import styled from 'styled-components';

// Duygu durumları için tip tanımı
export type Mood = 'happy' | 'sad' | 'surprised' | 'angry' | 'thoughtful';

// Props tanımı
interface MoodSelectorProps {
  onMoodSelect: (mood: Mood) => void;
}

// Stil tanımlamaları
const MoodSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const MoodOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 800px;
`;

interface MoodCardProps {
  mood: Mood;
}

const MoodCard = styled.div<MoodCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  ${({ mood }) => {
    switch (mood) {
      case 'happy':
        return `
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
          &:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5);
          }
        `;
      case 'sad':
        return `
          border-color: rgba(100, 149, 237, 0.5);
          box-shadow: 0 4px 20px rgba(100, 149, 237, 0.3);
          &:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(100, 149, 237, 0.5);
          }
        `;
      case 'surprised':
        return `
          border-color: rgba(255, 105, 180, 0.5);
          box-shadow: 0 4px 20px rgba(255, 105, 180, 0.3);
          &:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
          }
        `;
      case 'angry':
        return `
          border-color: rgba(255, 99, 71, 0.5);
          box-shadow: 0 4px 20px rgba(255, 99, 71, 0.3);
          &:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 99, 71, 0.5);
          }
        `;
      case 'thoughtful':
        return `
          border-color: rgba(147, 112, 219, 0.5);
          box-shadow: 0 4px 20px rgba(147, 112, 219, 0.3);
          &:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.5);
          }
        `;
      default:
        return '';
    }
  }}
`;

const Emoji = styled.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
`;

const MoodLabel = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  const moodOptions: { mood: Mood; emoji: string; label: string }[] = [
    { mood: 'happy', emoji: '😊', label: 'Mutlu' },
    { mood: 'sad', emoji: '😢', label: 'Üzgün' },
    { mood: 'surprised', emoji: '😲', label: 'Şaşkın' },
    { mood: 'angry', emoji: '😠', label: 'Sinirli' },
    { mood: 'thoughtful', emoji: '🤔', label: 'Düşünceli' },
  ];

  return (
    <MoodSelectorContainer>
      <Title>Bugün nasıl hissediyorsun?</Title>
      <MoodOptionsContainer>
        {moodOptions.map((option) => (
          <MoodCard 
            key={option.mood} 
            mood={option.mood}
            onClick={() => onMoodSelect(option.mood)}
          >
            <Emoji>{option.emoji}</Emoji>
            <MoodLabel>{option.label}</MoodLabel>
          </MoodCard>
        ))}
      </MoodOptionsContainer>
    </MoodSelectorContainer>
  );
};

export default MoodSelector; 