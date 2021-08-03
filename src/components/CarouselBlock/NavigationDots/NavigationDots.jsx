import React from 'react';
import classes from './NavigationDots.css';

export const NavigationDots = React.memo((props) => {
  let dots = [];
  for (let i = 0; i < props.slidesLength - props.slidesOnScreen + 1; i++) {
    dots.push(
      <div
        className={`${classes.dot} 
        ${i == props.mainIndex ? classes.selectDot : ''} `}
        key={i}
        onClick={() => dotClickHandler(i, props.slidesLength)}></div>,
    );
  }

  const dotClickHandler = (index, length) => {
    if (!props.infinity) {
      if (index == 0) {
        props.setslidesEnd({prev: true, next: false});
      } else if (index == dots.length - 1) {
        props.setslidesEnd({prev: false, next: true});
      } else {
        props.setslidesEnd({prev: false, next: false});
      }
    }
    props.setMainindex(index);
    const positionToMove = (props.slideTrack.current.offsetWidth * ((100 / length) * index)) / 100;
    props.setTrackPosition(positionToMove);
    props.slideTrack.current.style.transform = `translateX(-${positionToMove}px)`;
  };

  return (
    <div>
      <div className={classes.navigation}>{dots}</div>
    </div>
  );
});
