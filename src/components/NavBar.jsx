import {Navbar, NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import '../components/scss/custom.scss';

const NavBar = () => {
    const categories = ["Adventure", "Puzzle"]
    const style = {
        display: 'flex'
    }
    return (
        <Navbar className="col-12" bg="dark" variant='dark' expand="lg">
            <div id='col-3-n' className='col-4' style={style}>
                <NavbarBrand href="/">Habbi Games</NavbarBrand>
                <NavbarBrand id='col-3-n' href="/">Store</NavbarBrand>
                {/*Change scss from block dropdown to a full width dropdown*/}
                <NavDropdown style={{
                    marginLeft: '7%'
                }}>
                    {categories.map(c => (
                        <NavLink as={Link} to={`/category/${c}`}>{c}</NavLink>
                    ))}
                </NavDropdown>
            </div>
            <div
                className='col-6'
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <CartWidget/>
            </div>
        </Navbar>
    );
}

export default NavBar;