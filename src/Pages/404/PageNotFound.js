import React from "react"
import "./PageNotFound.scss"

import { ReactComponent as PageNotFoundImage } from "../../Assets/Images/404.svg"
import SideBar from "../../Components/SideBar/SideBar"
const PageNotFound = () => {

    return (
    <>
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 ps-0">
                    <SideBar/>
                </div>
                <div className="col-md-3 ps-0">               
                    <div className="vh-100">
                        <div className="d-flex justify-content-center mx-auto">
                            <PageNotFoundImage/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default PageNotFound