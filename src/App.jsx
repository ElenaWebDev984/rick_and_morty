import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";

function App() {
    return (
        <div>
            <HomePage />
            <CharacterPage />
            <LocationPage />
            <EpisodePage />
        </div>
    )
}

export default App