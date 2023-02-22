"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Pagination({params}) {
  
  let [currentPage, setCurrentPage] = useState(Number(params));
  const router = useRouter()  
  


  const handleOnClikcNext = () => {
    setCurrentPage(prevInput => prevInput + 1);
    router.push(`/${currentPage + 1}`)
  };

  const handleOnClikcPrev = () => {
    if(currentPage !== 1){
      setCurrentPage(prevInput => prevInput - 1);
      router.push(`/${currentPage - 1}`)
    }
  };

  return (
    <div>
      <button onClick={() => handleOnClikcPrev()} className="mr-5">{"<<"}</button>
      <span className="text-white" >{currentPage}</span>
      <button onClick={() => handleOnClikcNext()} className="ml-5">
        {">>"}
      </button>
    </div>
  );
}
