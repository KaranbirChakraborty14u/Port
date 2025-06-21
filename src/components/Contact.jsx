import { CONTACT } from "../../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-300 pb-16 pt-10 w-full bg-gradient-to-t ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 font-outfit">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl sm:text-4xl font-semibold text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <div className="text-center tracking-tight space-y-6">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl text-gray-700"
          >
            {CONTACT.address}
          </motion.p>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl text-gray-700"
          >
            {CONTACT.phoneNo}
          </motion.p>

          <a
            href={`mailto:${CONTACT.email}`}
            className="block text-red-600 hover:underline text-lg sm:text-xl font-medium break-words"
          >
            {CONTACT.email}
          </a>

          <p className="mt-10 text-sm sm:text-base text-gray-500">
            © {currentYear} Dr. Sunita Changkakati. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
