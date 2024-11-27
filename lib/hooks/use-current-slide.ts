"use client";

import { useCallback } from "react";
import { parseAsInteger, useQueryState } from "nuqs";

export function useCurrentSlide() {
  const [currentSlide, _setCurrentSlide] = useQueryState(
    "slide",
    parseAsInteger.withDefault(1),
  );

  const setCurrentSlide = useCallback(
    (slideNumber: number) => {
      if ((slideNumber < 1 || slideNumber > 8) && slideNumber !== currentSlide)
        return;
      _setCurrentSlide(slideNumber);
    },
    [_setCurrentSlide, currentSlide],
  );

  return {
    currentSlide,
    setCurrentSlide,
  };
}
