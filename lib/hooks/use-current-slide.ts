"use client";

import { useCallback } from "react";
import { parseAsInteger, useQueryState } from "nuqs";

export function useCurrentSlide() {
  const [currentSlide, _setCurrentSlide] = useQueryState(
    "slide",
    parseAsInteger.withOptions({ shallow: true }).withDefault(1),
  );

  const setCurrentSlide = useCallback(
    (slideNumber: number) => {
      if (slideNumber === currentSlide) return;
      if (slideNumber < 1) slideNumber = 1;
      if (slideNumber > 9) slideNumber = 9;

      _setCurrentSlide(slideNumber);
    },
    [_setCurrentSlide, currentSlide],
  );

  return {
    currentSlide,
    setCurrentSlide,
  };
}
