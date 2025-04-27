
function NavBar({onChange}) {

    return <nav className="navbar">
        <div className="logo">
            <img src="" alt="Logo Image" />
            <h2>AppName</h2>
        </div>
        
        <div className="riversList">
            
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Home"
                    onChange={onChange}
                    id="" />Strona główna

            <fieldset>
                <label>Rzeki:</label><br />

                <input 
                    type="radio" 
                    name="navBar" 
                    value="Rzeka1"
                    onChange={onChange}
                    id="" />Rzeka1
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Rzeka2"
                    onChange={onChange} 
                    id="" />Rzeka2
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Rzeka3"
                    onChange={onChange} 
                    id="" />Rzeka3
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Rzeka4"
                    onChange={onChange} 
                    id="" />Rzeka4
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Rzeka5"
                    onChange={onChange} 
                    id="" />Rzeka5
            </fieldset>

            <fieldset>
                <label>Inne:</label><br />

                <input 
                    type="radio" 
                    name="navBar" 
                    value="StationInfo"
                    onChange={onChange} 
                    id="" />Stacje
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="tak"
                    onChange={onChange} 
                    id="" />Prognoza stanu wody
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Prognoza pogody"
                    onChange={onChange} 
                    id="" />Prognoza pogody
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="AboutUs"
                    onChange={onChange} 
                    id="" />Informacje o nas
            </fieldset>
        </div>
    </nav>
}

export default NavBar