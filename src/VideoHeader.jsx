import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Column as Col, Row } from "react-native-flexbox-grid";
import Icon from "react-native-vector-icons/Ionicons";
import * as ScreenOrientation from "expo-screen-orientation";

const Header = ({
  show,
  title,
  backHandler,
  backIcon,
  fullscreen = false,
  orientation,
}) => {
  async function changeScreenOrientation() {
    const v = await ScreenOrientation.getOrientationAsync();

    const lock =
      v === 1
        ? ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        : ScreenOrientation.OrientationLock.PORTRAIT_UP;

    await ScreenOrientation.lockAsync(lock);
  }

  const _full =
    fullscreen && orientation === "portrait"
      ? 40
      : fullscreen && orientation === "landscape"
      ? 10
      : 10;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: _full,
      display: show ? "flex" : "none",
    },
    title: {
      marginTop: 5,
      color: "#fff",
      fontSize: 14,
      fontWeight: "600",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    icon: { width: 25, height: 25, resizeMode: "contain" },
    orientation: { flex: 1, alignItems: "flex-end", paddingRight: 20 },
  });

  return (
    <View style={styles.container}>
      <Row>
        <Col sm={2}>
          <TouchableOpacity
            onPress={() => (backHandler ? backHandler() : null)}
          >
            <Icon name={backIcon} size={30} color={"#fff"} />
          </TouchableOpacity>
        </Col>
        <Col sm={8}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>{title ? title : ""}</Text>
          </View>
        </Col>
        <Col sm={2}>
          <TouchableOpacity
            style={styles.orientation}
            onPress={() => changeScreenOrientation()}
          >
            {orientation === "portrait" ? (
              <Icon name={"phone-landscape"} size={30} color={"#fff"} />
            ) : (
              <Icon name={"phone-portrait"} size={30} color={"#fff"} />
            )}
          </TouchableOpacity>
        </Col>
      </Row>
    </View>
  );
};

export default Header;
