import logo from './logo.svg';
import Nav from './Navigation/Nav.js'
import Home from './Example/Home.js';
import MyExam from './Example/MyExam.js'
import ListTodo from './Todo/ListTodo.js';
import ListUser from './Users/ListUsers.js';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyExam />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>
          </Switch>
        </Router>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );
}

export default App;
