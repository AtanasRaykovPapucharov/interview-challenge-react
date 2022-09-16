/**
 * Loader
 * 
 * @returns React Element Loader
 * 
 */

import React, { ReactElement } from "react";
import LOADING from "./assets/wheels.gif";
import { StyleLoading } from "./styles";

const Loading = (): ReactElement => {
  return (<img src={LOADING} alt="Loading..." style={StyleLoading}/>)
};

export default Loading;
