import React, { useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Stylesheet from "../StyleSheet/StyleSheet";

import Codeloom from '../../assets/Vectors/Codeloom.svg'
import Pageone from '../../assets/Vectors/pageone.svg'
import Pagetwo from '../../assets/Vectors/pagetwo.svg'
import Pagethree from '../../assets/Vectors/pagethree.svg'
import Pagefour from '../../assets/Vectors/pagefour.svg'
import Pagefive from '../../assets/Vectors/pagefive.svg'

import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text } from "react-native-paper";
import AnimatedButtonView from "../UIElements/AnimatedButton";
import { Layout, ViewPager } from "@ui-kitten/components";

const Onboarding = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <SafeAreaView style={[Stylesheet.Container, { justifyContent: 'space-around' }]}>
            <Codeloom />
            <ViewPager
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                >
                <Layout
                    style={Stylesheet.tab}
                    level='1'
                >
                    <Text>Hello</Text>
                    <Pageone />
                </Layout>
                <Layout
                    style={Stylesheet.tab}
                    level='2'
                >
                    <Pagefour />
                </Layout>
                <Layout
                    style={Stylesheet.tab}
                    level='3'
                >
                    <Pagetwo />
                </Layout>

            </ViewPager>

            <AnimatedButtonView />
        </SafeAreaView>
    )
}

export default Onboarding