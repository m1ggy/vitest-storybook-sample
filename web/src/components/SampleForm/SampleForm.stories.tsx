import { userEvent, within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import SampleForm from '.'

const meta = {
    title: 'Forms/Sample Form',
    component: SampleForm,
    tags: ['Forms'],
    argTypes: {
        title: String,
        onSubmit: { action: 'form submitted' },
    },
} satisfies Meta<typeof SampleForm>

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Sample Form',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        await userEvent.type(canvas.getByTestId('input-1'), 'test input')
        await userEvent.type(canvas.getByTestId('input-2'), 'test input')
        await userEvent.type(canvas.getByTestId('input-3'), 'test input')
        await userEvent.click(canvas.getByTestId('submit'))

        expect(canvas).not.toBeNull()
    },
}

export default meta
