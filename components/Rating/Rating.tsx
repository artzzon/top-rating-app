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
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickStar(i + 1)}
        >
          <RatingIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
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

  const handleSpace = (
    pressedRating: number,
    e: React.KeyboardEvent<SVGElement>
  ) => {
    if (e.code === "Space" && setRating) {
      setRating(pressedRating);
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
