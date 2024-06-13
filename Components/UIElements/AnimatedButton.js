import React, { useState, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Text, TouchableRipple } from 'react-native-paper';

const AnimatedButtonView = (props) => {
  const animatedWidth = useRef(new Animated.Value(270)).current; // Set initial width to 270
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const AnimateButton = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Start the animation to shrink the button
    Animated.timing(animatedWidth, {
      toValue: 53,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setLoading(true);

      // Reverse the animation after a short delay
      setTimeout(() => {
        Animated.timing(animatedWidth, {
          toValue: 270,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          setLoading(false);
          setIsAnimating(false);
        });
      }, 1000); // Delay before reversing the animation
    });
  };

  return (
    <Animated.View style={[styles.buttonGreen, { width: animatedWidth }]}>
      <TouchableRipple onPress={AnimateButton} rippleColor="transparent">
        
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
    backgroundColor: 'green',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    height: 50, // Ensure a fixed height for the button
  },
  buttonGreenCard: {
    backgroundColor: 'green',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    height: '100%', // Ensure the card fills the Animated.View
  },
  buttonGreenText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AnimatedButtonView;
