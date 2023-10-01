import './App.css';
import BlogDetail from './BlogDetail';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import NotFound from './NotFound';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Router>
          <Routes>
            <Route exact path='/' element= {<Home></Home>}/>
            <Route path='/create' element={<Create></Create>}  />
            <Route path='/blog/:id' element={<BlogDetail></BlogDetail>} />
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
