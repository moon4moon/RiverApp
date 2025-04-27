
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
                    className="radioButton" />Strona główna

            <fieldset>
                <label>Rzeki:</label><br />

                <input 
                    type="radio" 
                    name="navBar" 
                    value="RiverInfo"
                    onChange={onChange}
                    className="radioButton" />Rzeka1
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="RiverInfo"
                    onChange={onChange} 
                    className="radioButton" />Rzeka2
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="RiverInfo"
                    onChange={onChange} 
                    className="radioButton" />Rzeka3
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="RiverInfo"
                    onChange={onChange} 
                    className="radioButton" />Rzeka4
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="RiverInfo"
                    onChange={onChange} 
                    className="radioButton" />Rzeka5
            </fieldset>

            <fieldset>
                <label>Inne:</label><br />

                <input 
                    type="radio" 
                    name="navBar" 
                    value="StationInfo"
                    onChange={onChange} 
                    className="radioButton" />Stacje
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="tak"
                    onChange={onChange} 
                    className="radioButton" />Prognoza stanu wody
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="Prognoza pogody"
                    onChange={onChange} 
                    className="radioButton" />Prognoza pogody
                <br />
                <input 
                    type="radio" 
                    name="navBar" 
                    value="AboutUs"
                    onChange={onChange} 
                    className="radioButton" />Informacje o nas
            </fieldset>
        </div>
    </nav>
}

export default NavBar