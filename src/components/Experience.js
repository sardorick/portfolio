import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Dontrans LLC"
            companyLink="https://dontransllc.com"
            time="September 2023 - Present"
            address="Hudson, Ohio, USA (Remote)"
            work="Participating in the development of a Trucking Management System software, managing back-end development, API integration using Django and Node.js, database design on MongoDB, and deployment on Google Cloud Platform."
          />

          <Details
            position="Adjunct Faculty of Computer Science"
            company="Webster University in Tashkent"
            companyLink="https://www.webster.uz/index.php"
            time="January 2024 - Present"
            address="Tashkent, Uzbekistan"
            work=" Instructing computer programming courses to a diverse group of students, facilitating their understanding and application of coding principles."
          />

          <Details
            position="University Lecturer of Computer Science"
            company="Collegium Humanum Warsaw Management University"
            companyLink="https://collegiumhumanum.uz/"
            time="October 2023 - January 2024"
            address="Andijan, Uzbekistan"
            work="Spearheading the revamp of the Computer Programming course curriculum, utilizing a blend of theoretical and hands-on
teaching techniques."
          />
          <Details
            position="Technical Support Engineer"
            company="Transporeon"
            companyLink="https://www.transporeon.com/en"
            time="May 2023 - October 2023"
            address="Krakow, Poland"
            work=" Investigated, troubleshot, and resolved technical issues for customers’ accounts, implementing technical solutions and providing comprehensive resolution. I also provided custom solutions to the customers of the SAAS platform using XML, Javascript and Python."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
