import React from "react";
import ASideTopPresenter from "../presenters/ASideTopPresenter";
import ASideBottomPresenter from "../presenters/ASideBottomPresenter";

function ASideComponent() {
  return (
    <>
      <ASideTopPresenter></ASideTopPresenter>
      <ASideBottomPresenter></ASideBottomPresenter>
    </>
  );
}

export default ASideComponent;
