import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Agency1 from "../../assets/agency1.jpg"
import Agency2 from "../../assets/agency2.jpg"
import Agency3 from "../../assets/agency3.jpg"
import Agency4 from "../../assets/realemlak.jpg"
import Agency5 from "../../assets/ayasofia.jpg"
import Agency6 from "../../assets/garantlogo.jpg"
import Agency7 from "../../assets/idealemlak.jpg"
import Agency8 from "../../assets/realestate.jpg"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./AgencyCards.css"

const agency=[
  { image:Agency1, title:"SS Group",view:"99 teklif",description:"Dəyərli müştərilər! “SS GROUP” əmlak agentliyini seçdiyiniz üçün sizə təşəkkür edirik! Şirkətimiz artıq uzun müddətdir ki fəaliyyətdədir. Bakı şəhəri daxilində premium bağ evləri və villaların alqı-satqısı, günlük və aylıq icarəsi ilə xidmətinizdəyik."},
  {image:Agency2,title:"New Life",view:"357 teklif",description:"New Life daşınmaz əmlak agentliyi mənzil, torpaq və ticari obyektlərin dəqiq qiymətləndirilməsini apararaq alqı-satqı, icarə, təmir-tikinti və dizayn işlərini ən yüksək səviyyədə həyata keçirir. Təcrübəli və peşəkar komandamız ilə xidmətinizdəyik!"},
  {image:Agency3,title:"Piramida",view:"56 teklif",description:"“Piramida” daşınmaz əmlak agentliyi sizin xidmetinizdədir"},
  {image:Agency4,title:"Real Emlak Azadliq",view:"1227 teklif",description:"Azadlıq Əmlak - Rahatlıq evdən başlayır devizi ilə fəaliyyətə başlayıb. Şirkətimizin filialları yaşayış və kommersiya əmlakının satışı, kirayəsi, qiymətləndirilməsi, dizayn və təmiri, əmlaka aid məsləhətlərin verilməsi üzrə təcrübəli mütəxəssisləri ilə birgə Bakıda və Abşeron rayonunda sizin xidmətinizdədir. "},
  {image:Agency5,title:"AyaSofia Real Estate",view:"106 teklif",description:"“AyaSofia” daşınmaz əmlak şirkəti. "},
  {image:Agency6,title:"Garanti Əmlak",view:"295 teklif",description:"Şirkət daşınmaz əmlakın alqı-satqısı ilə məşğuldur."},
  {image:Agency7,title:"Ideal Emlak",view:"118 teklif",description:"'İdeal Əmlak' agentliyi əmlak bazarının ən ideal təkliflərini sizə təqdim etməkdən qürur duyur. Böyük və peşəkar komanda ilə həftənin hər günü xidmətinizdəyik. Ev, obyekt, torpaq və villaların alışını, satışını və icarəsini peşəkarlara həvalə edin!"},
  {image:Agency8,title:"Rauf-Leyla Əmlak",view:"300teklif",description:"Agentlik villa və bağların alqı-satqısını və kirayəsini həyata keçirir."}
]
const AgencyCards = () => (
<div>
  <div> <Header/> </div>
  <div className='cards-agency'>
      {agency.map((agency, index) => (
        <Card key={index} className="card-agency">
          <CardContent className="card-content">
            <div><img src={agency.image} alt="logo" /></div>
            <div className='card-block'>
              <Typography variant="h5" component="h2" className="card-title">{agency.title}</Typography>
              <Typography className="card-view">{agency.view}</Typography>
              <Typography color="textSecondary" className="card-description">{agency.description}</Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div> <Footer/> </div>
  </div>
);

export default AgencyCards;