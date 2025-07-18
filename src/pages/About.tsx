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
          

        </div>

        {/* Cute message that appears on click */}
        {showMessage && (
          <div className="bg-pink-100 rounded-2xl p-6 mb-8 animate-fade-in border-2 border-pink-300">
            <p className="text-2xl font-bold text-pink-600">
              💕 это мы! 💕
            </p>
          </div>
        )}

        {/* Decorative elements */}
        <div className="flex justify-center gap-6 mt-8">
          <img 
            src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
            alt="Мы"
            className="w-12 h-12 rounded-full object-cover animate-bounce shadow-lg"
            style={{ animationDelay: '0s' }}
          />
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌸</span>
          <img 
            src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
            alt="Мы"
            className="w-12 h-12 rounded-full object-cover animate-bounce shadow-lg"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Back button */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🏠 На главную
        </button>
      </div>

      {/* Floating mini images */}
      <img 
        src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
        alt="Мы"
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full object-cover animate-pulse shadow-md"
      />
      <img 
        src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
        alt="Мы"
        className="absolute top-3/4 right-10 w-8 h-8 rounded-full object-cover animate-pulse shadow-md"
      />
      <img 
        src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
        alt="Мы"
        className="absolute top-1/2 left-5 w-6 h-6 rounded-full object-cover animate-bounce shadow-md"
      />
      <img 
        src="https://cdn.poehali.dev/files/e173cf03-6a60-4b6e-a958-e22f29ba69fe.jpg"
        alt="Мы"
        className="absolute top-1/3 right-5 w-6 h-6 rounded-full object-cover animate-bounce shadow-md"
      />
    </div>
  );
};

export default About;