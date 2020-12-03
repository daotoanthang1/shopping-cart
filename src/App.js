import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MessageContainer from "./Containers/MessageContainer";
import CartContainer from "./Containers/CartContainer";
import ProductsContainer from "./Containers/ProductsContainer"

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <ProductsContainer />
          {/* Message */}
          <MessageContainer />
          {/* Cart */}
          <CartContainer />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>

  );
}

export default App;
