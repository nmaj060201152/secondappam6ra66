'use client';
import { useState } from "react";

const resume = () => {

  let [a, seta] = useState(true);


  const hideShowSkills = ()=>{
    seta (!a)

  }


  return(
    <>
    <section>
      <h1>Personal Info</h1>
      <p>Name: ABC</p>
      <p>Fathers Name: DEF</p>
      
    </section>
    
    <section>
    <h1>Academic Qual</h1>
    <p>bsc: 45%</p>
    <p>msc: 25%</p>
    
    </section>



    <button className="bg-green-600 font-bold px-04 py-03 rounded hover: bg-red-400" onClick={hideShowSkills}>SNV</button>
    


    {a && (    <section>
      <h1>Skills</h1>
      <p>Cricket</p>
      <p>Dance</p>
    </section>
)}  
    
    </>
    
  )
}

export default resume;