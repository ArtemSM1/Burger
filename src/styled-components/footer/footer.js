import StyledContainerAll from "../ContainerAll/styledContainerAll";
import Footer_content_logo from "./img/footer_content_logo";
import Footer_styledImg from "./img/footer_styledImg";
import Styledfooter from "./styledfooter";
import fotterimg from "./logo-01.png"
import fc from "./facebook.png"
import tw from "./twitter.png"
import be from "./behance.png"
import pint from "./pinterest.png"
import yt from "./youtube.png"
import Footer_content_icons from "./icons/footer_content_icons";
import StyledIcons from "./icons/styledIcons";
import Footer_content_nav from "./nav/footer_content_nav";
import FooterstyledUl from "./nav/footerstyledUl";
import FooterstyledA from "./nav/footerstyledA";
import Footer_content_copyright from "./footer_content_copyright";

const Footer = () => {
    return (
        <Styledfooter>
            <StyledContainerAll>
                <div>
                    <Footer_content_logo>
                        <Footer_styledImg src={fotterimg} />
                    </Footer_content_logo>
                    <Footer_content_icons>
                        <div>
                            <a href="#"><StyledIcons src={fc} /></a>
                        </div>
                        <div>
                            <a href="#"><StyledIcons src={tw} /></a>
                        </div>
                        <div>
                            <a href="#"><StyledIcons src={be} /></a>
                        </div>
                        <div>
                            <a href="#"><StyledIcons src={yt} /></a>
                        </div>
                        <div>
                            <a href="#"><StyledIcons src={pint} /></a>
                        </div>
                    </Footer_content_icons>
                    <Footer_content_nav>
                        <FooterstyledUl>
                            <li><FooterstyledA href="#">ABOUT</FooterstyledA></li>
                            <li><FooterstyledA href="#">| MENU</FooterstyledA></li>
                            <li><FooterstyledA href="#">| ORDER NOW</FooterstyledA></li>
                            <li><FooterstyledA href="#">| GALLERY</FooterstyledA></li>
                            <li><FooterstyledA href="#">| LOCATIONS</FooterstyledA></li>
                            <li><FooterstyledA href="#">| CONTACT</FooterstyledA></li>
                        </FooterstyledUl>
                    </Footer_content_nav>
                    <Footer_content_copyright>
                        <p>2021 © Copyright, Testo. All rights reserved.</p>
                    </Footer_content_copyright>
                </div>
            </StyledContainerAll>
        </Styledfooter>
    );
};

export default Footer