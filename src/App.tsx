import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="brd">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;

/* https://www.youtube.com/watch?v=lATafp15HWA refference*/
