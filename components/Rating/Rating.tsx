import React from "react";
import { RatingProps } from "./Rating.props";
import RatingIcon from "./Rating.svg";

import styles from "./Rating.module.css";
import cn from "classnames";

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((el, i) => {
      return (
        <RatingIcon
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickStar(i + 1)}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (enterRating: number) => {
    if (isEditable) {
      constructRating(enterRating);
    }
  };

  const onClickStar = (clickedRating: number) => {
    if (isEditable && setRating) {
      setRating(clickedRating);
    }
  };

  return (
    <div {...props}>
      {ratingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};

export default Rating;
