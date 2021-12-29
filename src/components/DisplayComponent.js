import React from "react";
import TopNavComponent from "./TopNavComponent";
import SideComponent from "./SideComponent";
import GlobalStyle from "../style/Global";
import ASideComponent from "./ASideComponent";
import MainComponent from "./MainComponent";

function DisplayComponent() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TopNavComponent></TopNavComponent>
      <SideComponent></SideComponent>
      <ASideComponent></ASideComponent>
      <MainComponent></MainComponent>
    </>
  );
}

export default DisplayComponent;
