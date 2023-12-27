
import feature01 from '../Components/assets/Images/featured-01.jpg';
import feature02 from '../Components/assets/Images/featured-02.jpg';
import feature03 from '../Components/assets/Images/featured-03.jpg';
import service1 from '../Components/assets/Images/service-01.jpg';
import service2 from '../Components/assets/Images/service-02.jpg';
import service3 from '../Components/assets/Images/service-03.jpg';

import streams01 from '../Components/assets/Images/stream-01.jpg';
import streams02 from '../Components/assets/Images/stream-02.jpg';
import streams03 from '../Components/assets/Images/stream-03.jpg';
import streams04 from '../Components/assets/Images/stream-04.jpg';
import streams05 from '../Components/assets/Images/stream-05.jpg';
import streams06 from '../Components/assets/Images/stream-06.jpg';
import streams07 from '../Components/assets/Images/stream-07.jpg';
import streams08 from '../Components/assets/Images/stream-08.jpg';

import avatar01 from '../Components/assets/Images/avatar-01.jpg';
import avatar02 from '../Components/assets/Images/avatar-02.jpg';
import avatar03 from '../Components/assets/Images/avatar-03.jpg';
import avatar04 from '../Components/assets/Images/avatar-04.jpg';

const GamesBrowse=[
    {id:"game_001" , image : feature01 , title:"CS-GO" ,     category:"Stream-X" ,    rate:"4.8" , download:"2.3M" , streams:"2.4K"},
    {id:"game_002" , image : feature02 , title:"Island Rusty" ,     category:"Stream-X" ,    rate:"4.8" , download:"2.3M" , streams:"2.4K"},
    {id:"game_003" , image : feature03 , title:"Gamezer" ,     category:"Stream-X" ,    rate:"4.8" , download:"2.3M" , streams:"2.4K"}
]

const Lives=[
    {id:"live_001" , image : service1 , title:"Go To Your Profile" ,    paypal: "",     description:"Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout." },
    {id:"live_002" , image : service2 , title:"Live Stream Button" ,    paypal: "Link",     description:"If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com"},
    {id:"live_003" , image : service3 , title:"You Are Live" ,          paypal: "",     description:"You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website." }
]
const MostLivesStream=[
    {id:"0" ,image:streams01 , smallImage:avatar01 , title:"Just Talking With Fans" , Name:"Kengan Omeg"},
    {id:"1" ,image:streams02 , smallImage:avatar02 , title:"CS-GO 36 Hours Live Stream" , Name:"LahutaMalc"},
    {id:"2" ,image:streams03 , smallImage:avatar03 , title:"Maybe Nathej Allnight Chillin'" , Name:"Areluwa"},
    {id:"3" ,image:streams04 , smallImage:avatar04 , title:"Live Streaming Till Morning" , Name:"NewGangTeam"},
    {id:"4" ,image:streams05 , smallImage:avatar01 , title:"Just Talking With Fans" , Name:" Kengan Omeg"},
    {id:"5" ,image:streams06 , smallImage:avatar02 , title:"CS-GO 36 Hours Live Stream" , Name:"LahutaMalc"},
    {id:"6" ,image:streams07 , smallImage:avatar03 , title:"Maybe Nathej Allnight Chillin'" , Name:"Areluwa"},
    {id:"7" ,image:streams08 , smallImage:avatar04 , title:"Live Streaming Till Morning" , Name:"NewGangTeam"}
]
export default GamesBrowse;
export {Lives , MostLivesStream};