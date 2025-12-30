import React, { useState, useMemo } from 'react';
import { type MysteryType, type Prayer, MYSTERY_VERSES, PRAYER_TEXTS } from './assets/types';

// Helper function to get mystery for current day
const getMysteryForDay = (): MysteryType => {
  const day = new Date().getDay();
  const mysteries: Record<number, MysteryType> = {
    0: 'Glorious',
    1: 'Joyful',
    2: 'Sorrowful',
    3: 'Glorious',
    4: 'Luminous',
    5: 'Sorrowful',
    6: 'Joyful'
  };
  return mysteries[day];
};

// Generate complete rosary prayer sequence
const generateRosaryPrayers = (mystery: MysteryType): Prayer[] => {
  const prayers: Prayer[] = [
    { text: 'Sign of the Cross', type: 'intro' },
    { text: 'Apostles\' Creed', type: 'intro' },
    { text: 'Our Father', type: 'intro' },
    { text: 'Hail Mary', type: 'intro', count: 3 },
    { text: 'Glory Be', type: 'intro' },
  ];
  
  for (let i = 0; i < 5; i++) {
    prayers.push({ 
      text: MYSTERY_VERSES[mystery][i].name, 
      type: 'mystery', 
      decade: i + 1,
      verse: MYSTERY_VERSES[mystery][i].verse,
      reference: MYSTERY_VERSES[mystery][i].reference
    });
    prayers.push({ text: 'Our Father', type: 'decade' });
    for (let j = 0; j < 10; j++) {
      prayers.push({ text: 'Hail Mary', type: 'decade', beadNum: j + 1 });
    }
    prayers.push({ text: 'Glory Be', type: 'decade' });
    prayers.push({ text: 'Fatima Prayer', type: 'decade' });
  }
  
  prayers.push({ text: 'Hail Holy Queen', type: 'closing' });
  prayers.push({ text: 'Final Prayer', type: 'closing' });
  prayers.push({ text: 'Sign of the Cross', type: 'closing' });
  
  return prayers;
};

// Bead Component
const Bead: React.FC<{ size?: 'sm' | 'md' | 'lg'; active?: boolean; completed?: boolean }> = ({ 
  size = 'md', 
  active = false, 
  completed = false 
}) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  
  return (
    <div
      className={`${sizes[size]} rounded-full border-2 transition-all ${
        active
          ? 'bg-blue-500 border-blue-600 scale-125'
          : completed
          ? 'bg-gray-400 border-gray-500'
          : 'bg-white border-gray-400'
      }`}
    />
  );
};

// Rosary Visual Component
const RosaryVisual: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="relative">
        {/* Cross */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-1 h-8 bg-gray-400" />
          <Bead size="lg" active={currentStep === 0} completed={currentStep > 0} />
          <div className="w-1 h-4 bg-gray-400" />
        </div>
        
        {/* Introductory beads */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <Bead size="lg" active={currentStep === 1} completed={currentStep > 1} />
          <Bead size="md" active={currentStep === 2} completed={currentStep > 2} />
          <Bead size="sm" active={currentStep === 3} completed={currentStep > 3} />
          <Bead size="sm" active={currentStep === 4} completed={currentStep > 4} />
          <Bead size="sm" active={currentStep === 5} completed={currentStep > 5} />
          <Bead size="md" active={currentStep === 6} completed={currentStep > 6} />
        </div>
        
        {/* Circular decades */}
        <div className="relative w-48 h-48">
          {[0, 1, 2, 3, 4].map((decade) => {
            const angle = (decade * 72 - 90) * (Math.PI / 180);
            const radius = 70;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={decade}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <Bead
                  size="lg"
                  active={currentStep >= 7 + decade * 14 && currentStep < 7 + (decade + 1) * 14}
                  completed={currentStep > 7 + (decade + 1) * 14}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="text-sm text-gray-600">
          Progress: {currentStep} / {totalSteps}
        </div>
      </div>
    </div>
  );
};

// Prayer Text Component
const PrayerText: React.FC<{ prayer: Prayer; onNext: () => void; isLast: boolean }> = ({ 
  prayer, 
  onNext, 
  isLast 
}) => {
  const getPrayerContent = () => {
    return PRAYER_TEXTS[prayer.text] || prayer.text;
  };

  return (
    <div className="flex flex-col h-full p-8 justify-between">
      <div>
        {prayer.type === 'mystery' && (
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              {prayer.decade}. {prayer.text}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{prayer.reference}</p>
            <p className="text-base text-gray-700 italic leading-relaxed mb-4 border-l-4 border-blue-300 pl-4">
              {prayer.verse}
            </p>
          </div>
        )}
        
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {prayer.type === 'mystery' ? 'Our Father' : prayer.text}
            {prayer.count && ` (${prayer.count}x)`}
            {prayer.beadNum && ` (${prayer.beadNum}/10)`}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {getPrayerContent()}
          </p>
        </div>
      </div>
      
      <button
        onClick={onNext}
        className="self-end px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
      >
        {isLast ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

// Main App
export default function App() {
  const mystery = useMemo(() => getMysteryForDay(), []);
  const prayers = useMemo(() => generateRosaryPrayers(mystery), [mystery]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < prayers.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Left side - Rosary Visual */}
      <div className="w-1/4 border-r border-gray-200 overflow-hidden">
        <div className="p-4 bg-blue-900 text-white text-center">
          <h1 className="text-xl font-bold">The Holy Rosary</h1>
          <p className="text-sm opacity-90">{mystery} Mysteries</p>
        </div>
        <RosaryVisual currentStep={currentStep} totalSteps={prayers.length} />
      </div>
      
      {/* Right side - Prayer Text */}
      <div className="flex-1 overflow-y-auto">
        <PrayerText
          prayer={prayers[currentStep]}
          onNext={handleNext}
          isLast={currentStep === prayers.length - 1}
        />
      </div>
    </div>
  );
}