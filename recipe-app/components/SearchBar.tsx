import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

type props = {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchBar({ setIsSearching }: props) {
  const [searchQuery, setSearchQuery] = useState("");

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
          value={searchQuery}
          style={{
            backgroundColor: "#f5f5f5",
            borderStartStartRadius: 30,
            borderEndStartRadius: 30,
            padding: 12,
            fontSize: 16,
          }}
          onChangeText={(userInput) => {
            setSearchQuery(userInput);
            if (userInput !== "") {
              setIsSearching(true);
            } else {
              setIsSearching(false);
            }
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
            backgroundColor: "#E55451",
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
