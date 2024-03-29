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
          }, 8000);
        }}
        title={
          isHungry ? `press button to feed ${props.name}` : `${props.name} has been fed`
        }
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
