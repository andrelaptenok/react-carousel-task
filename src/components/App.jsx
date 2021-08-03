import React, {useState} from 'react';

import classes from './App.css';
import {Carousel} from './CarouselBlock/Carousel.jsx';
import {Setting} from './SettingBlock/Setting.jsx';

let data = [
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      margin: '10px'
    }}>
    <img
      style={{width: '50%', objectFit: 'cover'}}
      src="https://i.ytimg.com/vi/GAHHRlD-UjA/maxresdefault.jpg"
    />
    <p style={{padding: '10px'}}>
      Silicon Valley is a region in the southern part of the San Francisco Bay Area in Northern
      California that serves as a global center for high technology and innovation. It corresponds
      roughly to the geographical Santa Clara Valley. San Jose is Silicon Valley's largest city, the
      third-largest in California, and the tenth-largest in the United States; other major Silicon
      Valley cities include Sunnyvale, Santa Clara, Redwood City, Mountain View, Palo Alto, Menlo
      Park, and Cupertino.
    </p>
  </div>,
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}>
    <img
      style={{width: '50%', objectFit: 'cover'}}
      src="https://mport.ua/i/73/66/29/736629/4ad6ac8e0ba7ccf7c00da9a77ba5b0fb-quality_70Xresize_crop_1Xallow_enlarge_0Xw_1200Xh_643.jpg"
    />
    <p style={{padding: '10px'}}>
      The word "silicon" in the name originally referred to the large number of innovators and
      manufacturers in the region specializing in silicon-based MOS transistors and integrated
      circuit chips. The area is now home to many of the world's largest high-tech corporations,
      including the headquarters of more than 30 businesses in the Fortune 1000, and thousands of
      startup companies.
    </p>
  </div>,
  <img
    style={{width: '100%', height: '100%', objectFit: 'cover'}}
    src="https://i.artfile.ru/1920x1080_858210_[www.ArtFile.ru].jpg"
  />,
  <div style={{padding: '5%'}}>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <p>
      Voluptatem, similique. Sit modi deserunt quas ea adipisci corporis labore impedit? Quaerat
      culpa totam id dolorum expedita explicabo quia possimus nulla quisquam.
    </p>
  </div>,
];

export const App = () => {
  const [infinity, setInfinity] = useState(false);
  const [slidesOnScreen, setSlidesOnScreen] = useState(1);

  console.log("infinity", infinity)
  console.log("slidesOnScreen", slidesOnScreen)

  return (
    <div className={classes.wrapper}>
      <Setting
        maxScreen={data.length}
        updateInfinity={setInfinity}
        updateSlidesOnScreen={setSlidesOnScreen}
        slidesOnScreen={slidesOnScreen}
      />
      <Carousel slides={data} infinity={infinity} slidesOnScreen={slidesOnScreen}/>
    </div>
  );
};
