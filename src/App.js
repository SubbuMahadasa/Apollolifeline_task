import logo from './logo.svg';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';
import DocInfo from './Components/Doctors/DocInfo';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Layout />
        </div>
        <Switch>
          <Route exact path="/:doc_name" component={DocInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
