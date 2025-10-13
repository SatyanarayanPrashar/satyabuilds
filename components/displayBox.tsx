"use client";
import { motion } from "framer-motion";

interface DisplayCardProps{
    children: React.ReactNode;
    classname?: string;
}

export const DisplayBox = ({children, classname} : DisplayCardProps ) => {
    return (
        <motion.div
            initial={{ opacity: 0, paddingTop: "20px" }}
            whileInView={{ opacity: 1, paddingTop: "0px" }}
            transition={{ ease: "linear", duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className={classname}
        >
            {children}
        </motion.div>
    )
}