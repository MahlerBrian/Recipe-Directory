import { BrowserRouter, Switch, Route } from 'react-router-dom'

//page components
import Home from './pages/home/home'
import Create from './pages/create/create'
import Search from './pages/search/search'
import Recipe from './pages/recipe/recipe'
import Navbar from './components/navbar'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/recipes/:id'>
            <Recipe />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
