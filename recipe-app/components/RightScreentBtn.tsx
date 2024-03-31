import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function RightScreenBtn() {
  return (
    <SafeAreaView style={{
      flexDirection: 'row',
    }}>
      <View>
        <TouchableOpacity>
          <Image style={{
            width: 50,
            height: 50,
            borderRadius: 12,
          }}
            resizeMode="contain"
            source={require('../assets/images/kemal.jpg')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
