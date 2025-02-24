import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Total from "../../components/Total/Total";
import CardList from "../../components/CardList/CardList";
import { useSelector } from "react-redux";

const Layout = () => {
    const show = useSelector(state => state.card.showCards)

    return <div className="container">
        <Header />
        <Products />
        {
            show && <CardList />
        }
        <Total />
    </div>;
};

export default Layout;
