import React, { Component } from 'react';
class ProjectileParameters extends Component {


   render() {


    return(

     <div>

      

  <label>
   <h2> Projectile Parameters </h2>
    Project Diamater<input type="text" name="projectilediamster" />
  </label>
  
 <select name="distance">
    <option value="metres">metres</option>
    <option value="km">km</option>
    <option value="feet">feet</option>
    <option value="miles">miles</option>

  

  </select>


  <label>
   
    Project Density (in kg/m3)<input type="text" name="projectiledensity" />
  </label>
  
 <select name="distance">
   <option value="0">Select from a list
         <option value="1000">1000 kg/m^3 for ice
         <option value="1500">1500 kg/m^3 for porous rock
         <option value="3000">3000 kg/m^3 for dense rock
         <option value="8000">8000 kg/m^3 for iron
  

  

  </select>

</div>


    	);


   }



}

export default ProjectileParameters