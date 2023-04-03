import "./App.css";

// Componentes //
import Info from "./Componentes/Info/Info"
import Header from "./Componentes/Header/Header"
import NavBar from "./Componentes/NavBar/NavBar";


//React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Inicio from "./Pages/Inicio/Inicio"
import Catalogo from "./Pages/Catalogo/Catalogo"
import Consultas from "./Pages/Consultas/Consultas"
import DetallesProducto from "./Pages/DetallesProducto/DetallesProducto"


const App = () => {
  return (
    <Router>
      <div className="App">
        <Info />
        <Header title="Arte con Resina" />
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />}  />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/consultas' element={<Consultas />} />
          <Route path= '/detalles-producto/:id' element = {<DetallesProducto/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
