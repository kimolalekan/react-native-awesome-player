import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const dimension = Dimensions.get("screen");
import { VideoPlayer, action } from "../components/VideoPlayer";

const FullscreenDemo = () => {
  const [sizes, setSizes] = useState(dimension);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setSizes(screen);
      }
    );

    return () => subscription?.remove();
  }, []);

  const library = [
    {
      title: "No means no",
      poster:
        "https://image.mux.com/UVOjC3FjDTrpwk02pC00zDPcCSzRiFsUBj003DUZwNXKZQ/thumbnail.png?width=214&height=121&time=13",
      video:
        "https://stream.mux.com/UVOjC3FjDTrpwk02pC00zDPcCSzRiFsUBj003DUZwNXKZQ.m3u8",
      duration: 193,
    },
    {
      title: "Animal movie w3 school",
      poster:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      video: "https://www.w3schools.com/tags/movie.mp4",
      duration: 73,
    },

    {
      title: "A lady dancing",
      poster:
        "https://images.unsplash.com/photo-1612904370193-72d578a78d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      video:
        "https://theyutesblob.blob.core.windows.net/theyutes/production_id_4109215%20(720p).mp4",
      duration: 56,
    },
  ];

  const playPause = () => {
    action.isPlaying ? action.pause() : action.play();
  };

  return (
    <View style={styles.container}>
      <VideoPlayer
        title={library[0].title}
        radius={10}
        width={sizes.width}
        height={sizes.height}
        autoplay={true}
        // src={require("../assets/99.mp4")}
        src={library[0].video}
        poster={library[0].poster}
        // hideNavbar={true}
        // hideControls={true}
        resizeMode="contain"
        showLibrary={true}
        library={library}
        libraryText="Episodes"
      />

      {/* <View style={{ flex: 1, marginBottom: 15 }}>
        <Card>
          <Text>Cool</Text>
        </Card>
        <BlurredImage
          width={"100%"}
          height={240}
          src="https://images.pexels.com/photos/18022537/pexels-photo-18022537/free-photo-of-parrot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          blur={100}
        />
      </View>
      <View style={{ marginBottom: 15 }}>
        <BlurredImage
          width={"100%"}
          height={240}
          src="https://images.pexels.com/photos/18022537/pexels-photo-18022537/free-photo-of-parrot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          blur={100}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 400,
    // padding: 15,
    // marginTop: 100,
  },
  buttonGrid: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Test;
