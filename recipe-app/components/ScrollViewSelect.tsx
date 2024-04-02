import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ScrollViewSelect() {
  let scrollItems = [
    { selectItem: 'Baking recipes' },
    { selectItem: 'Cheap recipes' },
    { selectItem: 'Vegetarian' },
    { selectItem: 'Halal recipes' },
    { selectItem: 'Italian recipes' },
    { selectItem: 'Mexican recipes' },
  ]

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={{
        flexDirection: 'row',
        paddingLeft: 15,
      }}>
        {scrollItems.map((item, index) => {
          return (
            <View key={index} style={{
              paddingRight: 15,
              paddingVertical: 5
            }}>
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 20,
                  backgroundColor: '#f2f2f2'
                }}>
                <Text>{item.selectItem}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
