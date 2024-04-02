import { FontAwesome } from "@expo/vector-icons";
import { Pressable, SafeAreaView, View } from "react-native";

export default function LeftScreenBtn() {
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
            }}
            name="bars"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
