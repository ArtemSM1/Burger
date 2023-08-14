import StyledH2 from "./styledH2"
import StyledH3 from "./styledH3";
import Styledsection_promo_content from "./Styledsection_promo_content";
import StyledSpan from "./styledSpan";

const PromoSectionContent = () => {
    return (
        <Styledsection_promo_content>
            <StyledH2>CRISPY CHICKEN</StyledH2>
            <StyledH3>ONLY <StyledSpan>$7.65</StyledSpan></StyledH3>
        </Styledsection_promo_content>
    );
};

export default PromoSectionContent