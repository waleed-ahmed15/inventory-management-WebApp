import { Star } from "lucide-react";
import React from "react";

type RatingProps = {
  rating: number;
};

const Rating = (props: RatingProps) => {
  return [1, 2, 3, 4, 5].map((star) => {
    return (
      <Star
        key={star}
        className="w-3 h-3"
        color={star <= props.rating ? "#FFC107" : "#E4E5E9"}
      />
    );
  });
};

export default Rating;
