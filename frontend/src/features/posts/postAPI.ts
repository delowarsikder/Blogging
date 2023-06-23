import { PostDeleteData, PostFormData, PostUpdateData, PostsState } from "./postSlice";
import { BASE_URL } from "../../api/endPoint";

export async function fetchPosts() {
  return fetch(`${BASE_URL}/api/v1/posts.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function createPost(payload: PostFormData) {
  const post = payload.post;
  return fetch(`${BASE_URL}/api/v1/posts.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then(response => {
      console.log(JSON.stringify(response));
      return response.json()
    })
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function destroyPost(payload: PostDeleteData) {
  const post = payload.post;
  return fetch(`${BASE_URL}/api/v1/posts/${post.id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then(response => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function updatePost(payload: PostUpdateData) {
  const post = payload.post;
  return fetch(`${BASE_URL}/api/v1/posts/${post.id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then(response => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

