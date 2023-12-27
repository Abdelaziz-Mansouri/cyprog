import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css'
import {Container} from './Components/index';
import {Header , Footer} from './Sections/index';
import {Browse, Home , Profile , StreamsPage ,DetailsPage} from './Pages/index';
// import Streams from './Sections/Streams/Streams';



const App= ()=>{
    return(
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Browse' element={<Browse/>}/>
                        <Route path='/Streams' element={<StreamsPage/>}/>
                        <Route path='/Details' element={<DetailsPage/>} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    );
}
export default App;