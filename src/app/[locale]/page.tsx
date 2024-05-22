
import Image from "next/image";
import { useTranslations } from "next-intl";
import Separator from "../components/separator";
import WhiteBox from "@/app/components/white-box";
import FadingSection from "../components/fading-section";
import './page.css'; // Importing custom CSS file

interface Tech {
  imgSrc: string;
  name: string;
  link: string;
}

interface FrontTech {
  array: Tech;
}

interface BackTech {
  array: Tech;
}

interface DBTech {
  array: Tech;
}

interface Project {
    imgSrc: string;
    name: string;
    description: string;
    warning: string;
    info: string;
    git: string;
    app: string;
    screen: string;
    tech: number[];
}

export default function Home() {
 //
  const pIntroStyle = "mb-10 text-white";
  const presentationCardStyle = "text-2xl";
  // Use translations from Home section
  const t = useTranslations("Home");

  const techPath = "/logos/tech";
  const frontTechArray: Tech[] = [
    {
      imgSrc: `${techPath}/react.png`,
      name: "React.js",
      link: "https://react.dev/",
    },
    {
      imgSrc: `${techPath}/next.png`,
      name: "Next.js",
      link: "https://nextjs.org/",
    },
  ]
  const backTechArray: Tech[] = [
    {
      imgSrc: `${techPath}/node.png`,
      name: "Node.js",
      link: "https://nodejs.org/",
    },
    {
      imgSrc: `${techPath}/express.png`,
      name: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      imgSrc: `${techPath}/php.png`,
      name: "PHP",
      link: "https://www.php.net/",
    },
    {
      imgSrc: `${techPath}/laravel.png`,
      name: "Laravel",
      link: "https://laravel.com/",
    },
    {
      imgSrc: `${techPath}/python.png`,
      name: "Python",
      link: "https://www.python.org/",
    },
    {
      imgSrc: `${techPath}/django.png`,
      name: "Django",
      link: "https://www.djangoproject.com/",
    },
  ]
  const dbTechArray: Tech[] = [
    {
      imgSrc: `${techPath}/mysql.png`,
      name: "MySQL",
      link: "https://www.djangoproject.com/",
    },
    {
      imgSrc: `${techPath}/mongodb.png`,
      name: "MongoDB",
      link: "https://www.djangoproject.com/",
    },
    {
      imgSrc: `${techPath}/postgre.png`,
      name: "PostgreSQL",
      link: "https://www.djangoproject.com/",
    }
  ]
  const techArray: Tech[] = [
    {
      imgSrc: `${techPath}/react.png`,
      name: "React.js",
      link: "https://react.dev/",
    },
    {
      imgSrc: `${techPath}/next.png`,
      name: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      imgSrc: `${techPath}/node.png`,
      name: "Node.js",
      link: "https://nodejs.org/",
    },
    {
      imgSrc: `${techPath}/express.png`,
      name: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      imgSrc: `${techPath}/php.png`,
      name: "PHP",
      link: "https://www.php.net/",
    },
    {
      imgSrc: `${techPath}/laravel.png`,
      name: "Laravel",
      link: "https://laravel.com/",
    },
    {
      imgSrc: `${techPath}/python.png`,
      name: "Python",
      link: "https://www.python.org/",
    },
    {
      imgSrc: `${techPath}/django.png`,
      name: "Django",
      link: "https://www.djangoproject.com/",
    },
    {
      imgSrc: `${techPath}/mysql.png`,
      name: "MySQL",
      link: "https://www.mysql.com/",
    },
    {
      imgSrc: `${techPath}/mongodb.png`,
      name: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      imgSrc: `${techPath}/postgre.png`,
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
    }
  ]

  const projectsArray: Project[] = [
    {
      imgSrc: "/project-1.png",
      name: "PanelBoard Lite",
      description: `${t("myProjects.projectList.0")}`,
      warning: "",
      info: ``,
      git: "https://github.com/martinsuasnavar/panelboard-lite",
      app: "https://panelboard-lite.vercel.app",
      screen: "/screenshots/0.png",
      tech: [0,2,3,9],
    },
    {
      imgSrc: "/project-2.png",
      name: "Leaf Messenger",
      description: `${t("myProjects.projectList.1")}`,
      warning: `${t("myProjects.warning")}`,
      info: ``,
      git: "https://github.com/martinsuasnavar/leaf-messenger",
      app: "https://leaf-messenger.vercel.app",
      screen: "/screenshots/1.png",
      tech: [0,4,5,8],
    }
  ];

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-r from-black to-indigo-950 text-center items-center text-white">
      <div className="h-20"/>



      <section
        className={"text-7xl sm:text-9xl"}
      >
        <article className="flex justify-center">
          <div className="p-7 sm:ml-0 sm:p-0 flex">
            <text className=" text-left mt-10 bg-gradient-to-r from-white via-white to-pink-200 inline-block text-transparent bg-clip-text">
              {t("greet")}
            </text>
            <div className="ml-10 text-pink-100 text-3xl text-left">
              <div className="justify-left flex mt-10 mb-4 ">
                <div className="z-99 transition-transform duration-300 transform hover:scale-105">
                  <Image
                    src="/dev.png"
                    width={180}
                    height={180}
                    alt="dev picture"
                  />
                </div>
              </div>
              <div>{t("fastPresentation.0")}</div>
              <div>{t("fastPresentation.1")}</div>
              <div>{t("fastPresentation.2")}</div>
            </div>
          </div>
        </article>
      </section>


        <Separator topMargin="20" bottomMargin="5"/>


        <section className="m-20 w-80 sm:w-3/6 ml-auto mr-auto">

          <div className={presentationCardStyle}>
            <WhiteBox>{t("presentationCards.intro")}  </WhiteBox>
          </div>

         

          <article>
            <FadingSection subfix={'1'}>
            <div className={pIntroStyle}/>
            <p className={pIntroStyle}>
        
            </p>
            <p className={pIntroStyle}>
              {t("introParagraphs.1")}
            </p>
            <FadingSection subfix={'0'}>
            <p className={pIntroStyle}>
              {t("introParagraphs.2")}
            </p>
            </FadingSection>

            <div className="h-10"/>

            </FadingSection>
            <div className={presentationCardStyle}>
              <WhiteBox>{t("presentationCards.techdetails")}</WhiteBox>
            </div>
        

            <FadingSection subfix={'1'}>
            <div className="h-10"/>
            <p className={pIntroStyle}>
            {t("techDetails.favStack")}
            </p>
            </FadingSection>
            <FadingSection subfix={'1'}>
            <div className="flex justify-center items-center">
            {frontTechArray.map(tech => (
              <a key={tech.name} href={tech.link} className="cursor-pointer m-4 items-center align-center flex flex-col justify-center text-white text-opacity-0 hover:text-opacity-100 transition-transform duration-300 transform hover:scale-105">
                <Image src={tech.imgSrc} alt={`${tech.name} logo`} width={40} height={40}/>
                <div className="text-sm mt-4 align-center">{tech.name}</div>
              
              </a>
            ))}
            </div>
            <div className="flex justify-center items-center">
            {backTechArray.map(tech => (
              <a key={tech.name} href={tech.link} className="cursor-pointer m-4 items-center align-center flex flex-col justify-center text-white text-opacity-0 hover:text-opacity-100 transition-transform duration-300 transform hover:scale-105">
                <Image src={tech.imgSrc} alt={`${tech.name} logo`} width={40} height={40}/>
                <div className="text-sm mt-4 align-center">{tech.name}</div>
              
              </a>
            ))}
            </div>
            <div className="flex justify-center items-center">
            {dbTechArray.map(tech => (
              <a key={tech.name} href={tech.link} className="cursor-pointer m-4 items-center align-center flex flex-col justify-center text-white text-opacity-0 hover:text-opacity-100 transition-transform duration-300 transform hover:scale-105">
                <Image src={tech.imgSrc} alt={`${tech.name} logo`} width={40} height={40}/>
                <div className="text-sm mt-4 align-center">{tech.name}</div>
              
              </a>
            ))}
            </div>
            <br/>
          </FadingSection>
          </article>
         

      

        </section>
        
        <Separator topMargin="0" bottomMargin="10"/>

        <section className="m-20">


          <div className={presentationCardStyle}>
            <WhiteBox>{t("presentationCards.myProjects")}</WhiteBox>
          </div>


          <article className="w-80 sm:w-3/6  m-20 w-3/4 ml-auto mr-auto">
              {projectsArray.map(project => (
                <div key={project.name}>
                    
                  <div  className="flex flex-col items-center mb-40">
                   
                        <FadingSection subfix={'1'}>
                          <div className="transition-transform duration-300 transform hover:scale-105">
                            <Image src={project.imgSrc} height={400} width={400} alt={`${project.name} logo`}/>
                          </div>
                        </FadingSection>
                        <FadingSection subfix={'0'}>
                        <div className="h-10"/>
                        <div className="rounded-xl">
                        {project.screen.length > 0 && 
                           <Image className="rounded-xl" src={project.screen} height={2000} width={2000} alt={`${project.name} screenshot`}/>
                        }
                        </div>
                        <div className="h-5"/>
                        <div className="flex justify-center items-center">
                          {project.tech.map(tech => (
                           <div key={tech} className="m-2">
                              <Image src={techArray[tech].imgSrc} alt={`${techArray[tech].name} logo`} width={40} height={40}/>
                          </div>
                          ))}
                        </div>
                        <div className="h-5"/>

                            <p>{project.description}</p>
                            <br/>
                          {project.warning.length > 0 && 
                              <div className="text-yellow-500">⚠ {project.warning} </div>
                            }
                            {project.info.length > 0 && 
                              <div className="text-blue-500">ⓘ {project.info} </div>
                            }
                        
                          <div className="h-10"/>
                              {project.app.length > 0 && 
                                <div className="transition-transform duration-300 transform hover:scale-105">
                                  <a href={project.app} className="mt-10 bg-blue-800 hover:bg-blue-800 rounded p-2">{t("myProjects.testIt")}</a>
                                </div>
                              }
                              <div className="transition-transform duration-300 transform hover:scale-105">
                                <a href={project.git} className="inline-block mt-10 rounded p-2 transition-transform duration-300 transform hover:scale-105">{t("myProjects.viewButton")}</a>
                              </div>
                        
                        </FadingSection>
                    </div>
                  </div>
              ))}
          </article>

        </section>
        
        <div className="h-10"/>
    </main>
  );
}