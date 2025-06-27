import { useState } from "react";
import { Author, Story } from "../hooks/useFetchStories";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function NewsItem({ story }: { story: Story }) {
  const [author, setAuthor] = useState<Author>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleClick() {
    if (!isExpanded) {
      setIsExpanded(true);
      fetch("https://hacker-news.firebaseio.com/v0/user/" + story?.by + ".json")
        .then((response) => response.json())
        .then((data) => setAuthor(data));
    }
  }

  return (
    <Box sx={{ minWidth: 275, maxWidth: 600 }}>
      <Card variant="outlined" sx={{ cursor: "pointer" }}>
        <CardContent onClick={handleClick}>
          {!isExpanded ? (
            <div>
              <Typography
                gutterBottom
                sx={{ color: "text.primary", fontSize: 18 }}
              >
                Title: {story?.title}
              </Typography>

              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Url: {story?.url}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Author: {story?.by}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Score: {story?.score}
              </Typography>
            </div>
          ) : (
            <div>
              <Typography
                gutterBottom
                sx={{ color: "text.primary", fontSize: 18 }}
              >
                Title: {story?.title}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 12 }}
              >
                <div> {story?.text} </div>
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Url: <a href={story?.url}>{story?.url}</a>
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                <p>Author: {story?.by}</p>
              </Typography>

              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Score: {story?.score}
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Karma: {!author?.karma ? "Loading" : author?.karma}
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default NewsItem;
