import { useEffect, useState } from "react";

export default function Article({ article }) {
  //make sure whatever you're extracting from props is the right name. the props name here is article

  // const { author } = article; // using structuring syntax to get an author property from article object
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const authorUsername = article.userId;
    const author_url = `https://jsonplaceholder.typicode.com/users/${authorUsername}`;
    async function getAuthor() {
      const resp = await fetch(author_url);
      const data = await resp.json();
      setAuthor(data);
    }
    getAuthor();
  }, []);

  return (
    <div className="article">
      <p className="title">{article.title}</p>
      <div className="line"></div>
      {author && (
        <p className="author-details">
          By <span>{author.name}</span> <br />
        </p>
      )}
      <p className="body">{article.body}</p>
    </div>
  );
}
