import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient p-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce Logo</a>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link px-3" href="#">Categoria 1</a>
                        <a className="nav-link px-3" href="#">Categoria 2</a>
                        <a className="nav-link px-3" href="#">Categoria 3</a>
                        <a className="nav-link px-3" href="#">Categoria 4</a>
                        <a className="nav-link px-3" href="#">Categoria 5</a>
                    </div>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;