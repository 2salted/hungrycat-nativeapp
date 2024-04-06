import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { recipeData } from "./recipedata";

type props = {
  searchQueryTest: string;
}

export default function ItemList({ searchQueryTest }: props) {
  let matchedQuery = recipeData.filter((item) => item.title.toLowerCase().includes(searchQueryTest.toLowerCase()))
  console.log(matchedQuery)

  return (
    <ScrollView style={{
      height: useWindowDimensions().height / 1.5
    }}>
      {matchedQuery.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <View style={{
              flexDirection: 'row',
              width: 210,
            }}>
              <View style={{
                paddingVertical: 10
              }}>
                <Image source={item.image} style={{
                  height: 200,
                  width: 150,
                  borderRadius: 20,
                }} />
              </View>
              <View style={{
                padding: 10
              }}>
                <Text numberOfLines={1} style={{
                  fontSize: 18,
                  fontWeight: "600",
                }}>{item.title}</Text>
                <Text style={{
                  paddingVertical: 6
                }}>{item.titleDescription}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
}

