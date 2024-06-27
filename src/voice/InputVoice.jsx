import { useEffect } from "react";
import annyang from "annyang";

const useVoiceCommands = (setInputValue, setVoiceTriggered, clearInput) => {
  useEffect(() => {
    if (annyang) {
      const commands = {
        "search for *query": (query) => {
          setInputValue(query);
          setVoiceTriggered(true);
        },
        "clear search": () => {
          clearInput();
        },
      };

      annyang.addCommands(commands);
      annyang.start();

      return () => {
        annyang.removeCommands(commands);
        annyang.abort();
      };
    }
  }, [setInputValue, setVoiceTriggered, clearInput]);

  return null;
};

export default useVoiceCommands;
