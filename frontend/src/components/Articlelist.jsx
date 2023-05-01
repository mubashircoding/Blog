import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import APIService from "./APIService";
function Articlelist(props) {
  const editBtn = (article) => {
    props.editBtn(article)
  }
  const deleteBtn = (article) => {
    APIService.DeleteArticle(article.id)
    .then(()=> props.deleteBtn(article))
    .catch(error => console.log(error))
  }
  return <div>
    {props.articles && props.articles.map((article) => {
    return(
      <div key={article.id}>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="row">
        <div className="col-md-1">
        <button className="btn btn-primary" onClick={()=>editBtn(article)}>Update</button>
        </div>
        <div className="col-md-1">
        <button className="btn btn-primary bg-red-500" onClick= {()=>deleteBtn(article)}>Delete</button>
        </div>
      </div>
      <hr className="post_line"/>
      </div>
    )
  })}</div>;
}

export default Articlelist;
