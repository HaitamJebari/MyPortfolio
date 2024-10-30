// Main Component
import ProgressBar from "../../chip/ProgressBar";
import { IoLogoHtml5, IoLogoCss3 ,IoLogoNodejs} from "react-icons/io"; // Import icons
import { 
  SiJavascript, SiTailwindcss , SiMongodb,
  SiExpress,
  SiPhp, SiCsharp ,SiNextdotjs,SiLaravel, SiBootstrap, SiGit , SiPython 
} from "react-icons/si";
import SkillBox from "../../chip/SkillBox";
import { DiMysql } from "react-icons/di";
import { FaReact , FaJava,FaDatabase,FaCloud } from "react-icons/fa";
import { GrCode } from "react-icons/gr";

const Skills = () => {
  return (
  <div id="skills">
      <div className="container m-auto  mt-16">
        {/* heading */}  
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
          </div>
        </div>
        <div  className="grid grid-cols-2 ">
        <div className="grid grid-cols-3 gap-3 p-2 mt-10 mb-70">
      <ProgressBar logo={<IoLogoHtml5 />} name="HTML" value={95} />
      <ProgressBar logo={<IoLogoCss3 />} name="CSS" value={88} />
      <ProgressBar logo={<SiJavascript />} name="JavaScript" value={73} />
      <ProgressBar logo={<FaReact />} name="React Js" value={75} />
      <ProgressBar logo={<DiMysql />} name="MySQL" value={88} />
      <ProgressBar logo={<SiGit />} name="Git" value={95} />
      <ProgressBar logo={<SiLaravel />} name="Laravel" value={60} />
      <ProgressBar logo={<SiBootstrap />} name="Bootstrap" value={90} />
      <ProgressBar logo={<FaJava />} name="Java" value={78} />
      <ProgressBar logo={<SiPhp />} name="PHP" value={70} />
      <ProgressBar logo={<SiCsharp />} name="C#" value={60} />
      <ProgressBar logo={<FaCloud />} name="Cloud" value={55} />
      <ProgressBar logo={<SiPython />} name="Python" value={80} />
      <ProgressBar logo={<SiMongodb />} name="MongoDB" value={75} />

    </div>
    {/* right box */}
          <div className=" right relative flex flex-1 flex-wrap p-5 gap-4 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-5">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
              <SkillBox logo={<SiCsharp />} black={"white"} white={"black"} skill={"C#"} />
              <SkillBox logo={<FaJava />} black={"white"} white={"black"} skill={"Java"} />
              <SkillBox logo={<DiMysql />} black={"white"} white={"black"} skill={"MySQL"} />
            </div>
            <div className="last2 flex flex-col gap-5">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <GrCode/>
                }
                black={"black"}
                white={"white"}
                skill={"Python"}
              />
               <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> 
              <SkillBox logo={<SiPhp />} black={"black"} white={"white"} skill={"PHP"} />
            </div>
          </div>
        </div>
    
        </div>
     
        {/* icons */}
         <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
         </div> 
  </div>

  );
};

export default Skills;

