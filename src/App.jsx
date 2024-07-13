import { useState } from "react";
import { NavBar } from "./components/main/NavBar.jsx";
import { ProductContainer } from "./components/main/ProductContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <NavBar />
      <section className="px-10 py-4 mt-5">
        <ProductContainer />
      </section>
    </main>
  );
}

export default App;
