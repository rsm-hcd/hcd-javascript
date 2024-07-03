import { render } from "@testing-library/react";
import React, { act } from "react";
import { useSortedAlphabetically } from "./use-sorted-alphabetically";

describe("useSortedAlphabetically", () => {
    const testSelector = (s: string) => s;

    test("when initialState is not sorted, then returns sorted array", () => {
        // Arrange
        const unsortedList = ["C", "A", "D", "B"];
        const sortedList = ["A", "B", "C", "D"];

        const TestApp = () => {
            const [values] = useSortedAlphabetically(
                unsortedList,
                testSelector
            );

            return (
                <React.Fragment>
                    {values.map((value: string) => (
                        <p key={value} title="item">
                            {value}
                        </p>
                    ))}
                </React.Fragment>
            );
        };

        // Act
        const { getAllByTitle } = render(<TestApp />);
        const items = getAllByTitle("item").map(
            (el: HTMLElement) => el.innerHTML
        );

        // Assert
        expect(items).toStrictEqual(sortedList);
    });

    test("when setValues is called with unsorted array, then values is set to a sorted array", () => {
        // Arrange
        const unsortedList = ["C", "A", "D", "B"];
        const sortedList = ["A", "B", "C", "D"];

        const TestApp = () => {
            const [values, setValues] = useSortedAlphabetically(
                [],
                testSelector
            );

            return (
                <React.Fragment>
                    {values.map((value: string) => (
                        <p key={value} title="item">
                            {value}
                        </p>
                    ))}
                    <button
                        onClick={() => setValues(unsortedList)}
                        title="testButton"
                        type="button"
                    />
                </React.Fragment>
            );
        };

        // Act
        const { getAllByTitle, getByTitle } = render(<TestApp />);
        const button = getByTitle("testButton");
        act(() => button.click());
        const items = getAllByTitle("item").map(
            (el: HTMLElement) => el.innerHTML
        );

        // Assert
        expect(items).toStrictEqual(sortedList);
    });
});
