import feature_left from '../Components/assets/Images/feature-left.jpg';
import feature_right from '../Components/assets/Images/feature-right.jpg';
import details01 from '../Components/assets/Images/details-01.jpg';
import details02 from '../Components/assets/Images/details-02.jpg';
import details03 from '../Components/assets/Images/details-03.jpg';

import GamingLibrary_01 from '../Components/assets/Images/game-01.jpg';
import GamingLibrary_02 from '../Components/assets/Images/game-02.jpg';
import GamingLibrary_03 from '../Components/assets/Images/game-03.jpg';

const FeatureData=[
    {id:"feature_01" , image:feature_left},
    {id:"feature_02" , image : feature_right}
]
const GamesData=[
    {id:"game-001" , title:"Fortnite" , category:"Sandbox" , rate:"4.8" , download:"2.3M" , storage:"36GB" , type_Game:"Action" , image_1:details01 , image_2:details02 , image_3:details03 }
]
const Games=[
    {id:"game_01" ,image:GamingLibrary_03 , title:"Fortnite" ,  category:"Sandbox" ,    rat:3.8 , dow:"2.3M"},
    {id:"game_03" ,image:GamingLibrary_02 , title:"Data2" ,     category:"Legendary" ,  rat:2.7 , dow:"5.3M"},
    {id:"game_02" ,image:GamingLibrary_01 , title:"Pubg" ,      category:"Stream-X" ,   rat:4.8 , dow:"1.1M"},
    {id:"game_04" ,image:GamingLibrary_03 , title:"Fortnite" ,  category:"Sandbox" ,    rat:3.8 , dow:"2.3M"},
    {id:"game_05" ,image:GamingLibrary_02 , title:"Data2" ,     category:"Legendary" ,  rat:2.7 , dow:"5.3M"},
    {id:"game_06" ,image:GamingLibrary_01 , title:"Pubg" ,      category:"Stream-X" ,   rat:4.8 , dow:"1.1M"}
]

export default FeatureData;
export {GamesData , Games};

