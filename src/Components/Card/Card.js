import React from "react"
import './Card.scss'

const Card = ({label,number,icon}) => {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            {icon}
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h2>{number}</h2>
                            <p>{label}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card