import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { MouseEvent } from "react";

export type color = "primary" | "secondary" | "warning" | "danger";
export type Props = {
  children: string;
  color?: color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (color?: color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background: #008000;
        color: #faebd7;
      `;
    case "secondary":
      return css`
        background: #8a2be2;
        color: #5f9ea0;
      `;
    case "warning":
      return css`
        background: #ffff00;
        color: #ee82ee;
      `;
    case "danger":
      return css`
        background: #ff0000;
        color: #2f4f4f;
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 8rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color }) => getColors(color)}
  &:hover {
    opacity: 0.9;
  }

  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #ffffff;
`;

Button.defaultProps = {
  color: "primary",
};
