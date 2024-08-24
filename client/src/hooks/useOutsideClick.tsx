import { useEffect } from "react";
/* istanbul ignore next */
const useOutsideClick = (
  contextMenuRef: React.MutableRefObject<HTMLElement | null>,
  callback: () => void
): void => {
  const handleClickOutside = (event: MouseEvent): void => {
    event.target instanceof Element &&
      !contextMenuRef?.current?.contains(event.target) &&
      callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default useOutsideClick;
