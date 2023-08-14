import StyledContainerAll from "../ContainerAll/styledContainerAll";
import About_content from "./about_content";
import About_content_img from "./about_content_img";
import About_content_styledImg from "./about_content_styledImg";
import StyledAbout from "./styledAbout";
import aboutimg from "./about.png";
import About_content_text from "./about_content_text";
import About_content_title from "./about_content_title";
import About_content_desc from "./about_content_desc";
import About_content_ul from "./about_content_ul";
import About_content_styledLi from "./about_content_styledLi";

const About = () => {
    return (
        <StyledAbout>
            <StyledContainerAll>
                <About_content>
                    <About_content_img>
                        <About_content_styledImg src={aboutimg} />
                    </About_content_img>
                    <About_content_text>
                        <About_content_title>
                            <h2>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h2>
                        </About_content_title>
                        <About_content_desc>
                            <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
                        </About_content_desc>
                        <About_content_ul>
                            <ul>
                                <About_content_styledLi><span>Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien</span></About_content_styledLi>
                                <About_content_styledLi><span>Quaerat sodales sapien euismod purus blandit</span></About_content_styledLi>
                                <About_content_styledLi><span>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus mauris</span></About_content_styledLi>
                            </ul>
                        </About_content_ul>
                    </About_content_text>
                </About_content>
            </StyledContainerAll>
        </StyledAbout>
    );
};

export default About