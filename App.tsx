import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

type catProps = {
  name: string;
};

const Cat = (props: catProps) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Hello! I am {props.name} and I am{" "}
      </Text>
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
