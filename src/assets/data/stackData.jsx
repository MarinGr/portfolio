import { v4 as uuidv4 } from "uuid";
import html from "../images/stackImages/html.png";
import css from "../images/stackImages/css.png";
import js from "../images/stackImages/js.png";
import react from "../images/stackImages/react.png";
import typescript from "../images/stackImages/typescript.png";
import sass from "../images/stackImages/sass.png";

export const stackData = [
  { id: uuidv4(), img: html, title: "HTML" },
  { id: uuidv4(), img: css, title: "CSS" },
  { id: uuidv4(), img: js, title: "Javascript" },
  { id: uuidv4(), img: sass, title: "Sass" },
  { id: uuidv4(), img: react, title: "React" },
  { id: uuidv4(), img: typescript, title: "Typescript" },
];
