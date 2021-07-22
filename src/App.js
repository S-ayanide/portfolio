import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
