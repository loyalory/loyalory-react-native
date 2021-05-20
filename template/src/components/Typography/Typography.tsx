import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface Props extends TextProps {}

const Typography: React.FC<Props> = ({style, ...props}) => {
  return <Text style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {},
});

export default Typography;
