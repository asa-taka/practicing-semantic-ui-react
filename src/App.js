import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Segment, Container, Header } from 'semantic-ui-react'
import './App.css'

const App = props => (
  <Router>
    <div className="App">
      <Segment inverted basic>
        <Container>
          <Header icon="heartbeat" content="practicing-semantic-ui-react" inverted />
        </Container>
      </Segment>
      <Segment basic>
        <Switch>
          <Route path="/" render={() => (
            <Container>
              <Header icon="heartbeat" content="practicing-semantic-ui-react" />
              <div>First route is here!</div>
            </Container>
          )} />
        </Switch>
      </Segment>
    </div>
  </Router>
)

export default App
