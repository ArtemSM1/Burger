import StyledContainerAll from "../ContainerAll/styledContainerAll";
import Promo_box1 from "./Promo_box1/Promo_box1";
import Promo_box2 from "./Promo_box2/Promo_box2";
import StyledA_lnm from "../Btn_lrnmoreAll/styledA_lnm";
import StyledH2_cf from "./Promo_box1/styledH2_cf";
import StyledH2_gyf from "./Promo_box1/styledH2_gyf";
import PromoBoxContent from "./Promo_box_content";
import PromoBoxWrapper from "./Promo_box_wrapper";
import StyledPromoSection2 from "./styledPromoSection2";
import StyledPromoSection2Content from "./styledPromoSection2Content";

const PromoSection2 = () => {
    return (
        <StyledPromoSection2>
            <StyledContainerAll>   
                <StyledPromoSection2Content>
                    <Promo_box1>
                        <PromoBoxWrapper>
                            <PromoBoxContent>
                                <StyledH2_gyf>GET YOUR FREE</StyledH2_gyf>
                                <StyledH2_cf>CHEESE FRIES</StyledH2_cf>
                                <StyledA_lnm href="shop">Learn more</StyledA_lnm>
                            </PromoBoxContent>
                        </PromoBoxWrapper>
                    </Promo_box1>
                    <Promo_box2>
                        <PromoBoxWrapper>
                            <PromoBoxContent>
                                <StyledH2_gyf>CRISPY CHICKEN</StyledH2_gyf>
                                <StyledH2_cf>BURGER IS BACK!</StyledH2_cf>
                                <StyledA_lnm href="shop">Learn more</StyledA_lnm>
                            </PromoBoxContent>
                        </PromoBoxWrapper>
                    </Promo_box2>
                </StyledPromoSection2Content>
            </StyledContainerAll> 
        </StyledPromoSection2>
    );
};

export default PromoSection2