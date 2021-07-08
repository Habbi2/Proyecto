import { Navbar, NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import CartWidget from './CartWidget';
import '../components/custom.scss';


const NavBar = () => {
    return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <div className='mx-auto' style={{display:'flex'}}>
            <NavbarBrand href="/">Habbi Games</NavbarBrand>
            <NavDropdown>
                <NavLink href="/tetris">Tetris</NavLink>
                <NavLink href="/roguelike">Roguelike</NavLink>
                <NavLink href="/infinite-runner">Infinite Runner</NavLink>
            </NavDropdown>
        </div>
        <div className='mx-auto'>
            <CartWidget/>
        </div>
    </Navbar>
    );
}

export default NavBar;