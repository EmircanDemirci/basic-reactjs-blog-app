import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="nav">
            <h1>Venoox's Blog</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Add Blog</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;