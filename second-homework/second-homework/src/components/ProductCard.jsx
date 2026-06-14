import React from "react";

function ProductCard({
  product,
  setIsOpen,
  setSelectedProduct,
  favorites,
  setFavorites,
}) {
  const toggleFavorite = () => {
    if (favorites.includes(product.name)) {
      setFavorites(
        favorites.filter((id) => id !== product.name)
      );
    } else {
      setFavorites([
        ...favorites,
        product.name,
      ]);
    }
  };

  const isFavorite = favorites.includes(product.name);

  return (
    <div>
      <button
        className="favoriteBtn"
        onClick={toggleFavorite}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <img
        src={product.image}
        alt={product.name}
        width="150"
      />

      <h3>{product.name}</h3>

      <p>Ціна: {product.price} грн</p>
      <p>Артикул: {product.article}</p>
      <p>Колір: {product.color}</p>

      <button
        onClick={() => {
          setSelectedProduct(product);
          setIsOpen(true);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
