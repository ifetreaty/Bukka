function CartTab({ id, children, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div
      onClick={handleClick}
      className={activeTab === id ? "cart-tab-active" : ""}
    >
      {children}
    </div>
  );
}

export default CartTab;
