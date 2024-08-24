import React, { ReactElement, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { ContextMenuContainer } from "./styled";
import { ContextMenuProps } from "./types";
/* istanbul ignore next */
const ContextMenu = ({
  children,
  top,
  left,
  close,
}: ContextMenuProps): ReactElement => {
  const contextMenuRef = useRef<HTMLElement | null>(null);
  useOutsideClick(contextMenuRef, close);

  return (
    <ContextMenuContainer
      ref={contextMenuRef}
      top={top}
      left={left}
      data-testid="context-menu"
    >
      {children}
    </ContextMenuContainer>
  );
};

export default ContextMenu;
