import "./App.scss";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });



  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const favoritesCount = favorites.length;
  const cartCount = cart.length;

  return (
    <div className="body">
      <header className="header">
        <div className="header-text">
          <p>Phones</p>
          <p>Laptops</p>
          <p>Monitors</p>
          <p>Speakers</p>
          <p>Tablets</p>

          <div className="iconWrapper">
            <img src="/images/obrane.svg" alt="favorite" />
            <span className="count">{favoritesCount}</span>
          </div>

          <div className="iconWrapper">
            <img src="/images/coshik.svg" alt="cart" />
            <span className="count">{cartCount}</span>
          </div>
        </div>
      </header>

      <h1>Каталог товарів</h1>

      <div className="mainContent">
        <div className="mainList">
          {products.slice(0, 5).map((product) => (
            <div className="prodCard" key={product.article}>
              <ProductCard
                product={product}
                setIsOpen={setIsOpen}
                setSelectedProduct={setSelectedProduct}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </div>
          ))}
        </div>

        <div className="mainList">
          {products.slice(5, 10).map((product) => (
            <div className="prodCard" key={product.article}>
              <ProductCard
                product={product}
                setIsOpen={setIsOpen}
                setSelectedProduct={setSelectedProduct}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </div>
          ))}
        </div>



        {/* <button onClick={() => setIsOpen(true)}>Открыть модалку</button> */}
        {isOpen && (
          <ModalWindow
            product={selectedProduct}
            cart={cart}
            setCart={setCart}
            onClose={() => setIsOpen(false)}
          />
        )}




      </div>




    </div >
  );
}

export default App;