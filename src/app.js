import React from "react";
import ProductList from "./components/products/index.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./app.css";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    // aca en realidad se deberia cambiar a un wrap capaz... probar, tambien darle display none al menu
    <div className="row d-flex flex-row">
      <Sidebar />
      <div className="col-10 col-sm-8 col-md-9 col-lg-9 col-xl-10 px-sm-10 px-0 bg-light">
        <nav
          className="navbar navbar-expand-lg shadow-sm"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container-md">
            <button className="btn btn-light">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="user-tab d-flex gap-2 text-secondary">
              <span>Leandro Pardo</span>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </div>
          </div>
        </nav>
        <ProductList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
