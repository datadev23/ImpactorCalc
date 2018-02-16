import React, { Component } from 'react';

class ImpactParameters extends Component {

	render() {


		return(


   

			<form>
      <h2> Impact Parameters</h2>
  <label>
    Impact Velocity
    <input type="text" name="name" />
  </label>
  
 <select name="distance">
    <option value="km/s">km</option>
    <option value="miles/s">miles</option>
  

  </select>
  
  This is the delovity of the projectile before it enters the atmosphere. The minimum impact velocity on Earth is 
  11km/s. Thypical impact velocities are 17 km/s for astroids and 51 km/s for comments. The maximum Earth impact 
  velocity for objects orbiting the sun is 72 km/s

    
   <label>
    Angle
    <input type="text" name="Angle" />
  </label>

  The impact angle is measured from a plane tangent to the impact surface. 
  This angle is 90 degrees for a vertical impact. The most probable angle of impact is 45 degrees.




</form>



			);
	}



}

export default ImpactParameters