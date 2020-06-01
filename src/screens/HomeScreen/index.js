import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './styles';
import keys from '../../models/Keys';

export default class RCTYouTubeExample extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { width },
          },
        }) => {
          if (!this.state.containerMounted)
            this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width)
            this.setState({ containerWidth: width });
        }}>
        {this.state.containerMounted && (
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            apiKey={keys.YOUTUBE_API_KEY}
            videoIds={['xwsYvBYZcx4', 'f2JuxM-snGc', 'dgTkDRMWHV0', 'l3E54F6SX1M']}
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(
                  this.state.containerWidth / (16 / 9)
                ),
              },
              styles.player,
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e =>
              this.setState({ fullscreen: e.isFullscreen })
            }
            onProgress={e =>
              this.setState({
                duration: e.duration,
                currentTime: e.currentTime,
              })
            }
          />
        )}



        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this._youTubeRef && this._youTubeRef.previousVideo()
            }>
            <Text style={styles.buttonText}>Previous Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._youTubeRef && this._youTubeRef.nextVideo()}>
            <Text style={styles.buttonText}>Next Video</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    );
  }
}

