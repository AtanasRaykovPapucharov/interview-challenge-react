/**
 * Loader styles
 * 
 * 
 */

import { CSSProperties } from "react";

export const StyleLoading = (containerWidth: number):  CSSProperties => {
    if(containerWidth > 768) {
      return {
        width: "60%",
        marginTop: "150px",
        marginLeft: "20%"
      }
    }
    else {
      return {
        width: "100%",
        marginTop: "100px"
      }
    }
};