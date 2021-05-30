import React, {useRef} from 'react'
const RegisterModal = (props) => {
    const closeModal = useRef(null)
    const {label,setName,name,setPhoneNumber,phoneNumber,handleSubmit} = props
    const bypassSubmit = (event) => {
        event.preventDefault()
        handleSubmit()

        setTimeout(()=> {

            //Simulate a click
            closeModal.current?.click()

        },1000)
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
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                className="form-control"
                                type="text"
                                name="" 
                                id="" 
                                value={name}
                                onChange = {(event) => setName(event.target.value)}
                                placeholder='John Doe'
                                required/>
                                <label htmlFor="password" className="form-label">Phone Number</label>
                                <input
                                className="form-control" 
                                type="phone" 
                                name="" 
                                id="" 
                                value={phoneNumber}
                                onChange = {(event) => setPhoneNumber(event.target.value)}
                                placeholder="+256712345678"
                                required/>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">{label}</button>
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