import {
  Pressable,
  SafeAreaView,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RightScreenBtn() {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          padding: 5,
        }}
      >
        <Pressable>
          <FontAwesome
            style={{
              fontSize: 40,
              paddingBottom: 6
            }}
            name="user-o"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
