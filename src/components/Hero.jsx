import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

// ----- Sub-Components -----

const TypedText = ({ text, speed = 100, className = "", onComplete = () => {} }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
    setParticles([]);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        
        // Create subtle code-like particles
        const newParticles = [];
        for (let i = 0; i < 2; i++) {
          newParticles.push({
            id: Date.now() + i + Math.random(),
            x: Math.random() * 30 - 15,
            y: Math.random() * 30 - 15,
            char: ['{', '}', '<', '>', '/', '\\'][Math.floor(Math.random() * 6)],
            delay: i * 100,
          });
        }
        setParticles(prev => [...prev, ...newParticles]);
        
        // Remove particles after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
        }, 1000);
        
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <span className={`${className} relative inline-block`}>
      {displayText}
      
      {/* Code Particle Trail */}
      {particles.map(particle => (
        <span
          key={particle.id}
          className="absolute pointer-events-none text-blue-400 opacity-70 text-sm font-mono particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDelay: `${particle.delay}ms`,
          }}
        >
          {particle.char}
        </span>
      ))}
      
      <style jsx>{`
        .particle {
          animation: codeParticle 1s ease-out forwards;
        }
        
        @keyframes codeParticle {
          0% {
            opacity: 0.7;
            transform: translate(0, 0) scale(0.8);
          }
          50% {
            opacity: 0.4;
            transform: translate(var(--dx, 10px), var(--dy, -20px)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--dx, 20px), var(--dy, -40px)) scale(0.6);
          }
        }
      `}</style>
    </span>
  );
};

const Rocket = ({ className }) => (
  <svg
    viewBox="0 0 32 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Rocket icon flying from left to right"
  >
    <title>Rocket flying animation</title>

    <line x1="0" y1="7" x2="8" y2="7" stroke="white" strokeWidth="1.5" strokeDasharray="2,1" />

    <g transform="translate(1, 0)">
      <circle cx="1.5" cy="8" r="0.8" fill="#FF6B6B" className="animate-ping" />
      <circle cx="2.5" cy="7" r="0.6" fill="#FF6B6B" className="animate-ping delay-200" />
      <circle cx="3" cy="9" r="0.4" fill="#FF6B6B" className="animate-ping delay-400" />
    </g>

    <g transform="translate(12, 0) rotate(45)">
      <path 
        fill="white" 
        d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53Z"
        transform="translate(-4, -6) scale(0.8)"
      />
    </g>

    <g transform="translate(12, 0) rotate(45)">
      <path 
        fill="#FF6B6B" 
        d="M5.44 18.55L3.12 20.87C2.54 21.45 2.54 22.38 3.12 22.96C3.7 23.54 4.63 23.54 5.21 22.96L7.53 20.64L5.44 18.55Z"
        transform="scale(1.8)"
      />
    </g>

    <style jsx>{`
      .animate-ping {
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      .delay-200 {
        animation-delay: 0.2s;
      }
      .delay-400 {
        animation-delay: 0.4s;
      }
      @keyframes ping {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }
    `}</style>
  </svg>
);

// ----- UI Section Components -----

const BackgroundDecorations = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-blue-500 bg-opacity-10 filter blur-3xl"></div>
    <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-purple-500 bg-opacity-10 filter blur-3xl"></div>
  </div>
);

const AnimatedRocket = ({ isAnimated }) => (
  <div
    className={`absolute z-20 left-0 top-8 sm:top-12 w-12 sm:w-16 md:w-20 text-white transform ${
      isAnimated ? "animate-rocket-horizontal" : "-translate-x-full"
    }`}
  >
    <Rocket className="w-full h-full" />
  </div>
);

const ProfileImage = ({ isAnimated }) => {
  const profileImageClass = isAnimated
    ? "opacity-100 translate-y-0 delay-300"
    : "opacity-0 translate-y-12";
    
  return (
    <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ${profileImageClass} mb-8 md:mb-0`}>
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
        <img
  src={process.env.PUBLIC_URL + "/Profile.jpg"}
  alt="Raafid Afraaz"
  className="object-cover object-center w-full h-full scale-150 transition-transform duration-500"
/>


        </div>
      </div>
    </div>
  );
};

const HeroContent = ({ isAnimated, typingComplete, setTypingComplete }) => {
  const textContainerClass = isAnimated
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-12";

  return (
    <header className={`w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-0 md:pr-8 transition-all duration-1000 ${textContainerClass} text-center md:text-left`}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        Hi, I'm{" "}
        {isAnimated && (
          <span className="text-blue-400 inline-block">
            <TypedText
              text="Raafid Afraaz"
              speed={100}
              className="pr-1"
              onComplete={() => setTypingComplete(true)}
            />
          </span>
        )}
      </h1>

      <div className="h-1 w-16 sm:w-24 bg-blue-400 mb-4 sm:mb-6 mx-auto md:mx-0"></div>

      <h2
        className={`text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-300 transition-opacity duration-500 ${
          typingComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        Software Engineer
      </h2>

      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 max-w-lg mx-auto md:mx-0 transition-opacity duration-500 leading-relaxed">
        Hello! I'm Raafid Afraaz — a full-stack software engineer specializing in modern web technologies and scalable system architecture, dedicated to building performant and user-focused applications.
      </p>

      <ActionButtons typingComplete={typingComplete} />
    </header>
  );
};

const ActionButtons = ({ typingComplete }) => (
  <div
    className={`flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start transition-opacity duration-500 ${
      typingComplete ? "opacity-100" : "opacity-0"
    }`}
  >
   <a
  href={process.env.PUBLIC_URL + "/resume.pdf"}
  download
  className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
>
  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
  Resume
</a>

    <a
      href="#projects"
      className="flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition w-full sm:w-auto hover:bg-white hover:bg-opacity-10 hover:shadow-sm"
      style={{ transitionProperty: "background-color, box-shadow" }}
    >
      View Projects
    </a>
  </div>
);


// ----- Animations -----

const AnimationStyles = () => (
  <style jsx>{`
    @keyframes rocketFlightHorizontal {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(calc(100vw + 100px));
      }
    }
    
    .animate-rocket-horizontal {
      animation: rocketFlightHorizontal 2.4s ease-out forwards;
    }
  `}</style>
);

// ----- Main Component -----

const Hero = () => {
  const [animated, setAnimated] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center relative overflow-hidden"
    >
      <BackgroundDecorations />
      <AnimatedRocket isAnimated={animated} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center relative z-10 py-8 md:py-0">
        <HeroContent 
          isAnimated={animated} 
          typingComplete={typingComplete} 
          setTypingComplete={setTypingComplete}
        />
        <ProfileImage isAnimated={animated} />
      </div>

      <AnimationStyles />
    </section>
  );
};

export default Hero;