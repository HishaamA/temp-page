import { motion } from "framer-motion";

export const GitHubButton = () => {
    return (
        <motion.a
            href="https://github.com/heyzaib"
            target="_blank"
            className="px-6 py-2 bg-slate-800 border-2 border-slate-700 text-white text-lg font-normal flex items-center justify-center rounded-md mt-7"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            GitHub
        </motion.a>
    );
};
