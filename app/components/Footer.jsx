import React from "react";
import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">© 2023 by Matias Tellini.</p>
        <div className="flex items-center">
          <Link href="https://github.com/teyuu" className="mx-2">
           <AiFillGithub/>
          </Link>
          <Link href="https://www.linkedin.com/in/matias-tellini-12a705232/?locale=es_ES" className="mx-2">
            <BsLinkedin/>
          </Link>
          <Link href="#" className="mx-2">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
