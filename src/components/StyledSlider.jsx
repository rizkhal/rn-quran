import React from 'react';
import Slider from '@react-native-community/slider';
import { styled } from 'nativewind';

const Component = styled(Slider);

const StyledSlider = props => <Component {...props} />;

export default StyledSlider;
