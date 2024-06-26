import { Image, SafeAreaView, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import RightScreenBtn from "@/components/RightScreentBtn";
import { recipeData } from "@/components/recipedata";

export default function recipepage() {
  const params = useLocalSearchParams();

  return (
    <ScrollView style={{
      width: useWindowDimensions().width,
      height: useWindowDimensions().height,
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
                  paddingTop: 20,
                  padding: 15,
                }}>
                  <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                  }}>{item.title}</Text>
                  <Text style={{
                    textAlign: "center",
                    paddingTop: 10
                  }}>{item.titleDescription}</Text>
                </View>
                <View style={{
                  alignItems: "center"
                }}>
                  <Image
                    resizeMode="cover"
                    source={item.image}
                    style={{
                      width: 300,
                      height: 170,
                      borderRadius: 12,
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View style={{
                  paddingTop: 20
                }}>
                  <Text style={{
                    fontSize: 20,
                    textAlign: "center"
                  }}>Cooking Info:</Text>
                  <View style={{
                    padding: 10,
                    margin: 20,
                    flexWrap: 'wrap',
                    flexDirection: "row",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}>
                    <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>prep time: {item.prepTime}</Text>
                    <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>cook time: {item.cookingTime}</Text>
                    <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>total time: {item.totalTime}</Text>
                    <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>servings: {item.servings}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{
                    fontSize: 20,
                    textAlign: "center",
                    paddingBottom: 8
                  }}>Ingredients:</Text>
                  <View>
                    {item.ingredients.map((ingredient, index) => {
                      return (
                        <View key={index} style={{
                          padding: 5
                        }}>
                          <Text style={{
                            textAlign: "center",
                            fontSize: 15
                          }}>{ingredient}</Text>
                        </View>
                      )
                    })}
                  </View>
                </View>
                <View>
                  <View style={{
                    paddingTop: 20
                  }}>
                    <Text style={{
                      fontSize: 20,
                      textAlign: "center"
                    }}>Nutrition Facts:</Text>
                    <View style={{
                      padding: 10,
                      margin: 20,
                      flexWrap: 'wrap',
                      flexDirection: "row",
                      borderWidth: 1,
                      borderRadius: 20,
                    }}>
                      <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>Calories: {item.calories}</Text>
                      <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>Fat: {item.fat}</Text>
                      <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>Carbs: {item.carbs}</Text>
                      <Text style={{ padding: 6, textAlign: "center", flexBasis: '50%' }}>Protein: {item.protein}</Text>
                    </View>
                  </View>

                </View>
              </View>
            )
          }
        })
      }
    </ScrollView>
  )
}
