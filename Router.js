import Header from "./Shoping/Value/Header";
import Store from "./Shoping/Value/Store";
import Men from "./Shoping/Value/Men";
import Women from "./Shoping/Value/Women";
import Kids from "./Shoping/Value/Kids";
import Brands from "./Shoping/Value/Brands";
import Lobby from "./Shoping/Value/Lobby";
import LobbyForm from "./Shoping/Value/LobbyForm";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function Router() {
    return(
        <div>
             <BrowserRouter>
         <Header />
        <Routes>
           <Route path="/" element={<LobbyForm/>} />
           <Route path="/Register" element={<Lobby/>} />
           <Route path="/Store" element={<Store/>} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Kids" element={<Kids/>} />
          <Route path="/Brands" element={<Brands/>} />
        </Routes>
        </BrowserRouter>
         
        </div>
    )
}

export default Router;