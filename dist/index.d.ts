import * as React from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
export interface AnimationHeaderRef {
    getScrollPosition: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
export interface ChangeStatusbarColorToggle {
    from: 'light-content' | 'dark-content' | 'default';
    to: 'light-content' | 'dark-content' | 'default';
}
export interface PropsAnimatedHeader {
    title: string;
    limit?: number;
    changeStatusBarColor?: boolean;
    directions?: ChangeStatusbarColorToggle;
    customStyleContainer?: StyleProp<Omit<Omit<ViewStyle, 'paddingLeft'>, 'paddingRight'>>;
    customStyleText?: StyleProp<ViewStyle>;
    animationDuration?: number;
    leftElement?: React.ReactChild;
    rightElement?: React.ReactChild;
}
declare const _default: React.ForwardRefExoticComponent<PropsAnimatedHeader & React.RefAttributes<AnimationHeaderRef>>;
export default _default;
