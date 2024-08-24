import { Shadows } from "@mui/material/styles/shadows";

function createShadow(): string {
  return `box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);`;
}

const shadows: Shadows = [
  "none",
  createShadow(),
  "rgb(255 255 255) 0 0 0 0," +
    " rgb(0 0 0 / 5%) 0 0 0 1px," +
    " rgb(0 0 0 / 10%) 0 10px 15px -3px," +
    " rgb(0 0 0 / 5%) 0 4px 6px -2px !important;",
  "rgb(255 255 255) 0 0 0 0," +
    "rgb(0 0 0 / 2%) 0 0 0 1px, " +
    "rgb(0 0 0 / 25%) 0 15px 55px 10px, " +
    "rgb(0 0 0 / 25%) 0 4px 6px -2px !important",
  "rgb(31 48 67) 0 0 0 0," +
    "rgb(31 48 67) 0 0 0 1px," +
    "rgb(31 48 67) 0 0px 5px -3px," +
    "rgb(31 48 67) 0 4px 4px -2px !important",
  "rgb(255 255 255) 0 0 0 0," +
    "rgb(0 0 0 / 5%) 0 0 0 1px," +
    "rgb(0 0 0 / 4%) 0 8px 10px -3px," +
    "rgb(0 0 0 / 4%) 0 4px 4px -2px !important",
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
];

export default shadows;
