import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { items } from "../Items";

export default function ScrollableItem() {
  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: "row" }}>
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                padding: 6,
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 8,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 30,
                }}
              >
                <Text>{item.item}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
