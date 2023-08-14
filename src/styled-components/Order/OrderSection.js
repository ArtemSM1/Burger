import StyledA_lnm from "../Btn_lrnmoreAll/styledA_lnm";
import OrderBox from "./orderbox/orderbox";
import OrderBox_content from "./orderbox_content";
import OrderBox_wrapper from "./orderbox_wrapper";
import StyledH3_order from "./styledH3_order";
import StyledP_order from "./styledP_order";
import StyledContainerOrder from "./styledContainerOrder";
import StyledOrderSection from "./styledOrderSection";
import StyledOrderSectionContent from "./styledOrderSectionContent";
import OrderBox2 from "./orderbox2/orderbox2";
import OrderBox3 from "./orderbox3/orderbox2";

const OrderSection = () => {
    return (
        <StyledOrderSection>
            <StyledContainerOrder>
                <StyledOrderSectionContent>
                    <OrderBox>
                        <OrderBox_wrapper>
                            <OrderBox_content>
                                <StyledH3_order>CAREERS</StyledH3_order>
                                <StyledP_order>Want to join our team?</StyledP_order>
                                <StyledA_lnm href="#">Learn more</StyledA_lnm>
                            </OrderBox_content>
                        </OrderBox_wrapper>
                    </OrderBox>
                    <OrderBox2>
                        <OrderBox_wrapper>
                            <OrderBox_content>
                                <StyledH3_order>ORDER NOW</StyledH3_order>
                                <StyledP_order>Enjoy Testo Burgers at home</StyledP_order>
                                <StyledA_lnm href="#">Learn more</StyledA_lnm>
                            </OrderBox_content>
                        </OrderBox_wrapper>
                    </OrderBox2>
                    <OrderBox3>
                        <OrderBox_wrapper>
                            <OrderBox_content>
                                <StyledH3_order>GIFT CARDS</StyledH3_order>
                                <StyledP_order>Give the gift of Yummy!</StyledP_order>
                                <StyledA_lnm href="#">Learn more</StyledA_lnm>
                            </OrderBox_content>
                        </OrderBox_wrapper>
                    </OrderBox3>
                </StyledOrderSectionContent>
            </StyledContainerOrder>
        </StyledOrderSection>
    );
};

export default OrderSection