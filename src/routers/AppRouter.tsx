import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticleDetails } from "../components/ArticleDetails";
import { Dashboard } from "../components/Dashboard";
import { ArticleContext } from "../context/ArticleContext";
import { Article } from "../models/Article";

export const AppRouter = () => {
  const [selectedArticle, setSelectedArticle] = useState({} as Article);

  return (
    <BrowserRouter>
      <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details" element={<ArticleDetails />} />
          <Route
            path="*"
            element={
              <main>
                <h1>Oops! Nothing here!</h1>
              </main>
            }
          />
        </Routes>
      </ArticleContext.Provider>
    </BrowserRouter>
  );
};
