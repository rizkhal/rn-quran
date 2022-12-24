import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';

const Component = styled(View);

const StyledView = props => <Component {...props} />;

export default StyledView;
