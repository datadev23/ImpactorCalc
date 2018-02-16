import React, { Component } from 'react';
import DistanceToImpactor from './views/DistanceToImpactor'
import ProjectileParameters from './views/ProjectileParameters'
import ImpactParameters from './views/ImpactParameters'
import TargetParameters from './views/TargetParameters'
import ImpactFormButtons from './views/ImpactFormButtons'

class ImpactCalcForm extends Component
{



render() {


return (

   <div>
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

     </div>

	



	);

}



}

export default ImpactCalcForm