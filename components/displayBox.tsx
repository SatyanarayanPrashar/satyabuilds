"use client";
import { motion } from "framer-motion";

export const DisplayBox = ({children} : {children: React.ReactNode;} ) => {
    return (
        <motion.div
            initial={{ opacity: 0, paddingTop: "20px" }}
            whileInView={{ opacity: 1, paddingTop: "0px" }}
            transition={{ ease: "linear", duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    )
}