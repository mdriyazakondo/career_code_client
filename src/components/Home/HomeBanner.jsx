import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/tem1.jpg";
import team2 from "../../assets/team2.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="hero bg-blue-50 min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 relative">
            <motion.img
              src={team2}
              alt=""
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-3/4 h-[350px] rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-600"
            />
            <motion.img
              src={team1}
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 14, delay: 2, repeat: Infinity }}
              alt=""
              className="w-3/4 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-600 absolute -bottom-30 -right-20"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
              className="text-5xl font-bold"
            >
              Remote{" "}
              <motion.span
                animate={{
                  color: ["#79F527", "#27F5BE"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Jobs
              </motion.span>{" "}
              for you !
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
