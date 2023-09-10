import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Column as Col, Row } from "react-native-flexbox-grid";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

const VideoModal = ({
  modal,
  toggleModal,
  active,
  library,
  libraryText,
  handleLibrary,
}) => {
  const renderDuration = (value) => {
    const suffix = value < 1 ? "secs" : "mins";
    const duration = value >= 1 ? Math.round(value) : Math.round(value * 100);
    return `${duration} ${suffix}`;
  };

  return (
    <Modal style={styles.modal} isVisible={modal}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => toggleModal(false)}
        >
          <Icon name="chevron-back" color={"#fff"} size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>
          {libraryText} ({library.length})
        </Text>
        <ScrollView style={{ flex: 1 }}>
          {library?.length ? (
            library?.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={{
                  flex: 1,
                  marginBottom: 20,
                  backgroundColor:
                    active === item.video
                      ? "rgba(0, 0, 0, 0.1)"
                      : "transparent",
                  padding: active === item.video ? 10 : 0,
                  borderRadius: active === item.video ? 10 : 0,
                }}
                onPress={() => {
                  handleLibrary(item);
                }}
              >
                <Row>
                  <Col sm={3}>
                    <ImageBackground
                      imageStyle={{ borderRadius: 10 }}
                      style={styles.image}
                      src={item.poster}
                    >
                      <Icon name="play-circle" size={30} color="#fff" />
                    </ImageBackground>
                  </Col>
                  <Col sm={9}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.duration}>
                      {renderDuration(item.duration)}
                    </Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                textTransform: "capitalize",
                color: "#ccc",
              }}
            >
              No library
            </Text>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { margin: 0 },
  container: {
    flex: 1,
    backgroundColor: "#454739",
    padding: 15,
  },
  heading: {
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 20,
    color: "#fff",
  },
  icon: { marginBottom: 20, marginTop: 30 },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
    resizeMode: "contain",
  },
  title: {
    paddingLeft: 10,
    fontSize: 18,
    textTransform: "capitalize",
    color: "#ccc",
    marginBottom: 10,
  },
  duration: {
    paddingLeft: 10,
    color: "#ccc",
  },
});

export default VideoModal;
