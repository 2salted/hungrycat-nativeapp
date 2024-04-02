import { FontAwesome } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function LeftScreenBtn() {
  return (
    <SafeAreaView style={{
      flexDirection: 'row',
    }}>
      <View style={{
        padding: 5,
      }}>
        <TouchableOpacity>
          <FontAwesome style={{
            fontSize: 40,
          }} name="bars" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
