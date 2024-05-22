import { React, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { HeaderClasesBlock } from "../Header/Header";
import "./About.css"

 const About =()=>{
    return(
        <div>
            <HeaderClasesBlock/>
            <div class="md-content"><h3>LAYİHƏ HAQQINDA</h3>

<p>bina.az - daşınmaz əmlak bazarının bütün iştirakçılarının faydalana biləcəyi onlayn platformadır. Layihə alıcılara daşınmaz əmlakın alqı-satqısı və kirayəsi haqqında elanların geniş bazasından rahat istifadə imkanı yaradır. Daşınmaz əmlak agentlikləri, tikinti şirkətləri və fiziki şəxslərə isə potensial alıcılarına təkliflərini qısa zamanda çatdırmaq üçün optimal imkan əldə edir.</p>

<p>Layihə fəaliyyətinə 2008-ci ildə başlayıb və hal-hazırda Azərbaycanın daşınmaz əmlak bazarında aparıcı onlayn resursdur.</p>

<p>bina.az – daşınmaz əmlak şirkəti deyil. Layihənin məqsədi alıcı ilə satıcı arasında vasitəçisiz və operativ əlaqə imkanı yaratmaqdır.</p>

<p><strong>Elanların yerləşdirilməsi</strong></p>

<p>bina.az - istifadəçilərə sayta elan yerləşdirmək imkanı yaradır. Hər istifadəçi 30 gün ərzində ödənişsiz olaraq 1 elan yerləşdirə bilər.</p>

<p><strong>Bizimlə əlaqə</strong></p>

<p>Biz layihənin inkişafı və təkmilləşdirilməsi üçün əlimizdən gələni edirik və sizin bu haqda olan fikirlərinizi və təkliflərinizi dinləməyə hazırıq. Bizimlə əlaqə yaratmaq üçün <a href="mailto:bina@bina.az">bina@bina.az</a> e-mail ünvanına yaza və ya (012) 599-08-02 telefon nömrəsinə zəng edə bilərsiniz.</p>

<p><strong>Satış şöbəsi ilə əlaqə</strong></p>

<p><a href="mailto:sales@bina.az">sales@bina.az</a></p>
</div>
<Footer/>
        </div>
    )
 }
 export default About;