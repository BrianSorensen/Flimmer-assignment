import { useFetchStories } from "../hooks/useFetchStories";
import NewsItem from "./NewsItem";

function NewsList() {
  const { stories } = useFetchStories(20);

  stories?.sort((a, b) => a.score - b.score);

  return (
    <div className="news-list">
      {stories &&
        stories.map((item) => <NewsItem story={item} key={item.id}></NewsItem>)}
    </div>
  );
}

export default NewsList;
