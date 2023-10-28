import "./styles.css";
import { useEffect, useState } from "react";
import Article from "./components/article";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false); //will constain state of data fetching. if data isn't ready, then loading will be true and once data is ready then loading will be false

  useEffect(() => {
    const source_url = `https://jsonplaceholder.typicode.com/posts`;

    async function getArticles() {
      const resp = await fetch(source_url);
      const data = await resp.json();
      setArticles(data);
      setLoading(false);
    }

    setLoading(true);
    setTimeout(() => {
      console.log(loading);
      getArticles();
      console.log(loading);
    }, 2000); //setting a delay of 2seconds
  }, []); //second argument. for time being, it's empty. if no second argument provided, then it means that function/code inside useEffect will be running every time component is rendered

  return (
    <div className="App">
      <h3 className="header">Recent Posts</h3>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        articles.map(function (article) {
          return (
            <div key={article.id}>
              <Article article={article} />
            </div>
          );
        })
      )}
    </div>
  );
}
