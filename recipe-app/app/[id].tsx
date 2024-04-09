import { SafeAreaView, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import LeftScreenBtn from "@/components/LeftScreenBtn";
import RightScreenBtn from "@/components/RightScreentBtn";
import { recipeData } from "@/components/recipedata";

export default function recipepage() {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => <RightScreenBtn />,
        }}
      />
      {
        recipeData.map((item, index) => {
          if (params.id === item.linkID) {
            return (
              <View key={index}>
                <View style={{
                  alignItems: 'center'
                }}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            )
          }
        })
      }
    </SafeAreaView>
  )
}
