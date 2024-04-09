import { Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function recipepage() {
  const params = useLocalSearchParams();
  console.log(params)
  return (
    <View>
      <Text>test</Text>
    </View>
  )
}
