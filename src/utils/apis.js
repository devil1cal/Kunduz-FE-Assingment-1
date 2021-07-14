//import
import axios from "axios";
import { BASE_API_URL } from "./constants";

//style

//components

//node

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};

//comment fecth but nor working
/*
 * function limitComments(comment) {
 * if (!comment || comment.level > 5 || comment.deleted) return null;
 *
 * comment.comments = comment.comments.map(limitComments).filter(Boolean);
 * return comment;
 * }
 *
 * export async function PostDataWithComments(id) {
 * const data = await fetch(`${ITEM_URL}/${id}.json`)
 *   .then((res) => res.json())
 *   .catch((e) => {
 *     console.error(e);
 *   });
 *
 * if (!data) return null;
 *
 * if (data.url.startsWith("item?id=")) {
 *   data.url = data.id;
 * }
 *
 * var comments = [];
 * if (data.comments) {
 *   comments = data.comments
 *     .map((comment) => limitComments(comment))
 *     .filter(Boolean);
 * }
 *
 * data.comments = comments;
 * return data;
  } */
