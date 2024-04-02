import SearchBar from "@/components/SearchBar";
import { Stack, useRouter } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Text, View, SafeAreaView } from "react-native";
import LeftScreenBtn from "@/components/LeftScreenBtn";
import RightScreenBtn from "@/components/RightScreentBtn";
import ScrollViewSelect from "@/components/ScrollViewSelect";
import WeeklyRecipes from "@/components/WeeklyRecipes";

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
          headerLeft: () => <LeftScreenBtn />,
          headerRight: () => <RightScreenBtn />,
        }}
      />
      <View style={{ paddingTop: 30 }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Search any cooking recipe
        </Text>
        <SearchBar />
        <ScrollViewSelect />
      </View>
      <View
        style={{
          paddingTop: 30,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            paddingBottom: 15,
          }}
        >
          Top Weekly Recipes!
        </Text>
        <WeeklyRecipes />
      </View>
    </SafeAreaView>
  );
}
