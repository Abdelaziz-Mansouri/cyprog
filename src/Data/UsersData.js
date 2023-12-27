import profile from '../Components/assets/Images/profile.jpg';
import clip1 from '../Components/assets/Images/clip-01.jpg';
import clip2 from '../Components/assets/Images/clip-02.jpg';
import clip3 from '../Components/assets/Images/clip-03.jpg';
import clip4 from '../Components/assets/Images/clip-04.jpg';

const userData=[
    {id:"User_001" , image : profile , fullName:"Alan Smithee" , games_Download:"3" , friends_Online:"16" , live_Stream:"None" , clips:"29"}
]
const Clips=[
    {id:"clip_1" , image : clip1 , number_Clip:"First Clip" , views:"250"},
    {id:"clip_2" , image : clip2 , number_Clip:"Second Clip" , views:"183"},
    {id:"clip_3" , image : clip3 , number_Clip:"Third Clip" , views:"141"},
    {id:"clip_4" , image : clip4 , number_Clip:"Fourth Clip" , views:"91"}
]
export default userData;
export {Clips};