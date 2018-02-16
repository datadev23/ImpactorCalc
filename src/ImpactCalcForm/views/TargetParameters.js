import React, { Component } from 'react';


class TargetParameters extends Component {


render() {


return(


<div>

  <label>
   
    Project Density (in kg/m3)<input type="text" name="projectiledensity" />
  </label>
  
 <select name="distance">
    <option value="1000">1000 kg/m^3 for ice</option>
    <option value="1500">1500 kg/m^3 for porous rock</option>
    <option value="3000">3000 kg/m^3 for dense rock</option>
 

  

  </select>
</div>

	);



}


}

 export default TargetParameters;

