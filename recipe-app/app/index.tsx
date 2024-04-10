import SearchBar from "@/components/SearchBar";
import { Stack, Link } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Text, View, SafeAreaView } from "react-native";
import LeftScreenBtn from "@/components/LeftScreenBtn";
import RightScreenBtn from "@/components/RightScreentBtn";
import ScrollViewSelect from "@/components/ScrollViewSelect";
import WeeklyRecipes from "@/components/WeeklyRecipes";
import { useState } from "react";
import ItemList from "@/components/ItemList";

export default function Home() {
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
        <SearchBar setIsSearching={setSearching} setSearchQueryProp={setSearchQuery} />
        <ScrollViewSelect />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {searching && searchQuery ? (
          <ItemList searchQueryTest={searchQuery} />
        ) : (
          <View>
            <Text
              style={{
                paddingTop: 15,
                textAlign: "center",
                fontSize: 22,
                paddingBottom: 15,
              }}
            >
              Top Weekly Recipes!
            </Text>
            <WeeklyRecipes />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

