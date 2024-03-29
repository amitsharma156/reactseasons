import React from 'react';
import './SeasonDisplay.css';

const seasonConfig ={
    summer : {
        text : 'Lets heat the beach',
        iconName :'sun'
    },
    winter: {
        text :'burr it is cold',
        iconName : 'snowflake'
    }
}
const getSeason = (lat,month)=>{
    console.log(lat);
    console.log(month);
    if(month > 2 && month <  10){
        return lat>0 ? 'summer' : 'winter';
    }else{
        return lat>0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay =(props) =>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName}= seasonConfig[season];
    return (
    <div className = {`${season} season-display`}>
        <i className = {`massive ${iconName} icon icon-left`} />
    <h1>{text}</h1>
        <i className = {` massive ${iconName} icon icon-right`} />
    
    </div>
    )
}
export default SeasonDisplay;