import { useState } from "react";
import { NavBar } from "./components/main/NavBar.jsx";
import { ProductContainer } from "./components/main/ProductContainer.jsx";
import { CartCard } from "./components/cards/CartCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="mb-10">
      <NavBar />
      <section className="relative px-10 py-4 mt-5">
        <CartCard />
        <ProductContainer />
      </section>
    </main>
  );
}

export default App;
