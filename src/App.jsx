import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {Header} from "./common/components/Header.jsx";
import {Route, Routes} from "react-router";

function App() {
    return (
        <div>
            <Header />
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/" element={<CharacterPage />} />
               <Route path="/" element={ <LocationPage />} />
               <Route path="/" element={<EpisodePage />} />
           </Routes>
        </div>
    )
}

export default App