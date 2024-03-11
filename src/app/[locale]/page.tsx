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
  const pIntroStyle = "mb-10";
  //const { locale, locales, defaultLocale } = useRouter();
  //const { title, content } = newsContent["en-US"];
  const t = useTranslations("Home");
  // Extract the navigation object keys from the translations

  const project1: Project = {
    imgSrc: "/project-1.png",
    name: "PanelBoard Lite",
    description: `${t("myProjects.0")}`,
    warning: " "
  };
  const project2: Project = {
    imgSrc: "/project-2.png",
    name: "Leaf Messenger",
    description: `${t("myProjects.1")}`,
    warning: " "
  };

  const projectsArray = [project1, project2];

  return (

    <main className="justify-center bg-gradient-to-r from-black to-indigo-950  text-center justify-center items-center">
        <div className="h-20"/>
      

        <section className="text-8xl  ">
         
            <div className="flex text-center justify-center items-center">
                <text className="bg-gradient-to-r from-white via-white to-pink-200 inline-block text-transparent bg-clip-text w-80"
               >{t("greet")}</text>
              <Image src="/dev.png"
              width={200}
              height={200}
              alt="dev picture"/>
            </div>
            
         </section>



        <Separator topMargin="20" bottomMargin="5"/>


        <section className="m-20 w-3/6 ml-auto mr-auto">
          <WhiteBox>
            {t("presentationCards.intro")}
          </WhiteBox>
          <div >
      
          <div className={pIntroStyle}/>
          <p className={pIntroStyle}>
            {t("introParagraphs.0")}
          </p>
          <p className={pIntroStyle}>
            {t("introParagraphs.1")}
          </p>
          <p className={pIntroStyle}>
            {t("introParagraphs.2")}
          </p>

          <div className="h-10"/>
          <WhiteBox>{t("presentationCards.techdetails")}</WhiteBox>
          <div className="h-10"/>
          <p className={pIntroStyle}>
          {t("techDetails.favStack")}
          </p>
          <ul>
            <li>• <strong>React.js/Next.js</strong>, {t("techDetails.stackDescs.0")}</li>
            <li>• <strong>Laravel</strong>, {t("techDetails.stackDescs.1")}</li>
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
        <WhiteBox>{t("presentationCards.myProjects")}</WhiteBox>
        <div className="w-3/6 m-20 w-3/4 ml-auto mr-auto">
            {projectsArray.map(project => (
                <div key={project.name} className="flex flex-col items-center mb-40">
                    <Image src={project.imgSrc} height={400} width={400} alt={`${project.name} logo`}/>
                    <div className="h-10"/>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
        
        </section>
        
        <div className="h-10"/>
    </main>
  );
}