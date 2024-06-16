import React, { useState, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Text, TouchableRipple } from 'react-native-paper';

const AnimatedButtonView = (props) => {
  const animatedWidth = useRef(new Animated.Value(270)).current; // Set initial width to 270
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const AnimateButton = (props) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setLoading(true)
    // Start the animation to shrink the button
    Animated.timing(animatedWidth, {
      toValue: 53,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.in,
    }).start(() => {


      // Reverse the animation after a short delay
      setTimeout(() => {
        Animated.timing(animatedWidth, {
          toValue: 270,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.ease
        }).start(() => {
          setLoading(false);
          setIsAnimating(false);
        });
      }, 0); // Delay before reversing the animation
    });
  };

  return (
    <Animated.View style={[styles.buttonGreen, { width: animatedWidth }]}>
      <TouchableRipple onPress={AnimateButton} rippleColor="#4b704b" style={styles.RippleStyle}>
        {loading ? (
          <ActivityIndicator size={30} color="white" />
        ) : (
          <Text style={styles.buttonGreenText}>Continue</Text>
        )}
      </TouchableRipple>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonGreen: {
    backgroundColor: '#324a32',
    borderRadius: 25,
    elevation: 5,
    overflow: 'hidden',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    height: 50, // Ensure a fixed height for the button
  },
  buttonGreenCard: {
    backgroundColor: 'green',
    elevation: 20,
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    height: '100%', // Ensure the card fills the Animated.View
  },
  buttonGreenText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  RippleStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AnimatedButtonView;
