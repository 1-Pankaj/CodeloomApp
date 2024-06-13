import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Stylesheet from "../StyleSheet/StyleSheet";

import Codeloom from '../../assets/Vectors/Codeloom.svg'
import Pageone from '../../assets/Vectors/pageone.svg'
import Pagetwo from '../../assets/Vectors/pagetwo.svg'
import Pagethree from '../../assets/Vectors/pagethree.svg'
import Pagefour from '../../assets/Vectors/pagefour.svg'
import Pagefive from '../../assets/Vectors/pagefive.svg'

import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";
import AnimatedButtonView from "../UIElements/AnimatedButton";

const Onboarding = () => {

    return (
        <SafeAreaView style={[Stylesheet.Container, { justifyContent: 'space-around' }]}>
            <Codeloom />
            <Pageone />
            <AnimatedButtonView/>
        </SafeAreaView>
    )
}

export default Onboarding