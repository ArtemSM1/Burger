import StyledContainerAll from "../ContainerAll/styledContainerAll";
import LocationsDivImg from "./img/locationsDivImg";
import LocationsStyledImg from "./img/locationsStyledImg";
import LocationSection from "./locationSection";
import LocationsStyledH1 from "./locationsStyledH1";
import LocationsStyledP from "./locationsStyledP";
import Locations_content from "./locations_content";
import Locations_items from "./locations_items";
import Locations_text from "./locations_text";
import Top_locations_item from "./top_locations_item";
import Locations_item from "./locations_item";
import location1 from "./location-1.jpg";
import location2 from "./location-2.jpg";
import location3 from "./location-3.jpg";
import Locations_item_content from "./locations_item_content";
import Locations_item_h2 from "./locations_item_h2";
import Locations_phone from "./locations_phone";
import Locations_phoneP from "./locations_phoneP";
import Adress from "./adress";
import AdressP from "./adressP";

const About = () => {
    return (
        <LocationSection>
            <StyledContainerAll>
                <Locations_content>
                    <Locations_text>
                        <LocationsStyledH1>OUR LOCATIONS</LocationsStyledH1>
                        <LocationsStyledP>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</LocationsStyledP>
                    </Locations_text>
                    <Locations_items>
                        <Locations_item>
                            <Top_locations_item>
                                <LocationsDivImg>
                                    <LocationsStyledImg src={location1} />
                                </LocationsDivImg>
                                <Locations_item_content>
                                    <div>
                                        <Locations_item_h2>DOWNTOWN</Locations_item_h2>
                                    </div>
                                    <Locations_phone>
                                        <Locations_phoneP>PHONE: 789-654-3210</Locations_phoneP>
                                    </Locations_phone>
                                    <Adress>
                                        <AdressP>
                                            8721 M Central Avenue,
                                            Los Angeles, CA 90036
                                            Daily 11AM - 10PM
                                        </AdressP>
                                    </Adress>
                                </Locations_item_content>
                            </Top_locations_item>
                        </Locations_item>
                        <Locations_item>
                            <Top_locations_item>
                                <LocationsDivImg>
                                    <LocationsStyledImg src={location2} />
                                </LocationsDivImg>
                                <Locations_item_content>
                                    <div>
                                        <Locations_item_h2>CENTRAL CITY</Locations_item_h2>
                                    </div>
                                    <Locations_phone>
                                        <Locations_phoneP>PHONE: 789-654-3210</Locations_phoneP>
                                    </Locations_phone>
                                    <Adress>
                                        <AdressP>
                                            8721 M Central Avenue,
                                            Los Angeles, CA 90036
                                            Daily 11AM - 10PM
                                        </AdressP>
                                    </Adress>
                                </Locations_item_content>
                            </Top_locations_item>
                        </Locations_item>
                        <Locations_item>
                            <Top_locations_item>
                                <LocationsDivImg>
                                    <LocationsStyledImg src={location3} />
                                </LocationsDivImg>
                                <Locations_item_content>
                                    <div>
                                        <Locations_item_h2>HOLLYWOOD</Locations_item_h2>
                                    </div>
                                    <Locations_phone>
                                        <Locations_phoneP>PHONE: 789-654-3210</Locations_phoneP>
                                    </Locations_phone>
                                    <Adress>
                                        <AdressP>
                                            8721 M Central Avenue,
                                            Los Angeles, CA 90036
                                            Daily 11AM - 10PM
                                        </AdressP>
                                    </Adress>
                                </Locations_item_content>
                            </Top_locations_item>
                        </Locations_item>
                    </Locations_items>
                </Locations_content>
            </StyledContainerAll>
        </LocationSection>
    );
};

export default About