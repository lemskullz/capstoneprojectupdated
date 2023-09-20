import { Link } from "react-router-dom";

export default function NavBar({ token }) {
    return (
        <nav>
            <ul>
                <li ><Link to="/products">products</Link></li>
                <li ><Link to="/cart">cart</Link></li>
                <li ><Link to="/login">login</Link></li>
                <li ><Link to="/register">register</Link></li>
                <li><button>Logout</button></li>
            </ul> 
        </nav>

    )
}