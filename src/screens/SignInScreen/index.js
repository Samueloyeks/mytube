import React, { Component } from 'react';
import T from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'react-native-firebase';
import { GoogleSignin } from '@react-native-community/google-signin';
import Loader from 'react-native-overlay-loader';
import showToast from '../../utils/showToast';
import keys from '../../models/Keys';
import styles from './styles';
import SocialBlock from '../SignInScreen/components/SocialBlock';


export const GOOGLE_CONFIGURATION = {
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess: true,
  forceConsentPrompt: true,
  accountName: '',
  webClientId: keys.GOOGLE_WEB_CLIENT_ID,
  scopes:['email','profile']
};

const {  GoogleAuthProvider } = firebase.auth;
const firebaseAuth = firebase.auth();


export default class SignInScreen extends Component {
  static propTypes = {
    navigation: T.shape({
      navigate: T.func.isRequired,
    }).isRequired,
  };

  state = {
    loading: false,
  };


  googleLogin = async () => {
    try {
      await GoogleSignin.configure(GOOGLE_CONFIGURATION);
      const data = await GoogleSignin.signIn();
      // console.log(data)
      const credential = GoogleAuthProvider.credential(data.idToken, data.accessToken);
      const authData = await firebaseAuth.signInWithCredential(credential);
      const user = await firebase
        .database()
        .ref(`/userProfile/${authData.user.uid}`)
        .once('value');
      if (user) {
        return user.val();
      }
      showToast('no user');
    } catch (err) {
      console.log(err)
      throw err;
    }
  };




  _handleGoogleSubmit = async () => {
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      const user = await this.googleLogin();
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      navigation.navigate('Main');
    } catch (err) {
      this.setState({ loading: false });
      showToast(err.message);
    }
  };


 

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.screen}>
        {loading ? <Loader visible /> : null}
        <View style={styles.contentBackground}>
          <View style={styles.content}>


            <Text style={styles.introText}>Welcome</Text>
            <Text style={styles.introText}>Please sign in to get started</Text>


            <SocialBlock
                  handleGoogleSubmit={this._handleGoogleSubmit}
                />


          </View>
        </View>
      </View>
    );
  }
}
