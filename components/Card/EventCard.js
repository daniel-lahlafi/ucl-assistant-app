import React from "react";
import PropTypes from "prop-types";
import { Feather } from "@expo/vector-icons";
import Card from ".";
import { BodyText } from "../Typography";
import { Linking } from 'react-native';


const EventCard = ({
  eventName,
  organiser,
  date,
  location,
  url,
}) => {
  return (
    <Card
      title={eventName}
    //   Have onpress leave the app and go to the Events page
      onPress={() => {Linking.openURL(url).catch(err => console.error('An error occurred', err));}}
    >
      <BodyText>
          <Feather name="person"/> {organiser}
      </BodyText>
      <BodyText>
          <Feather name="location-pin"/> {location}
      </BodyText>
      
      <BodyText>
          <Feather name="date-range"/> {date /* Date in strange format so keep string */}
      </BodyText>
    </Card>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string,
  organiser: PropTypes.string,  
  date: PropTypes.string, 
  location: PropTypes.string,
  url: PropTypes.string, 
};

EventCard.defaultProps = {
  eventName: "Error Defaults",
  organiser: "Error Defaults",  
  date: "Error Defaults", 
  location: "Error Defaults",
  url: "http://www.google.com", 
};

export default EventCard;
