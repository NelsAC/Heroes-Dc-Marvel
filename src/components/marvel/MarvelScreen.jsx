import React from 'react'
import HeroList from '../heroes/HeroList'

const MarvelScreen = () => {
    return (
        <div>
            <h1 className="text-center py-8 mb-8 text-3xl font-bold uppercase text-red-800">- Marvel -</h1>
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}

export default MarvelScreen
