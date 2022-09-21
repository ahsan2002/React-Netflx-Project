import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./Components/Card";
import Sdata from "./Sdata";
import "./index.css";


function ncard(val){
    return(
    <Card
    key={val.id}
    imgsrc={val.imgsrc} 
    title={val.title}
    sname={val.sname} 
    link={val.link} />
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <h1 className='heading'>List of Top 5 Netflix in 2022</h1>
    
    {Sdata.map(ncard)}
   </>
    
);