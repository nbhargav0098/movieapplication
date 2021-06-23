import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import Popular from './components/Popular'
import Results from './components/Results'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
)

export default App
