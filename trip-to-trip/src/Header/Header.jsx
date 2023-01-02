import { Link } from 'react-router-dom';
import { auth } from '../Firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import logo from '../resources/Group_204.png';

const Header = (props) => {

    const navigate = useNavigate();
    const logout = async () => {
        await signOut(auth);
        navigate("/SignIn");
    }


    return (
        <div id='main-body'>
            <div id='logo-div'>
                <Link to="/Home"><img id='logo-pic' src={logo} alt="logo" /></Link>
            </div>
            <nav id='navlink'>
                <Link className='links' to="/Discover">Discover</Link>
                <Link className='links' to="/Community">Community</Link>
                <Link className='links' to="/SpecialDeal">Special Deal</Link>
                <Link className='links' to="/AboutUs">About Us</Link>
                {
                    props.name !== "" ? <Link className='links' onClick={logout}>Sign out</Link>
                        : <div id='navhide'>
                            <Link className='links' to="/SignIn">Sign in</Link>
                            <Link className='links link-reg' to="/Register">Register</Link>
                        </div>
                }
            </nav>
        </div>
    );
};

export default Header;