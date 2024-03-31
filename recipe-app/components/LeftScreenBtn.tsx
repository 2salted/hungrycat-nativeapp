import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function LeftScreenBtn() {
  return (
    <SafeAreaView style={{
      flexDirection: 'row',
    }}>
      <View style={{
        backgroundColor: "#f5f5f5",
        padding: 5,
        borderRadius: 12,
      }}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
            source={require('../assets/images/menu.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
