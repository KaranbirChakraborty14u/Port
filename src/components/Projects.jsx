import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-16 px-4 font-outfit text-gray-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center text-4xl mt-12 font-bold text-gray-900"
      >
        Social Works
      </motion.h2>

      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="mb-16 flex flex-wrap items-start gap-8 lg:justify-center"
        >
          {/* Project Image */}
          {project.image && (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[250px] h-[250px] object-cover rounded-xl shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          )}

          {/* Project Content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className={`w-full ${project.image ? "lg:w-2/3" : "lg:w-full"} max-w-2xl`}
          >
            <h3 className="mb-3 text-2xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base tracking-wide">
              {project.description}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
