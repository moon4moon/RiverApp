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

            <div className="footerBar">
                <p>FOOTER</p>
            </div>
        </div>
    )
}

export default Container