import React from 'react';
import { Text } from 'react-native';
import { styled } from 'nativewind';

const Component = styled(Text);

const StyledText = props => <Component {...props} />;

export default StyledText;
