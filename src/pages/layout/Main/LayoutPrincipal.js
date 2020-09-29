import React from 'react'
import { StyleSheet } from 'react-native'
import PrincipalNavbar from '../../../components/Main/Principal/PrincipalNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
            <PrincipalNavbar />
            {children}
            <Footer />
        </div>
    )
}

const styles = StyleSheet.create({})
