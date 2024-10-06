import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { CategoryListGet } from "../../services/book.service";
import "./style.css";

function AsNavFor() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [category, setCategory] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
    const [totalSlides, setTotalSlides] = useState(0); // Track total slides
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        getCategoryData();
    }, []);

    const getCategoryData = async () => {
        const categoryData = await CategoryListGet();
        setCategory(categoryData.data);
        console.log("categoryList-->", categoryData.data);
    };

    const gradients = [
        "linear-gradient(90deg, #FFD0D5 0%, #FFE1A0 100%)", // Gradient 1
        "linear-gradient(90deg, #FFF16D 0%, #FFD65C 100%)", // Gradient 2
        "linear-gradient(90deg, #FFBC4B 0%, #E9B7AC 100%)", // Gradient 3
        "linear-gradient(90deg, #E2B5CA 0%, #C3BFD1 100%)", // Gradient 4
        "linear-gradient(90deg, #A4C9D8 0%, #B9DF9F 100%)", // Gradient 5
        "linear-gradient(90deg, #CDF567 0%, #E6E29E 100%)", // Gradient 6
        // Add more gradients if needed
    ];

    // Slider settings for the main slider
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: nav2,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update slide on change
        responsive: [
            {
                breakpoint: 768, // For tablets and smaller screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Slider settings for the navigation slider
    const navSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        variableWidth: true,
        asNavFor: nav1,
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                    slidesToShow: 2, // Show fewer slides
                    centerMode: false, // Disable centerMode for better layout
                },
            },
            {
                breakpoint: 480, // For mobile
                settings: {
                    slidesToShow: 1, // Show one slide
                    centerMode: false,
                    variableWidth: false,
                },
            },
        ],
    };

    // Update total slides count once the slider is mounted
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        if (sliderRef1 && sliderRef1.innerSlider) {
            setTotalSlides(sliderRef1.innerSlider.props.children.length);
        }
    }, [sliderRef1]);

    // Go to the next slide
    const nextSlide = () => {
        if (sliderRef1) {
            sliderRef1.slickNext();
        }
    };

    // Go to the previous slide
    const prevSlide = () => {
        if (sliderRef1) {
            sliderRef1.slickPrev();
        }
    };

    return (
        <div
            className="container-fluid"
            id="category-container"
            style={{
                background: gradients[currentSlide % gradients.length],
                transition: "background 1s ease-out", // Apply gradient based on current slide, smooth transition
            }}
        >
            <p
                style={{ fontSize: "30px" }}
                className="text-center text-dark pt-lg-5 pb-lg-5 pt-5 pb-5"
            >
                Popular Categories
            </p>
            <div>
                {/* Navigation Slider (3 slides at the top) */}
                <Slider
                    {...navSliderSettings}
                    ref={(slider) => (sliderRef2 = slider)}
                    className="nav-slider mt-lg-5 "
                >
                    {category.map((item, index) => (
                        <div className="category-name" key={index}>
                            <span>{item.categoryName}</span>{" "}
                            {/* Display category name correctly */}
                        </div>
                    ))}
                </Slider>

                {/* Main Slider (1 large slide in the center) */}
                <div className="container mt-lg-5 mt-5">
                    <Slider
                        {...mainSliderSettings}
                        ref={(slider) => (sliderRef1 = slider)}
                        className="main-slider"
                    >
                        <div className="subCat">
                            <button className="subCat-button">Technology</button>
                            <button className="subCat-button">Health & Wellness</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Spiritual Leaders</button>
                            <button className="subCat-button">Spirituality</button>
                            <button className="subCat-button">Arts & Culture</button>
                            <button className="subCat-button">Fashion & Style</button>
                            <button className="subCat-button">Food & Cooking</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Travel</button>
                            <button className="subCat-button">Science</button>
                            <button className="subCat-button">Fitness</button>
                            <button className="subCat-button">Business</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Music</button>
                            <button className="subCat-button">Entertainment</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Photography</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Gaming</button>
                            <button className="subCat-button">Education</button>
                            <button className="subCat-button">Personal Development</button>
                            <button className="subCat-button">Language Learning</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Parenting</button>
                            <button className="subCat-button">Finance</button>
                            <button className="subCat-button">Real Estate</button>
                            <button className="subCat-button">DIY & Crafts</button>
                            <button className="subCat-button">Photography</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Literature</button>
                            <button className="subCat-button">History</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Movies</button>
                            <button className="subCat-button">Fitness</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Technology</button>
                            <button className="subCat-button">Sports</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Gardening</button>
                            <button className="subCat-button">Automotive</button>
                        </div>
                        <div className="subCat">
                            <button className="subCat-button">Comedy</button>
                            <button className="subCat-button">Architecture</button>
                        </div>
                    </Slider>
                </div>

            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                <button className="prev-button" onClick={prevSlide}>
                    &#8249;
                </button>
                <span className="pagination-info">
                    {currentSlide + 1}/{totalSlides} {/* Display correct pagination */}
                </span>
                <button className="next-button" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </div>
    );
}

export default AsNavFor;
