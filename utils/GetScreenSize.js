import { useEffect, useState } from "react";

export function useMobileListener() {
  if (typeof window !== "undefined") {
    const paramsSize = {
      Height: window.innerHeight,
      Width: window.innerWidth,
    };
    if (paramsSize.Height && paramsSize.Width !== "undefined") {
      return paramsSize;
    } else return null;
  }
}
