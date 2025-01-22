import { useEffect, useState } from "react";

type UseMediaReturn = boolean;

/**
 * Custom Hook para verificar se uma media query é atendida.
 * @param query - A string representando a media query (ex: "(max-width: 768px)")
 * @returns `true` se a media query for atendida, caso contrário, `false`.
 */
export const useMedia = (query: string): UseMediaReturn => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);
    updateMatch();

    mediaQueryList.addEventListener("change", updateMatch);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
};