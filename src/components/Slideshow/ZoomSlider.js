import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://i.imgur.com/Yszno5e.jpg",
    title: "Adventure Awaits",
    subtitle: "Explore the Unknown",
    description: "Discover breathtaking destinations across the globe"
  },
  {
    image: "https://i.imgur.com/ZBzbir7.jpg",
    title: "Urban Dreams",
    subtitle: "City Lights",
    description: "Experience the pulse of modern metropolitan life"
  },
  {
    image: "https://i.imgur.com/xpeJkkR.jpg",
    title: "Nature's Beauty",
    subtitle: "Pure Serenity",
    description: "Connect with the untamed wilderness"
  }
];

export default function ZoomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div className="hero-carousel position-relative overflow-hidden">
      {/* Main Slider */}
      <div 
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="image-container">
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`slide-image ${currentSlide === index ? 'zoom-in' : ''}`}
              />
              {/* Overlay Gradient */}
              <div className="overlay"></div>
            </div>

            <div className="content-container">
              {/* Animated Subtitle */}
              <span 
                className={`subtitle ${currentSlide === index ? 'slide-up' : ''}`}
              >
                {slide.subtitle}
              </span>

              {/* Animated Title */}
              <h2 
                className={`main-title ${currentSlide === index ? 'slide-up delay-1' : ''}`}
              >
                {slide.title.split('').map((letter, i) => (
                  <span 
                    key={i}
                    className="letter"
                    style={{ animationDelay: `${0.1 * i}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </h2>

              {/* Animated Description */}
              <p 
                className={`description ${currentSlide === index ? 'slide-up delay-2' : ''}`}
              >
                {slide.description}
              </p>

              {/* Animated Button */}
              <button 
                className={`cta-button ${currentSlide === index ? 'fade-in delay-3' : ''}`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="controls-container">
        <button
          className="nav-button prev"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeft className="nav-icon" />
        </button>
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => !isAnimating && setCurrentSlide(index)}
            />
          ))}
        </div>

        <button
          className="nav-button next"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRight className="nav-icon" />
        </button>
      </div>

      <style>{`
        .hero-carousel {
          height: 700px;
          min-height: 600px;
          max-height: 1080px;
          background: #000;
        }

        .slider-container {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 1.5s cubic-bezier(0.7, 0, 0.3, 1);
        }

        .slide {
          flex: 0 0 100%;
          position: relative;
          overflow: hidden;
        }

        .image-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 6s cubic-bezier(0.7, 0, 0.3, 1);
          transform: scale(1.2);
        }

        .slide-image.zoom-in {
          transform: scale(1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.6) 100%
          );
        }

        .content-container {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 2rem;
        }

        .subtitle {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          opacity: 0;
          transform: translateY(20px);
        }

        .main-title {
          font-size: 4rem;
          font-weight: 700;
          margin: 1rem 0;
          opacity: 0;
          transform: translateY(20px);
        }

        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          color:#eaa451 !important
        }

        .description {
          font-size: 1.25rem;
          max-width: 600px;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .cta-button {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          color: white;
          background: transparent;
          border: 2px solid #eaa451;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .cta-button:hover {
          background: #eaa451;
          color: white;
        }

        /* Navigation Styles */
        .controls-container {
          position: absolute;
          bottom: 2rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .nav-button {
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(255,255,255,0.4);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          color: white;
        }

        .slide-indicators {
          display: flex;
          gap: 1rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          transform: scale(1.2);
        }

        /* Animations */
        .slide-up {
          animation: slideUp 1s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        .delay-3 {
          animation-delay: 0.6s;
        }

        .fade-in {
          animation: fadeIn 1s ease forwards;
        }

        .letter {
          animation: letterSlideUp 0.6s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes letterSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .main-title {
            font-size: 3.5rem;
          }
          .subtitle {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 3rem;
          }
          .description {
            font-size: 1.1rem;
          }
          .nav-button {
            width: 40px;
            height: 40px;
          }
          .nav-icon {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 576px) {
          .main-title {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .description {
            font-size: 1rem;
          }
          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}