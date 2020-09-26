import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher}) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <div className="card-columns">
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                    
                ))
            }
        </div>
    )
}
