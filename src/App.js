import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsListado from './posts/PostsListado.jsx';
import PostsVer from './posts/PostsVer.jsx';
import Pagina1 from './Pagina1.jsx';
import Pagina2 from './Pagina2.jsx';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Pagina1} />
        <Route exact path="/pagina2" component={Pagina2} />
        <Route exact path="/posts" component={PostsListado} />
        <Route exact path="/posts/:id" component={PostsVer} />
      </Router>
    </div>
  );
}

export default App;
