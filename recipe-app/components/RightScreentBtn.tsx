import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RightScreenBtn() {
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
          }} name="user-o" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
