import StyledA_lnm from "../Btn_lrnmoreAll/styledA_lnm";
import StyledContainerAll from "../ContainerAll/styledContainerAll";
import Promo_order_content from "./promo_order_content";
import Promo_order_image from "./promo_order_image";
import StyledPromoH2 from "./styledPromoH2";
import StyledPromoH3 from "./styledPromoH3";
import StyledPromoP from "./styledPromoP";
import StyledPromo_order from "./styledPromo_order";
import Styledpromo_orderImg from "./styledpromo_orderImg";
import promo_orderImg from "./promo-order2.png"
import Promo_order_text from "./promo_order_text";

const Promo_order = () => {
    return (
        <StyledPromo_order>
            <StyledContainerAll>
                <Promo_order_content>
                    <Promo_order_text>
                        <StyledPromoH3>THE</StyledPromoH3>
                        <StyledPromoH2>COUNTY GENERAL</StyledPromoH2>
                        <StyledPromoP>Semper lacus cursus porta a primis feugiat ligula risus auctor rhoncus semper undo</StyledPromoP>
                        <StyledA_lnm href="shop">ORDER NOW</StyledA_lnm>
                    </Promo_order_text>
                    <Promo_order_image>
                        <Styledpromo_orderImg src={promo_orderImg} />
                    </Promo_order_image>
                </Promo_order_content>
            </StyledContainerAll>
        </StyledPromo_order>
    );
};

export default Promo_order