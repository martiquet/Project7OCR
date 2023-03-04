import React from 'react';
import Banner from '../components/Banner'
import Productcard from '../components/Card'
import Dataproduct from '../data.json'




function App() {
    return (
        <>
        <Banner />
        <section className="home__product">
            {Dataproduct.map((product) =>
                <Productcard key={product.id} product={product}/>
            )}
        </section>    
        </>
    )
}

export default App;
