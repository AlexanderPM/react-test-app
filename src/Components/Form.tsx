import React, { FormEvent, useState } from 'react'
import './Form.css'

type Props = {
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void
}

function Form({ onSubmit }: Props) {
    const [amount, setAmount] = useState(0)
    const [fee, setFee] = useState(0)

    const onChange = (value: string) => {
        const valueFormatted: number = Number(value)
        setAmount(valueFormatted)
        setFee(parseFloat((valueFormatted * 0.1).toFixed(2)))
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="wrapper-form">
                <div className="form-item">
                    <label className="form-item-label" htmlFor="amount">
                        Amount:
                    </label>
                    <input
                        id="amount"
                        type="number"
                        name="amount"
                        className="form-item-input"
                        value={amount}
                        onChange={(event) => onChange(event.target.value)}
                    ></input>
                </div>
                <div className="form-item">
                    <label className="form-item-label" htmlFor="fee">
                        Fee:
                    </label>
                    <input
                        id="fee"
                        type="number"
                        name="fee"
                        className="form-item-input"
                        value={fee}
                        readOnly
                    ></input>
                </div>
                <button type="submit">Отправить форму</button>
            </div>
        </form>
    )
}

export default Form
