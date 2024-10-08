import React, { useEffect, useState } from "react";
import "./Dashboard.style.css";
import Card from "../Card/Card";
import BarLoader from "react-spinners/BarLoader";

function Dashboard() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8a01f95a3ce49709aa3b3dcd797da85"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setHeadlines(data.articles);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  console.log(headlines);

  return (
    <div>
      <div className="headlineSection">
        <div className="sectionTitle">Headlines</div>
        <div>
          {headlines.length === 0 ? (
            //If data is not fetched from the api.
            <div className="loading">
              <div>Loading</div>
              <div>
                <BarLoader height={11} width={200} />
              </div>
            </div>
          ) : (
            //If data is recieved from the api.
            <>
              {headlines.map((item, index) => (
                <div key={index}>
                  {index <= 8 && item.description && <Card item={item} />}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
