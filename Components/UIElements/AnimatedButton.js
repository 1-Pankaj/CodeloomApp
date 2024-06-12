import { Animated, View } from "react-native"
import Stylesheet from "../StyleSheet/StyleSheet"
import { ActivityIndicator, Card, Text, TouchableRipple } from "react-native-paper"
import { useState } from "react"

const AnimatedButtonView = (props) => {

    const animatedWidth = new Animated.Value(270)

    const [loading, setLoading] = useState(false)

    const AnimateButton = () => {
        Animated.timing(animatedWidth, {
            toValue: 53,
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            setLoading(!loading)
            if(loading){
                Animated.timing(animatedWidth, {
                    toValue: 270,
                    duration: 1000,
                    useNativeDriver: false
                }).start(() => {
                    console.log("Complete");
                    setLoading(false)
                })
            }
        })
    }

    return (
        <Animated.View style={[Stylesheet.buttonGreen, { width: animatedWidth }]}>
            <TouchableRipple onPress={() => { AnimateButton() }} rippleColor="transparent">
                <Card style={Stylesheet.buttonGreenCard}>
                    {loading ?
                        <ActivityIndicator size={30} color="white" />
                        :
                        <Text style={Stylesheet.buttonGreenText}>Continue</Text>
                    }

                </Card>
            </TouchableRipple>
        </Animated.View>
    )
}

export default AnimatedButtonView