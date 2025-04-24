import AboutUs from "./AboutUs"
import RiverInfo from "./RiverInfo"

function Container(){
    return(
        <div className="container">
            <div className="pageTitle">
                <h1>Title</h1>
            </div>

            <div className="center">
                <RiverInfo></RiverInfo>
            </div>

            <div className="footer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex.</p>
            </div>
        </div>
    )
}

export default Container