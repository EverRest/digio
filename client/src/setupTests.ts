import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

jest.mock("react-chartjs-2", () => ({
  Doughnut: () => null,
}));
