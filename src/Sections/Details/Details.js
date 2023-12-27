import './Details.css'
import React from 'react'
import { Feature, SectionHeader , FortniteDetails ,AllGames} from '../../Components/index';

import FeatureData ,{GamesData , Games} from '../../Data/DetailsData';
const Details = () => {
    const features=FeatureData.map(feat => (
        feat.id==="feature_01" ? <Feature key={feat.id} image={feat.image} cls='col-lg-4 col-md-12'/> : <Feature key={feat.id} image={feat.image} cls='col-lg-8 col-md-12  d-flex justify-content-end vid'/>
    ))
    const gamesDetails=GamesData.map(gamesD =>(
        <FortniteDetails key={gamesD.id} props={gamesD} />
    ))
    const allGames=Games.map(topgame =>(
        <AllGames key={topgame.id} props={topgame} />
    ))
    return (
        <>
            <div className='feature-imgs row'>
                    {features}
            </div>
            <div className='row'>
                <div className='col-xs-12 text-center py-5'>
                    <SectionHeader >FORTNITE DETAILS</SectionHeader>
                </div>
                <div className='fortnit-det col-xs-12 p-4'>
                    {gamesDetails}
                </div>
            </div>
            <div className='all-games my-5 p-4 row'>
                    {allGames}
            </div>
        </>
    )
}

export default Details