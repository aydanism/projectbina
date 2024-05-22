import {React, useState} from "react";
import "./Home.css";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import MapFoto from "../../assets/map.png"
import ConstructionFoto from "../../assets/construction.png"
import ApartmentsFoto from "../../assets/apartments.png"
import Footer from "../Footer/Footer"
import { elanlar } from "../Cards/Cards";
import { Link } from "react-router-dom";
export const categoriess = [
    { id: 1, title: 'Kohne tikililer', items: ["1 otaqli", "2 otaqli", "3 otaqli", "4 otaqli", "5 otaql ve daha cox"] },
    { id: 2, title: 'Yeni tikililer', items: ["1 otaqli", "2 otaqli", "3 otaqli", "4 otaqli", "5 otaqli ve daha cox"] },
    { id: 3, title: 'Yasayis obyektleri', items: ["Menziller", "Yeni tikililer", "Kohne tikililer", "Heyet evleri\Bag evleri"] },
    { id: 4, title: 'Ticaret obyektleri', items: ["Ofisler", "Qarajlar", "Torpaq Saheleri", "Obyektler"] },
]
const blank = [

    { id: 1, title: 'Günlük kirayə mənzillər', img: ApartmentsFoto, views: '338 elan' },
    { id: 2, title: 'Xəritə ezrə axtarış', img: MapFoto, views: '90444 elan' },
    { id: 3, title: 'Tikinti xidmətləri', img: ConstructionFoto, views: '3768 elan' },
]

function Home() {
    const [filteredElanlar, setFilteredElanlar] = useState(elanlar);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filterDataElan = (categoryItem) => {
        console.log('Filtering by category item:', categoryItem);
        const filteredCards = elanlar.filter(card => card.categories === categoryItem);
        console.log('Filtered cards:', filteredCards);
        setFilteredElanlar(filteredCards);
        setSelectedCategory(categoryItem); // Установка выбранной категории
    };
    

    return (
        <div className="main">
            <Header />
            <div className="home">
                <div className="home-1">
                    <div className="home-first">
                        <div className="top-of-boxes">
                            <div className="t-of-b-1">Alis</div>
                            <div className="t-of-b-2">Kiraye</div>
                            <a href="">Bugun- 1948 yeni elan</a>
                        </div>
                        <div className="boxes-flex">
                        {categoriess.map((category) => (
                                <div key={category.id} className="boxes">
                                    <h5>{category.title}</h5>
                                    <ul>
                                        {category.items.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                            <Link to={`/filtered-cards/${subItem}`}>{subItem}</Link>
                                        </li>
                                        ))}
                                    </ul>

                                </div>
                            ))}
                        </div>
                    </div>
                    <aside >
                        {blank.map(item => (
                            <div key={item.id} className="aside-block">
                                <div className="aside-image"><img src={item.img} alt="" /></div>
                                <div className="aside-text">
                                    <h5>{item.title}</h5>
                                    <p>{item.views}</p>
                                </div>
                            </div>

                        ))}
                    </aside>
                </div>
                <Cards filteredCards={filteredElanlar} />
            </div>

            <div className="opisaniye">
                <h2>bina.az - Ən son ev elanlari sayti</h2>

                <p>Azərbaycanın ən böyük elan bazası olan bina.az saytına daxil olmaqla, daşınmaz əmlak bazarının ən son və ən yeni alqı-satqı və kirayə elanları ilə tanış olmaq olar. Burada alıcı və satıcı üçün çox rahat interfeys və axtarış sistemi işləyir. Səhifədə Bakının rayonlarında satılan mənzillər, evlər/villalar, bağlar, ofislər, qarajlar, torpaqlar, obyektlər barədə geniş məlumat əldə etmək olar. İstifadəçilərin rahatlığı üçün nəzərdə tutulmuş filtrlər vasitəsi ilə siz istənilən axtarış kriteriyalarınızı sayta daxil edərək, ucuz və ya lüks, təmirli və ya "pod mayak", şəhərin mərkəzində və ya kənar ərazilərdə mənzil, ev, ofislərlə tanış ola bilərsiniz. Azərbaycanın daşınmaz emlak kataloqunu bina.az saytinda tapacaqsınız! Ən böyük ev elanlari sayti olan bina.az saytında Siz çox tez bir zamanda və rahat şəkildə istədiyiniz, zövqünüzə uyğun ev, mənzil, obyekt və ya başqa bir əmlakı tapa bilərsiniz. Sadəcə bina.az saytına daxil olun. Yuxarıda yerləşən seçim panelindən lazımlı parametrlərini seçin. Məsələn, yeni və yaxud köhnə tikili, bir, iki, üç və daha çox otaqlı, mənzil və ya həyət evi/villa, <a href="">kiraye evler</a> və digər. Siz təkcə evləri yox, hətta ofis, obyekt və ya torpaq sahələrini də axtara bilərsiniz. Bundan əlavə, məbləğə görə də seçim edə bilərsiniz.</p>

                <h3>bina.az saytında elan yerləşdirilməsi</h3>

                <p>Satılıq əmlakınız var? Siz bina.az saytında elanınızı asanlıqla yerləşdirə bilərsiniz. Bunun üçün əmlakın şəkillərini çəkin. Çalışın şəkillər keyfiyyətli olsun və yaxşı rakursdan çəkilsin. Əmlakın bütün otaqların, hətta mətbəx, hamam, balkonun da şəkillərin olması məsləhətlidır. Əmlakın təsvirini verin. Yerləşməsi, tam ünvanı, mərtəbə, sahəsi, otaq sayı, təmirini və digər məlumatı ətraflı yazın. Əlaqə məlumatınızı daxil edin. Əlaqə məlumatınızı – telefon nömrənizi və email ünvanınızı daxil etdikdə, diqqətli olun! Məlumatı daxil edib, yenidən yoxlayın - əlaqə məlumatı dəyişilmir. Elan saytda dərc olunduqdan sonra Siz əlaqə məlumatınızı düzəliş edə bilmərsiniz!</p>

                <h3>İndi evlərin satışı çox rahat oldu!</h3>

                <p>Emlak birjasinda en populyar emlak saytlarindan biri olan bina.az sayti sizə daşınmaz əmlak bazarında olan bütün təklflərini sizə təqdim edəcək. bina.az saytında pulsuz elan yerləşdirmək çox asandır! Sayta daxil olub "ELAN YERLƏŞDİRİN" düyməsinə sıxaraq, satmaq istədiyiniz daşınmaz əmlak haqqında əsas məlumatları daxil edirsiz və bir neçə dəqiqədən sonra sizin elanınızı minlərlə istifadəçi görür. 1, 2, 3, 4, 5 otaqli yeni tikililer ve kohne tikililer. Mənzillər, Evlər / Villalar, <a href="">Kiraye evler</a>, Bağlar, Ofislər, Qarajlar, Torpaq, Obyektlər. Abşeron, Nərimanov, Sabunçu, Xətai, Binəqədi, Nəsimi, Suraxanı, Xəzər, Nizami, Qaradağ, Səbail, Yasamal rayonlarında evlərin alqı-satqısı və kirayəsi. Bütün əmlak bazari bina.az-da.</p>

                <h3>Bakida <a href="" >kiraye evler</a></h3>

                <p><a href="" >Kiraye</a> axtarirsiniz ve ya evinizi <a href="">kiraye</a> vermek isteyirsiniz? Bunu Siz bina.az-da edə bilərsiniz.  </p>

                <h3>Ucuz evlərin alqı satqısı</h3>

                <p>Ucuz ev axtarırsız? bina.az saytına daxil olun, qiymət dərəcəsini daxil edin və əks olunmuş nəticələrin içində sizə ən uyğün daşınmaz əmlakı seçin.</p>

            </div>
            <div>
                
            </div>
            <Footer />
        </div>
    )
}
export default Home;
