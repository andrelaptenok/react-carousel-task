import React from 'react';
import classes from './Setting.css';

export const Setting = (props) => {
  const {maxScreen, updateInfinity, updateSlidesOnScreen, slidesOnScreen} = props;

  return (
    <div className={classes.settings}>
      <label htmlFor="infinity">Infinity</label>
      <input
        className={classes.checkbox}
        id="infinity"
        type="checkbox"
        name="infinity"
        onChange={(e) => updateInfinity(e.target.checked)}
      />
      <label htmlFor="slidesOnScreen">Slides on screen</label>
      <input
        className={classes.select}
        id="slidesOnScreen"
        type="number"
        name="slidesOnScreen"
        value={slidesOnScreen}
        min={1}
        max={maxScreen}
        onChange={(e) => updateSlidesOnScreen(e.target.value)}
      />
    </div>
  );
};
