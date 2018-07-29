import React from 'react';
import Card from './card';


export const CardList = (props) => {

    return (
        <div>
            {props.cards.map(card => <Card {...card} setSelectedItems = {props.setSelectedItems}/>)}
        </div>
    )
}