import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import doraswellness from "../../public/images/projects/adioraswellness.png"
import alpr from "../../public/images/projects/alpr.png"
import crm from "../../public/images/projects/crm.png"
import dontrans from "../../public/images/projects/dontransllc.png"
import taskboard from "../../public/images/projects/taskboard.png"
import tmspro from "../../public/images/projects/tmspro.jpg"

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Sardorbek Zokirov | Projects Page</title>
        <meta
          name="description"
          content="Discover the innovative projects by Sardorbek Zokirov, showcasing a portfolio of full-stack development, cloud solutions, machine learning and data analysis. Explore real-world applications, technical details, and project insights."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Building Bits to Reality: Dive into My Work!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="TMS - Trucking Management System"
                summary="TMS is a web application built using React, React-Query, Material UI, Nestjs.js, MongoDB, Django and Socket.io written in Typescript and Python. It is a trucking management system that helps you to manage your drivers, dispatchers and their shifts, trucks, loads, accountancy, business analysis and more."
                img={tmspro}
                link="https://tmspro-demo.vercel.app/"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Machine Learning"
                title="ALPR - Automatic License Plate Recognition"
                summary="ALPR is a web application built using Flask, OpenCV, YOLO, PyTorch, Tensorflow, Pytesseract SQLite and written in Python. It is a automatic license plate recognition system that utilizes neural network object detection using YOLO model and deploys it in a web application using Flask framework. It can detect license plates in high accuracy and real-time and save to a database."
                img={alpr}
                link="https://github.com/sardorick/ALPR/"
                github="https://github.com/sardorick/ALPR/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Adioras Wellness Massage Studio CRM System"
                summary="Adioras Wellness Massage Studio CRM System is a web application built using React, React-Query, Material UI, Nestjs.js, MongoDB, and Socket.io written in Typescript. It is a CRM system that helps you to manage your clients, appointments, and services."
                img={crm}
                link="https://crm.adioraswellness.com/"
                github="#"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Dontrans LLC"
                img={dontrans}
                link="https://dontransllc.com/"
                github="#"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Adioras Wellness Massage Studio"
                img={doraswellness}
                link="https://adioraswellness.com/"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Data Analysis"
                title="Yelp database analysis"
                summary="
                This project was created using Yelp database as a curriculum project using Python, Streamlit, Matplotlib, Seaborn, Beautiful Soup. It is a visual dashboard that contains graphs and analysis using the scraped data."
                img={taskboard}
                link="https://sardorick-bw1-yelp-database-streamlit-app-sardorbek-dmqnww.streamlit.app/"
                github="https://github.com/sardorick/BW1-Yelp_database"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
