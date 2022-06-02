import React, { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import { Article } from "../models/Article";

interface ArticleContextInterface {
  selectedArticle: Article | null;
  setSelectedArticle: Dispatch<any>;
}

export const ArticleContext: React.Context<ArticleContextInterface> = createContext<
  ArticleContextInterface
>({} as ArticleContextInterface);
