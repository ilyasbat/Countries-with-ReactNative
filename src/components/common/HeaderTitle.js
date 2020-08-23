import React from 'react';
import {Image, StyleSheet, Text, View, Button} from 'react-native';
import {API_SMALL_IMAGE_URL, WIDGET_TEXT_COLOR} from '../../config';
function HeaderTitle({alpha2Code, name}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: API_SMALL_IMAGE_URL.replace('%alpha%', alpha2Code).toLowerCase(),
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    color: WIDGET_TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default HeaderTitle;
