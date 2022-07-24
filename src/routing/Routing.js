import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPeople from '../components/ListPeople/ListPeople'
import PeopleDetails from '../components/PeopleDetails/PeopleDetails'
import ListFilms from '../components/ListFilms/ListFilms'
import FilmDetails from '../components/FilmDetails/FilmDetails'
import Info from '../components/Info/Info'
import Main from '../components/Main'
import Credits from '../components/Credits'
import { MyProvider } from '../context/SwitchContext'

function App() {
    return (
        <div className="peoplelisted">
            <div className="blur">
                <MyProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/info" element={<Info />} />
                            <Route path="/films" element={<ListFilms />} />
                            <Route
                                path="/characters"
                                element={<ListPeople />}
                            />
                            <Route
                                path="/character/:name"
                                element={<PeopleDetails />}
                            />
                            <Route
                                path="/films/:title"
                                element={<FilmDetails />}
                            />
                            <Route path="/credits/" element={<Credits />} />
                        </Routes>
                    </BrowserRouter>
                </MyProvider>
            </div>
        </div>
    )
}

export default App
