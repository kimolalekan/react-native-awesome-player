import { View, StyleSheet } from "react-native";
import { VideoPlayer } from "react-native-awesome-player";

const VideoDemo = () => {
  const library = [
    {
      title: "Sunset",
      poster:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
      video:
        "https://cdn.videvo.net/videvo_files/video/premium/video0012/large_watermarked/327-1_327-1592_preview.mp4",
      duration: 55,
    },
    {
      title: "Nebula",
      poster:
        "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      video:
        "https://cdn.videvo.net/videvo_files/video/premium/getty_124/large_watermarked/istock-950718922_preview.mp4",
      duration: 0.24,
    },

    {
      title: "Meditation",
      poster:
        "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      video:
        "https://joy.videvo.net/videvo_files/video/premium/video0227/large_watermarked/08_Den_Darina_maldiv_15_meditation_preview.mp4",
      duration: 0.25,
    },
  ];

  return (
    <View style={styles.container}>
      <VideoPlayer
        title={library[0].title}
        radius={10}
        width={360}
        height={240}
        autoplay={true}
        src={library[0].video}
        poster={library[0].poster}
        hideNavbar={false}
        hideControls={false}
        resizeMode="contain"
        showLibrary={true}
        library={library}
        libraryText="Episodes"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
});

export default VideoDemo;
