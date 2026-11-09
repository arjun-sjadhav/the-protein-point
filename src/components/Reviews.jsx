import React, { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';

export const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Rohit Deshmukh',
    image: '/images/reviews/review1.jpeg',
    review:
      "The Protein Crunch Bowl is hands down the best post-workout meal in Nanded! 17g+ protein with crunchy muesli, pure honey, and fresh bananas. No refined sugar, no heavy feeling—just clean fuel.",
  },
  {
    id: 2,
    name: 'Aditya Kulkarni',
    image: '/images/reviews/review2.jpeg',
    review:
      "Clean eating used to be tough in Nanded before The Protein Point opened. The brown bread sandwich is only ₹29 and the chia glass is super refreshing. Fast 5-minute service right after my morning workout!",
  },
  {
    id: 3,
    name: 'Sanket Shinde',
    image: '/images/reviews/review3.jpeg',
    review:
      "My daily morning routine after my morning run! 100% healthy, delicious, and very affordable for students. The Power Oats bowl keeps me energized through hours of classes without feeling sluggish.",
  },
  {
    id: 4,
    name: 'Kunal Joshi',
    image: '/images/reviews/review4.jpeg',
    review:
      "Being located right near Gold’s Gym is super convenient. I took the monthly subscription and my morning breakfast is completely sorted. High protein, pure jaggery, raw honey, and genuine hygiene.",
  },
  {
    id: 5,
    name: 'Vedant More',
    image: '/images/reviews/review5.jpeg',
    review:
      "The Dryfruit Sandwich is packed with almonds, pumpkin seeds, peanut butter, and honey. Light on the stomach but full of long-lasting energy. The stall owner is very polite and makes everything fresh.",
  },
  {
    id: 6,
    name: 'Omkar Gaikwad',
    image: '/images/reviews/review6.jpeg',
    review:
      "Finding high-fiber, no-preservative food in the morning in Nanded was a challenge. The Protein Point solved that completely. Healthy chia seed glass is top-notch. Highly recommend visiting the stall!",
  },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const total = REVIEWS_DATA.length;
  const current = REVIEWS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section
      id="reviews"
      className="section-padding reviews-section"
      aria-label="Customer Reviews"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            💬 Customer Reviews
          </span>
          <h2 className="section-title">
            Loved by Nanded’s <span className="text-leaf">Fitness Community</span>
          </h2>
          <p className="section-subtitle">
            Honest feedback from regular visitors at our Anand Nagar stall.
          </p>
        </div>

        {/* ONLY ONE REVIEW CARD VISIBLE AT A TIME */}
        <div className="reviews-carousel-wrapper">
          <div
            className="review-queue-card"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left: Customer Photo */}
            <div className="review-photo-col">
              <div className="review-img-container">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  className="review-customer-img"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: Review Details - ONLY Name and Review */}
            <div className="review-content-col">
              {/* Star Rating */}
              <div className="review-stars-row" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="review-star-gold">★</span>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="review-quote-body">
                "{current.review}"
              </blockquote>

              {/* Reviewer Name ONLY - No occupation, no location, no badges */}
              <div className="review-author-wrap">
                <div className="review-author-avatar">
                  {current.name.charAt(0)}
                </div>
                <div className="author-name-text">
                  {current.name}
                </div>
              </div>

              {/* Navigation Controls: Clean Previous / Next with Counter in between */}
              <div className="review-queue-controls">
                <button
                  type="button"
                  className="review-nav-btn prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous review"
                >
                  <IconChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                {/* Simple Counter - NO names, NO dots with hidden text */}
                <span className="review-counter-badge">
                  {currentIndex + 1} of {total}
                </span>

                <button
                  type="button"
                  className="review-nav-btn next-btn"
                  onClick={handleNext}
                  aria-label="Next review"
                >
                  <span>Next</span>
                  <IconChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
