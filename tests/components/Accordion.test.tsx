import { fireEvent, render, screen } from "@testing-library/react";

import { Accordion } from "../../src/components/Accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="Hola mundo">
        <h3>My Contect</h3>
        <p> some content</p>
      </Accordion>
    );
  });

  test("should show the Accordion component with correct title", () => {
    expect(screen.getByText("Hola mundo")).toBeDefined();
  });

  test("should show title all the time", () => {
    expect(screen.getByText("Hola mundo")).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });
  test('should show the content when title is clicked', () => { 
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/close/i)).toBeDefined();
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test('should hide the content when title is clicked', () => { 
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/close/i)).toBeNull();
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
