import { getCommentMentions } from "../../api/comments";
import { objectGetParamsToString } from "../../utils/common";
import { Feed, FeedItem } from "./types";
import { Dispatch, SetStateAction, useState } from "react";
/* istanbul ignore next */
const usersFeed: Feed = {
  marker: "@",
  feed: async (searchString: string): Promise<FeedItem[]> => {
    const response = await getCommentMentions(
      `?${objectGetParamsToString({ search: searchString })}`
    );
    return (await response.json()).data;
  },
  minimumCharacters: 3,
};
/* istanbul ignore next */
const useCKEditor = (): {
  usersFeed: Feed;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
} => {
  const [content, setContent] = useState("");
  return { usersFeed, content, setContent };
};

export default useCKEditor;
