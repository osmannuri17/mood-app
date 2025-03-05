import React from 'react';
import styled from 'styled-components';
import { Mood } from './MoodSelector';

interface MoodContentProps {
  mood: Mood;
}

interface StyledContentProps {
  mood: Mood;
}

const ContentContainer = styled.div<StyledContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 60vh;
  text-align: center;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  width: 800px;
  z-index: 10;
  
  ${({ mood }) => {
    switch (mood) {
      case 'happy':
        return `
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 8px 32px rgba(255, 215, 0, 0.2);
        `;
      case 'sad':
        return `
          border-color: rgba(100, 149, 237, 0.3);
          box-shadow: 0 8px 32px rgba(100, 149, 237, 0.2);
        `;
      case 'surprised':
        return `
          border-color: rgba(255, 105, 180, 0.3);
          box-shadow: 0 8px 32px rgba(255, 105, 180, 0.2);
        `;
      case 'angry':
        return `
          border-color: rgba(255, 99, 71, 0.3);
          box-shadow: 0 8px 32px rgba(255, 99, 71, 0.2);
        `;
      case 'thoughtful':
        return `
          border-color: rgba(147, 112, 219, 0.3);
          box-shadow: 0 8px 32px rgba(147, 112, 219, 0.2);
        `;
      default:
        return '';
    }
  }}
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const SuggestionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const SuggestionItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  
  &:hover {
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const MoodContent: React.FC<MoodContentProps> = ({ mood }) => {
  const getMoodContent = () => {
    switch (mood) {
      case 'happy':
        return {
          title: 'Mutluysan Acil terk et burayı!',
          text: 'Mutluluk, hayatın en güzel duygularından biridir. Nadir görüyoruz mutlu insanları.',
          suggestions: [
            'Mutluysan bu platformdan acil çıkman lazım dostum',
            'Mutluluğunu neye borçlusun?',
            'Yarısını bize ver',
            'Başkasıyla paylaşırsan mutluluğun azalır',
            'Have a Good Day'
          ]
        };
      case 'sad':
        return {
          title: 'Üzgün hissetmek de normal',
          text: 'Üzüntü, insan olmanın doğal bir parçasıdır..',
          suggestions: [
            'Üzgünsen git ağla x te ne işin var',
            'Redbull iç kendine gel',
            'Dizi/film izle ve daha çok ağla',
            'Geçer :D',
            'Kelin ilacı olsa başına sürermiş'
          ]
        };
      case 'surprised':
        return {
          title: 'Şaşkınlık nadir görülür!',
          text: 'Şaşkınlık, dünyayı yeni bir gözle görmenin başlangıcı olabilir.',
          suggestions: [
            'Yeni bir hobi dene',
            'Daha önce hiç gitmediğin bir yeri ziyaret et',
            'Farklı bir müzik türü dinle',
            'Yeni bir yemek tarifi dene',
            'Bir belgesel izle ve yeni şeyler öğren'
          ]
        };
      case 'angry':
        return {
          title: 'Öfke enerjini yapıcı şekilde kullanabilirsin',
          text: 'Öfke, değişim için güçlü bir motivasyon kaynağı olabilir.',
          suggestions: [
            'Sakinleşmeyi dene dostum',
            'Seni kim sinirlendirdiyse sen de onu sinirlendir',
            'Öfkeyle kalkan zararla oturur',
            'Sakinleşmek için bir müzik aç',
            'Bilmiyom'
          ]
        };
      case 'thoughtful':
        return {
          title: 'Düşünceli anlar, içgörü zamanlarıdır',
          text: 'Düşüncelilik, kendini ve dünyayı daha derinden anlamanın bir yoludur. Bu zamanı değerli kıl ve içgörülerini keşfet.',
          suggestions: [
            'Overthink yapmak iyi bir şey değil',
            'Neyi düşünüyorsun bu kadar?',
            'Düşünmekle bir yere varılmaz',
            'Albert Einstein çok düşündü de noldu?',
            ':/'
          ]
        };
      default:
        return {
          title: '',
          text: '',
          suggestions: []
        };
    }
  };

  const content = getMoodContent();

  return (
    <ContentContainer mood={mood}>
      <Title>{content.title}</Title>
      <ContentText>{content.text}</ContentText>
      <SuggestionList>
        {content.suggestions.map((suggestion, index) => (
          <SuggestionItem key={index}>{suggestion}</SuggestionItem>
        ))}
      </SuggestionList>
    </ContentContainer>
  );
};

export default MoodContent; 