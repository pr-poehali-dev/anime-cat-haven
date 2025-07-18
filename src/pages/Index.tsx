import { useState } from 'react';

const Index = () => {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-20 text-pink-300 text-2xl animate-pulse">✧</div>
      <div className="absolute top-32 right-32 text-pink-400 text-lg animate-bounce">★</div>
      <div className="absolute bottom-40 left-40 text-pink-200 text-xl animate-pulse">✦</div>
      <div className="absolute bottom-20 right-20 text-pink-300 text-2xl animate-bounce">✧</div>
      <div className="absolute top-40 left-1/3 text-pink-200 text-sm animate-pulse">⋆</div>
      <div className="absolute bottom-60 right-1/4 text-pink-300 text-lg animate-bounce">✦</div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Kawaii title */}
        <h1 className="text-6xl font-bold mb-8 text-pink-400 tracking-wider">
          KAWAII SITE
        </h1>
        
        {/* Cute subtitle */}
        <p className="text-xl text-pink-300 mb-12 font-medium">
          💕 Для самой милой Сони 💕
        </p>

        {/* Big heart */}
        <div 
          className={`text-9xl cursor-pointer transition-all duration-300 hover:scale-110 ${
            heartClicked ? 'animate-bounce' : 'animate-pulse'
          }`}
          onClick={() => setHeartClicked(!heartClicked)}
        >
          {heartClicked ? '💖' : '💗'}
        </div>

        {/* Cute message */}
        <p className="text-lg text-pink-400 mt-8 font-medium">
          {heartClicked ? '✨ Ты самая лучшая! ✨' : 'Нажми на сердечко! 🐱'}
        </p>

        {/* Decorative cats */}
        <div className="flex justify-center gap-8 mt-12">
          <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🐱</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌸</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🐱</span>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 text-pink-200 text-3xl animate-pulse">🌸</div>
      <div className="absolute top-3/4 right-10 text-pink-300 text-3xl animate-pulse">🌸</div>
      <div className="absolute top-1/2 left-5 text-pink-200 text-2xl animate-bounce">🎀</div>
      <div className="absolute top-1/3 right-5 text-pink-300 text-2xl animate-bounce">🎀</div>
    </div>
  );
};

export default Index;