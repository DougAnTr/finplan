import React from "react";
import {shallow} from "enzyme";
import Expenses from "./Expenses";
import {getByTestId, render} from "@testing-library/react";

describe('Expenses', () => {
    it('should load', () => {
        shallow(<Expenses />);
    });

    it('get expense description', () => {
        const { container } = render(<Expenses/>);

        const description = getByTestId(container, 'description')
        expect(description.textContent).toBe('')
    })
});
