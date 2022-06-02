import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../helpers/useFetch";
import { Article } from "../models/Article";
import { Container, Row, Col, Spinner, Card, Navbar } from "react-bootstrap";
import { ArticleContext } from "../context/ArticleContext";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search";

interface ArticleState {
  data: Article[];
  loading: boolean;
}

export const Dashboard = () => {
  const [articles, setArticles] = useState({
    data: [],
    loading: true,
  } as ArticleState);

  const { setSelectedArticle } = useContext(ArticleContext);

  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = (filter: string = "") => {
    setArticles({ ...articles, loading: true });

    useFetch(filter).then((data: Article[]) => {
      setArticles({
        loading: false,
        data,
      });

      console.log(data, articles);
    });
  };

  const goToDetails = (e: React.ChangeEvent<any>, article: Article) => {
    e.preventDefault();
    setSelectedArticle(article);
    navigate("/details");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="px-5">
        <Col>
          <Row className="d-flex align-items-between">
            <Col xs={4}>
              <Navbar.Brand>WorldWide News</Navbar.Brand>
            </Col>

            <Col xs={6}>
              <Search onSubmit={getArticles}></Search>
            </Col>
          </Row>
        </Col>
      </Navbar>

      <Container className="p-3">
        {articles.loading && (
          <Row className="d-flex flex-row justify-content-center align-items-center">
            <Spinner
              animation="border"
              role="status"
              variant="primary"
              className="m-0"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        )}

        {!articles.loading && (
          <Row className="d-block d-md-flex align-items-stretch">
            {(articles.data || []).map((article, index) => (
              <Col
                key={index}
                md={4}
                className="my-2"
                onClick={(e) => goToDetails(e, article)}
              >
                <Card>
                  <Card.Header className="bg-dark text-white">
                    {article.title}
                  </Card.Header>

                  <Card.Body className="p-0">
                    <Card.Img src={article.urlToImage}></Card.Img>
                  </Card.Body>

                  <Card.Footer>
                    <div className="p-2">{article.description}</div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};
