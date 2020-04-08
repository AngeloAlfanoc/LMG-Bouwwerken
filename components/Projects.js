import React, { Component } from 'react';
import axios from 'axios';
import {instaObject} from '../Settings'




export class Projects extends Component {
  componentDidMount() {
    const outputContainer = document.getElementById('insta-output')
    let counter = 0;
      axios.get(`https://www.instagram.com/graphql/query/?query_hash=2c5d4d8b70cad329c4a6ebe3abb6eedd&variables={"id":${instaObject.INSTA_ID},"first":40,"after":""}`)
      .then(function (res){
      let responseArr = (res.data.data.user.edge_owner_to_timeline_media.edges)
      if (responseArr.length) {
        outputContainer.innerHTML=''
      }
        for (let child of responseArr) {
          let url = child.node.display_url;
          let href = child.node.shortcode;
          let instapost = document.createElement('div')
          instapost.id='project-'+counter
          instapost.setAttribute('class','col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center flex-row my-3')
          instapost.setAttribute('style', 'cursor:pointer')
          let name;
          if (child.node.edge_media_to_caption.edges[0] === undefined) {
            name = '';
            instapost.innerHTML=`<div onclick="location.href='https://www.instagram.com/p/${href}'">
            <img class="img-fluid rounded shadow-sm" style="height:20rem" src=${url}></img>
            <h3 class="my-3 text-left"></h3></div>` 
            
          }
          else{
            name = child.node.edge_media_to_caption.edges[0].node.text
            name.substr(0,9)
            instapost.innerHTML=`<div onclick="location.href='https://www.instagram.com/p/${href}'">
            <img class="img-fluid rounded shadow-sm" style="height:20rem" src=${url}></img>
            <h3 class="my-3 text-left">${name.substr(0,40)+'...'}</h3></div>`  
          }
          counter++
          outputContainer.appendChild(instapost)
        }
    })
  }
  

  render() {


    return (
        <main id='projects'>
          <div class="container">
            <div class="d-flex flex-row flex-wrap my-5" id="insta-output">
              <div class="my-5">Er zijn op dit moment geen projecten gepubliceerd</div>
             </div>
          </div>
        </main>
    );
  }
}

export default Projects;