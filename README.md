# React native awesome player

React native awesome player for video

<img src="/screenshots/1.png" width="50%"><img src="/screenshots/2.png" width="50%">
<img src="/screenshots/3.png" width="50%"><img src="/screenshots/4.png" width="50%">

### Installation

```sh
npm i react-native-awesome-player
```

```sh
yarn add react-native-awesome-player
```

[Sample codes](/samples)

```jsx
import { VideoPlayer } from "react-native-awesome-player";

<VideoPlayer
  title={""}
  radius={10}
  width={360}
  height={240}
  autoplay={true}
  src={""}
  poster={
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60"
  }
  hideNavbar={false}
  hideControls={false}
  resizeMode="contain"
  libraryText="Episodes"
/>;
```

**VideoPlayer Properties**

| Property        |                         Type                          |                      Default                       | Required |
| :-------------- | :---------------------------------------------------: | :------------------------------------------------: | -------: |
| src             |                        string                         |                     undefined                      |      Yes |
| poster          |                        string                         |                     undefined                      | Optional |
| width           |                        number                         |                     undefined                      |      Yes |
| height          |                        number                         |                     undefined                      |      Yes |
| radius          |                        number                         |                     undefined                      |      Yes |
| backgroundColor |                        string                         |                        #000                        | Optional |
| progressColor   |                        string                         |                      #3f3f3f                       | Optional |
| resizeMode      |                        string                         |                      contain                       | Optional |
| autoplay        |                        boolean                        |                       false                        | Optional |
| hideControls    |                        boolean                        |                       false                        | Optional |
| hideNavbar      |                        boolean                        |                       false                        | Optional |
| backHandler     |                       function                        |                     undefined                      | Optional |
| backIcon        |                        string                         | chevron-back (react-native-vector-icons(ionicons)) | Optional |
| showLibrary     |                        boolean                        |                       false                        | Optional |
| library         | Array<{title: string; video: string; poster: string}> |                         []                         | Optional |
| libraryText     |                        string                         |                      Episodes                      | Optional |
| autoplay        |                        boolean                        |                       false                        | Optional |

**action Properties**

| Property |   Type   |  Default  |  Description |
| :------- | :------: | :-------: | -----------: |
| play     | function | undefined |  Play action |
| pause    | function | undefined | Pause action |

**playStatus Properties**

| Property       |  Type   | Default |                            Description |
| :------------- | :-----: | :-----: | -------------------------------------: |
| isPlaying      | boolean |  false  |                       Video is playing |
| isBuffering    | boolean |  false  |                     Video is buffering |
| didJustFinish  | boolean |  false  |                       Video just ended |
| positionMillis | number  |    0    | Video current position in milliseconds |
| durationMillis | number  |    0    |         Video duration in milliseconds |

**Maintainers**

[@kimolalekan](https://github.com/kimolalekan)
