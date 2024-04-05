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

export default function ItemList() {
  return (
    <ScrollView>
      {recipeData.map((recipe, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              width: 230,
              paddingVertical: 15,
              paddingLeft: 5,
            }}
          >
            <View style={{}}>
              <Image
                style={{
                  width: 130,
                  height: 170,
                  borderRadius: 18,
                }}
                source={recipe.image}
              />
            </View>
            <View
              style={{
                padding: 15,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  fontSize: 18,
                  fontWeight: "600",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                {recipe.title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {recipe.titleDescription}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
