import React from 'react'
const RegisterModal = (props) => {

    const {label,setName,name,setPhoneNumber,phoneNumber,handleSubmit} = props

    const bypassSubmit = (event) => {
        event.preventDefault()
        handleSubmit()
    }
return (
    <>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {label}
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{label}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form  onSubmit={(event) => bypassSubmit(event)}>
                        <div className="modal-body">
                                <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                name="" 
                                id="" 
                                value={name}
                                onChange = {(event) => setName(event.target.value)}/>
                                <label htmlFor="password">Phone Number</label>
                                <input 
                                type="phone" 
                                name="" 
                                id="" 
                                value={phoneNumber}
                                onChange = {(event) => setPhoneNumber(event.target.value)}/>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Add Driver</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </>
)
}

export default RegisterModal