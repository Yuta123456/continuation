import React from 'react';
import { IonSlides } from '@ionic/react';
import Slides1 from './slides/Slide1';
import Slides2 from './slides/Slide2';
import Slides3 from './slides/Slide3';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export const SlidesExample: React.FC = () => (
  <>
    <IonSlides pager={true} options={slideOpts} style={{height: "100%"}}>
      <Slides1/>
      <Slides2/>
      <Slides3/>
    </IonSlides>
  </>
);
