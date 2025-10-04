import { useState, useEffect } from "react";
import "./App.css";
import Reel from "./Reel";
import type { ReelData } from "./types";

function App() {
  const [pages, setPages] = useState<ReelData[]>([]);

  useEffect(() => {
    // const API_PATH = "http://127.0.0.1:5050/reels";
    // fetch(API_PATH)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPages(data);
    //   });
    setPages([
      {
        title: "Najaf",
        url: "https://en.wikishia.net/w/index.php?title=Najaf",
        image:
          "https://images.unsplash.com/photo-1707678220073-e9e08ddb2d9d?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Najaf or al-Najf al-Ashraf (Arabic: النَّجَف الاَشرَف) (Dignified Najaf) is a Shiite pilgrimage city in Iraq, where the Holy Shrine of Imam 'Ali (a) is located. The city was residential before the emergence of Islam, but after the construction of Imam 'Ali's mausoleum and shrine in 2nd century, it turned into a thriving city to which many Shi'as immigrated. Some kings, including 'Adud al-Dawla al-Daylami, Shah Isma'il, and Shah Tahmasp, as well as certain Qajar kings, contributed to the construction of Najaf. ",
        shortened_text:
          "Najaf or al-Najf al-Ashraf (Arabic: النَّجَف الاَشرَف) (Dignified Najaf) is a Shiite pilgrimage city in Iraq, where the Holy Shrine of Imam 'Ali (a) is located",
      },
      {
        title: "Ka'ba",
        url: "https://en.wikishia.net/w/index.php?title=Ka%27ba",
        image:
          "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text: "",
        text: "Kaʿba (Arabic: الکعبة) is a cube-shaped building inside al-Masjid al-Haram, Mecca. It is the most important place of worship in Islam and the qibla of Muslims. Muslims turn their face to it from any part of the world when they say their prayers. Doing tawaf (circumambulation) around it is a part of hajj rituals. ",
      },
      {
        title: "Jamkaran Mosque",
        url: "https://en.wikishia.net/view/Jamkaran_Mosque",
        image:
          "https://images.unsplash.com/photo-1583587870517-8455e1f268d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text: "",
        text: " Jamkarān Mosque (Persian: مَسجِد جَمْکَران) is a mosque attributed to Imam al-Mahdi (a), the twelfth Shi'a Imam, in the suburbs of Qom. Reportedly, it was constructed at his command in the fourth/tenth century. According to Mirza Husayn Nuri, a Shiite scholar of hadith in the fourteenth/ninetieth century, Jamkaran Mosque was built at the command of Imam al-Mahdi (a) by a person called Abu l-Hasan, a scholar from Qom. Muhaddith Nuri talks about a meeting between Hasan b. Muthla al-Jamkarani and Imam al-Mahdi (a), in which the Imam (a) commanded the construction of the mosque in Jamkaran. Mirza Husayn Nuri says that the event occurred in 373/983-4 or 393/1002-3, attributing the story to al-Shaykh al-Saduq’s Munis al-hazin. ",
      },
      {
        title: "Karbala",
        url: "https://en.wikishia.net/view/Karbala",
        image:
          "https://images.unsplash.com/photo-1564261215822-7dce6f409acf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text:
          "Karbalā (Arabic: كربلاء) is one of the pilgrimage cities in Iraq that is frequently visited by the Shi'a.",
        text: " Karbalā (Arabic: كربلاء) is one of the pilgrimage cities in Iraq that is frequently visited by the Shi'a. It became so due to the martyrdom of Imam al-Husayn (a) and his loyal companions at this location in the year 61/680. In addition, this city also holds the mausoleums of Imam al-Husayn (a) and al-'Abbas (a). ",
      },
      {
        title: "Qom",
        url: "https://en.wikishia.net/view/Qom",
        image: "https://en.icro.ir/uploads/1/2023/May/19/FUJUAGJaUAEQjpu.jpg",
        shortened_text:
          "Qom (Arabic: قُم) is the second religious city of Iran and one of the bases of Shi'ism.",
        text: "Qom (Arabic: قُم) is the second religious city of Iran and one of the bases of Shi'ism. The city dates back to before the rise of Islam. The city was conquered by Muslims in 23/644 but the people of Qom converted to Islam with the immigration of al-Ash'ari Family in 85/704, the beginning of the development of Qom as a Shi'a city was from that time. ",
      },
      {
        title: "Madina",
        url: "https://en.wikishia.net/w/index.php?title=Medina",
        image:
          "https://images.unsplash.com/photo-1692566123227-0f68f1b9dac6?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text:
          "Medina (Arabic: المدينة) (literally: the City) is the second most sacred city for Muslims, located in Saudi Arabia.",
        text: "Medina (Arabic: المدينة) (literally: the City) is the second most sacred city for Muslims, located in Saudi Arabia. The Prophet's (s) emigration to this city marks the beginning of the Islamic Calendar. It had been named as Yathrib before the emigration of the Prophet (s). Medina is located in the northeast of Mecca in the Hijaz region. The distance between Medina and Mecca is 450 Km. ",
      },
      {
        title: "Makka",
        url: "https://en.wikishia.net/view/Mecca",
        image:
          "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text:
          "Mecca (Arabic: مکة) is the holiest city for Muslims where Prophet Muhammad (s) was born and Islam was appeared",
        text: "Mecca (Arabic: مکة) is the holiest city for Muslims where Prophet Muhammad (s) was born and Islam was appeared. This city is located in Arabian Peninsula, Arabia. Bakka, Balad al-Ḥarām, Balad al-Amīn, and Umm al-Qurā are the other names of this city. ",
      },
      {
        title: "Mashhad",
        url: "https://en.wikishia.net/w/index.php?title=Mashhad",
        image:
          "https://images.unsplash.com/photo-1562575029-a1e92321bf00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text:
          "Mashhad (مشهد) or Mashhad al-Riḍā (مشهد الرضا) is among the most important religious Shi'ite cities in Iran",
        text: "Mashhad (مشهد) or Mashhad al-Riḍā (مشهد الرضا) is among the most important religious Shi'ite cities in Iran, which is located in northeast of the country and it is the capital of Razavi Khorasan province. It was the capital of Iran in Afsharid era. Mashhad is the second largest city of Iran after Tehran. According to national census in 2011 of Iran, Mashhad contains two million and seven hundred sixty thousand people. As the holy shrine of Imam al-Rida (a) is located in this city, every year about thirty million foreigner and Iranian visit the city. In 2009 Mashhad was called the spiritual capital of Iran. Also ISESCO[1] chose Mashhad as the capital of Islamic culture in 2017. ",
      },
      {
        title: "Kufa",
        url: "https://en.wikishia.net/w/index.php?title=Kufa",
        image:
          "https://images.unsplash.com/photo-1737448223290-49d8de5f52ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shortened_text:
          "Kūfa (Arabic: الکوفة), also spelled Kufah, is located in the south of Iraq, ten Kilometers northeast of Imam Ali's shrine in Najaf and it is the second city built by Muslims.",
        text: " Kūfa (Arabic: الکوفة), also spelled Kufah, is located in the south of Iraq, ten Kilometers northeast of Imam Ali's shrine in Najaf and it is the second city built by Muslims. It was chosen as the capital by Imam 'Ali (a) in 36/656-7, where he was martyred. Most of Shi'a Muslims were inhabitants of Kufa in the 1st/7th century. The great Mosque of Kufa and al-Sahla Mosque are among the main historical buildings of the city. Sciences such as fiqh, hadith, and Arabic syntax were prominent and routinely taught in this city. ",
      },
    ]);
  }, []);

  return (
    <div className="reel-container">
      {pages.map((page) => (
        <Reel
          key={page.url}
          title={page.title}
          image={page.image}
          text={page.text}
          url={page.url}
          shortenedText={page.shortened_text}
        />
      ))}
    </div>
  );
}

export default App;
