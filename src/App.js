
import './App.css';
import Topnav from './Components/Topnav';

import WeddingPhotos from './Components/WeddingPhotos';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import WeddingVideo from './Components/WeddingVideo';
function App() {
  return (
    <>
    <BrowserRouter>
    <Topnav></Topnav>
    <Routes>
      <Route path='' element={<WeddingPhotos/>}></Route>
      <Route path='/weddingVedio' element={<WeddingVideo></WeddingVideo>}></Route>
    </Routes>
    
   
    </BrowserRouter>
    </>
  );
}

export default App;
