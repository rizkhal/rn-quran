import React from 'react';
import { Image } from 'react-native';
import { styled } from 'nativewind';

const Component = styled(Image);

const StyledImage = props => <Component {...props} />;

export default StyledImage;
