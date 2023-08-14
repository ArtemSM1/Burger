import BuySectionItem from "./buySectionItem";
import DivImgBuySection from "./divImgBuySection";
import StyledBuyContainer from "./styledBuyContainer";
import StyledBuySection from "./styledBuySection";
import StyledImgBuySection from "./styledImgBuySection";
import burger1 from "./burger1.jpg";
import burger2 from "./burger2.jpg";
import burger3 from "./burger3.jpg";
import burger4 from "./burger4.jpg";
import burger5 from "./burger5.jpg";
import burger6 from "./burger6.jpg";
import burger7 from "./burger7.jpg";
import burger8 from "./burger8.jpg";
import star from "./star.png";
import star_half from "./star_half.png";
import star_empty from "./star_empty.png";
import BuySectionContent from "./buySectionContent";
import RatingWrapper from "./ratingWrapper";
import RatingContentImg from "./ratingContentImg";
import BuySectionH2 from "./buySectionH2";
import BuySectionP from "./buySectionP";
import BuySectionPrice from "./buySectionPrice";
import BuySectionLink from "./buySectionLink";
import BuySectionLinkA from "./buySectionLinkA";

const BuySection = () => {
    return (
        <StyledBuySection>
            <StyledBuyContainer>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger1} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_half} />
                        </RatingWrapper>

                        <BuySectionH2>Crispy chicken</BuySectionH2>
                        <BuySectionP>Chicken breast, chilli sauce, tomatoes, pickles, coleslaw</BuySectionP>

                        <BuySectionPrice>
                            $8.50
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger2} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_empty} />
                        </RatingWrapper>

                        <BuySectionH2>ULTIMATE BACON</BuySectionH2>
                        <BuySectionP>House beef patty, cheddar cheese, bacon, onion, mustard</BuySectionP>

                        <BuySectionPrice>
                            $9.99
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger3} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                        </RatingWrapper>

                        <BuySectionH2>BLACK SHEEP</BuySectionH2>
                        <BuySectionP>American cheese, tomato relish, avocado, lettuce, red onion</BuySectionP>

                        <BuySectionPrice>
                            $9.75
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger4} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_half} />
                        </RatingWrapper>

                        <BuySectionH2>DOUBLE BURGER</BuySectionH2>
                        <BuySectionP>2 beef patties, cheddar cheese, mustard, pickles, tomatoes</BuySectionP>

                        <BuySectionPrice>
                            $10.35
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger5} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_half} />
                        </RatingWrapper>

                        <BuySectionH2>TURKEY BURGER</BuySectionH2>
                        <BuySectionP>Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles</BuySectionP>

                        <BuySectionPrice>
                            $8.95
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger6} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_empty} />
                        </RatingWrapper>

                        <BuySectionH2>SMOKEY HOUSE</BuySectionH2>
                        <BuySectionP>Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles</BuySectionP>

                        <BuySectionPrice>
                            $9.50
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger7} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                        </RatingWrapper>

                        <BuySectionH2>VEGAN BURGER</BuySectionH2>
                        <BuySectionP>Beef, cheddar cheese, ketchup, mustard, pickles, onion</BuySectionP>

                        <BuySectionPrice>
                            $7.95
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
                <BuySectionItem>
                    <DivImgBuySection>
                        <StyledImgBuySection src={burger8} />
                    </DivImgBuySection>
                    <BuySectionContent>

                        <RatingWrapper>
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star} />
                            <RatingContentImg src={star_empty} />
                        </RatingWrapper>

                        <BuySectionH2>VEGAN BURGER</BuySectionH2>
                        <BuySectionP>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado</BuySectionP>

                        <BuySectionPrice>
                            $8.95
                        </BuySectionPrice>
                        <BuySectionLink>
                            <BuySectionLinkA href="#">Add to cart</BuySectionLinkA>
                        </BuySectionLink>

                    </BuySectionContent>
                </BuySectionItem>
            </StyledBuyContainer>
        </StyledBuySection>
    );
};

export default BuySection