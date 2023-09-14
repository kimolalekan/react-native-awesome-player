var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$react = require("react");
var $gXNCa$reactnative = require("react-native");
var $gXNCa$expoav = require("expo-av");
var $gXNCa$miblanchardreactnativeslider = require("@miblanchard/react-native-slider");
var $gXNCa$reactnativeflexboxgrid = require("react-native-flexbox-grid");
var $gXNCa$reactnativevectoriconsIonicons = require("react-native-vector-icons/Ionicons");
var $gXNCa$exposcreenorientation = require("expo-screen-orientation");
var $gXNCa$reactnativemodal = require("react-native-modal");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "VideoPlayer", () => $c98252cb2f5308d3$export$f503bc85d719e8b0);
$parcel$export(module.exports, "action", () => $c98252cb2f5308d3$export$31eb53bd5b582a97);
$parcel$export(module.exports, "playerStatus", () => $c98252cb2f5308d3$export$da5591f657d77787);










function $39b34a912a2382c7$export$2e2bcd8739ae039({ show: show = true, video: video, orientation: orientation, isPlaying: isPlaying, duration: duration, countdown: countdown, setCountdown: setCountdown, timing: timing, setTiming: setTiming, iconColor: iconColor = "#fff", progressColor: progressColor = "#3f3f3f", radius: radius, showControls: showControls, showLibrary: showLibrary = false, toggleLibrary: toggleLibrary, libraryText: libraryText = "Episodes" }) {
    const styles = (0, $gXNCa$reactnative.StyleSheet).create({
        bg: {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            height: 40,
            margin: 10,
            marginBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: radius
        },
        text: {
            position: "relative",
            top: 13,
            fontSize: 11,
            color: "white",
            textAlign: "center"
        },
        iconStyle: {
            position: "relative",
            top: 10
        },
        thumbStyle: {
            width: 10,
            height: 10
        },
        libraryIcon: {
            position: "relative",
            top: 10,
            alignItems: "flex-end"
        }
    });
    const playAction = ()=>{
        const _countdown = countdown * 1000;
        if (duration === _countdown) video.current.setPositionAsync(0);
        isPlaying ? video.current.pauseAsync() : video.current.playAsync();
        setTimeout(()=>{
            showControls(false);
        }, 5000);
    };
    const renderCountDown = (value)=>{
        let minutes = parseInt(value / 60, 10);
        let seconds = parseInt(value % 60);
        minutes = minutes <= 9 ? `0${minutes}` : minutes;
        seconds = seconds <= 9 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    };
    const librarySize = orientation === "landscape" ? 2 : 2;
    const progressSize = orientation === "landscape" ? 7 : 5;
    const progressLibrarySize = orientation === "landscape" ? 9 : 7;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
        style: [
            styles.bg,
            {
                display: show === false ? "none" : "flex"
            }
        ],
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnativeflexboxgrid.Row), {
            children: [
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: 1,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
                        style: styles.button,
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                            style: styles.button,
                            onPress: playAction,
                            children: isPlaying ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                                name: "pause",
                                color: iconColor,
                                size: 20,
                                style: styles.iconStyle
                            }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                                name: "play",
                                color: iconColor,
                                size: 20,
                                style: styles.iconStyle
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: orientation === "landscape" ? 1 : 2,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                        style: styles.text,
                        children: renderCountDown(countdown ? countdown : 0)
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: showLibrary ? progressSize : progressLibrarySize,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$miblanchardreactnativeslider.Slider), {
                        value: timing,
                        maximumValue: Number(duration),
                        thumbStyle: {
                            width: 15,
                            height: 15
                        },
                        thumbTintColor: progressColor,
                        minimumTrackTintColor: progressColor,
                        trackClickable: true,
                        onValueChange: (value)=>{
                            video.current.setStatusAsync({
                                positionMillis: Number(value[0])
                            });
                            setTiming(Number(value[0]));
                            const _duration = Number(value[0]);
                            setCountdown(Math.ceil(_duration / 1000));
                        }
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: orientation === "landscape" ? 1 : 2,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                        style: styles.text,
                        children: renderCountDown(duration / 1000)
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    smHidden: showLibrary === false,
                    sm: showLibrary ? librarySize : 0,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                        onPress: ()=>{
                            video.current.pauseAsync();
                            toggleLibrary();
                        },
                        children: orientation === "landscape" ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                            style: styles.text,
                            children: showLibrary && libraryText ? libraryText : ""
                        }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
                            style: [
                                styles.libraryIcon,
                                {
                                    display: showLibrary ? "flex" : "none"
                                }
                            ],
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                                name: "apps",
                                color: "#fff",
                                size: 18
                            })
                        })
                    })
                })
            ]
        })
    });
}








const $0ffd94f5afb204a4$var$Header = ({ show: show, title: title, backHandler: backHandler, backIcon: backIcon, fullscreen: fullscreen = false, orientation: orientation })=>{
    async function changeScreenOrientation() {
        const v = await $gXNCa$exposcreenorientation.getOrientationAsync();
        const lock = v === 1 ? $gXNCa$exposcreenorientation.OrientationLock.LANDSCAPE_LEFT : $gXNCa$exposcreenorientation.OrientationLock.PORTRAIT_UP;
        await $gXNCa$exposcreenorientation.lockAsync(lock);
    }
    const _full = fullscreen && orientation === "portrait" ? 40 : fullscreen && orientation === "landscape" ? 10 : 10;
    const styles = (0, $gXNCa$reactnative.StyleSheet).create({
        container: {
            flex: 1,
            marginTop: _full,
            display: show ? "flex" : "none"
        },
        title: {
            marginTop: 5,
            color: "#fff",
            fontSize: 14,
            fontWeight: "600",
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: {
                width: -1,
                height: 1
            },
            textShadowRadius: 10
        },
        icon: {
            width: 25,
            height: 25,
            resizeMode: "contain"
        },
        orientation: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: 20
        }
    });
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
        style: styles.container,
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnativeflexboxgrid.Row), {
            children: [
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: 2,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                        onPress: ()=>backHandler ? backHandler() : null,
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                            name: backIcon,
                            size: 30,
                            color: "#fff"
                        })
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: 8,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
                        style: {
                            alignItems: "center"
                        },
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                            style: styles.title,
                            children: title ? title : ""
                        })
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                    sm: 2,
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                        style: styles.orientation,
                        onPress: ()=>changeScreenOrientation(),
                        children: orientation === "portrait" ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                            name: "phone-landscape",
                            size: 30,
                            color: "#fff"
                        }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                            name: "phone-portrait",
                            size: 30,
                            color: "#fff"
                        })
                    })
                })
            ]
        })
    });
};
var $0ffd94f5afb204a4$export$2e2bcd8739ae039 = $0ffd94f5afb204a4$var$Header;







const $d2f8a4431a49184b$var$VideoModal = ({ modal: modal, toggleModal: toggleModal, active: active, library: library, libraryText: libraryText, handleLibrary: handleLibrary })=>{
    const renderDuration = (value)=>{
        const suffix = value < 1 ? "secs" : "mins";
        const duration = value >= 1 ? Math.round(value) : Math.round(value * 100);
        return `${duration} ${suffix}`;
    };
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativemodal))), {
        style: $d2f8a4431a49184b$var$styles.modal,
        isVisible: modal,
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnative.View), {
            style: $d2f8a4431a49184b$var$styles.container,
            children: [
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                    style: $d2f8a4431a49184b$var$styles.icon,
                    onPress: ()=>toggleModal(false),
                    children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                        name: "chevron-back",
                        color: "#fff",
                        size: 30
                    })
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnative.Text), {
                    style: $d2f8a4431a49184b$var$styles.heading,
                    children: [
                        libraryText,
                        " (",
                        library.length,
                        ")"
                    ]
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.ScrollView), {
                    style: {
                        flex: 1
                    },
                    children: library?.length ? library?.map((item, key)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.TouchableOpacity), {
                            style: {
                                flex: 1,
                                marginBottom: 20,
                                backgroundColor: active === item.video ? "rgba(0, 0, 0, 0.1)" : "transparent",
                                padding: active === item.video ? 10 : 0,
                                borderRadius: active === item.video ? 10 : 0
                            },
                            onPress: ()=>{
                                handleLibrary(item);
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnativeflexboxgrid.Row), {
                                children: [
                                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                                        sm: 3,
                                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.ImageBackground), {
                                            imageStyle: {
                                                borderRadius: 10
                                            },
                                            style: $d2f8a4431a49184b$var$styles.image,
                                            src: item.poster,
                                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($gXNCa$reactnativevectoriconsIonicons))), {
                                                name: "play-circle",
                                                size: 30,
                                                color: "#fff"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnativeflexboxgrid.Column), {
                                        sm: 9,
                                        children: [
                                            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                                                style: $d2f8a4431a49184b$var$styles.title,
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                                                style: $d2f8a4431a49184b$var$styles.duration,
                                                children: renderDuration(item.duration)
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, key)) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.Text), {
                        style: {
                            textTransform: "capitalize",
                            color: "#ccc"
                        },
                        children: "No library"
                    })
                })
            ]
        })
    });
};
const $d2f8a4431a49184b$var$styles = (0, $gXNCa$reactnative.StyleSheet).create({
    modal: {
        margin: 0
    },
    container: {
        flex: 1,
        backgroundColor: "#454739",
        padding: 15
    },
    heading: {
        fontSize: 35,
        fontWeight: "700",
        marginBottom: 20,
        color: "#fff"
    },
    icon: {
        marginBottom: 20,
        marginTop: 30
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 80,
        resizeMode: "contain"
    },
    title: {
        paddingLeft: 10,
        fontSize: 18,
        textTransform: "capitalize",
        color: "#ccc",
        marginBottom: 10
    },
    duration: {
        paddingLeft: 10,
        color: "#ccc"
    }
});
var $d2f8a4431a49184b$export$2e2bcd8739ae039 = $d2f8a4431a49184b$var$VideoModal;


const $c98252cb2f5308d3$var$dimension = (0, $gXNCa$reactnative.Dimensions).get("screen");
let $c98252cb2f5308d3$export$da5591f657d77787 = {};
let $c98252cb2f5308d3$export$31eb53bd5b582a97 = {
    play: undefined,
    pause: undefined,
    isPlaying: false
};
const $c98252cb2f5308d3$export$f503bc85d719e8b0 = ({ title: title, width: width, height: height, radius: radius = 0, backgroundColor: backgroundColor = "#000", progressColor: progressColor = "#3f3f3f", src: src, poster: poster, resizeMode: resizeMode = "contain", autoplay: autoplay = false, hideControls: hideControls = false, headers: headers, hideNavbar: hideNavbar = false, backHandler: backHandler = null, backIcon: backIcon = "chevron-back", showLibrary: showLibrary, library: library = [], libraryText: libraryText = "Episodes", autoplayLibrary: autoplayLibrary = true })=>{
    const [sizes, setSizes] = (0, $gXNCa$react.useState)($c98252cb2f5308d3$var$dimension);
    const video = (0, $gXNCa$react.useRef)(null);
    const [_title, setTitle] = (0, $gXNCa$react.useState)(title);
    const [_src, setSrc] = (0, $gXNCa$react.useState)(src);
    const [_poster, setPoster] = (0, $gXNCa$react.useState)(poster);
    const [status, setStatus] = (0, $gXNCa$react.useState)({});
    const [duration, setDuration] = (0, $gXNCa$react.useState)(0);
    const [countdown, setCountdown] = (0, $gXNCa$react.useState)(0);
    const [timing, setTiming] = (0, $gXNCa$react.useState)(0);
    const [loading, setLoading] = (0, $gXNCa$react.useState)(true);
    const [controls, showControls] = (0, $gXNCa$react.useState)(true);
    const [modal, toggleModal] = (0, $gXNCa$react.useState)(false);
    const [orientation, setOrientation] = (0, $gXNCa$react.useState)("portrait");
    $c98252cb2f5308d3$export$da5591f657d77787 = status;
    $c98252cb2f5308d3$export$31eb53bd5b582a97 = {
        isPlaying: status?.isPlaying,
        play: ()=>video?.current?.playAsync(),
        pause: ()=>video?.current?.pauseAsync()
    };
    const styles = (0, $gXNCa$reactnative.StyleSheet).create({
        container: {
            width: width,
            height: height,
            borderRadius: radius,
            backgroundColor: backgroundColor
        },
        video: {
            width: width,
            height: height
        },
        text: {
            position: "relative",
            top: 13,
            fontSize: 11,
            color: "white",
            textAlign: "center"
        },
        controls: {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: width,
            height: height,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000
        },
        loader: {
            position: "absolute",
            top: 70,
            bottom: 0,
            width: width,
            height: height - 130,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            display: loading ? "flex" : "none"
        }
    });
    (0, $gXNCa$react.useEffect)(()=>{
        const subscription = (0, $gXNCa$reactnative.Dimensions).addEventListener("change", ({ window: window, screen: screen })=>{
            setSizes(screen);
            screen.width > 800 ? setOrientation("landscape") : setOrientation("portrait");
        });
        return ()=>subscription?.remove();
    }, [
        orientation
    ]);
    const toggleLibrary = ()=>{
        showControls(false);
        toggleModal(true);
    };
    const handleLibrary = (library)=>{
        setLoading(true);
        setTitle(library?.title);
        setPoster(library?.poster);
        setSrc(library?.video);
        showControls(true);
        toggleModal(false);
        video.current.setStatusAsync({
            positionMillis: 0,
            shouldPlay: true
        });
    };
    const playNext = ()=>{
        const total = library.length;
        let currentVideo = library.map((item)=>item.video);
        let current = currentVideo.indexOf(src);
        let next = current + 1;
        const nextVideo = library[next];
        if (next > 0 || next <= total) handleLibrary(nextVideo);
    };
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnative.View), {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $d2f8a4431a49184b$export$2e2bcd8739ae039), {
                modal: modal,
                toggleModal: toggleModal,
                active: _src,
                library: library,
                libraryText: libraryText,
                handleLibrary: handleLibrary
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactnative.TouchableOpacity), {
                style: styles.controls,
                onPress: ()=>{
                    showControls(true);
                    setTimeout(()=>{
                        showControls(false);
                    }, 7000);
                },
                children: [
                    !hideNavbar && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $0ffd94f5afb204a4$export$2e2bcd8739ae039), {
                        show: controls,
                        title: _title,
                        backIcon: backIcon,
                        backHandler: backHandler,
                        fullscreen: height === sizes.height,
                        orientation: orientation
                    }),
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.View), {
                        style: styles.loader,
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactnative.ActivityIndicator), {
                            animating: true,
                            color: "#fff",
                            size: "large"
                        })
                    }),
                    !hideControls && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $39b34a912a2382c7$export$2e2bcd8739ae039), {
                        show: controls,
                        video: video,
                        orientation: orientation,
                        isPlaying: status.isPlaying,
                        libraryText: libraryText,
                        showLibrary: showLibrary,
                        toggleLibrary: ()=>toggleLibrary(),
                        showControls: showControls,
                        timing: timing,
                        setTiming: setTiming,
                        duration: duration,
                        countdown: countdown,
                        setCountdown: setCountdown,
                        progressColor: progressColor
                    })
                ]
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$expoav.Video), {
                ref: video,
                style: styles.video,
                posterSource: {
                    uri: _poster
                },
                shouldPlay: autoplay,
                source: {
                    uri: _src,
                    headers: headers
                },
                useNativeControls: false,
                resizeMode: resizeMode,
                onPlaybackStatusUpdate: (status)=>{
                    status.isBuffering && setLoading(true);
                    status.isPlaying && setLoading(false);
                    setStatus(status);
                    setTiming(status.positionMillis);
                    const _duration = status.positionMillis;
                    setCountdown(_duration / 1000);
                    status.didJustFinish && playNext();
                },
                onLoad: (v)=>{
                    setDuration(v.durationMillis);
                    // setCountdown(Math.round(v.durationMillis / 1000));
                    setLoading(false);
                    autoplay && autoplayLibrary && video.current.setStatusAsync({
                        positionMillis: 0,
                        shouldPlay: true
                    });
                    setTimeout(()=>{
                        showControls(false);
                    }, 7000);
                }
            })
        ]
    });
};




//# sourceMappingURL=main.js.map
