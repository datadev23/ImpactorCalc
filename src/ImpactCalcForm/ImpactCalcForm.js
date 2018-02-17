import React, { Component } from 'react';
import DistanceToImpactor from './views/DistanceToImpactor'
import ProjectileParameters from './views/ProjectileParameters'
import ImpactParameters from './views/ImpactParameters'
import TargetParameters from './views/TargetParameters'
import ImpactFormButtons from './views/ImpactFormButtons'

class ImpactCalcForm extends Component
{



// add validation into to validate the distance impactor code 



render() {


return (

   <form>
   <div id="distanceImpactor">
   <DistanceToImpactor/>
   </div>

	
   <div id="projectileParm">
    <ProjectileParameters/>
     </div>

      <div id="impactParam">
    <ImpactParameters/>
     </div>

     <div id="TargetParam">
    <TargetParameters/>
     </div>

       <div id="buttons">
    <ImpactFormButtons/>
     </div>

    <input type="submit" value="Submit" />

     </form>

	



	);

}



}

export default ImpactCalcForm