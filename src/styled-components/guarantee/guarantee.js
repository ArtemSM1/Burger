import StyledContainerAll from "../ContainerAll/styledContainerAll";
import Guarantee_content from "./guarantee_content";
import Guarantee_content_btn from "./guarantee_content_btn";
import Guarantee_content_desc from "./guarantee_content_desc";
import Guarantee_content_h1 from "./guarantee_content_h1";
import Guarantee_content_h2 from "./guarantee_content_h2";
import StyledGuarantee from "./styledGuarantee";

const Guarantee = () => {
    return (
        <StyledGuarantee>
            <StyledContainerAll>
                <Guarantee_content>
                    <div>
                        <Guarantee_content_h2>WE GUARANTEE</Guarantee_content_h2>
                        <Guarantee_content_h1>30 MINUTES DELIVERY!</Guarantee_content_h1>
                    </div>
                    <Guarantee_content_desc>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna</p>
                    </Guarantee_content_desc>
                    <div>
                        <Guarantee_content_btn href="#">CALL: 789-654-3210</Guarantee_content_btn>
                    </div>
                </Guarantee_content>
            </StyledContainerAll>
        </StyledGuarantee>
    );
};

export default Guarantee