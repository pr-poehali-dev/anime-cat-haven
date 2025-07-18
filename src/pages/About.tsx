import { useState } from 'react';

const About = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden p-8">
      {/* Decorative stars */}
      <div className="absolute top-20 left-20 text-pink-300 text-2xl animate-pulse">✧</div>
      <div className="absolute top-32 right-32 text-pink-400 text-lg animate-bounce">★</div>
      <div className="absolute bottom-40 left-40 text-pink-200 text-xl animate-pulse">✦</div>
      <div className="absolute bottom-20 right-20 text-pink-300 text-2xl animate-bounce">✧</div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-8 text-pink-400 tracking-wider">
          💕 О НАС 💕
        </h1>
        
        {/* Image container with arrow */}
        <div className="relative inline-block mb-8">
          <img 
            src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
            alt="Мы вместе"
            className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setShowMessage(!showMessage)}
          />
          
          {/* Pink arrow pointing to image */}
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 flex items-center">
            <svg 
              width="60" 
              height="40" 
              viewBox="0 0 60 40" 
              className="text-pink-400 animate-bounce"
            >
              <path 
                d="M10 20 L40 20 M40 20 L35 15 M40 20 L35 25" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-bold text-pink-400 ml-2 animate-pulse">
              это мы!
            </span>
          </div>
        </div>

        {/* Cute message that appears on click */}
        {showMessage && (
          <div className="bg-pink-100 rounded-2xl p-6 mb-8 animate-fade-in border-2 border-pink-300">
            <p className="text-lg text-pink-600 font-medium">
              ✨ Самая милая парочка в мире! ✨
            </p>
            <p className="text-pink-500 mt-2">
              💖 Вместе мы можем всё! 💖
            </p>
          </div>
        )}

        {/* Decorative elements */}
        <div className="flex justify-center gap-6 mt-8">
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>👫</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '1s' }}>💕</span>
        </div>

        {/* Back button */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🏠 На главную
        </button>
      </div>

      {/* Floating hearts */}
      <div className="absolute top-1/4 left-10 text-pink-200 text-3xl animate-pulse">💗</div>
      <div className="absolute top-3/4 right-10 text-pink-300 text-3xl animate-pulse">💗</div>
      <div className="absolute top-1/2 left-5 text-pink-200 text-2xl animate-bounce">💖</div>
      <div className="absolute top-1/3 right-5 text-pink-300 text-2xl animate-bounce">💖</div>
    </div>
  );
};

export default About;