
import GamingLibrary_01 from '../Components/assets/Images/game-01.jpg';
import GamingLibrary_02 from '../Components/assets/Images/game-02.jpg';
import GamingLibrary_03 from '../Components/assets/Images/game-03.jpg';



const GamingLibraryData=[
    {id:"library_item_0" ,  image:GamingLibrary_03 ,    title:"Data2" ,     category:"Sandbox" ,    Hours_Played: "634 H 22 Mins" ,    date_Added:"24/08/2036" ,    currently:"Downloaded"},
    {id:"library_item_1" ,  image:GamingLibrary_01 ,    title:"Fortnite" ,  category:"Sandbox" ,    Hours_Played: "740 H 52 Mins" ,    date_Added:"22/06/2036" ,    currently:"Download"},
    {id:"library_item_2" ,  image:GamingLibrary_02 ,    title:"GS-GO" ,     category:"Sandbox" ,    Hours_Played: "892 H 14 Mins" ,    date_Added:"21/04/2036" ,    currently:"Downloaded"}
]
const topGames=[
    {id:"game_01" ,image:GamingLibrary_03 , title:"Fortnite" ,  category:"Sandbox" ,    rat:3.8 , dow:"2.3M"},
    {id:"game_03" ,image:GamingLibrary_02 , title:"Data2" ,     category:"Legendary" ,  rat:2.7 , dow:"5.3M"},
    {id:"game_02" ,image:GamingLibrary_01 , title:"Pubg" ,      category:"Stream-X" ,   rat:4.8 , dow:"1.1M"}
]
export default GamingLibraryData;
export {topGames};