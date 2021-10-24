import './App.css';
import Store from './store/Store';
import Blog from './components/Blog';
import Quiz from './components/Quiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Store>
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
    </Store>
  );
}

export default App;
