import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { recipeData } from "./recipedata";
import { useState } from "react";

type props = {
  searchQueryTest: string;
}

export default function ItemList({ searchQueryTest }: props) {
  let matchedQuery = recipeData.filter((item) => item.title.toLowerCase().includes(searchQueryTest.toLowerCase()))
  console.log(matchedQuery)

  return (
    <ScrollView>
      {matchedQuery.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
}
