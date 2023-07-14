import { userEvent, within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import LineGraph from '.'
const meta = {
    title: 'Graphs/Line',
    component: LineGraph,
    tags: ['Graphs'],
    argTypes: {
        data: [],
        width: Number,
        height: Number,
    },
} satisfies Meta<typeof LineGraph>

type Story = StoryObj<typeof meta>

export const Sample: Story = {
    args: {
        data: [
            { x: 1, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 10 },
            { x: 4, y: 20 },
        ],
        width: 500,
        height: 500,
    },
}
export const Dynamic: Story = {
    render: (args) => <LineGraph {...args} />,
    args: {
        data: [],
        width: 0,
        height: 0,
    },
}

export const GraphTitle: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        await userEvent.type(
            canvas.getByTestId('graph-title-input'),
            'Sample Title'
        )
        await userEvent.click(canvas.getByTestId('insert-title-button'))
        expect(canvas.getByText('Sample Title')).toBeInTheDocument()
    },
    args: {
        data: [
            { x: 1, y: 0 },
            { x: 2, y: 1 },
            { x: 3, y: 10 },
            { x: 4, y: 20 },
        ],
        width: 500,
        height: 500,
    },
    name: 'Test Line Graph Story with Interaction',
}

export default meta
