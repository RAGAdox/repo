import React from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
export default function Home() {
  return (
    <Base displayJumbotron={false}>
      <h1>Rishi Mukherjee</h1>
      <h3>Full Stack Developer</h3>
    </Base>
  );
}
