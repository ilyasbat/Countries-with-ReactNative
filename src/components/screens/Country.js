import React, {useEffect} from 'react';
import {Text, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import Layout from '../Layout';
import HeaderTitle from '../common/HeaderTitle';
import {WIDGET_BACKGROUND_COLOR, WIDGET_TEXT_COLOR} from '../../config';
import useObject from '../../hooks/useObject';
import {language} from '../../language';

function Country({navigation, route}) {
  const {country} = route.params;
  const setObject = useObject();
  const findData = (data) => {
    if (data === '' || data === null) {
      return '-';
    }
    const type = typeof data;
    if (type === 'string' || type === 'number') {
      return data;
    } else if (type === 'object') {
      if (Array.isArray(data)) {
        if (data.length === 0) {
          return '-';
        }
        if (typeof data[0] === 'object') {
          let result = '';
          data.map((d) => {
            result += setObject(d);
          });
          return result;
        }
        return data.join(', ');
      } else {
        return setObject(data);
      }
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <HeaderTitle alpha2Code={country.alpha2Code} name={country.name} />
      ),
    });
  }, [country]);
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          {Object.keys(country).map(function (keyName, keyIndex) {
            return (
              <View style={styles.optionContainer} key={keyIndex}>
                <Text style={styles.optionName}>
                  {language[keyName] ? language[keyName] : keyName}:
                </Text>
                <Text style={styles.optionDetail}>
                  {findData(country[keyName])}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: WIDGET_BACKGROUND_COLOR,
    height: '100%',
    borderRadius: 5,
  },
  optionContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#495057',
  },
  optionName: {
    color: WIDGET_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  optionDetail: {
    color: WIDGET_TEXT_COLOR,
    fontSize: 18,
  },
});
export default Country;
