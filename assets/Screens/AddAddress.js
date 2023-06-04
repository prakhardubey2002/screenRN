import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const AddAddress = ({ navigation }) => {
  const [name, setName] = useState('Hemendra Mali');
  useEffect(() => {
    navigation.setOptions({
      title: "Setting",
      headerHeight: 50,
      headerStyle: {
        backgroundColor: '#fff',
        height: 50,
      },
      headerLeft: () => (
        <TouchableOpacity style={{
          marginLeft: 20
        }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" style={{ color: "#EC303A", paddingLeft: "40" }} size={14} color="black" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Text style={{
            color: "#EC303A", marginLeft: 50, fontSize: 14, fontFamily: "PoppinsBold", lineHeight: 21
          }} > Add delivery Address </Text>
        </View>
      ),
    });

  }
    , [])
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  const onNextStep = () => {
    console.log('called next step');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  const progressStepsStyle = {
    // activeStepIconBorderColor: 'lightblue',
    activeLabelColor: 'black',
    activeStepNumColor: 'black',
    activeStepIconColor: '#d9d9d9',
    completedStepIconColor: '#d9d9d9',
    completedProgressBarColor: '#d9d9d9',
    inactiveLabelColor: 'black',
    // completedCheckColor: 'green'
  };

  const buttonTextStyle = {
    color: '#686868',
    fontWeight: 'bold'
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="Cart"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text >This is the content within step 1!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Address"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ flex: 1, padding: '1rem' }}>
            <Text style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 17,
              lineHeight: 1.1 * 17,
            }}>Name</Text>
            <TextInput
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                paddingLeft: 15,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                gap: 10,
                backgroundColor: '#F5F6FA',
                borderRadius: 10,
                height: 50,
                placeholderTextColor: '#b2b6be',
              }}
              value={name}
              changeText={(text) => setName(text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Payment"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Summary"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 4!</Text>
          </View>
        </ProgressStep>

      </ProgressSteps>
    </View>
  );
};

export default AddAddress;

