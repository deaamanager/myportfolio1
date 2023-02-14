import { motion } from "framer-motion";
import Nackdrop from "../Nackdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handelClose }) => {
  return (
    <Nackdrop onClick={handelClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        ocClick={(e) => e.stopPropagation()}
        className=" w-96 min-h-[330px] m-auto p-[0.2rem] rounded-xl flex flex-col items-center bg-[rgb(36,36,36)] "
      >
        <div className="flex flex-row justify-evenly mb-9 space-x-4 items-center px-6 font-mono ">
          <motion.img
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            src="emailsending.ico"
            alt="email sending"
            className="h-14 w-14"
          />
          <motion.h1
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-lg flex flex-row text-[#f7ab0a] "
          >
            I getted your Email
          </motion.h1>
        </div>
        <div className="h-28 w-28 flex flex-row justify-evenly items-center ">
          <p className="text-left  ml-[-123px] flex mt-[15px]">
          Thanks you for conact me, I will send you Email Back,
          </p>
          <p className="text-left  ml-[-123px] flex mt-[15px]">
          Hope nice day 🥳
          </p>
          <motion.img
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            src="botavatar.png"
            alt="my bot"
            className="mt-auto flex h-[185px] mr-[-105px] animate-bounce "
          />
        </div>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="relative bottom-[-75px] text-[#f7ab0a] "
        >
          Click anywhere to Close
        </motion.h1>
      </motion.div>
    </Nackdrop>
  );
};

export default Modal;
