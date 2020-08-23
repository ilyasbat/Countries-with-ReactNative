import React, {useEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {WIDGET_BACKGROUND_COLOR, WIDGET_TEXT_COLOR} from '../../config';
function SearchBar({action}) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    action(query);
  }, [query]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={WIDGET_TEXT_COLOR}
        onChangeText={(e) => {
          setQuery(e);
        }}
        value={query}
      />
      {query.length > 0 && (
        <TouchableWithoutFeedback onPress={() => setQuery('')}>
          <View style={styles.cancelButtonContainer}>
            <Text style={{color: WIDGET_TEXT_COLOR, alignContent: 'center'}}>
              x
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: WIDGET_BACKGROUND_COLOR,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  input: {
    width: '95%',
    height: 24,
    padding: 0,
    color: WIDGET_TEXT_COLOR,
    fontSize: 18,
  },
  cancelButtonContainer: {
    width: 24,
    height: 24,
    borderRadius: 24,
    padding: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#495057',
  },
});
export default SearchBar;
