import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
function Layout({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#495057',
  },
});
export default Layout;
