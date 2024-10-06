import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './ExactCategorySlider.css'; // Custom CSS for styling

const categories = [
  {
    name: 'Humour',
    subcategories: ['COMEDY', 'SATIRE', 'PARODY', 'JOKES', 'STAND-UP', 'HUMOR WRITING', 'MORE'],
    gradient: ['#FFB6C1', '#FFA07A'] // Light Pink to Light Salmon
  },
  {
    name: 'Sports',
    subcategories: ['FOOTBALL', 'BASKETBALL', 'TENNIS', 'FITNESS', 'COACHING', 'BIOGRAPHIES', 'MORE'],
    gradient: ['#87CEFA', '#90EE90'] // Light Sky Blue to Light Green
  },
  {
    name: 'Self-Help',
    subcategories: ['MOTIVATION', 'SUCCESS', 'ATTITUDE', 'CONFIDENCE', 'BRAIN POWER', 'THINKING', 'MORE'],
    gradient: ['#FFC0CB', '#FAFAD2'] // Pink to Light Goldenrod Yellow
  },
  {
    name: 'Religion & Philosophy',
    subcategories: ['SPIRITUALITY', 'ETHICS', 'METAPHYSICS', 'THEOLOGY', 'EASTERN PHILOSOPHY', 'LOGIC', 'MORE'],
    gradient: ['#E6E6FA', '#F0E68C'] // Lavender to Khaki
  }
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subcategories, setSubcategories] = useState(categories[0].subcategories);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const currentGradient = categories[currentIndex].gradient;
    setBackgroundStyle({
      background: `linear-gradient(to right, ${currentGradient[0]}, ${currentGradient[1]})`,
      transition: 'background 1s ease-in-out'
    });

    // Fade out the current subcategories
    setFadeOut(true);

    // After the fade-out animation ends, change the subcategories
    const timeout = setTimeout(() => {
      setSubcategories(categories[currentIndex].subcategories);
      setFadeOut(false); // Fade in the new subcategories
    }, 500); // Set this to the length of the fade-out animation (0.5s)

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const settings = {
    centerMode: true,
    // dots: true,
 
    cssEase: 'ease-in-out',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,

    centerPadding: '100px', // Padding around the slides
    afterChange: (index) => setCurrentIndex(index),
    focusOnSelect: true
  };

  return (
    <div className="category-slider" style={backgroundStyle}>
      <h2 className="text-center">Popular Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className={`category-slide ${currentIndex === index ? 'active-slide' : ''}`}>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </Slider>

      {/* Subcategories Section with fade effect */}
      <div className={`subcategory-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        {subcategories.map((subcat, index) => (
          <span key={index} className="subcategory-item">{subcat}</span>
        ))}
      </div>

      <div className="category-count">
        {currentIndex + 1}/{categories.length}
      </div>
    </div>
  );
};

export default CategorySlider;
