import Image from "next/image";
import { useTranslations } from "next-intl";
import Separator from "../components/separator";
import WhiteBox from "@/app/components/white-box";
import { useRouter } from "next/navigation";

interface Project {
    imgSrc: string;
    name: string;
    description: string;
    warning: string;
}



export default function Home() {
  const pIntroStyle = "mb-10 text-white";
  const presentationCardStyle = "text-2xl";
  //const { locale, locales, defaultLocale } = useRouter();
  //const { title, content } = newsContent["en-US"];
  const t = useTranslations("Home");
  // Extract the navigation object keys from the translations

  const project1: Project = {
    imgSrc: "/project-1.png",
    name: "PanelBoard Lite",
    description: `${t("myProjects.projectList.0")}`,
    warning: `${t("myProjects.warning")} https://github.com/martinsuasnavar/panelboard-lite`,
  };
  const project2: Project = {
    imgSrc: "/project-2.png",
    name: "Leaf Messenger",
    description: `${t("myProjects.projectList.1")}`,
    warning: `${t("myProjects.warning")} https://github.com/martinsuasnavar/leaf-messenger`,
  };

  const projectsArray = [project1, project2];

  return (

    <main className="flex flex-col w-full min-h-screen bg-gradient-to-r from-black to-indigo-950 text-center items-center text-white">
        <div className="h-20"/>
      

        <section className="text-8xl">
            <div className="flex justify-center">
               <div className="p-7 sm:ml-0 sm:p-0 flex">
               <text className=" text-left mt-10 bg-gradient-to-r from-white via-white to-pink-200 inline-block text-transparent bg-clip-text"
               >{t("greet")}</text>
               <section className=" text-pink-100 text-3xl text-left">
                  <div className="justify-left flex mt-10 mb-4">
                  <Image src="/dev.png"
                    width={80}
                    height={80}
                    alt="dev picture"/> 
                  </div>
                  <div>
                    <div>{t("fastPresentation.0")}</div>
                    <div>{t("fastPresentation.1")}</div>
                    <div>{t("fastPresentation.2")}</div>
                  </div>
               </section>
               </div>
            </div>
            
         </section>



        <Separator topMargin="20" bottomMargin="5"/>


        <section className="m-20 w-3/6 ml-auto mr-auto">

          <div className={presentationCardStyle}>
            <WhiteBox>{t("presentationCards.intro")}  </WhiteBox>
          </div>

          <div >
      
          <div className={pIntroStyle}/>
          <p className={pIntroStyle}>
       
          </p>
          <p className={pIntroStyle}>
            {t("introParagraphs.1")}
          </p>
          <p className={pIntroStyle}>
            {t("introParagraphs.2")}
          </p>

          <div className="h-10"/>


          <div className={presentationCardStyle}>
            <WhiteBox>{t("presentationCards.techdetails")}</WhiteBox>
          </div>


          <div className="h-10"/>
          <p className={pIntroStyle}>
          {t("techDetails.favStack")}
          </p>
          <ul>
            <li>• <strong>React.js/Next.js</strong>, {t("techDetails.stackDescs.0")}</li>
            <li>• <strong>PHP/Laravel</strong>, {t("techDetails.stackDescs.1")}</li>
            <li>• <strong>mySQL</strong>, {t("techDetails.stackDescs.2")}</li>
          </ul>
          <br/>
          <p className={pIntroStyle}>
          {t("techDetails.note")}
          </p>
          </div>
        

      

        </section>
        
        <Separator topMargin="10" bottomMargin="10"/>

        <section className="m-20">


        <div className={presentationCardStyle}>
        <WhiteBox>{t("presentationCards.myProjects")}</WhiteBox>
        </div>


        <div className="w-3/6 m-20 w-3/4 ml-auto mr-auto">
            {projectsArray.map(project => (
                <div key={project.name} className="flex flex-col items-center mb-40">
                    <Image src={project.imgSrc} height={400} width={400} alt={`${project.name} logo`}/>
                    <div className="h-10"/>
                    <p>{project.description}</p>
                    <br/>
                    <div className="text-yellow-500">⚠ {project.warning}</div>
                </div>
            ))}
        </div>
        
        </section>
        
        <div className="h-10"/>
    </main>
  );
}