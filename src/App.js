import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";

const Editor = () => {
    const formattedHTML = (html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html ;
      // Remove all style attributes 
      const elementsWithStyle = tempDiv.querySelectorAll('*[style]');
      elementsWithStyle.forEach((element) => {
        element.removeAttribute('style');
      });
      return tempDiv.innerHTML.replace(/<[^>]*>/g, '<p>');
    };
    const [state, setState] = useState({ value: "" });
    const [postValue, setPostValue] = useState(""); 
  
    const handleChange = (value) => {
      setState({ value });
    };
  
    const handlePost = () => {
      setPostValue(state.value); 
    };

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={{ toolbar: false }}
      />
      <button onClick={handlePost}>Post</button>
      <div className="post-box">
        <h3>Posted Content:</h3>
        <ReactQuill
        theme="snow"
        value={formattedHTML(postValue)}
        readOnly
        modules={{ toolbar: false }}
      />
      </div>
    </div>
  );
};

export default Editor;
