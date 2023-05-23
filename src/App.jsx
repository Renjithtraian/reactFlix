
import './App.css'
import Layout from './components/Layout'
import Favourite from './components/Pages/Favourite'
import Home from './components/Pages/Home'
import { Routes,Route } from 'react-router-dom'
import MovieInfo from './components/Pages/MovieInfo'

function App() {

  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Footer/> */}
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/favourite' element={<Favourite/>}/> 
          <Route path='/movie/:id' element={<MovieInfo/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
