import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%]  translate-x-[-50%] translate-y-[40%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  FullStack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Digital Place
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  01 May 2023 - 30 June 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <ul>
                    <li>Web application development Organization management .</li>
                    <li>Use of Reactjs and Strapi Technologies.</li>
                    <li>Supervision of a team of 3 people, problem solving and promotion of good practices.</li>
                  </ul>
                </p>
              </div>
              
            </div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-185px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[300px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col mt-20 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Wordpress Developer and Aws Cloud
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  YourAws
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  04 December 2023 - 30 January 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <ul>
                    <li>During my trial period, I completed two WordPress projects, highlighting my ability to design and develop dynamic web solutions.</li>
                    <li>At the same time, I followed an in-depth training in AWS Cloud Computing, strengthening my skills.</li>
                    <li>I am ready to take on new challenges and contribute effectively to the development of innovative projects.
                    </li>
                    
                  </ul>
                </p>
              </div>
              
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] translate-y-[20%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Web FullStack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  NTIC Tangier  
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2020 - 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Completed a comprehensive 2-year program at NTIC Tangier, 
                focusing on full-stack web development. 
                Gained proficiency in both front-end and back-end technologies, 
                preparing for versatile roles in web development.
                </p>
              </div>
            </div>
            <legend className=" w-auto ml-[58%] translate-x-[-70%] translate-y-[100%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Formation
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-185px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[300px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col mt-20 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                   Certificate Programming with Java 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                   on the platform iMooX.at
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2024 - 12 Hours per Unit
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <ul>
                  6 out of 6 units have been completed:
                  <li>• Instructions of The MOOC </li>
                  <li>• 1. Introduction to Programming</li>
                  <li>• 2. Introduction to Programming With Java</li>
                  <li>• 3. Branches</li>
                  <li>• 4. Loops</li>
                  <li>• 5. Methods</li>
                  </ul>
                </p>
              </div>
              
            </div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-155px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[240px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col mt-20 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Aws Cloud Computing
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                   On The Platform Udemy
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2024 - 12 Hours per Unit
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Completed The program at Udemy specializing in AWS Cloud Computing. 
                Developed expertise in cloud infrastructure, services, and deployment strategies, 
                equipping for roles in cloud management and solutions architecture.
                </p>
              </div>
              
            </div>
          </fieldset>
        </div>
        
        
      </div>
    </div>
  );
};

export default Resume;
