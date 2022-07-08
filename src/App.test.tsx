import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import App from './App'

// очищаем все после каждого теста, чтобы избежать утечек памяти
afterEach(cleanup)
// тестируем отображение компонента, ищём нужный текст
test('render App', () => {
    render(<App />)
    const renderElement = screen.getByText(
        /Проект для тестирования компонентов React/i
    )
    expect(renderElement).toBeInTheDocument()
})
