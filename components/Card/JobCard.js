import React from "react";
import PropTypes from "prop-types";
import { Feather } from "@expo/vector-icons";
import Card from ".";
import { BodyText } from "../Typography";
import { Linking } from 'react-native';


const JobCard = ({
  jobTitle,
  employer,
  wage,
  url,
}) => {
  return (
    <Card
      title={jobTitle}
    //   Have onpress leave the app and go to the job page
      onPress={() => {Linking.openURL(url).catch(err => console.error('An error occurred', err));}}
    >
      <BodyText>{employer}</BodyText>
      <BodyText>
          <Feather name="dollar-sign"/> {wage}
      </BodyText>
    </Card>
  );
};

JobCard.propTypes = {
  jobTitle: PropTypes.string,
  employer: PropTypes.string,  
  wage: PropTypes.string,
  url: PropTypes.string, 
};

JobCard.defaultProps = {
    jobTitle: "Error Defaults",
    employer: "Error Defaults",  
    wage: "Error Defaults",
    url: "http://www.google.com", 
};

export default JobCard;
