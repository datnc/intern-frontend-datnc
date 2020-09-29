import React from 'react'
import TeacherNavbar from '../../../components/Main/Teacher/TeacherNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default function LayoutTeacher() {
    return (
        <div>
            <Header />
            <TeacherNavbar />
            {children}
            <Footer />
        </div>
    )
}
