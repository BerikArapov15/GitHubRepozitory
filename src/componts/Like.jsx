import { useState } from "react";

const Like = () => {
   
   const[like, setLike]= useState(true)
   console.log(like);
    return (
        <div>
            <h2 onClick={()=>setLike((prevLike)=>!prevLike)}>Like:{like?'♡': '❤'} </h2>
        </div>
    );
};

export default Like;