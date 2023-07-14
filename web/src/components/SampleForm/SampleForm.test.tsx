import { render, within } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './SampleForm.stories'
import { expect, describe, it } from 'vitest'
import React from 'react'
const { Primary } = composeStories(stories)

describe('Sample Form', () => {
    it('Should render the component', () => {
        const { container } = render(<Primary />)

        const canvas = within(container)
        expect(canvas.getAllByTestId('submit')).not.toBeNull()
    })
})
