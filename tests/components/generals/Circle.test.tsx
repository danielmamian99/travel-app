import { render, screen } from "@testing-library/react";
import { Circle } from "../../../src/components/generals";

describe('first', () => { 
    beforeEach(() => {
        render(
            <Circle
              backgroundColor="#FF805A"
              urlImage='/images/itinerary/bed.svg'
              altImage='Wonder Travel hospedaje'
            />
        );
      });
    test('should first', () => {
        screen.debug()
     })
 })