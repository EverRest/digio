import React, { ReactElement, useState } from "react";
import { Tag, CloseIcon } from "./styled";
import { TagProps } from "./types";

export default ({
  title,
  handleClose,
  type = "default",
  closeable = false,
}: TagProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tag
      type={type}
      onMouseEnter={() => closeable && setIsHovered(true)}
      onMouseLeave={() => closeable && setIsHovered(false)}
    >
      <span>{title}</span>
      {isHovered && (
        <CloseIcon
          data-testid="close-icon"
          onClick={handleClose}
          type={type}
          fontSize="small"
        />
      )}
    </Tag>
  );
};
