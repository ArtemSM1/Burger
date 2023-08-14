import StyledHeader from "./styledHeader";
import StyledLogo from "./styledLogo";
import StyledImg from "./styledImg";
import logo from "./logo.png"
import Nav from "../nav/nav";
import Li__tel from "../li__tel/li__tel";
import cart from "./cart.png"



const Header = (props) => {
    return (
        <StyledHeader>
            <StyledLogo>
                <a href="/"><StyledImg src={logo} alt="#" /></a>
            </StyledLogo>
            <Nav />
            <Li__tel />
            <div>
                <a href="cart"><img src={cart} /></a>
            </div>
        </StyledHeader> 
    );
};

export default Header