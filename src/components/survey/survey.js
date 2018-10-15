import React from 'react';

const Survey = () => {
 return (
   <div>
     <ol>
        <li>
          <h3>1. I try to see myself in other people's shoes.</h3>
          <form>
            <div class="radios">
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Neutral</label>
               <input class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Disagree</label>
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Disagree</label>
            </div>
          </form>
        </li>

        <li>
         <h3>2. I feel sorry for people in a worse situation than myself.</h3>
         <form>
           <div class="radios">
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Neutral</label>
              <input class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Disagree</label>
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Disagree</label>
           </div>
         </form>
       </li>

        <li>
          <h3>3. Friends often turn to me for advice.</h3>
          <form>
            <div class="radios">
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Neutral</label>
               <input class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Disagree</label>
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Disagree</label>
            </div>
          </form>
        </li>

        <li>
          <h3>4. I sometimes find that I am feeling sorry for myself.</h3>
          <form>
            <div class="radios">
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Agree</label>
               <input className="ph1"  class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Neutral</label>
               <input class="radio-input" type="radio" name="test"/>
               <label className="ph1" class="radio-label">Disagree</label>
               <input className="ph1" class="radio-input" type="radio" name="test"/>
               <label class="radio-label">Strongly Disagree</label>
            </div>
          </form>
        </li>

        <li>
         <h3>5. I enjoy imaginative stories.</h3>
         <form>
           <div class="radios">
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Neutral</label>
              <input class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Disagree</label>
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Disagree</label>
           </div>
         </form>
       </li>

        <li>
          <h3>6. I often experience unbelievable dreams.</h3>
          <form>
            <div class="radios">
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Neutral</label>
              <input class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Disagree</label>
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Disagree</label>
            </div>
          </form>
       </li>

        <li>
          <h3>7. I like to stand out in a crowd.</h3>
          <form>
            <div class="radios">
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Agree</label>
              <input className="ph1"  class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Neutral</label>
              <input class="radio-input" type="radio" name="test"/>
              <label className="ph1" class="radio-label">Disagree</label>
              <input className="ph1" class="radio-input" type="radio" name="test"/>
              <label class="radio-label">Strongly Disagree</label>
            </div>
          </form>
       </li>
      </ol>
          <div>
          <button type="submit" class="btn">Submit Answers</button>
          </div>
          <div>
          <button class="w3-button w3-light-grey w3-hover-black w3-round w3-display-middle">Button</button>
          </div>
   </div>
 );
}

export default Survey;
