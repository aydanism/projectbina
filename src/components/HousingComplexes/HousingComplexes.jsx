import { React, useState } from "react";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Footer from '../Footer/Footer';
import "./HousingComplexes"
import { Card } from "../Cards/Cards";

import { complexes } from "../Cards/Cards"
const HousingComplexes = () => {
    const [filteredComplexes, setFilteredComplexes] = useState(complexes);

    const filterData = (title) => {
        setFilteredComplexes(complexes.filter((item) => item.title <= title));
    };

    return (
        <div className="housingComplexes">
            <Header />
            <div className='card' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', boxShadow: " 0 17px 34px 0 rgba(44, 39, 56, 0.04), 0 8px 17px 0 rgba(44, 39, 56, 0.02)" }}>

                {filteredComplexes.map((complex) => (
                    <Card key={complex.title} {...complex} />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default HousingComplexes;