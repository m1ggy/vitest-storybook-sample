import { render, screen, within } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./LineGraph.stories";
import { expect, describe, it } from "vitest";

const { Sample, GraphTitle } = composeStories(stories);

describe("Renders Sample Line Graph", () => {
    it("renders the component", async () => {
        render(<Sample />);
        const svgElement = await screen.findByTestId("graph-container");
        expect(svgElement).not.toBeNull();
    });
});

describe("Renders Play function of component", async () => {
    it("renders the component", async () => {
        const { container } = render(<GraphTitle />);
        await GraphTitle.play({ canvasElement: container });
        const canvas = within(container);
        const title = canvas.getByText("Sample Title");
        expect(title).not.toBeNull();
    });
});
