import { Image, Pressable, ScrollView, Text, View } from "react-native";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export default function WeeklyRecipes() {
  const [meals, setMeals] = useState();

  let weeklyRecipesList = [
    {
      title: "Goldenrod Egg",
      subtitles: "eggs",
      image: require("../assets/images/goldenrodegg.webp"),
    },
    {
      title: "Old-Fashioned Potato Salad",
      subtitles: "potato salad recipe",
      image: require("../assets/images/potato.webp"),
    },
    {
      title: "Grilled Cheese Sandwich",
      subtitles: "grilled cheese",
      image: require("../assets/images/grilledcheesesandwich.webp"),
    },
  ];

  let newArr = [];

  function shuffle(array: object[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(weeklyRecipesList);
  newArr = weeklyRecipesList.splice(0, 2);
  console.log(newArr);

  useEffect(() => {}, []);

  return (
    <ScrollView>
      <View>
        {newArr.map((recipe, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable>
                  <Image
                    resizeMode="cover"
                    source={recipe.image}
                    style={{
                      width: 300,
                      height: 170,
                      borderRadius: 12,
                    }}
                  />
                  <Text
                    style={{
                      paddingVertical: 12,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    {recipe.title}
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
