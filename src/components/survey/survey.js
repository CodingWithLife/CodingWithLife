import React from 'react';

const Survey = () => {
 return (
   <div>
     <ol>
        <li>
          <h3>I try to see myself in other peoples shoes.</h3>
              <div clasName='radio'>
                 <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Agree
                 <input type="radio" className="radioCustomButton" name="radioGroup"/> Agree
                 <input type="radio" className="radioCustomButton" name="radioGroup"/> Neutral
                 <input type="radio" className="radioCustomButton" name="radioGroup"/> Disagree
                 <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Disagree
               </div >
        </li>

        <li>
          <h3>I try to see myself in other peoples shoes.</h3>
             <div clasName='radio'>
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Agree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Agree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Neutral
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Disagree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Disagree
              </div >
        </li>

        <li>
          <h3>Friends often turn to me for advice.</h3>
             <div clasName='radio'>
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Agree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Agree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Neutral
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Disagree
              <input type="radio" className="radioCustomButton" name="radioGroup"/> Strongly Disagree
              </div >
        </li>

     </ol>
   </div>
 );
}

export default Survey;
