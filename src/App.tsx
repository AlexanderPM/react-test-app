import React, { FormEvent } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
    const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        const valueEvent: any = evt.target
        evt.preventDefault()
        alert(
            `Форма отправлена! Получены значения: amount=${valueEvent[0].value}, fee=${valueEvent[1].value}`
        )
    }
    return (
        <div className="app">
            <h2>Проект для тестирования компонентов React</h2>
            <Form onSubmit={onSubmit} />
        </div>
    )
}

export default App
