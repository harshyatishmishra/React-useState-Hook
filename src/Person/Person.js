import React, { Component } from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I'm {props.name} {props.age}</p>
            <p>{props.children}</p>
        </div>
    )

}

export default Person;