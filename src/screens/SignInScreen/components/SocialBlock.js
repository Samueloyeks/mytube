import React from 'react';
import T from 'prop-types';
import { Image, TouchableOpacity, View, StyleSheet,Text } from 'react-native';
import googleImg from '../../../../assets/imgs/google.png';


const styles = StyleSheet.create({
  socialBlock: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  googleButton:{
    width:300,
    backgroundColor:'#FFF',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    flexDirection:'row'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:20
  },
  img:{
    height:40,
    width:40,
    position:'absolute',
    left:10
  }
});

const SocialBlock = ({ children, handleGoogleSubmit}) => (
  <View style={styles.socialBlock}>
    {children}

    <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSubmit}>
    <Image style={styles.img} source={googleImg} />
        <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>

  </View>
);

SocialBlock.propTypes = {
  children: T.node,
  handleGoogleSubmit: T.func.isRequired,
};

export default SocialBlock;
