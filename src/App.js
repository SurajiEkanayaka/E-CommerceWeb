
import './App.css';
import NavbarPage from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPage />
        {/* <Switch>
        <Route path="/" exact component={Header} />
        </Switch> */}       
      </div>
    </Router>
  );
}

export default App;
