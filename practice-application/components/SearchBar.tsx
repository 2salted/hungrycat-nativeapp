import { Text, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
      }}
    >
      <TextInput
        style={{
          flex: 4,
          padding: 10,
          fontSize: 20,
          backgroundColor: "#e8e8e8",
          borderRadius: 40,
        }}
      />
      <Text style={{ flex: 1 }}>Se</Text>
    </View>
  );
}
