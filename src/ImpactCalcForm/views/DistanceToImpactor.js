import React, { Component } from 'react';
    


    class DistanceToImpactor extends Component {

        render() {

             return (

             
        <div>
        <h2>Distance from Impact</h2>
  <label>
    Distance from impact
    <input type="text" name="distancetoimpactor" required pattern="[0-9]*" />
  </label>
  
 <select name="distance">
    <option value="km">km</option>
    <option value="miles">miles</option>
  

  </select>


  </div>

 





                );


        }



    }

        export default DistanceToImpactor;