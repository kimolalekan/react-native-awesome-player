declare module "react-native-awesome-player" {
  interface Library {
    title: string;
    video: string;
    poster: string;
    duration: number;
  }

  export interface VideoPlayer {
    title?: string;
    width: number;
    height: number;
    radius: number;
    backgroundColor?: string;
    progressColor?: string;
    src: string;
    headers?: Object;
    poster?: string;
    resizeMode?: string;
    autoplay?: boolean;
    hideControls?: boolean;
    hideNavbar?: boolean;
    backHandler?: () => void;
    backIcon?: string;
    showLibrary?: boolean;
    library?: Array<Library>;
    libraryText?: string;
    autoplayLibrary?: boolean;
  }

  export interface playerStatus {
    isPlaying?: boolean;
    isBuffering?: boolean;
    didJustFinish?: boolean;
  }
  export interface action {
    play?: () => void;
    pause?: () => void;
  }
}
