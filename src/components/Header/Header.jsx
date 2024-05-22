import React from "react";
import "./Header.css";
import { useState } from "react";
import Logo from "../../assets/binaaz-logo-107847efc4c9cede987e172b22034c7dc6893bf9bc1a4805b540a53b522031a2.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { hover } from "@testing-library/user-event/dist/hover";
import PriceFilter from '../Cards/PriceFilter';
import Arrow from "../../assets/download.svg"
import Favorites from "../../assets/icon-bookmark-296f44fe6edfedfe2bc991ee89b7339970ab55be17dbb63267d5057189964599.svg"
import User from "../../assets/icon-user-92c2d73bc534d37460efa2a82c1f84664fae8c466bb198b588c0422c5c03a337.svg"
import AddNew from "../../assets/add-new.svg"
import { Padding } from "@mui/icons-material";
import { Link } from 'react-router-dom';
export const HeaderClasesBlock = () => {
    return (<>
        <div className="header-first-block">
            <p>Dəstək xidməti: (012) 505 08 02</p>
            <p><a href="#">AZ</a></p>
            <p><a href="#"><img className="favorites" src={Favorites} alt="" />Seçilmişlər</a></p>
            <p><img className="user" src={User} alt="" /><Link to="/enterance">Giriş</Link></p>
        </div>
        <div className="header-second-block">
            <div className="header-second-block-first">
                <p><span><img src={Logo} alt="" /></span></p>
                <p><a href="#">Alqi-satqi</a></p>
                <p><a href="#">Kiraye</a></p>
                <p> <a href=""> <Link to="/agency">Agentlikler</Link> </a> </p>
                <p><a href="#"><Link to="/yasayis-kompleksi">Yasayis kompleksleri</Link></a></p></div>
            <div className="header-second-block-butn">
                <button className="addNew">
                    <div className="addNew-img"><img src={AddNew} alt="" /></div>
                    <p> Elan yerlesdir</p>
                </button>
            </div>
        </div></>)
}

let Header = () => {
    const [filter, setFilter] = useState("");


    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (index) => {
        setActiveButton(activeButton === index ? null : index);
    };
    const [isBakiOpen, setIsBakiOpen] = useState(false);
    const handleBakiClick = () => {
        setIsBakiOpen(!isBakiOpen);
    };
    const [isButton1Open, setButton1Open] = useState(false);
    const handleClickButton1 = () => {
        setButton1Open(!isButton1Open);
    };

    const buttons = [
        { name: "Alis", section: ["Alis", "Kiraye"] },
        { name: "Menzil", section: ["Menzil", "Yeni tikili", "Kohne tikili", "Heyet evi/Bag evi", "Ofis"] }
    ];

    return (
        <div className="home">

            <div className="header-first-block">
                <p>Dəstək xidməti: (012) 505 08 02</p>
                <p><a href="">AZ</a></p>
                <p><a href=""><img className="favorites" src={Favorites} alt="" />Seçilmişlər</a></p>
                <p><a href=""><img className="user" src={User} alt="" />Giriş</a></p>
            </div>
            <div className="header-second-block">
                <div className="header-second-block-first">
                    <p><span><img src={Logo} alt="" /></span></p>
                    <p><a href="#">Alqi-satqi</a></p>
                    <p><a href="#">Kiraye</a></p>
                    <p> <a href=""> <Link to="/agency">Agentlikler</Link> </a> </p>
                    <p><a href="#"><Link to="/yasayis-kompleksi">Yasayis kompleksleri</Link></a></p></div>
                <div className="header-second-block-butn">
                    <button className="addNew">
                        <div className="addNew-img"><img src={AddNew} alt="" /></div>
                        <p> Elan yerlesdir</p>
                    </button>
                </div>
            </div>
            <div className="header-third-block">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    {buttons.map((button, index) => (
                        <div className="ddm1" key={index}>
                            <button type="button" onClick={() => handleClick(index)}> <p>{button.name} <img style={{ transform: activeButton === index ? "rotate(180deg)" : "rotate(0deg)" }} src={Arrow} alt="" /> </p></button>
                            {activeButton === index && (
                                <div className='dropdown-menu1'>
                                    <ul>
                                        {button.section.map((subItem, subIndex) => (
                                            <li key={subIndex}>{subItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="ddm2"><button type="button" onClick={() => handleClick(buttons.length)}> <p>Otag sayi  <img style={{ transform: activeButton === buttons.length ? "rotate(180deg)" : "rotate(0deg)" }} src={Arrow} alt="" /></p></button>
                        {activeButton === buttons.length && (
                            <div className="dropdown-menu2">
                                <ul>
                                    <li className="checkbox-round"><input type="checkbox" /><span>Istenilen otag sayi</span></li>
                                    <li><input type="checkbox" />1 otaqli</li>
                                    <li><input type="checkbox" />2 otaqli</li>
                                    <li><input type="checkbox" />3 otaqli</li>
                                    <li><input type="checkbox" />4 otaqli</li>
                                    <li><input type="checkbox" /><span>5 otaq ve daha cox</span></li>
                                </ul></div>
                        )}</div>
                    <div className="ddm-qiymet"><button type="button" onClick={handleClickButton1}> <p>Qiymet,AZN</p></button>
                        {
                            isButton1Open && (
                                <div className="min-max-qiymet"><PriceFilter /></div>
                            )}
                    </div>
                    <div className="ddm3"><button type="button" onClick={() => handleClick(buttons.width)}>  <p>Baki  <img style={{ transform: activeButton === buttons.width ? "rotate(180deg)" : "rotate(0deg)" }} src={Arrow} alt="" /></p></button>
                        {activeButton === buttons.width && (
                            <div className="dropdown-menu3">
                                <ul>
                                    <li>Istenilen seher</li>
                                    <li>Xirdalan</li>
                                    <li>Sumqayit</li>
                                    <li>Qebele</li>
                                    <li>Agdam</li>
                                    <li>Agcabedi</li>
                                    <li>Balaken</li>
                                    <li>Celilabad</li>
                                    <li>Daskesen</li>
                                    <li>Gence</li>
                                    <li>Imisli</li>
                                    <li>Lenkaran</li>
                                </ul></div>
                        )}</div>
                    <div className="ddm4">
                        <button type="button" onClick={handleBakiClick}> <p>Ətraflı Axtarış <img style={{ transform: isBakiOpen ? "rotate(180deg)" : "rotate(0deg)" }} src={Arrow} alt="" /></p> </button>
                        {isBakiOpen && (
                            <div className="dropdown-menu4">
                            </div>
                        )}</div>

                    <div className="axtar">
                        <button><p>Axtar</p></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;
