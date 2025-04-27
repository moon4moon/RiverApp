import './App.css';
import { useState } from "react"
import RightCard from './components/RightCard';
import NavBar from './components/NavBar';
import Container from "./components/Conteiner";

function App() {
  const [selectedValue, setSelectedValue] = useState("Home");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  return (
    <div className="all">
      <NavBar onChange={handleChange}/>
      <div className="content">
        <Container selectedValue={selectedValue}/>
        <RightCard />
      </div>  
    </div>
  )
}

export default App
