import SearchBar from "@/components/SearchBar";
import { Stack, useRouter } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ExpoStatusBar hidden={false} translucent={false} style="dark" />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 25,
            paddingHorizontal: 10,
            textAlign: "center",
          }}
        >
          Search any cooking recipe
        </Text>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
