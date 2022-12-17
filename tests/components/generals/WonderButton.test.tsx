import { render, screen } from "@testing-library/react";
import { WonderButton } from "../../../src/components/generals";

describe("WonderButton test", () => {
  beforeEach(() => {
    render(
      <WonderButton
        backgroundColor="#FF805A"
        altImage="Whatsapp contact information wonder travel"
        urlImage="/images/generals/whatsappIcons/whatsapp3.png"
        imageSize="small"
        label="Reservar / información"
        neon={true}
        onClick={() => {}}
        size="small"
      />
    );
  });
  test("show the WonderButton component with correct label", () => {
    expect(screen.getByText("Reservar / información")).toBeDefined();
    screen.debug();
  });
});
