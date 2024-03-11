
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/nav-bar";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

type Locale = 'en' | 'es' | 'de';

interface RootLayoutProps {
  children: React.ReactNode;
  locale: Locale;
}

/* reusable classes */
// contact box
const contactBox = "rounded bg-gradient-to-r from-pink-900 to-indigo-900  w-20 sm:w-40 h-30 sm:h-30 m-4 p-1 sm:p-5 text-center transition-transform duration-300 transform hover:scale-105 ";
const cBoxContent = "flex flex-col justify-center items-center ml-auto mr-auto";
const cBContentText = "hidden sm:block mt-auto";

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const t = useTranslations("RootLayout");

  //console.log(locale);
  return (
    <html lang={locale}>
     
      <body className={inter.className}>
      
      <nav><NavBar/></nav>
      
      {children}
      <footer className="p-10 justify-center ">
        <div className="text-3xl mr-auto ml-auto flex justify-center sm:hidden">
            {t('footer.contactMe')}
        </div>
        <div className="flex mr-auto ml-auto justify-center">
         
          
          {/*warning: responsive design issues, 
          the following part regarding contact 
          boxes creates an empty blank space on
          the right side of the page*/}
          <section className="flex mr-auto ml-auto">
          <section className="w-80 hidden sm:block">
            <div className="text-sm font-bold sm:text-3xl">
            {t('footer.contactMe')}
            </div>
            <div>
            {t('footer.anyInquiere')}
            </div>
          </section>
              <a href="https://github.com/martinsuasnavar" className={contactBox}>
                <sub className={cBoxContent}>
                  <Image src="/logos/github-white.png" height={50} width={50} alt="github logo" />
                  <div className="h-5"/>
                  <text className={cBContentText}>martinsuasnavar</text>
                </sub>
              </a>

              <a href="https://www.linkedin.com/in/martin-suasnavar-579a4726a/" className={contactBox}>
                <sub className={cBoxContent}>
                  <Image src="/logos/linkedin-white.png" height={50} width={50} alt="linkedin logo" />
                  <div className="h-5"/>
                  <text className={cBContentText}>Martín Suasnavar</text>
                </sub>
              </a>

              {/*must include a send mail function contained in a page, which shall be redirected from this contact box*/}
              <Link href={`/${locale}/mail`} className={contactBox}>
                <sub className={cBoxContent}>
                  <Image src="/logos/gmail-white.png" height={50} width={50} alt="gmail logo" />
                  <div className="h-5"/>
                  <div className={cBContentText}>msuasnavar21@gmail.com</div>
                </sub>
              </Link>

          </section>
         </div>
       </footer>
      </body>
     
    </html>
  );
}
