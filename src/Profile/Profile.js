import React from "react";
import PropTypes from 'prop-types';


function Profile (props){
    return (
        <header className="header">
         <h1> {props.alert}</h1> 
           
             <h1 >  {props.FullName.name} </h1>
             <h2> {props.x.bio} </h2>
             <h3> {props.profession.job} </h3>
             {props.children} 
           </header>
    )
}
  Profile.propTypes = {

      FullName:PropTypes.string,
      x:PropTypes.string,
      profession:PropTypes.string,
  }


export default Profile ;