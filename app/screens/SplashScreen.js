import React, { Component } from "react";
import { Alert, Image } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavigationActions } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { signIn } from "../actions/userActions";
import { TitleText, BodyText } from "../components/Typography";
import { PageNoScroll, Spacer } from "../components/Containers";
import CustomButton from "../components/Button";
import Colors from "../constants/Colors";
import Styles from "../styles/Containers";
import SplashStyle from "../styles/Splash";

class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ focused }) => (
      <Feather
        name="calendar"
        size={28}
        color={focused ? Colors.pageBackground : Colors.textColor}
      />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    isSigningIn: PropTypes.bool,
    error: PropTypes.string,
    token: PropTypes.string,
    signIn: PropTypes.func,
  };

  static defaultProps = {
    isSigningIn: false,
    error: "",
    token: "",
    signIn: () => {},
  };

  static mapStateToProps = state => ({
    isSigningIn: state.user.signIn.isSigningIn,
    error: state.user.signIn.error,
    token: state.user.token,
  });

  static mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(signIn()),
  });

  componentWillReceiveProps(nextProps) {
    if (this.props.isSigningIn === true && nextProps.isSigningIn === false) {
      // did we just sign in?
      if (nextProps.token !== null) {
        // yes, replace screen with home screen.
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Main" })],
        });
        this.props.navigation.dispatch(resetAction);
      } else if (nextProps.error.length < 1) {
        // cancelled
      } else {
        // error
        setTimeout(() => Alert.alert("Error Signing In", nextProps.error), 500);
      }
    }
  }

  render() {
    return (
      <LinearGradient
        colors={[Colors.accentColor, Colors.buttonBackground]}
        style={[Styles.page, SplashStyle.page]}
        start={[0, 1]}
        end={[1, 0]}
      >
        <TitleText style={SplashStyle.text}>UCL Assistant</TitleText>
        <BodyText style={SplashStyle.text}>
          One app to manage your life at UCL.
        </BodyText>
        <Image
          source={require("../assets/images/undraw_calendar.png")}
          resizeMethod="scale"
          style={Styles.image}
          resizeMode="contain"
        />
        <Spacer />
        <CustomButton
          onPress={() => this.props.signIn()}
          loading={this.props.isSigningIn}
          style={SplashStyle.button}
        >
          Sign In With UCL
        </CustomButton>
      </LinearGradient>
    );
  }
}

export default connect(
  SplashScreen.mapStateToProps,
  SplashScreen.mapDispatchToProps,
)(SplashScreen);
