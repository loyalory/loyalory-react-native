import React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  ViewStyle,
  SafeAreaView,
} from 'react-native';

interface Props extends ViewProps {
  wrapperStyle?: ViewStyle;
}

const Layout: React.FC<Props> = ({wrapperStyle, ...props}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <SafeAreaView style={[styles.layout, props.style]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  layout: {},
});

export default Layout;
