import { useHistory } from "react-router-dom"
import React from 'react'

import './style.css';

export default function Welcome(props) {
    const history = useHistory()

    return (
        <div className="welcome-box">
            <button type="button" className="btn btn-outline-info" onClick={() => history.push("/main")}>{props.mensagem}</button>
        </div>
    )
}
