import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col sm:flex-row">
    <div className="flex flex-col items-center justify-center min-h-screen text-white m-auto sm:w-[50%] p-8">
      <h1 className="text-3xl font-bold  mb-4">About me</h1>
      <div className="">
        <div className="flex justify-center py-5">
        <img
        src={'https://i.ibb.co/1R7gc9x/cfa79941c2-result-preview-20230227130200-360-480.jpg'}
        alt='yop'
        />
        </div>
        <p className="text-lg leading-relaxed">
          Hi, my name is Mati and I'm a software developer based in Argentina.
          I have experience with a variety of technologies including Javascript, React, Node.js, MongoDB and
          SQL databases. I'm passionate about creating clean, efficient, and maintainable
          code that solves real-world problems.
        </p>
        <ul className="list-disc pl-6 mt-4 ">
          <li>Strong understanding of front-end technologies such as HTML, CSS, Tailwind, JavaScript, React, Redux and NextJS</li>
          <li>Experience with back-end frameworks such as Express.</li>
          <li>Familiarity with Scrum development methodologies</li>
        </ul>
      </div>
    </div>
    <div className="sm:w-[50%] m-auto py-8 border-t border-gray-300 text-center">
  <p className="text-lg leading-relaxed">
    This app was created using{" "}
    <Link href="https://www.themoviedb.org/" className="text-yellow-500 hover:text-yellow-600">
      "The movie Database"
    </Link>{" "}
    API.
  </p>
  <p className="mt-4 text-sm text-white">
    Technologies I used:
    <ul className="list-disc pl-4 mt-2 text-left">
      <li>React</li>
      <li>NexJS 13</li>
      <li>Tailwind CSS</li>
    </ul>
  </p>
</div>
    </div>
  );
}

export default About;