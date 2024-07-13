import { NavBar } from "./components/main/NavBar.jsx";
import { ProductContainer } from "./components/main/ProductContainer.jsx";
import { CartCard } from "./components/cards/CartCard.jsx";
import { useRef } from "react";

function App() {
  const cartRef = useRef(null);
  return (
    <main className="mb-10">
      <NavBar cartRef={cartRef} />
      <section className="relative">
        <CartCard cartRef={cartRef} />
      </section>
      <section className="mt-5 px-10 py-4">
        <ProductContainer />
      </section>
    </main>
  );
}

export default App;
