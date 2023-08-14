import StyledContainer from "../containerPromo/styledContainerPromo";
import StyledPromoSection from "./StyledPromoSection";
import Header from "../header/header"
import PromoSectionContent from "../section_promo_content/Section_promo_content";


const PromoSection = () => {
    return (
        <StyledPromoSection>
            <StyledContainer>   
                <Header />
                <PromoSectionContent />
            </StyledContainer> 
        </StyledPromoSection>
    );
};

export default PromoSection