"use client";
import React from "react";
import Container from "../Container/Container";
import NavLink from "../NavLink/NavLink";
import { useScroll, motion, useTransform } from "framer-motion";

const links = [
  {
    text: "Ventures",
    href: "/ventures",
  },
  {
    text: "Consulting",
    href: "/consulting",
  },
  {
    text: "Journal",
    href: "/journal",
  },
  {
    text: "Hire Us",
    href: "/hire-us",
  },
];

const itemVariants = {
  hide: {
    opacity: 0,
    y: -60,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Navbar() {
  const { scrollY } = useScroll();

  return (
    <motion.nav
      className="fixed w-full top-10 left-10 z-30 bg-white border-b border-gray-100"
      initial="hide"
      animate="show"
      transition={{ staggerChildren: 0.2, delayChildren: 3 }}
    >
      <Container
        wide
        className="py-16 flex flex-wrap justify-between items-center"
      >
        <ul className=" flex text-body6 md:text-body4 gap-8 ml-8">
          {links.map((link) => (
            <motion.li
              key={link.href}
              className="md:border-l border-gray-100 border-opacity-10"
              variants={itemVariants}
            >
              <NavLink
                className={`md:pl-20 md:pr-58 block font-normal uppercase hover:text-primary `}
                activeClassName="text-primary"
                href={link.href}
              >
                / {link.text}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <motion.p variants={itemVariants} className="text-body6 font-normal">
          PGP A815 2601 F001 645B 5269 2258 6004 5CFE 793B 59AD
        </motion.p>
      </Container>
    </motion.nav>
  );
}
