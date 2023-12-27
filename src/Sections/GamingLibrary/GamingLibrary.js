import './GamingLibrary.css';
import {SectionHeader , SectionWrapper,GameLibrary} from '../../Components/index';
import GamingLibraryData from '../../Data/GamingLibraryData';

const GamingLibrary = () => {
    const games= GamingLibraryData.map(game => {
        return <GameLibrary key={game.id} image={game.image} title={game.title} category={game.category} Hours_Played={game.Hours_Played} date_Added={game.date_Added} currently={game.currently}/>
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Gaming Library <span className='L'>Library</span></SectionHeader>
                <div className="library-items">
                    {games}
                </div>
            </SectionWrapper>
        </>
    )
}

export default GamingLibrary