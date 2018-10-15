import React from 'react';
import './Home.css'
import jungs from './jungs.jpg'



const Home = () => {
return (
  <div className="page">
    <div className="body">
      <div id="featured">
         <center><h3>Stranger Friend</h3></center>


          <div id="list-8" className="mk-list-styles  mk-align-none   clear" data-charcode="mk-icon-angle-right" data-family="">

              <ul>
                <li>
                Without Judgement
                There aren’t good or bad Archetypes, but each has a strength and shadow side.
                </li>
                <li>
                Relatable
                We recognize ourselves and others in these characters.
                </li>
                <li>
                Fluid
                Our top Archetypes may fluctuate depending on situations we find ourselves in.
                </li>
                <li>
                Adaptable
                Once we are aware of our ‘natural’ reactions, we can choose differently.
                </li>
                <li>
                Memorable
                Individuals, leaders and team now have an easy reference point for acknowledging behavior and discussing change.
                </li>
                <li>
                Meaningful
                Understanding the different motives of the Archetypes often answers the ‘why’ behind our purpose in life or our organization’s mission in the world.
                </li>
              </ul>

            </div>
          </div>
          <img alt={'jungs'} src= {jungs} />

        </div>
      </div>
  );
}


export default Home;
