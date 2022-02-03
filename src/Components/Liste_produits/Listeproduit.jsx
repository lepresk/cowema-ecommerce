import React, { useState, useEffect } from "react";
import "./Liste.css";
import Post from './Post'
import Pagination from "./Pagination";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Listeproduit() {
  const [result, setResult] = useState([]);
  // const [loanding, setLoading] = useState(false); Pour gerer le chargement de la page afin d'inserer une Icone de chargement
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerpage] = useState(12);

  useEffect(() => {
    fetch("/api/v2/products/all")
      .then((response) => response.json())
      .then((response) => {
        setResult(response.result);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const minPost= result.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <>
      <Post result={minPost} />
      <Pagination postsPerpage={postsPerpage} totalPosts={result.length}/>
    </>
  );
}
