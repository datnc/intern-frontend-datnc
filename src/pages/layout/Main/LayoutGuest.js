import React from 'react'
import { StyleSheet } from 'react-native'
import GuestNavbar from '../../../components/Main/Guest/GuestNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
            <GuestNavbar />
            {children}
            <Footer />
        </div>
    )
}

const styles = StyleSheet.create({})
