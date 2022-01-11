import { BrowserRouter as Router, Route } from 'react-router-dom';
import Base from './widget/Base/Base'
import './static/css/style.css';
import './static/css/antd.css';
import "flickity/css/flickity.css";


import Login from './auth/Login';
import Register from './auth/Register';


import PrivateRoute from './widget/PrivateRoute';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route path="/panel" component={Base} />
    </Router>
  );
}

export default App;
