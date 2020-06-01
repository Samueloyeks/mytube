import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signUpBlock: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  forgotButton: {
    alignSelf: 'flex-end',
  },
  regularText: {
    textAlignVertical: 'center',
  },
  redText: {
    color: 'red',
  },
  flexBlock: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentBackground: {
    backgroundColor: '#4A087D',
    flex: 1,
  },
  separatorBlock: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  separator: {
    borderBottomColor: '#000000',
    borderBottomWidth: 0.4,
    width: '20%',
    margin: 20,
  },
  content: {
    backgroundColor: '#fb8817',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  introText:{
    fontSize:25,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: '#4A087D',
    borderRadius: 35,
    // width: '100%',
    height: 57,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#FFF',
  },
  input: {
    width: 300,
    margin: 30,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.4,
  },
  scrollContentStyle: {
    paddingVertical: 30,
  },
});
