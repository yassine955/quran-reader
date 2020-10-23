import { Box, Divider, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import { Quran } from "../interfaces/QuranChapter";
import Router from "next/router";

interface Props {
  data: Quran;
}

export const ChapterCard: FC<Props> = ({ data }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="#272727"
      w="100%"
      flexDirection="column"
      padding="1rem 0"
      transition="transform .2s"
      boxShadow="0 0 6px 0px #292929"
      cursor="pointer"
      _hover={{
        transform: "scale(1.08)",
      }}
      onClick={() => {
        Router.push(`/quran/${data.chapter_number}`);
      }}
    >
      <Text fontSize="3xl" fontWeight="300" color="#FFF">
        {`${data?.chapter_number}. ${data?.name_simple}`}
      </Text>
      <Divider />
      <Text fontSize="3xl" fontWeight="100" color="#FFF">
        {data?.name_arabic}
      </Text>
    </Box>
  );
};
