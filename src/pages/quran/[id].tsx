import { Box, Button, Container, Spinner, Stack } from "@chakra-ui/core";
import Axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { AyahCard } from "../../components/AyahCard";
import { Chapter } from "../../interfaces/QuranChapter";
import Router from "next/router";

const QuranChapter: NextPage = () => {
  const [quran, setQuran] = useState<Chapter[] | null>(null);

  const ID = Router.router?.query?.id;

  Axios.get(
    `https://api.quran.com/api/v3/chapters/${ID}/verses?recitation=1&translations=21&language=en&text_type=words`
  ).then(({ data: { verses } }) => {
    setQuran(verses);
  });

  return (
    <Container maxW="lg" padding="4rem 0">
      {!quran ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <Box>
          <Box paddingBottom="1rem">
            <Button onClick={() => Router.push("/")}>Home</Button>
          </Box>
          <Stack spacing={8}>
            {quran?.map((verse: Chapter) => {
              return <AyahCard key={verse.id} data={verse} />;
            })}
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default QuranChapter;
