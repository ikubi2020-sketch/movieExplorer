import { Route, Routes } from 'react-router'
import './App.css'
import LayOut from './components/LayOut'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import MoviesDetails from './pages/MoviesDetails'







function App() {

  

  return (
    
    <Routes>
      <Route element={<LayOut/>}>
        <Route path='/' element={<Movies url={"https://api.tvmaze.com/shows"}/>}/>
        <Route path='/favorite' element={<Favorites/>}/>
        <Route path='/MovieDetails/:id' element={<MoviesDetails/>}/>
      </Route>
    </Routes>
    
  )
}
export default App