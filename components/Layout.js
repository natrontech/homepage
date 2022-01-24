import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

export default function Layout(props) {

    return (
        
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                {React.cloneElement(props.children, { auth: props.auth, updateState: props.updateState })}
            <Footer />
        </div>
    )
}