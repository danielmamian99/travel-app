import { render, screen } from "@testing-library/react";
import { Circle, CicleProps } from "../../../src/components/generals";

describe("Cicle Component test with image", () => {
  const CircleArgs: CicleProps = {
    altImage: "Wonder Travel hospedaje",
    urlImage: "/images/itinerary/bed.svg",
    imageSize: "small",
  };
  beforeEach(() => {
    render(<Circle {...CircleArgs} />);
  });
  test("Circle image should have correctly alt text", () => {
    expect(screen.findByAltText(CircleArgs.altImage as string)).toBeDefined();
    expect(
      screen
        .queryByAltText(CircleArgs.altImage as string)
        ?.attributes.getNamedItem("alt")?.textContent
    ).toBe(CircleArgs.altImage);
  });
  test("Circle image should have correctly src", () => {
    expect(screen.findByAltText(CircleArgs.altImage as string)).toBeDefined();
    expect(
      screen
        .queryByAltText(CircleArgs.altImage as string)
        ?.attributes.getNamedItem("src")?.textContent
    ).toBe(CircleArgs.urlImage);
  });
  test("Circle image should have correctly image size", () => {
    expect(screen.queryByTestId("circle__img")?.className).contain(
      `circle__img--${CircleArgs.imageSize}`
    );
  });
});

describe("Cicle Component test without image", () => {
  const CircleArgs: CicleProps = {
    backgroundColor: "rgb(255, 128, 90)",
    circleSize: "small",
  };
  beforeEach(() => {
    render(<Circle {...CircleArgs} />);
  });

  test("should Cricle have correctly background color", () => {
    expect(screen.queryByTestId("circle")?.style.background).toBe(
      CircleArgs.backgroundColor
    );
  });
  test("should Cricle have correctly size", () => {
    expect(screen.queryByTestId("circle")?.className).contain(
      `circle--${CircleArgs.circleSize}`
    );
  });
});
