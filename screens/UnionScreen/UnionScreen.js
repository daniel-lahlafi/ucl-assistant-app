/* eslint-disable react/no-unused-state */
import React, { Component, Fragment } from "react";
import {
  Alert,
  Platform,
  View,
  Clipboard,
  StyleSheet,
  Linking,
  Picker,
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import PropTypes from "prop-types";
import { Constants, IntentLauncherAndroid } from "expo";
import { connect } from "react-redux";
import {
  TitleText,
  BodyText,
  SubtitleText,
  ButtonText,
  Link,
} from "../../components/Typography";
import { Page, Horizontal, PaddedIcon } from "../../components/Containers";
import { signOut } from "../../actions/userActions";
import Button, { SmallButton } from "../../components/Button";
import Colors from "../../constants/Colors";
import TextInput from "../../components/Input/TextInput";
import common from "../../styles/common";

const { version } = require("../../package.json");

const styles = StyleSheet.create({
    section: {
        marginBottom: 15,
        marginTop: 15,
    },
})



class UnionScreen extends Component {
    jobShopButtonClick = (id) => {
        this.props.navigation.navigate("JobShop");
    }

    eventsButtonClick = (id) => {
        this.props.navigation.navigate("Events")
    }

    render() {
        return (
            <Page mainTabPage>
                <TitleText>UCL Student Union</TitleText>
                <View style={styles.section}>
                    <SubtitleText>
                        Explore the Job Shop
                    </SubtitleText>
                    <Button onPress={this.jobShopButtonClick}>
                        <Horizontal>
                            <PaddedIcon
                                name="briefcase"
                                size={24}
                                color={Colors.pageBackground}
                            />
                            <ButtonText>Job Shop</ButtonText>
                        </Horizontal>
                    </Button>
                </View>
                <View style={styles.section}>
                    <SubtitleText>
                        Events at UCL
                    </SubtitleText>
                    <Button onPress={this.eventsButtonClick} name="Events">
                        <Horizontal>
                            <PaddedIcon
                                name="music"
                                size={24}
                                color={Colors.pageBackground}
                            />
                            <ButtonText>Events</ButtonText>
                        </Horizontal>
                    </Button>
                </View>
            </Page>
        )
    }
}

export default connect(
    UnionScreen.mapStateToProps,
  )(UnionScreen);