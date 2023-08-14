import PromoSection from '../styled-components/Promo/section_promo/PromoSection';
import GlobalStyle from '../globalStyles';
import PromoSection2 from '../styled-components/Promo2/PromoSection2';
import OrderSection from '../styled-components/Order/OrderSection';
import MoreMenuSection from '../styled-components/MoreMenu/MoreMenuSection';
import Promo_order from '../styled-components/Promo-order/Promo_order';
import Events from '../styled-components/events/Events';
import About from '../styled-components/About/About';
import Locations from '../styled-components/Locations/Locations';
import Guarantee from '../styled-components/guarantee/guarantee';
import Footer from '../styled-components/footer/footer';

const Home = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <PromoSection />
            <PromoSection2 />
            <MoreMenuSection />
            <OrderSection />
            <Promo_order />
            <Events />
            <About />
            <Locations />
            <Guarantee />
            <Footer />
        </div>
    );
};

export default Home