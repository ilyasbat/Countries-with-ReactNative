import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  API_BIG_IMAGE_URL,
  API_SMALL_IMAGE_URL,
  WIDGET_BACKGROUND_COLOR,
  WIDGET_TEXT_COLOR,
} from '../../config';
import Layout from '../Layout';
function CountryItem({country, navigation}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Country', {country});
      }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.textBig]}>{country.name}</Text>
          <Text style={[styles.text, styles.textBig]}>
            {country.nativeName}
          </Text>
          <Text style={[styles.text, styles.textMid]}>{country.capital}</Text>
          <Text style={[styles.text, styles.textSmall]}>{country.demonym}</Text>
        </View>

        <Image
          source={{
            uri: API_BIG_IMAGE_URL.replace(
              '%alpha%',
              country.alpha2Code,
            ).toLowerCase(),
          }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: WIDGET_BACKGROUND_COLOR,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    zIndex: 999,
    justifyContent: 'flex-start',
  },
  image: {width: 250, height: 200, borderRadius: 10},
  textBig: {fontSize: 25},
  textMid: {fontSize: 18},
  textSmall: {fontSize: 12},
  text: {
    color: WIDGET_TEXT_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: Dimensions.get('window').width,
  },
});
export default CountryItem;
