import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Total from "../../components/Total/Total";

const Layout = () => {
    return <div className="container">
        <Header />

        <Products />

        <Total />
    </div>;
};

export default Layout;
