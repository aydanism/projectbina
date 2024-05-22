import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fotka from "../../assets/seabriz.jpg"
import "./Cards.css"
import Switcher from "../../assets/stsswitcher-right.svg"
import { useState } from "react";
import PriceToggle from '../PriceToggle/PriceToggle';
export const Card = ({ image, title, price, description }) => {
  return (
    <Box sx={{
      width: 231,
      border: '1px solid white',
      borderRadius: 3,
      backgroundColor: "white",
      m: 1
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{price}</Typography>
    </Box>
  );
};
export const elanlar=[
    {image: Fotka, title: '680 000 AZN', price: 'Nəriman Nərimanov m.',otag: "3 otaqli",categories:"Menziller"},
    {image: Fotka, title: '570 000 AZN', price: 'Nəriman Nərimanov m.',otag: "3 otaqli",categories:"Yeni tikililer"},
    {image: Fotka, title: '358 000 AZN', price: 'Nəriman Nərimanov m.',otag: "5 otaqli",categories:"Kohne tikililer"},
    {image: Fotka, title: '780 AZN/ay', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Heyet evleri\Bag evleri"},
    {image: Fotka, title: '279 000 AZN', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Ofisler"},
    {image: Fotka, title: '600 000 AZN', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Qarajlar"},
    {image: Fotka, title: '666 000 AZN', price: 'Hezi Aslanov m.',otag: "5",categories:"Torpaq Saheleri"},
    {image: Fotka, title: '777 000 AZN', price: 'Hezi Aslanov m.',otag: "5",categories:"Obyektler"},
    {image: Fotka, title: '456 AZN/ay', price: 'Hezi Aslanov m.',otag: "5",categories:"Menziller"},
    {image: Fotka, title: '326 000 AZN', price: 'Hezi Aslanov m.',otag: "5",categories:"Yeni tikililer"},
    {image: Fotka, title: '869 AZN/ay', price: 'Hezi Aslanov m.',otag: "5",categories:"Kohne tikililer"},
    {image: Fotka, title: '844 000 AZN', price: 'Hezi Aslanov m.',otag: "5",categories:"Heyet evleri\Bag evleri"},
    {image: Fotka, title: '234 AZN/ay', price: 'Hezi Aslanov m.',otag: "5",categories:"Ofisler"},
    {image: Fotka, title: '555 AZN/ay', price: 'Hezi Aslanov m.',otag: "5",categories:"Qarajlar"},
    {image: Fotka, title: '987 AZN/ay', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Torpaq Saheleri"},
    {image: Fotka, title: '990 000 AZN', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Obyektler"},
    {image: Fotka, title: '785 AZN/ay', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Menziller"},
    {image: Fotka, title: '900 000 AZN', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Yeni tikililer"},
    {image: Fotka, title: '433 AZN/ay', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Kohne tikililer"},
    {image: Fotka, title: '700 AZN/ay', price: 'Elmlər Akademiyası m.',otag: "5",categories:"Yeni tikililer"},
  ]
   export const complexes = [
    { image: Fotka, title: 'Sea Breeze Marina Village', price: '158 200 AZN' , otag: "1"},
    { image: Fotka, title: 'Grand Plaza', price: '158 200 AZN', otag: "2" },
    { image: Fotka, title: 'Baki Ag Seher Palace', price: ' 158 200 AZN',otag: "3"},
    { image: Fotka, title: 'Zirve Park', price: '158 200 AZN',otag: "4" }
  ];
export default function Cards({ filteredCards }) {
  const agentlikler = [
    { image: Fotka, title: 'Dernegul', price: '158 200 AZN',otag: "1" },
    { image: Fotka, title: 'Merdekan', price: 'от 158 200 AZN',  otag: "2" },
    { image: Fotka, title: 'Insaatcilar m.', price: '158 200 AZN', otag: "3" },
    { image: Fotka, title: 'Ag seher', price: '158 200 AZN',otag: "5" }

  ];
  
  const [filteredComplexes, setFilteredComplexes] = useState(complexes);
  const [filteredAgentlikler, setFilteredAgentlikler] = useState(agentlikler);
  const [filteredElanlar, setFilteredElanlar] = useState((elanlar));

  const filterData = (title) => {
    setFilteredComplexes(complexes.filter((item) => item.title <= title));
  };
 

  const filterDataElan = (categoryItem) => {
      // console.log('Filtering by category item:', categoryItem);
      const filteredCards = elanlar.filter(card => card.categories === categoryItem);
      // console.log('Filtered cards:', filteredCards);
      setFilteredElanlar(filteredCards);
  };
  return (
    <div className='cards'>
      <div >
        <div className="home-second-block">
          <div className="yasayis-k">
            <a href="">YAŞAYIŞ KOMPLEKSLƏRİ</a>
         
              <PriceToggle/>
            
          </div>
          <div>
            <a href="">Daha cox</a>
          </div>
        </div>

        <div className='card' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', boxShadow: " 0 17px 34px 0 rgba(44, 39, 56, 0.04), 0 8px 17px 0 rgba(44, 39, 56, 0.02)" }}>

          {filteredComplexes.map((complex) => (
            <Card key={complex.title} {...complex} />
          ))}
        </div> 
        </div>
     <div>
      <div className='home-third-block'>
      <div className="agenlikler">
            <a href="" >AGENTLIKLER</a>
          </div>
          <div>
            <a href="">Daha cox</a>
          </div>
      </div>
      <div className='card' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', boxShadow: " 0 17px 34px 0 rgba(44, 39, 56, 0.04), 0 8px 17px 0 rgba(44, 39, 56, 0.02)" }}>
        {filteredAgentlikler.map((agentlik) => (
          <Card key={agentlik.title} {...agentlik} />
        ))}
      </div >
      <div  className='home-fourth-block'>
        <div  className='elanlar'>
        <a href="">ELANLAR</a>
          </div>
          <div>
            <a href="">Daha cox</a>
          </div>
          </div> 
          <div className='card' style={{ display: 'flex',padding:" 0 calc(100% / 6)", justifyContent: 'center', flexWrap: 'wrap', boxShadow: " 0 17px 34px 0 rgba(44, 39, 56, 0.04), 0 8px 17px 0 rgba(44, 39, 56, 0.02)" }}>
        {filteredCards.map((elanlar) => (
          <Card key={elanlar.title} {...elanlar} />
        ))}
      </div >
      </div>
    </div>

  );
}
