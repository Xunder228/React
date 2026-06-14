function ModalWindow({ product, cart, setCart, onClose }) {

  const addToCart = () => {
    setCart([
      ...cart,
      product.name
    ]);

    onClose();
  };

  return (
    <div className="modalOverlay">
      <div className="modalWindow">
        <h3>Подтверждение</h3>

        <p>
          Дійсно хочете додати товар
          <b> {product?.name}</b> у кошик?
        </p>

        <button onClick={addToCart}>Так</button>
        <button onClick={onClose}>Ні</button>
      </div>
    </div>
  );
}

export default ModalWindow;