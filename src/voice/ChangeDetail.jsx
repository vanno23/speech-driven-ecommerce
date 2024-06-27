import { useEffect } from "react";
import annyang from "annyang";

const ChangeDetail = ({ setChangeDetail }) => {
  useEffect(() => {
    const commands = {
      "show details": () => setChangeDetail(true),
      "show comments": () => setChangeDetail(false),
      "scroll down": () =>
        window.scrollBy({ left: 0, top: 400, behavior: "smooth" }),
      "scroll up": () =>
        window.scrollBy({ left: 0, top: -400, behavior: "smooth" }),
    };
    annyang.addCommands(commands);
    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [setChangeDetail]);

  return null;
};

export default ChangeDetail;
