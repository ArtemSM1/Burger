import StyledContainerAll from "../ContainerAll/styledContainerAll";
import EventsH1 from "./eventsH1";
import EventsP from "./eventsP";
import Events_content from "./events_content";
import Events_item from "./events_item";
import Events_items from "./events_items";
import Events_title from "./events_title";
import Events_div_img from "./img/events_div_img";
import StyledEventsIMG from "./img/styledEventsIMG";
import StyledEvents from "./styledEvents";
import Top_events_item from "./top_events_item";
import events1 from "./events1.jpg"
import events2 from "./events2.jpg"
import events3 from "./events3.jpg"
import kalend from "./kalendar.png"
import MetaEvents from "./meta/metaEvents";
import MetaEventsA from "./meta/metaEventsA";
import MetaEventsImg from "./meta/metaEventsImg";
import Events_item_content from "./events_item_content";
import Events_item_link from "./events_item_link";
import Events_item_linkA from "./events_item_linkA";
import Events_item_contentP from "./events_item_contentP";

const Events = () => {
    return (
        <StyledEvents>
            <StyledContainerAll>
                <Events_content>
                    <Events_title>
                        <EventsH1>EVENTS & CATERING</EventsH1>
                        <EventsP>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</EventsP>
                    </Events_title>
                    <Events_items>
                        <Events_item>
                            <Top_events_item>
                                <Events_div_img>
                                    <StyledEventsIMG src={events1} />
                                </Events_div_img>
                                <MetaEvents>
                                    <MetaEventsA href="#"><MetaEventsImg src={kalend} />MARCH 16, 2021</MetaEventsA>
                                </MetaEvents>
                            </Top_events_item>
                            <Events_item_content>
                                <Events_item_link>
                                    <Events_item_linkA href="#">QUAERAT NEQUE PURUS IPSUM NEQUE DOLOR</Events_item_linkA>
                                </Events_item_link>
                                <Events_item_contentP>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo</Events_item_contentP>
                            </Events_item_content>
                        </Events_item>
                        <Events_item>
                            <Top_events_item>
                                <Events_div_img>
                                    <StyledEventsIMG src={events2} />
                                </Events_div_img>
                                <MetaEvents>
                                    <MetaEventsA href="#"><MetaEventsImg src={kalend} />MARCH 16, 2021</MetaEventsA>
                                </MetaEvents>
                            </Top_events_item>
                            <Events_item_content>
                                <Events_item_link>
                                    <Events_item_linkA href="#">QUAERAT NEQUE PURUS IPSUM NEQUE DOLOR</Events_item_linkA>
                                </Events_item_link>
                                <Events_item_contentP>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo</Events_item_contentP>
                            </Events_item_content>
                        </Events_item>
                        <Events_item>
                            <Top_events_item>
                                <Events_div_img>
                                    <StyledEventsIMG src={events3} />
                                </Events_div_img>
                                <MetaEvents>
                                    <MetaEventsA href="#"><MetaEventsImg src={kalend} />MARCH 16, 2021</MetaEventsA>
                                </MetaEvents>
                            </Top_events_item>
                            <Events_item_content>
                                <Events_item_link>
                                    <Events_item_linkA href="#">QUAERAT NEQUE PURUS IPSUM NEQUE DOLOR</Events_item_linkA>
                                </Events_item_link>
                                <Events_item_contentP>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo</Events_item_contentP>
                            </Events_item_content>
                        </Events_item>
                    </Events_items>
                </Events_content>
            </StyledContainerAll>
        </StyledEvents>
    );
};

export default Events