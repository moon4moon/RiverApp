import './App.css';
import RightCard from './components/RightCard';
import NavBar from './components/NavBar';
import Container from "./components/Conteiner";

function App() {

  return (
    <div className="all">
      <NavBar />
      <div className="content">
        <Container />
        <RightCard />
      </div>  
    </div>
  )
}

export default App
