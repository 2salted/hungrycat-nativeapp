import { SafeAreaView, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MatchedQuery from '../../components/ItemList'
import { useState } from "react";
import { recipeData } from "../../components/recipedata";

export default function recipepage() {
  const params = useLocalSearchParams();
  console.log(params.id)
  for (let i = 0; i < recipeData.length; i++) {
    if (params.id === recipeData[i].linkID) {
      console.log('congrats')
    }
  }
  return (
    <SafeAreaView>
      {}
    </SafeAreaView>
  )
}
