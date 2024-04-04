import { Pressable, View } from "react-native";
import { recipeData } from "./recipedata";

export default function ItemList() {
  return (
    <View>
      {recipeData.map((recipe, index) => {
        return (
          <Pressable key={index}>
            <View
              style={{
                flex: 1,
              }}
            >
              <View>image</View>
              <View>{recipe.title}</View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
