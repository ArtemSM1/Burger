import BuySection from "../BuySection/BuySection";
import PromoShop from "./promoShop";
import Footer from "../../footer/footer"
import Items from "../../Items";
import React from 'react';


class Shop extends React.Component {

    render() {
        return (
            <div className="App">
                <PromoShop />
                <BuySection />
                <Footer />
            </div>
        );
    }

};

export default Shop