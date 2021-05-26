import React from "react"; // we don't need import this in the modern React
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    // return React.createElement('div', {className: classes}, props.children) --> How react works without JSX syntax

    return <div className={classes}>{props.children}</div>
}

export default Card;