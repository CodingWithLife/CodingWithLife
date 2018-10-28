import React from 'react';
import Card from './Card/Card.js'

import outlaw from "./Card/outlaw.png"
import jester from "./Card/jester.png"
import lover from "./Card/lover.png"
import caregiver from "./Card/caregiver.png"
import everyman from "./Card/everyman.png"
import innocent from "./Card/innocent.png"
import ruler from "./Card/ruler.png"
import sage from "./Card/sage.png"
import magician from "./Card/magician.png"
import hero from "./Card/hero.png"
import creator from "./Card/creator.png"
import explorer from "./Card/explorer.png"





const Contact = () => {
  return (

    <div>
      <Card id={outlaw} />
      <Card id={jester} />
      <Card id={lover} />
      <Card id={caregiver} />
      <Card id={everyman} />
      <Card id={innocent} />
      <Card id={ruler} />
      <Card id={sage} />
      <Card id={magician} />
      <Card id={hero} />
      <Card id={creator} />
      <Card id={explorer} />
  	</div>

  );
}


export default Contact;
