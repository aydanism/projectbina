import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Footer from '../Footer/Footer';
import { Card } from "../Cards/Cards";
import { elanlar } from "../Cards/Cards";
import HomeFourthBlock from '../HomeFourthBlock/HomeFourthBlock';

export default function Apartments(){
    const { category } = useParams(); 
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        const filteredData = elanlar.filter((card) => card.categories === category);
        setFilteredCards(filteredData);
    }, [category]);

    return (
        <div>
            <Header/>
<HomeFourthBlock />
            <div className="cards" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', boxShadow: " 0 17px 34px 0 rgba(44, 39, 56, 0.04), 0 8px 17px 0 rgba(44, 39, 56, 0.02)" }}>
            
            
                {filteredCards.map((card) => (
                    <Card key={card.title} {...card} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}
