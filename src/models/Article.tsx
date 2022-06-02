export interface SourceArticle {
  id: string;
  name: string;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: SourceArticle;
  title: string;
  url: string;
  urlToImage: string;
}
