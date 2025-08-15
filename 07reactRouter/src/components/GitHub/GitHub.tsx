import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const GitHub = () => {
    //useLoaderData is a hook from react-router that allows us to access the data returned by the loader function
    const data= useLoaderData(); 

//   const [data,setData]= useState([]);
//   const {githubid}= useParams();

//   useEffect(()=>{
//     fetch('https:api.github.com/users/unstable108')
//     .then(response => response.json()) //string to json
//     .then(data=>{
//         console.log("Github id:", githubid);
//         console.log(data);
//         console.log("followers: ",data?.followers);
//         setData(data);
//     })
//   },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub follewer: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  );
};

export default GitHub;

export const githubInfoLoader= async()=>{
    const response = await fetch('https:api.github.com/users/unstable108')
    return response.json(); //this is a promise, so we return it
}

//githubInfoLoader can return a promise (e.g., from fetch).
//React Router resolves it and passes the result to your component.
//useLoaderData() returns the resolved data (usually JSON), not the promise.