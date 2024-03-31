import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ScrollableItem from "./components/ScrollableItem";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <SafeAreaView>
      <SearchBar />
      <ScrollView>
        <ScrollableItem />
      </ScrollView>
    </SafeAreaView>
  );
}
