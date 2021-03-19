import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    return (
        
            <div className={`relative border rounded-l-full overflow-hidden flex gap-5 ${publisher==='Marvel Comics'?'border-red-200':'border-blue-200'}`}>
                <img className="w-5/12 h-56" src={`./assets/heroes/${ id }.jpg`} alt={ superhero }/>
                <div className="py-3">
                    <h3 className={`border-l-4 ${publisher==='Marvel Comics'?'border-red-200':'border-blue-200'} pl-2 font-bold text-md`}> {superhero} </h3>
                    <div className="mt-4">
                        <p> { alter_ego } </p>
                        {
                            (alter_ego !== characters)
                                && <p className="text-sm mt-3 text-blue-500"> { characters } </p>
                        }
                        <p className="mt-2 text-xs font-bold"> { first_appearance } </p>
                        <Link to={`./hero/${ id }`} className={`transform hover:scale-110 transition duration-200 absolute bottom-2 right-2 ${publisher==='Marvel Comics'?'text-red-700':'text-blue-700'}`}>
                            Más Información ...
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default HeroCard
