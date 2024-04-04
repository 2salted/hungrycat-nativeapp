import { Pressable, Text, View } from "react-native";
import { recipeData } from "./recipedata";

export default function ItemList() {
  return (
    <View>
      {recipeData.map((recipe, index) => {
        return (
          <Pressable key={index}>
            <Text>asdads</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
