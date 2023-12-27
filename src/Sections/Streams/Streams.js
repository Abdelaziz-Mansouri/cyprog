import { PrimaryButton, SectionHeader } from '../../Components'
import './Streams.css'
import GamesBrowse, {MostLivesStream} from '../../Data/BrowseData';
import TopStreamsData from '../../Data/StreamsData';
import { FeatutredGame } from '../../Components/Card/Card'
import { TopStreams  ,MostPuplarLiveCard} from '../../Components/index';

const Streams = () => {
    const games=GamesBrowse.map(game =>(
        <FeatutredGame key={game.id} props={game} />
    ))
    const streams=TopStreamsData.map(topStream =>(
        <TopStreams key={topStream.id} props={topStream} />
    ))
    const mostLivestream=MostLivesStream.map(liv => (
        <MostPuplarLiveCard key={liv.id} image={liv.image} smallImage={liv.smallImage} Name={liv.Name} title={liv.title}/>
    ))
    return (
        <>
            <div className='browse row'>
                <div className='featured-games col-lx-8 col-lg-7 col-xs-12 my-1'>
                    <SectionHeader>Live <span className='R'>Streams</span></SectionHeader>
                    <div className='featur-game row'>
                        {games}
                    </div>
                </div>
                <div className='top col-lx-4 col-lg-5 col-xs-12 my-1'>
                    <div className='top-downloads'>
                        <SectionHeader>Top <span className='R'>Streams</span></SectionHeader>
                        <div className='library-items pe-0 pb-0'>
                            {streams}
                        </div>
                    </div>
                </div>
            </div>
            <div className='featured-games featured my-5'>
                <SectionHeader>Most Popualr <span className='R'>Live Stream</span></SectionHeader>
                <div className='library-items ' >
                    {mostLivestream}
                </div>
                <div className='text-center lien'>
                    <PrimaryButton link="/Streams">Load More Streams</PrimaryButton>
                </div>
            </div>
        </>
    )
}

export default Streams