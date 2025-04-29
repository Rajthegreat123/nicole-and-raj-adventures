
import React, { useState } from 'react';
import IntroScreen from './story/IntroScreen';
import Chapter from './story/Chapter';
import FinalCard from './story/FinalCard';

export type ChapterId = 'intro' | 'chapter1' | 'chapter2' | 'chapter3' | 'finalCard';

const StoryContainer: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<ChapterId>('intro');
  const [history, setHistory] = useState<ChapterId[]>([]);

  const navigateTo = (chapterId: ChapterId) => {
    setHistory(prev => [...prev, currentChapter]);
    setCurrentChapter(chapterId);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prevChapter = history[history.length - 1];
      setCurrentChapter(prevChapter);
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const renderCurrentChapter = () => {
    switch (currentChapter) {
      case 'intro':
        return <IntroScreen onStart={() => navigateTo('chapter1')} />;
      case 'chapter1':
        return <Chapter 
          number={1} 
          title="Childhood"
          scene="The player joins Roman Ridge School."
          prompt="You have just joined the Roman Ridge School and are introduced to your friends. Who do you pick to be your best friend for the rest of your life?"
          choices={[
            { 
              text: "Raj", 
              result: "If you had chosen this, your junior school life would have been unforgetful—but noooo, you chose some random kid in real life."
            },
            { 
              text: "Some random kid", 
              result: "You did not choose Raj. He will remember this."
            }
          ]}
          onNext={() => navigateTo('chapter2')}
          goBack={goBack}
        />;
      case 'chapter2':
        return <Chapter 
          number={2} 
          title="Middle School"
          scene="You're still friends with Raj and you introduce him to Minecraft. One day, Raj and Kofi call you for something."
          prompt="Raj and Kofi are calling you for something. Will you go check it out?"
          choices={[
            { 
              text: "Yes", 
              result: "The three of you spend countless useless hours planning Minecraft houses and builds that you never make."
            },
            { 
              text: "No", 
              result: "You didn't check it out?? Raj will remember this."
            }
          ]}
          onNext={() => navigateTo('chapter3')}
          goBack={goBack}
        />;
      case 'chapter3':
        return <Chapter 
          number={3} 
          title="Senior School"
          scene="You begin as a bully but change over time."
          prompt="You see a helpless Raj and decide to spend an entire year bullying that small defenceless boy. However, in Lower Six, you realise that he is actually just a chill guy."
          choices={[
            { 
              text: "Become his best friend", 
              result: "The both of you realise how cool the other one is and put aside your differences to have one of the most iconic friendships.",
              showCardButton: true,
              onOpenCard: () => navigateTo('finalCard')
            },
            { 
              text: "Continue to bully him", 
              result: "Herh."
            }
          ]}
          onNext={() => {}}
          goBack={goBack}
          isFinal={true}
        />;
      case 'finalCard':
        return <FinalCard goBack={goBack} />;
      default:
        return <IntroScreen onStart={() => navigateTo('chapter1')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 py-8 px-4">
      <div className="story-container">
        {renderCurrentChapter()}
      </div>
    </div>
  );
};

export default StoryContainer;
