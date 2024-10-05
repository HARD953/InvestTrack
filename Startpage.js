import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, View } from 'react-native';

// import { Container } from './styles';
const {height}=Dimensions.get("window")

const Startpage = () => {
  return(
<SafeAreaView>
    <View>
        <ImageBackground 
         style={{height: height/2.5}}
         resizeMode='contain'
         source={require("./assets/icon.png")}/>
    </View>
    <View>
        <Text
            style={{
                paddingHorizontal:2 ,
            }}>
            Discover Your Dream Job
        </Text>
    </View>
</SafeAreaView>
    )
};

export default Startpage;