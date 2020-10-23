import { Container, Grid, Spinner } from "@chakra-ui/core";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ChapterCard } from "../components/ChapterCard";

import Axios from "axios";
import { Quran } from "../interfaces/QuranChapter";

const Homepage: NextPage = () => {
  const [quran, setQuran] = useState<Quran[] | null>(null);

  useEffect(() => {
    Axios.get("https://api.quran.com/api/v3/chapters").then(
      ({ data: { chapters } }) => {
        setQuran(chapters);
      }
    );
  }, []);

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
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {quran?.map((chapter: Quran) => {
            return <ChapterCard key={chapter.chapter_number} data={chapter} />;
          })}
        </Grid>
      )}
    </Container>
  );
};

export default Homepage;
