import { RenderResult, act } from "@testing-library/react";
import Tag from "./index";
import React from "react";
import { render } from "../../mocks/customRenderer";
import fireEvent from "@testing-library/user-event";

const tagTitle = "tag title";

describe("The Tag component", () => {
  let tagComponent: RenderResult;
  let tag: HTMLElement;
  describe("When component is closeable", () => {
    beforeEach(() => {
      tagComponent = render(<Tag title={tagTitle} closeable={true} />, {});
      tag = tagComponent.getByText(tagTitle);
    });
    describe("When mouse hovers over tag", () => {
      let closeIcon: HTMLElement | null;
      beforeEach(() => {
        act(() => {
          fireEvent.hover(tag);
        });
        closeIcon = tagComponent.getByTestId("close-icon");
      });
      it(`should show the tag close icon`, async () => {
        expect(closeIcon).toBeTruthy();
      });
      describe("When mouse leaves tag", () => {
        beforeEach(() => {
          act(() => {
            fireEvent.unhover(tag);
          });
          closeIcon = tagComponent.queryByTestId("close-icon");
        });
        it(`shouldn't show the tag close icon`, async () => {
          expect(closeIcon).toBeFalsy();
        });
      });
    });
  });
  describe("When component is not closeable", () => {
    beforeEach(() => {
      tagComponent = render(<Tag title={tagTitle} />, {});
      tag = tagComponent.getByText(tagTitle);
    });
    describe("When mouse hovers over tag", () => {
      let closeIcon: HTMLElement | null;
      beforeEach(() => {
        act(() => {
          fireEvent.hover(tag);
        });
        closeIcon = tagComponent.queryByTestId("close-icon");
      });
      it(`shouldn't show the tag close icon`, async () => {
        expect(closeIcon).toBeFalsy();
      });
    });
  });
});
