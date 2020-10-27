import React from 'react';

export default function Card({ pokemon }) {
    return (
        <div>
            <div>
            <img src={pokemon.sprites.front_default}/>
            </div>
            <div>
            {pokemon.name}
            </div>
            <div>
    {pokemon.types.map(type => {return <div>{type.type.name}</div>})}
            </div>
            <div>
            {pokemon.weight} lbs.
            </div>
            <div>
            {pokemon.height}
            </div>
            <div>
            {pokemon.abilities[0].ability.name}
            </div>
        </div>
    )
}
