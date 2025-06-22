import { useEffect, useState } from "react";

interface Story {
  id: string;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: string;
  poll: string;
  kids: string[];
  url: string;
  score: number;
  title: string;
  parts: string[];
  descendants: number;
}

interface Author {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: string[];
}

const NewsItem = ({ id }: { id: String }) => {
  const [story, setStory] = useState<Story>();
  const [author, setAuthor] = useState<Author>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
      .then((response) => response.json())
      .then((data) => setStory(data));
  }, []);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      fetch("https://hacker-news.firebaseio.com/v0/user/" + story?.by + ".json")
        .then((response) => response.json())
        .then((data) => setAuthor(data));
    }
  };

  return (
    <div onClick={handleClick}>
      {!isExpanded ? (
        <div>
          <h1>Title: {story?.title}</h1>
          <p>Url: {story?.url}</p>
          <p>Author: {story?.by}</p>
          <p>Score: {story?.score}</p>
        </div>
      ) : (
        <div>
          <h1>Title: {story?.title}</h1>
          <div> {story?.text} </div>
          <a href={story?.url}>Url: {story?.url}</a>
          <p>Author: {story?.by}</p>
          <p>Score: {story?.score}</p>
          <p>Karma: {!author?.karma ? "Loading" : author?.karma}</p>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
