import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { Column as Col, Row } from "react-native-flexbox-grid";
import Icon from "react-native-vector-icons/Ionicons";

export default function Controls({
  show = true,
  video,
  orientation,
  isPlaying,
  duration,
  countdown,
  setCountdown,
  timing,
  setTiming,
  iconColor = "#fff",
  progressColor = "#3f3f3f",
  showControls,
  showLibrary = false,
  toggleLibrary,
  libraryText = "Episodes",
}) {
  const playAction = () => {
    const _countdown = countdown * 1000;
    if (duration === _countdown) {
      video.current.setPositionAsync(0);
    }

    isPlaying ? video.current.pauseAsync() : video.current.playAsync();
    setTimeout(() => {
      showControls(false);
    }, 5000);
  };

  const renderCountDown = (value) => {
    let minutes = parseInt(value / 60, 10);
    let seconds = parseInt(value % 60);
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    seconds = seconds <= 9 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const librarySize = orientation === "landscape" ? 2 : 2;
  const progressSize = orientation === "landscape" ? 7 : 5;

  return (
    <View
      style={[
        styles.bg,
        {
          display: show === false ? "none" : "flex",
        },
      ]}
    >
      <Row>
        <Col sm={1}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button} onPress={playAction}>
              {isPlaying ? (
                <Icon
                  name="pause"
                  color={iconColor}
                  size={20}
                  style={styles.iconStyle}
                />
              ) : (
                <Icon
                  name="play"
                  color={iconColor}
                  size={20}
                  style={styles.iconStyle}
                />
              )}
            </TouchableOpacity>
          </View>
        </Col>
        <Col sm={orientation === "landscape" ? 1 : 2}>
          <Text style={styles.text}>
            {renderCountDown(countdown ? countdown : 0)}
          </Text>
        </Col>
        <Col sm={showLibrary ? progressSize : 8}>
          <Slider
            value={timing}
            maximumValue={Number(duration)}
            thumbStyle={{ width: 15, height: 15 }}
            thumbTintColor={progressColor}
            minimumTrackTintColor={progressColor}
            trackClickable
            onValueChange={(value) => {
              video.current.setStatusAsync({
                positionMillis: Number(value[0]),
              });
              setTiming(Number(value[0]));
              const _duration = Number(value[0]);
              setCountdown(Math.ceil(_duration / 1000));
            }}
          />
        </Col>
        <Col sm={orientation === "landscape" ? 1 : 2}>
          <Text style={styles.text}>{renderCountDown(duration / 1000)}</Text>
        </Col>
        <Col sm={showLibrary ? librarySize : 0}>
          <TouchableOpacity
            onPress={() => {
              video.current.pauseAsync();
              toggleLibrary();
            }}
          >
            {orientation === "landscape" ? (
              <Text style={styles.text}>
                {showLibrary && libraryText ? libraryText : ""}
              </Text>
            ) : (
              <View style={styles.libraryIcon}>
                <Icon name="apps" color="#fff" size={18} />
              </View>
            )}
          </TouchableOpacity>
        </Col>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 40,
    margin: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
  },
  text: {
    position: "relative",
    top: 13,
    fontSize: 11,
    color: "white",
    textAlign: "center",
  },
  iconStyle: { position: "relative", top: 10 },
  thumbStyle: { width: 10, height: 10 },
  libraryIcon: {
    position: "relative",
    top: 10,
    alignItems: "flex-end",
  },
});
