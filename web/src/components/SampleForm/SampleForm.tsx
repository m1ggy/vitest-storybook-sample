import React, { useCallback, useState } from 'react'

interface SampleFormProps {
    title: string
    onSubmit: (e: unknown) => void
}

function SampleForm({ title, onSubmit }: SampleFormProps) {
    const [formData, setFormData] = useState({})

    const submit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            onSubmit(formData)
        },
        [onSubmit, formData]
    )

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            setFormData((prev) => ({ ...prev, [name]: value }))
        },
        [formData, setFormData]
    )
    return (
        <form onSubmit={submit}>
            <title>test</title>
            <label style={{ fontSize: '3rem' }}>{title}</label>

            <div>
                <label aria-label="input-1">
                    Input 1
                    <input
                        title="input-1"
                        type="text"
                        name="input-1"
                        data-testid="input-1"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Input 2
                    <input
                        title="input-2"
                        type="text"
                        name="input-2"
                        data-testid="input-2"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Input 3
                    <input
                        title="input-3"
                        type="text"
                        name="input-3"
                        data-testid="input-3"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit" data-testid="submit">
                Submit Form
            </button>
        </form>
    )
}

export default SampleForm
