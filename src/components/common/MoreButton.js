import React from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {WIDGET_BACKGROUND_COLOR, WIDGET_TEXT_COLOR} from '../../config';
import {language} from '../../language';
function MoreButton({action, title = language.more}) {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: WIDGET_BACKGROUND_COLOR,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: WIDGET_TEXT_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default MoreButton;
