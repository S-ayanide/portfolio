import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout, WrappedContainer } from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <WrappedContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </WrappedContainer>
      </Layout>
    </BrowserRouter>
  )
}

export default App
