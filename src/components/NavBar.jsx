import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div className="logo">
            <img src="" alt="Logo Image" />
            <h2>AppName</h2>
        </div>
        
        <div className="riversList">

            <ul>
                <h3>Lista rzek:</h3>
                <li><a href="">Rzeka1</a></li>
                <li><a href="">Rzeka2</a></li>
                <li><a href="">Rzeka3</a></li>
                <li><a href="">Rzeka4</a></li>
                <li><a href="">Rzeka5</a></li>

                <li><a href="">Stacje</a></li>
                <li><a href="">Prognoza stanu wody</a></li>
                <li><a href="">Prognoza pogody</a></li>
                <li><a href="">Informacje o nas</a></li>
            </ul>
        </div>
    </nav>
}

export default NavBar