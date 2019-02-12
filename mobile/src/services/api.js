import axios from "axios";

export const events = axios.create({
  baseURL: "https://ibbt.org.br/wp-json/tribe/events/v1/events",
  timeout: 5000
});

export const posts = axios.create({
  baseURL: "https://ibbt.org.br/wp-json/wp/v2/posts/",
  timeout: 5000
});
