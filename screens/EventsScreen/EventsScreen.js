import React, { Component } from "react";
import { Page } from "../../components/Containers";
import EventCard from "../../components/Card/EventCard";
import ApiManager from "../../lib/ApiManager";
import {
  TitleText,
} from "../../components/Typography";

class JobShopScreen extends Component {
    static navigationOptions = {
        title: "Events",
    };

    constructor() {
        super();
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        ApiManager.events
           .getEvents()
           .then(events => {
             this.setState({events: events});
           });
    }

    render() {
        const { events } = this.state;

        return (
            <Page>
                <TitleText>Events</TitleText>
                {events.map(event => {
                    <EventCard
                        eventName={event.eventName}
                        organiser={event.organiser}
                        date={event.date}
                        location={event.location}
                        url={event.url}
                    />
                })}
            </Page>
        );
    }
}

export default JobShopScreen;