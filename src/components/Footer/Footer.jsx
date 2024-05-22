import React from "react";
import "./Footer.css";
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-firstBlock">
                <h3>Reklam yerlesdirin</h3>
                <div>
                    <IconButton sx={{ '&:hover': { color: 'brown' } }} aria-label="facebook button" component="span">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ '&:hover': { color: 'brown' } }} aria-label="instagram button" component="span">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ '&:hover': { color: 'brown' } }} aria-label="mail button" component="span">
                        <MailIcon />bina@bina.az
                    </IconButton>
                    <IconButton sx={{ '&:hover': { color: 'brown' } }} aria-label="contacts button" component="span">
                        <ContactsIcon />(012) 505-08-02
                    </IconButton>
                </div>
            </div>
            <div className="footer-second-Block">
                <h3>Bakinin rayonlari</h3>
                <div className="footer-secondBlock"><a href="">Abseron</a>
                    <a href="">Bineqedi</a>
                    <a href="">Xetai</a>
                    <a href="">Xezer</a></div>
            </div>
            <div className="footer-third-Block">
                <h3>Butun Azerbaycan</h3>
                <div className="footer-thirdBlock"><a href="">Baki</a>
                    <a href="">Xirdalan</a>
                    <a href="">Sumqayit</a>
                    <a href="">Qebele</a></div>
            </div>
            <div className="footer-fourth-Block">
                <a href=""><Link to="/about">Layihə haqda</Link></a>
                <a href=""><span>İstifadəçi razılaşması</span></a>
                <a href=""><span>Saytın xəritəsi</span></a>
                <a href=""><span>Məxfilik siyasəti</span></a>
            </div>
            <div className="footer-fifth-Block">
                <div className="administration">Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</div>
                <div className="digital"> <p>© 2008-2024 Digital Classifieds MMC. VÖEN: 1405631661<a class="footer-mobile" href="">Mobil versiyası</a></p></div>
            </div>
        </footer>
    );
}
export default Footer;