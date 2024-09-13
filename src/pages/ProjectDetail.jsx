import React from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";
import { projectsData } from "../data/projects";
const ProjectDetail = () => {
  const {id}=useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));
  // In a real application, you'd fetch this data based on the ID
  // const project = {
  //   title: "Project Management UI",
  //   date: "Jul 26, 2023",
  //   category: "UI / Frontend",
  //   images: [
  //     "/static/media/ui-project-1.60dc7d21.jpg",
  //     "/static/media/web-project-2.50124aa2.jpg",
  //     "/static/media/mobile-project-2.fc74507f.jpg",
  //   ],
  //   client: {
  //     name: "Vo Khanh Linh",
  //     services: "UI Design & Frontend Development",
  //     website: "https://topik6.vercel.app/",
  //     phone: "010-2500-0935",
  //   },
  //   objective:
  //     "As a dedicated and innovative Developer, my objective is to leverage my technical skills and experience to design and implement software solutions that enhance user experiences and drive business success. I strive to develop high-quality, maintainable, and scalable code while continuously improving my knowledge of emerging technologies and industry best practices.",
  //   technologies: ["HTML", "CSS", "JavaScript"],

  //   challenges: [
  //     "Tackling Complex Problems: Embrace and solve challenging technical issues with creative and effective solutions",
  //     "Innovative Development: Develop forward-thinking applications that set new standards in functionality, efficiency, and user experience.",
  //     "Continuous Growth: Pursue ongoing learning opportunities and stay at the forefront of technological advancements to enhance my expertise",
  //     "High-Quality Code: Write robust, maintainable, and scalable code that meets rigorous industry standards and best practices.",
  //     "User-Centric Design: Design and implement software that not only meets but exceeds user expectations in terms of usability and performance",
  //     "Collaborative Excellence: Work collaboratively within diverse, cross-functional teams to drive project success and innovation.",
  //     "Agile and Adaptive: Thrive in fast-paced, agile environments, adapting quickly to new challenges and project requirements.",
  //   ],
  //   relatedProjects: [
  //     "/static/media/mobile-project-1.93b0db95.jpg",
  //     "/static/media/web-project-1.cd2f0df7.jpg",
  //     "/static/media/ui-project-2.22f3f094.jpg",
  //    "/static/media/mobile-project-2.fc74507f.jpg",
  //   ],
  // };

  return (
    <div className="container mx-auto mt-5 sm:mt-10">
      <h1 className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-4 mb-10">
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          <span>{project.date}</span>
        </div>
        <div className="flex items-center">
          <Tag className="w-5 h-5 mr-2" />
          <span>{project.category}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project image ${index + 1}`}
            className="rounded-xl shadow-lg"
          />
        ))}
      </div>
     {/* left */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left mb-7">
          <h2 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            About Client
          </h2>
          <ul className="leading-loose font-general-regular mb-7 text-ternary-dark dark:text-ternary-light">
            <li>
              <strong>Name:</strong> {project.client.name}
            </li>
            <li>
              <strong>Services:</strong> {project.client.services}
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href={project.client.website}
                className="text-blue-500 hover:underline"
              >
                {project.client.website}
              </a>
            </li>
            <li>
              <strong>Phone:</strong> {project.client.phone}
            </li>
          </ul>

          <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Tools & Technologies
          </h2>
            <div className="">
              {project.technologies.map((item, index) => (

              <p key={index}>{item}</p> // Display each technology as a list item
            ))}  
            </div>
            
        </div>
        {/* right */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Objective
          </h2>
          <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {project.objective}
          </p>

          <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2 mt-6">
            Challenges
          </h2>
          <ul className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Related Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.relatedProjects.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Related project ${index + 1}`}
              className="rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>

      <Link
        to="/projects"
        className="inline-block mt-10 text-blue-500 hover:underline"
      >
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
