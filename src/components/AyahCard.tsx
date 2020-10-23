import { Box, Divider, Flex, Badge, Text } from "@chakra-ui/core";
import React, { FC } from "react";
import { Chapter } from "../interfaces/QuranChapter";

interface Props {
  data: Chapter;
}

export const AyahCard: FC<Props> = ({ data }) => {
  return (
    <Box boxShadow="0px 0px 7px 0px #404040" background="#272727" width="100%">
      <Box padding="4rem 30px">
        <Text dir="rtl" fontSize="6xl" fontWeight="100" color="#FFF">
          {data?.text_indopak}
        </Text>
      </Box>
      <Divider />
      <Box padding="30px 40px">
        <Flex alignItems="center">
          <Badge background="#FFF" ml="1" fontSize="2em" variant="subtle">
            {data?.verse_key}
          </Badge>
          <Text fontSize="2xl" color="#FFF" paddingLeft="20px" fontWeight="100">
            {data?.translations[0].text}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
