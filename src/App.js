// import {BrowserRouter as Router} from 'react-router-dom' 

// import Navbar from './components/Navbar/Navbar';
import './App.css';
import './Navbar.css';
import Users from './user';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import logo from './logo.png'

class App extends Component{
  constructor(props){
      super(props);
      this.state = {users_data: [], loading: true};
      this.showUsers = this.showUsers.bind(this);
  }
  showUsers() {
      document.getElementById("main").style.display = 'flex';
      const source = "https://reqres.in/api/users?page=1";
      fetch(source)
          .then((responce) => responce.json())
          .then((users) => {
              this.setState({users_data: users.data, loading: false});
          })
          .catch((error) => {
              console.error(error);
          });
  }
  render() {

      return (
        <>
            <nav>
                <div className='navbar'>
                    {/* <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt="logo" width={150}/>
                    </Link> */}
                    <h1 id='logo'> Let's Grow More </h1>
                    <button onClick={this.showUsers} className='nav-item nav-btn'> Get Users </button>
                    {/* <ul>
                        <li>
                            <h1 id='logo'>Let's Grow More</h1>
                        </li>
                        <li>
                            <button onClick={this.showUsers} className='nav-item nav-btn'> Get Users </button>
                        </li>
                    </ul> */}
                </div>
            </nav>
            <Users loading={this.state.loading} users={this.state.users_data} />
        </>
      );
  }

}

export default App
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar/>
//       </Router>
//     </div>
//   );
// }

// export default App;
