import Promo3 from "./Promo3";
import StyledContainerAll from "../../ContainerAll/styledContainerAll"
import Header from "../../Promo/header/header"
import Promo3_content from "./promo3_content";
import Ulpromo3 from "./ulpromo3";
import Promo3styledA from "./promo3styledA";
import Promo3styledH1 from "./promo3styledH1";

const PromoCart = () => {
    return (
        <Promo3>
            <StyledContainerAll>
                <Header />
                <Promo3_content>
                    <Ulpromo3>
                        <li><Promo3styledA src="#">HOME</Promo3styledA></li>
                        <li><span>/</span></li>
                        <li>CART</li>
                    </Ulpromo3>
                    <Promo3styledH1>CART</Promo3styledH1>
                </Promo3_content>
            </StyledContainerAll>
        </Promo3>
    );
};

export default PromoCart