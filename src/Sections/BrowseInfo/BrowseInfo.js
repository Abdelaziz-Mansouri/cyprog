import { PrimaryButton, SectionHeader } from '../../Components'
import './BrowseInfo.css'
import GamesBrowse, { Lives ,MostLivesStream} from '../../Data/BrowseData';
import {topGames} from '../../Data/GamingLibraryData';
import { FeatutredGame } from '../../Components/Card/Card'
import { TopDownloads , LiveStreame ,MostPuplarLiveCard} from '../../Components/index';

const BrowseInfo = () => {
    const games=GamesBrowse.map(game =>(
        <FeatutredGame key={game.id} props={game} />
        // return <FeatutredGame key={game.id} image={game.image} title={game.title} category={game.category} rate={game.rate} download={game.download} />
    ))
    
    const top=topGames.map(topgame =>(
        // <TopDownloads key={topgame.id} image={topgame.image} title={topgame.title} category={topgame.category} rates={topgame.rates} downloads={topgame.downloads} />
        <TopDownloads key={topgame.id} props={topgame} />
    ))
    const live=Lives.map(liv =>{
        return <LiveStreame key={liv.id} image={liv.image} title={liv.title} description={liv.description} paypal={liv.paypal}/>
    })
    const mostLivestream=MostLivesStream.map(liv => (
        liv.id < 4 ? <MostPuplarLiveCard key={liv.id} image={liv.image} smallImage={liv.smallImage} Name={liv.Name} title={liv.title}/> : "" 
    ))
    return (
        <>
            <div className='browse row'>
                <div className='featured-games col-lx-8 col-lg-7 col-xs-12 my-1'>
                    <SectionHeader>Featured <span className='R'>Games</span></SectionHeader>
                    <div className='featur-game row'>
                        {games}
                    </div>
                </div>
                <div className='top col-lx-4 col-lg-5 col-xs-12 my-1'>
                    <div className='top-downloads'>
                        <SectionHeader>Top <span className='R'>Downloads</span></SectionHeader>
                        <div className='library-items pe-0 pb-0'>
                            {top}
                        </div>
                        <div className='text-center'>
                            <span className='R'>View All Games</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='live-streams my-4'>
                <SectionHeader>How To Start Your <span className='R'>Live Stream</span></SectionHeader>
                <div className='row my-4'>
                    {live}
                </div>
                <PrimaryButton link="/Profile">Go to profile</PrimaryButton>
            </div>
            <div className='featured-games featured '>
                <SectionHeader>Most Popualr<span className='R'>Live Stream</span></SectionHeader>
                <div className='library-items ' >
                    {mostLivestream}
                </div>
                <div className='text-center lien'>
                    <PrimaryButton link="/Streams">Discover All Streams</PrimaryButton>
                </div>
            </div>
        </>
    )
}

export default BrowseInfo