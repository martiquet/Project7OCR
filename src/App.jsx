import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

import "./style/main.scss"
import "./style/normalize.css"

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'

import Layout from './components/Layout'

function App () {
    return (
                <Router>
                    <Layout>
                    <Routes>
                        <Route path="*" element={<Notfound />} />
                        <Route index element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/product/:productId" element={<Product />} />
                    </Routes>
                    </Layout>
                </Router>
    )
}

export default App;