import React, { useState, useEffect } from "react";
import axios from "axios";

const GoogleReviews = ({ placeId, apiKey }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              place_id: placeId,
              key: apiKey,
              fields: "reviews",
            },
          }
        );
        setReviews(response.data.result.reviews);
      } catch (err) {
        setError("Failed to fetch reviews");
        console.error(err);
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  return (
    <div>
      <h2>Google Reviews</h2>
      {error && <p>{error}</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.author_name}>
            <p>
              <strong>{review.author_name}</strong> - {review.rating} stars
            </p>
            <p>{review.text}</p>
            <p>
              <em>{new Date(review.time * 1000).toLocaleDateString()}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
