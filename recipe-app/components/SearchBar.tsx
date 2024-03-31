import { Image, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  return (
    <View
      style={{
        padding: 12,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 5,
        }}
      >
        <TextInput
          placeholder="Search for any recipe..."
          placeholderTextColor="#8e8e8e"
          style={{
            backgroundColor: "#f5f5f5",
            borderStartStartRadius: 30,
            borderEndStartRadius: 30,
            padding: 12,
            fontSize: 16,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#Fda6a6",
            borderStartEndRadius: 30,
            borderEndEndRadius: 30,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/searchpng.png")}
            style={{
              height: 25,
              width: 25,
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
