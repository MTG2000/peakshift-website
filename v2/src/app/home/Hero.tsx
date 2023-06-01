"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "@/Components/Container/Container";
import Animation from "@/assets/animations/3.json";
import DottedLines from "./DottedLines";

const headTextWords = {
  hide: {
    opacity: 0,
    y: 160,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollPromptOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="min-h-[min(100vh,14400px)] flex flex-col justify-center relative py-80 isolate z-10">
      <div className="grid flex-grow h-full w-full grid-cols-2 items-end overflow-hidden relative">
        <motion.div
          initial={{
            x: "-50%",
            y: "-50%",
            originX: "50%",
            originY: "50%",
          }}
          transition={{
            rotate: {
              duration: 1,
            },
            clipPath: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="absolute w-full h-full top-1/2 left-1/2 z-0 flex flex-col justify-center items-center"
        >
          <DottedLines />
        </motion.div>
        <motion.h1
          initial="hide"
          animate="show"
          transition={{
            ease: "easeOut",
            staggerChildren: 0.1,
            delayChildren: 2.5,
          }}
          className="uppercase ps-16 md:ps-42 text-[72px] leading-[1.2]"
        >
          <motion.span className="inline-block" variants={headTextWords}>
            We
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Build
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Products
          </motion.span>{" "}
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Experiences
          </motion.span>{" "}
          <motion.b className="inline-block amp" variants={headTextWords}>
            &
          </motion.b>
          <br />
          <motion.span className="inline-block" variants={headTextWords}>
            Communities
          </motion.span>
        </motion.h1>
        <div className="relative">
          <div className="absolute bottom-0 left-0">
            <Lottie
              animationData={Animation}
              loop={false}
              className="lottie-hero  w-[100vw]"
            />
          </div>
        </div>
      </div>
      <Container wide>
        <div className="flex justify-center mt-24">
          <div className="flex-1 mr-auto"></div>
          <motion.p
            style={{
              opacity: scrollPromptOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className=""
          >
            SCROLL
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, type: "spring" }}
            className="flex-1 text-body6 font-normal ml-auto text-right uppercase"
          >
            npub1shhm32q4zkunmwd0s20z7e6qlwkju7akku7ezte9feajmyhum3jsvy56zk
          </motion.p>
        </div>
      </Container>
    </section>
  );
}