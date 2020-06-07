import React from 'react';
import { StyleSheet, View, Image, Text,Button, ScrollView } from 'react-native';
import {SearchResources}  from './resources-search';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    height: '50%',
    width: '50%',
    resizeMode: 'center'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 18,
    color: '#323232'
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  }
});

const Choices = () => (
  <View style={styles.center}>
    <Image style={styles.image}
      source={require('../images/logo-512.png')}
    />
    <Text style={styles.title}>loading...</Text>
  </View>
);
 funct=function(){
        return (
            <ScrollView>
                 <Text style={styles.title}>
                     "Select your Role"
              </Text>
            <View style={styles.center}>
             
              <Button
                title="Supplier"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <Separator />
            <View>
              <Text style={styles.title}>
              </Text>
              <Button
                title="Consumer"
                onPress={SearchResources}
              />
            </View>
            <Separator />
            </ScrollView>
        );
};
export default Choices;
