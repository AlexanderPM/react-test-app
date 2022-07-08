/*import React from 'react'*/
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Form from './Form'
import userEvent from '@testing-library/user-event'

// очищаем все после каждого теста, чтобы избежать утечек памяти
afterEach(cleanup)

// Проверяем правильность логики по выходному значению
test('amount value', () => {
    const onSubmit = jest.fn((e) => e.preventDefault())
    render(<Form onSubmit={onSubmit} />)
    userEvent.type(screen.getByLabelText<HTMLFormElement>('Amount:'), '10')
    expect(screen.getByLabelText<HTMLFormElement>('Fee:').value).toBe('1')
})

// Тестируем отправку формы
test('show the submitted message', async () => {
    const onSubmit = jest.fn((e) => {
        e.preventDefault()
    })
    const inputValue = 10
    render(<Form onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText(/Amount:/i), {
        target: { value: inputValue },
    })

    await fireEvent.click(screen.getByText(/Отправить форму/i))
    expect(onSubmit).toBeCalled()
})
