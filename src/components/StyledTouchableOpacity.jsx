import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const Component = styled(TouchableOpacity);

const StyledTouchableOpacity = props => <Component {...props} activeOpacity={0.8} />;

export default StyledTouchableOpacity;
