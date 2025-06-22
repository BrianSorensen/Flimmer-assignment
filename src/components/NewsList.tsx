import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((data) => setData(data.splice(0, 20)));
  }, []);

  const listItems = data.map((item) => (
    <NewsItem id={item} key={item}></NewsItem>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default NewsList;
