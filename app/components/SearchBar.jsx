"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {BsSearch} from 'react-icons/bs'

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

	const handleSearch = async (e)=>{
		e.preventDefault()
		if(search.length !== 0){
			setSearch("")
			router.push(`/search/${search}`)
		}
	}

  return (
	<form onSubmit={handleSearch} className='flex gap-5 p-4 flex-col sm:flex-row '>
		<input
		type={'text'}
		value={search}
		placeholder={'search movie'}
		onChange={ (e)=>setSearch(e.target.value)}
		className="px-5 py-2"
		/>
		<button type="submit"><BsSearch size={20}/></button>
	</form>
	)
}
