import React, { ReactElement, useEffect } from "react";
// @ts-ignore
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
/* istanbul ignore next */
//@ts-ignore
// eslint-disable-next-line ,@typescript-eslint/explicit-module-boundary-types
function Fancybox(props): ReactElement {
  // eslint-disable-next-line react/prop-types
  const delegate = props.delegate || "[data-fancybox]";
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const opts = props.options;
    NativeFancybox.bind(delegate, opts);
    return () => {
      NativeFancybox.destroy();
    };
  }, []);
  // eslint-disable-next-line react/prop-types
  return <>{props.children}</>;
}

export default Fancybox;
