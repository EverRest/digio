import reportWebVitals from "../reportWebVitals";

const jestMock = jest.fn;
test("reportWebVitals test", () => {
  const report = reportWebVitals;
  expect(typeof report).toBe("function");
  report(jestMock);
});
