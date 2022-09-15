/**
 * Loader
 * 
 * @param appWidth : number
 * 
 * @returns React Element Loader
 * 
 */

import React, { ReactElement } from "react";
import LOADING from "./assets/wheels.gif";
import { StyleLoading } from "./styles";

const Loading = (containerWidth: number): ReactElement => {
  return <img src={LOADING} alt="loading..." style={StyleLoading(containerWidth)}/>
};

export default Loading;
