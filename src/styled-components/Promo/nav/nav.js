import StyledNav from "./styledNav"
import StyledLi from "./styledLi";
import StyledUl from "./styledUl";
import StyledA from "./styledA";

const Nav = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledA href="#">About</StyledA></StyledLi>
                <StyledLi><StyledA href="#">Our menu</StyledA></StyledLi>
                <StyledLi><StyledA href="#">Megamenu</StyledA></StyledLi>
                <StyledLi><StyledA href="shop">Shop</StyledA></StyledLi>
                <StyledLi><StyledA href="#">Blog</StyledA></StyledLi>
                <StyledLi><StyledA href="#">Contacts</StyledA></StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

export default Nav