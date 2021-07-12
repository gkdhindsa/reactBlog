import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h2 class="brand">
                Nem
            </h2>
            <div className="list">
                    <Link to="/">Home</Link>
                    <Link to="/create">  Create</Link>
            </div>

        </nav>
        
    );
}
 
export default Navbar;