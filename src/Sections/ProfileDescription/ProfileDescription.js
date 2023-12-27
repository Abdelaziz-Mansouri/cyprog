import './ProfileDescription.css';
import {ProfileUser , ProfileCard , SectionHeader , PrimaryButton ,SectionWrapper , GameLibrary} from '../../Components/index';
import dataUser ,{Clips } from '../../Data/UsersData';
import GamingLibraryData from '../../Data/GamingLibraryData';

// import  from '../../Data/UsersData';

const ProfileDescription = () => {
    const profiles=dataUser.map(prof =>{
        return <ProfileUser key={prof.id} image={prof.image} fullName={prof.fullName} games_Download={prof.games_Download} friends_Online={prof.friends_Online} live_Stream={prof.live_Stream} clips={prof.clips}/>
    })
    const ProfileCards=Clips.map(profCard =>{
        return <ProfileCard key={profCard.id} image={profCard.image} Name={profCard.Name} number_Clip={profCard.number_Clip} views={profCard.views}/>
    })
    const games= GamingLibraryData.map(game => {
        return <GameLibrary key={game.id} image={game.image} title={game.title} category={game.category} Hours_Played={game.Hours_Played} date_Added={game.date_Added} currently={game.currently}/>
    })
    return (
        <>
            <div className='profile-description'>
                <div className='profile-person-data'>
                    {profiles}
                </div>
                <div className='profile-person-videos'>
                    <SectionHeader>Your Most Popular <span className='R'>Clips</span></SectionHeader>
                    <div className='profile-person-video'>
                        {ProfileCards}
                    </div>
                </div>
                <div className='load-more'>
                    <PrimaryButton link="/#" className='col-12'>Load More Clips</PrimaryButton>
                </div>
            </div>
            <SectionWrapper>
                <SectionHeader>Your Gaming <span className='R'>Library</span></SectionHeader>
                <div className="library-items">
                    {games}
                </div>
            </SectionWrapper>
        </>
    )
}

export default ProfileDescription