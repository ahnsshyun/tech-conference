'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MovieReviews = dynamic(
  () => import('@/components/MovieReviews')
);

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      <button 
        className="movie-reviews-button"
        onClick={() => setShowReviews(!showReviews)}
      >
        {showReviews ? '관람평 닫기' : '관람평 보기'}
      </button>

      {showReviews && <MovieReviews />}
    </>
  );
}
// 과제3 - code splitting으로 관람평 불러오기