import React from 'react';
import './Profiles.css'
import Card from './Card/Card.js'

import caregiver from "./Card/caregiver.png"
import creator from "./Card/creator.png"
import innocent from "./Card/innocent.png"
import jester from "./Card/jester.png"



const Contact = () => {
  return (

  <div>
  <Card id={innocent} />
  <Card id={jester} />
  <Card id={caregiver} />
  <Card id={creator} />

	</div>

  );
}


export default Contact;
