import {Navbar, NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import CartWidget from './CartWidget';
import '../components/scss/custom.scss';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <div
                className='mx-auto'
                style={{
                display: 'flex'
            }}>
                <NavbarBrand href="/">Habbi</NavbarBrand>
                {/*Change scss from block dropdown to a full width dropdown*/}
                <NavDropdown>
                    <NavLink href="/tetris/1">Tetris</NavLink>
                    <NavLink href="/roguelike/2">Roguelike</NavLink>
                    <NavLink href="/infinite-runner/3">Infinite Runner</NavLink>
                </NavDropdown>
            </div>
            <div className='mx-auto'>
                <CartWidget/>
            </div>
        </Navbar>
    );
}

export default NavBar;