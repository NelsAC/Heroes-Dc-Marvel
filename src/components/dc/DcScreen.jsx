import React from 'react'
import HeroList from '../heroes/HeroList'

const DcScreen = () => {
    return (
        <div>
             <h1 className="text-center py-8 mb-8 text-3xl font-bold uppercase text-blue-800">- DC -</h1>
            <HeroList publisher='DC Comics' />
        </div>
    )
}

export default DcScreen
