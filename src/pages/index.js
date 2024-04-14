import AnimatedText from "@/components/AnimatedText"
import { HireMe } from "@/components/HireMe"
import { LinkArrow } from "@/components/Icons"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import profile from "../../public/images/profile/profile.jpg"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sardorbek Zokirov</title>
        <meta
          name="description"
          content="Sardorbek Zokirov | Software Engineer with ML focus. \nMy skills in using Python, Javascript/Typescript and their various frameworks and libraries, 
          along with my knowledge in Machine Learning allow me to create highly functional software solutions and I am excited to share my portfolio with you."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            {/* <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Sardorbek Zokirov"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div> */}
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Sardorbek Zokirov"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Crafting Digital Experiences."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled Software Engineer, I bring robust solutions to
                life, integrating sophisticated design with cutting-edge
                technology. Dive into my diverse portfolio, where each project
                narrates a story of innovation and precision. Let&apos;s connect
                and create the next breakthrough in web technology and AI
                together.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/SZokirov_CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/sardorbekzokirov/"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Sardorbek Zokirov"
          />
        </div>
      </article>
    </>
  )
}
