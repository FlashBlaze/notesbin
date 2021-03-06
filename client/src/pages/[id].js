import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "redaxios";
import { SkeletonText, useToast } from "@chakra-ui/react";

import { useNoteStore } from "../store/index";
import CONSTANTS from "../helpers/constants";
import Layout from "../components/Layout";
import SEO from "./seo";

const Post = () => {
  const { note, setNote, setIsSaving } = useNoteStore();
  const [error, setError] = useState(false);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id || window.location.pathname.split("/")[1];
    axios
      .get(`${CONSTANTS.NODE_URL}/${id}`)
      .then((res) => {
        setNote(res.data.note);
        setIsSaving(false);
      })
      .catch(() => {
        toast({
          title: "An unexpected error occurred while fetching the note",
          status: "error",
          duration: 3500,
          isClosable: true,
        });
        setError(true);
      });
  }, []);

  return (
    <Layout>
      <SEO slug="id" description="id" />
      <div
        style={{
          color: "#FFFFFF",
          marginLeft: "0.5rem",
          overflowY: "auto",
          height: "calc(100vh - 77px - 1rem)",
          paddingBottom: "10px",
          width: "100%",
        }}>
        {note.length !== 0 ? (
          <Highlight className="autodetect">{note}</Highlight>
        ) : error ? (
          <span />
        ) : (
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            color="#FFFFFF"
            width={[200, 200, 500, 500]}
          />
        )}
      </div>
    </Layout>
  );
};

export default Post;
