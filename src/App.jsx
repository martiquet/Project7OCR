import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import "./style/App.css"
import "./style/main.scss"
import "./style/normalize.css"

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'

import Layout from './components/Layout'

function App () {
    return (
        <div>
            <div className="App">
                <Router>
                    <Layout>
                    <Routes>
                        <Route path="*" element={<Notfound />} />
                        <Route index element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/product/:productId" element={<Product />} />
                        <Route path="/kaza" element={<Navigate to="/" replace />} />
                    </Routes>
                    </Layout>
                </Router>
            </div>
        </div>
    )
}

export default App;