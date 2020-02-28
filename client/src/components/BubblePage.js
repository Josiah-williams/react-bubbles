import React, { useState,} from "react";
import axios from 'axios'
import axiosWithAuth from './utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // useEffect(() => {
  //   getData();
  // },[]);
  // const getData=()=>{
    axiosWithAuth().get('/colors')
    .then(response=>{
        setColorList(
            response.data
        );
           // console.log(response)
        })
           .catch(error=>{
            //   console.log("FRIENDS SOMETHING WRONG")
              console.log(error);
          }) 
   
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
}

export default BubblePage;
