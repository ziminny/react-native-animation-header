"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var HeaderAnimationToggle = function (_a, ref) {
    var title = _a.title, _b = _a.limit, limit = _b === void 0 ? 250 : _b, _c = _a.changeStatusBarColor, changeStatusBarColor = _c === void 0 ? true : _c, customStyleContainer = _a.customStyleContainer, customStyleText = _a.customStyleText, _d = _a.animationDuration, animationDuration = _d === void 0 ? 55 : _d, leftElement = _a.leftElement, rightElement = _a.rightElement, _e = _a.directions, directions = _e === void 0 ? {
        from: 'dark-content',
        to: 'light-content'
    } : _e;
    var _f = React.useState(0), limitHeaderToggle = _f[0], setLimitHeaderToogle = _f[1];
    var _g = React.useState(0), fadeInOut = _g[0], setFadeInOut = _g[1];
    var scrollY = React.useRef(new react_native_1.Animated.Value(limitHeaderToggle)).current;
    var fade = React.useRef(new react_native_1.Animated.Value(limitHeaderToggle)).current;
    var _h = React.useState(false), showTitle = _h[0], setShowTitle = _h[1];
    var runAnimation = function (direction) {
        if (direction === void 0) { direction = 'normal'; }
        react_native_1.Animated.timing(scrollY, {
            toValue: direction === 'normal' ? 10 : 0,
            duration: animationDuration,
            easing: react_native_1.Easing.linear,
            useNativeDriver: false
        }).start(function () {
            setLimitHeaderToogle(limitHeaderToggle === 10 ? 0 : 10);
        });
        react_native_1.Animated.timing(fade, {
            toValue: direction === 'normal' ? 1 : 0,
            duration: animationDuration + 20,
            useNativeDriver: false,
        }).start(function () {
            setFadeInOut(fadeInOut === 1 ? 0 : 1);
        });
        setTimeout(function () {
            if (changeStatusBarColor)
                react_native_1.StatusBar.setBarStyle(direction === 'normal' ? directions.from : directions.to);
        }, animationDuration - 2);
    };
    React.useImperativeHandle(ref, function () { return ({
        getScrollPosition: getScrollPosition
    }); });
    var headerTranslateY = scrollY.interpolate({
        inputRange: [0, 10],
        outputRange: [-70, 0],
        extrapolate: 'clamp',
    });
    var getScrollPosition = function (event) {
        var y = event.nativeEvent.contentOffset.y;
        if (y > limit) {
            runAnimation();
            setShowTitle(y > (limit + 5));
        }
        else {
            runAnimation('reverse');
            setShowTitle(false);
        }
    };
    return (<react_native_1.Animated.View style={[
            defaultStyle.container,
            { transform: [{ translateY: headerTranslateY }] },
            customStyleContainer
        ]}>
          {showTitle &&
            <react_native_1.View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: react_native_1.Dimensions.get("window").width - 40,
                    backgroundColor: 'transparent',
                }}> 
                <react_native_1.Animated.View style={[{ opacity: fade }, defaultStyle.left]}>
                    {leftElement}
                </react_native_1.Animated.View>
                <react_native_1.Animated.Text style={[{ opacity: fade }, customStyleText]}>
                    {title}
                </react_native_1.Animated.Text>
                <react_native_1.Animated.View style={[{ opacity: fade }, defaultStyle.right]}>
                    {rightElement}
                </react_native_1.Animated.View>
            </react_native_1.View>} 
            
       </react_native_1.Animated.View>);
};
exports.default = React.forwardRef(HeaderAnimationToggle);
var defaultStyle = react_native_1.StyleSheet.create({
    container: {
        zIndex: 999,
        width: react_native_1.Dimensions.get("window").width,
        backgroundColor: 'rgba(244,244,244,.98);',
        position: 'absolute',
        paddingTop: (0, react_native_iphone_x_helper_1.getStatusBarHeight)() + 10,
        paddingBottom: 10,
        alignItems: 'center',
        borderBottomWidth: .2,
        borderBottomColor: '#ccc',
        paddingLeft: 20,
        paddingRight: 20
    },
    left: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0
    },
    right: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 0
    }
});
