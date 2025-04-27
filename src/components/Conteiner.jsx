import AboutUs from "./AboutUs"
import RiverInfo from "./RiverInfo"
import StationInfo from "./StationInfo"

function Container({selectedValue}){

    return(
        <div className="container">
            <div className="pageTitle">
                <h1>Title</h1>
            </div>

            <div className="center">
                {selectedValue == "AboutUs" ? <AboutUs /> 
                : selectedValue == "RiverInfo" ? <RiverInfo />
                : selectedValue == "StationInfo" ? <StationInfo /> : `Wybrałeś: ${selectedValue}`}
            </div>

            <div className="footer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex.</p>
            </div>
        </div>
    )
}

export default Container