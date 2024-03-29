import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

type catProps = {
  name: string;
};

const Cat = (props: catProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Hello! I am {props.name} and I am {isHungry ? "hungry!" : "full!"}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
          setInterval(() => {
            setIsHungry(true);
          }, 5000);
        }}
        title={isHungry ? "Press button to feed the cats" : "The cats are fed"}
      />
    </SafeAreaView>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="monguba" />
      <Cat name="biblitocy" />
    </>
  );
};

export default Cafe;
