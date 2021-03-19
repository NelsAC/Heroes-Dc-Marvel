import React, { useMemo } from 'react'
import HeroCard from './HeroCard';
import getHeroesByPublisher from './selectors/getHeroesByPublisher'

const HeroList = ({publisher}) => {
    const heroes=useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 mb-8 animate__animated animate__fadeIn">
            {
                heroes.map((hero)=> <HeroCard key={hero.id} {...hero} />)
            }
        </div>
    )
}

export default HeroList
