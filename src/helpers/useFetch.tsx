import React, { useState } from "react";
import env from "react-dotenv";
import { Article } from "../models/Article";

export const useFetch = (filter: string = ""): Promise<Article[]> => {
  return fetch(
    `${env.API_URL}?domains=${env.API_DOMAINS_SOURCES}&apiKey=${env.API_KEY}${
      filter && `&q=${encodeURI(filter)}`
    }`
  )
    .then((resp) => resp.json())
    .then(({ articles }) => articles);
};
