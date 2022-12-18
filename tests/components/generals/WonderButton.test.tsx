import { fireEvent, render, screen } from "@testing-library/react";
import {
  WonderButton,
  WonderButtonProps,
} from "../../../src/components/generals";

describe("WonderButton with image test", () => {
  const WonderButtonArgs: WonderButtonProps = {
    altImage: "Whatsapp contact information wonder travel",
    urlImage: "/images/generals/whatsappIcons/whatsapp3.png",
    imageSize: "small",
    label: "Reservar / información",
    neon: true,
    onClick: () => {},
    size: "medium",
  };

  beforeEach(() => {
    render(<WonderButton {...WonderButtonArgs} />);
  });
  test("show the WonderButton component with correct label", () => {
    expect(screen.getByText("Reservar / información")).toBeDefined();
  });
  test("WonderButton image should have correctly alt text", () => {
    expect(
      screen.findByAltText(WonderButtonArgs.altImage as string)
    ).toBeDefined();
    expect(
      screen
        .queryByAltText(WonderButtonArgs.altImage as string)
        ?.attributes.getNamedItem("alt")?.textContent
    ).toBe(WonderButtonArgs.altImage);
  });
  test("WonderButton image should have correctly src", () => {
    expect(
      screen.findByAltText(WonderButtonArgs.altImage as string)
    ).toBeDefined();
    expect(
      screen
        .queryByAltText(WonderButtonArgs.altImage as string)
        ?.attributes.getNamedItem("src")?.textContent
    ).toBe(WonderButtonArgs.urlImage);
  });
});

describe("WonderButton without image test", () => {
  const WonderButtonArgs: WonderButtonProps = {
    label: "Reservar / información",
    neon: true,
    onClick: vi.fn(() => {}),
    size: "medium",
    backgroundColor: "rgb(255, 101, 73)",
  };

  beforeEach(() => {
    render(<WonderButton {...WonderButtonArgs} />);
  });

  test("WonderButton should have correctly size", () => {
    expect(screen.queryByRole("button")?.classList.toString()).contain(
      WonderButtonArgs.size
    );
  });
  test("WonderButton should have correctly neon effect", () => {
    const neonClass = WonderButtonArgs.neon ? "storybook-button--neon" : "";
    expect(screen.queryByRole("button")?.classList.toString()).contain(
      neonClass
    );
  });
  test("WonderButton should have correctly background color", () => {
    expect(screen.queryByRole("button")?.style.backgroundColor).toBe(
      WonderButtonArgs.backgroundColor
    );
  });
  test("should handleClick function have been called when the button is clickled", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(WonderButtonArgs.onClick).toHaveBeenCalled();
  });
});
