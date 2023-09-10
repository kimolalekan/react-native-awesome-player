import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { StatusBar } from "react-native";
const dimension = Dimensions.get("screen");
import Controls from "./VideoControls";
import Headers from "./VideoHeader";
import VideoModal from "./VideoModal";

let playerStatus = {};
let action = { play: undefined, pause: undefined, isPlaying: false };

const VideoPlayer = ({
  title,
  width,
  height,
  radius = 0,
  backgroundColor = "#000",
  progressColor = "#3f3f3f",
  src,
  poster,
  headers,
  resizeMode = "contain",
  autoplay = false,
  hideControls = false,
  hideNavbar = false,
  backHandler = null,
  backIcon = "chevron-back",
  showLibrary = false,
  library = [],
  libraryText = "Episodes",
  autoplayLibrary = true,
}) => {
  const [sizes, setSizes] = useState(dimension);
  const video = useRef(null);
  const [_title, setTitle] = useState(title);
  const [_src, setSrc] = useState(src);
  const [_poster, setPoster] = useState(poster);
  const [status, setStatus] = useState({});
  const [duration, setDuration] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [timing, setTiming] = useState(0);
  const [loading, setLoading] = useState(true);
  const [controls, showControls] = useState(true);
  const [modal, toggleModal] = useState(false);
  const [orientation, setOrientation] = useState("portrait");

  playerStatus = status;
  action = {
    isPlaying: status?.isPlaying,
    play: () => video?.current?.playAsync(),
    pause: () => video?.current?.pauseAsync(),
  };

  const styles = StyleSheet.create({
    container: {
      width,
      height,
      borderRadius: radius,
      backgroundColor,
    },
    video: {
      width,
      height,
    },
    text: {
      position: "relative",
      top: 13,
      fontSize: 11,
      color: "white",
      textAlign: "center",
    },
    controls: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width,
      height,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3000,
    },
    loader: {
      position: "absolute",
      top: 70,
      bottom: 0,
      width,
      height: height - 130,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      display: loading ? "flex" : "none",
    },
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setSizes(screen);
        screen.width > 800
          ? setOrientation("landscape")
          : setOrientation("portrait");
      }
    );

    return () => subscription?.remove();
  }, [orientation]);

  const toggleLibrary = () => {
    showControls(false);
    toggleModal(true);
  };

  const handleLibrary = (library) => {
    setLoading(true);
    setTitle(library?.title);
    setPoster(library?.poster);
    setSrc(library?.video);
    showControls(true);
    toggleModal(false);
    video.current.setStatusAsync({ positionMillis: 0, shouldPlay: true });
  };

  const playNext = () => {
    const total = library.length;
    let currentVideo = library.map((item) => item.video);
    let current = currentVideo.indexOf(src);
    let next = current + 1;
    const nextVideo = library[next];
    if (next > 0 || next <= total) {
      handleLibrary(nextVideo);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <VideoModal
        modal={modal}
        toggleModal={toggleModal}
        active={_src}
        library={library}
        libraryText={libraryText}
        handleLibrary={handleLibrary}
      />

      <TouchableOpacity
        style={styles.controls}
        onPress={() => {
          showControls(true);
          setTimeout(() => {
            showControls(false);
          }, 7000);
        }}
      >
        {!hideNavbar && (
          <Headers
            show={controls}
            title={_title}
            backIcon={backIcon}
            backHandler={backHandler}
            fullscreen={height === sizes.height}
            orientation={orientation}
          />
        )}
        <View style={styles.loader}>
          <ActivityIndicator animating={true} color="#fff" size={"large"} />
        </View>
        {!hideControls && (
          <Controls
            show={controls}
            video={video}
            orientation={orientation}
            isPlaying={status.isPlaying}
            libraryText={libraryText}
            showLibrary={showLibrary}
            toggleLibrary={() => toggleLibrary()}
            showControls={showControls}
            timing={timing}
            setTiming={setTiming}
            duration={duration}
            countdown={countdown}
            setCountdown={setCountdown}
            progressColor={progressColor}
          />
        )}
      </TouchableOpacity>

      <Video
        ref={video}
        style={styles.video}
        posterSource={{ uri: _poster }}
        shouldPlay={autoplay}
        source={{
          uri: _src,
          headers,
        }}
        useNativeControls={false}
        resizeMode={resizeMode}
        onPlaybackStatusUpdate={(status) => {
          status.isBuffering ? setLoading(true) : false;
          status.isPlaying ? setLoading(false) : false;
          setStatus(status);
          setTiming(status.positionMillis);
          const _duration = status.positionMillis;
          setCountdown(_duration / 1000);
          status.didJustFinish ? playNext() : false;
        }}
        onLoad={(v) => {
          setDuration(v.durationMillis);
          setCountdown(Math.round(v.durationMillis / 1000));
          setLoading(false);

          autoplay && autoplayLibrary
            ? video.current.setStatusAsync({
                positionMillis: 0,
                shouldPlay: true,
              })
            : false;
          setTimeout(() => {
            showControls(false);
          }, 7000);
        }}
      />
    </View>
  );
};

export { VideoPlayer, action, playerStatus };
