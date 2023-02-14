import { motion } from "framer-motion";


const Nackdrop = ({ children, onClick }) => {


    return (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="absolute top-0 left-0 h-[100%] w-[100%] bg-gray-400/20 flex justify-center items-center"
     onClick={onClick}
    >
       {children}

    </motion.div>
    );
};

export default Nackdrop;