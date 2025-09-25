import "./App.css";
import Reel from "./Reel";

function App() {
  const pages = [
    {
      title: "Imam Ali b. Abi Talib (a)",
      url: "https://en.wikishia.net/view/Imam_Ali_b._Abi_Talib_(a)",
      image:
        "https://images.unsplash.com/photo-1724051526928-ae6f5d53bead?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFqYWZ8ZW58MHx8MHx8fDA%3D",
      text: "ʿAlī b. Abī Ṭālib (Arabic: علي بن أبي طالب) known as Imam ʿAlī (a) (b. 23 BH/600 - d. 40/661) is the first Imam of all the branches of the Shi'a, a companion, a narrator, and a scribe of the Qur'an. He is the fourth caliph of the Rightly Guided Caliphs in Sunni Islam. Ali (a) is the cousin, and son-in-law of the Prophet (s), the husband of Lady Fatima (a), the father of Imam al-Hasan (a) and Imam al-Husayn (a). The rest of the Imams of the Shi'a are his descendants. According to Shi'i historians and many Sunni scholars, he was born inside the Ka'ba. He was also the first Muslim",
    },
    {
      title: "Lady Fatimah al-Zahra' (a)",
      url: "https://en.wikishia.net/view/Lady_Fatimah_al-Zahra%27_(a)",
      image:
        "https://commons.wikishia.net/w/images/thumb/f/f0/Masjid_al-Haram.jpg/600px-Masjid_al-Haram.jpg",
      text: "Fāṭima (a) (Arabic: فاطِمَة) commonly known as Fāṭima al-Zahrā (a) (Arabic: فاطِمَة الزهراء) (d. 11/632) was the daughter of Prophet Muhammad (s) and Lady Khadija (a) and the wife of Imam Ali (a). She is one of the People of the Cloak and, in Twelver Shia belief, one of the Fourteen Infallibles. She was the mother of second and third Imams, as well as Lady Zaynab (a). Al-Zahra', al-Batul, Sayyidat Nisa' al-'Alamin and Umm Abiha are among her epithets. She was the only lady chosen by the Prophet (s) to be part of the Mubahala with the Christians of Najran. ",
    },
    {
      title: "Jamkaran Mosque",
      url: "https://en.wikishia.net/view/Jamkaran_Mosque",
      image:
        "http://commons.wikishia.net/w/images/thumb/b/b4/Jamkaran_mosque.jpg/600px-Jamkaran_mosque.jpg",
      text: " Jamkarān Mosque (Persian: مَسجِد جَمْکَران) is a mosque attributed to Imam al-Mahdi (a), the twelfth Shi'a Imam, in the suburbs of Qom. Reportedly, it was constructed at his command in the fourth/tenth century. According to Mirza Husayn Nuri, a Shiite scholar of hadith in the fourteenth/ninetieth century, Jamkaran Mosque was built at the command of Imam al-Mahdi (a) by a person called Abu l-Hasan, a scholar from Qom. Muhaddith Nuri talks about a meeting between Hasan b. Muthla al-Jamkarani and Imam al-Mahdi (a), in which the Imam (a) commanded the construction of the mosque in Jamkaran. Mirza Husayn Nuri says that the event occurred in 373/983-4 or 393/1002-3, attributing the story to al-Shaykh al-Saduq’s Munis al-hazin. ",
    },
  ];

  return (
    <div className="reel-container">
      {pages.map((page) => (
        <Reel
          title={page.title}
          image={page.image}
          text={page.text}
          url={page.url}
        />
      ))}
    </div>
  );
}

export default App;
