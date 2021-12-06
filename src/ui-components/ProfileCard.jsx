/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileCard(props) {
  const { ProfileCard, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="336px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="497px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        top="0px"
        left="0px"
        width="336px"
        position="absolute"
        height="497px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Image
        width="336px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0px"
        left="0px"
        height="200px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Image
        padding="0px 0px 0px 0px"
        top="99px"
        borderRadius="90px"
        left="93px"
        width="150px"
        position="absolute"
        height="150px"
        {...getOverrideProps(overrides, "View.Image[1]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="255px"
        left="119.20176696777344px"
        width="97.59645080566406px"
        fontSize="16px"
        lineHeight="40px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="37px"
        children="なまえ"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="309px"
        left="34px"
        width="268px"
        fontSize="16px"
        lineHeight="40px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="54px"
        children="ぷろふぃーる"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
