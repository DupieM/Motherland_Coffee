// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next) // bind react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome Coffee Lovers",
          descriptionlineone: "Every cup has a story and we want to hear yours.",
          descriptionlinetwo: "Start by clicking on any Motherland Coffee location across South Africa. Then, tell us:",
          descriptionlinethree: "What does coffee mean to you?",
          descriptionlinefour: "Share your message, and design a unique sticker inspired by your words.",
          descriptionlinefive: "Once you're done, you’ll receive a special reward.",
          descriptionlinesix: "Get a 10% coupon by sending your sticker too someone – our way of saying thanks for being part of our journey.",
          descriptionlineseven: "Let’s celebrate language, coffee, and connection one cup at a time.",
          subheading: "Where to find your next coffee",
          locationone: "Cape Town",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "Continue",
          footer: "Follow Us",
          sticker: {
            headingone: "Let us know who's sending the love",
            placeholderone: "Name",
            headingtwo: "Share your words or greeting",
            subheading: "Write a message of what coffee means to you in your home language",
            placeholdertwo: "Message",
            headingthree: "Choose a background you like",
            buttontexttwo: "Previous",
            buttontextthree: "Next",
            headingfour: "Add your favourite colour touch",
            headingfive: "Where we'll send your sticker",
            placeholderthree: "Email",
            buttontextfour: "Send"
          },
          thankyou: {
            text: "Thank you for participating",
            note1: "Two vouchers are avaible for download - one for you",
            note2: "and one for the person receiving the sticker"
          }
        }
      },
      af: {
        translation: {
          welcome: "Welkom Koffie liefhebbers",
          descriptionlineone: "Elke koppie koffie het ‘n storie so deel dit met ons.",
          descriptionlinetwo: "Kies die Moederland Koffie naaste aan jou en vertel dan vir ons die volgende:",
          descriptionlinethree: "Wat beteken koffie vir jou?",
          descriptionlinefour: "Deel jou boodskap met ons en skep dan jou eie plakker wat geinspireerd is deur jou woorde.",
          descriptionlinefive: "Wanneer jy klaar is, wag jou beloning.",
          descriptionlinesix: "Kry ‘n 10% koepon wanneer jy jou plakker stuur na iemand - so sê ons dankie dat jy deel is van ons initiatief.",
          descriptionlineseven: "So vier ons tale, goeie koffie en samehorigheid een koppie op ‘n slag.",
          subheading: "Waar om jou volgende Koffie te vind",
          locationone: "Kaap Stad",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "Begin Hier",
          footer: "Volg ons hier",
          sticker: {
            headingone: "Sê vir ons wie stuur die liefde",
            placeholderone: "Naam",
            headingtwo: "Deel jou boodskap",
            subheading: "Skryf 'n boodskap oor wat koffie beteken vir jou in jou moedertaal.",
            placeholdertwo: "Boodskap",
            headingthree: "Kies ‘n agtergrond vir jou plakker",
            buttontexttwo: "Vorige",
            buttontextthree: "Volgende",
            headingfour: "Kies jou gunsteling kleur",
            headingfive: "Sê vir ons na wie om die plakker te stuur",
            placeholderthree: "Email",
            buttontextfour: "Stuur"
          },
          thankyou: {
            text: "Dankie dat jy deelgeneem het",
            note1: "Twee afslagbewyse is beskikbaar vir aflaai - een vir jou",
            note2: "en een vir die persoon wat die plakker ontvang"
          }
        }
      },
      zu: {
        translation: {
          welcome: "Nam’kelekile we’bathandi bekhofi",
          descriptionlineone: "Yonke ikomishi ine nganekwane yayo, thina sifuna ukuzwa eyakho.",
          descriptionlinetwo: "Kqala ngoku’chofoza kunoma iyiphi indawo yase Motherland Coffee eNingizimu Afrika. Mese uyas’tshela ke:",
          descriptionlinethree: "Lisho ukuthini ikhofi kuwe?",
          descriptionlinefour: "Wabelane ngomlayezo wakho, mese uklama isincametheli esiyingqayizevele, esigqugquzelwe amaga akho.",
          descriptionlinefive: "Mawu’qeda, uzothola umvuzo okhethekile.",
          descriptionlinesix: "Thola maphesenti ayishumi wama’coupon - eyamahala-indlela yethu yokuk’bonga ngokuba ingxenye",
          descriptionlineseven: "Masi’thokoze ulimi, ikhofi nok’xhumana nge’nkomishi eyodwa ngesikhati",
          subheading: "Ungalitholaphi ikhofi lakho elilandelayo",
          locationone: "Cape Town",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "qhubeka",
          footer: "Silandele",
          sticker: {
            headingone: "Sazise ukhuth ubani othumela uthando",
            placeholderone: "Igama",
            headingtwo: "Wabelane ngamazwi akho noma awokubingelela",
            subheading: "Bala umyalezo wokuthi ikhofi lisho uk’thini kuwe, ngolimi lwakho lwasekhaya",
            placeholdertwo: "umyalezo wakho",
            headingthree: "Ketha ingemuva oyithandayo",
            buttontexttwo: "Edlule",
            buttontextthree: "Okulandelayo",
            headingfour: "Engexa ukuthinta kombala owukhonzile",
            headingfive: "La sizo’kthumela khona isincamatheli sakho",
            placeholderthree: "iemail yomuntu",
            buttontextfour: "thumela"
          },
          thankyou: {
            text: "Siyabonga ngokubamba iqhaza",
            note1: "Amavawusha amabili ayatholakala ukuze alandwe - eyodwa eyakho",
            note2: "kanye nesomuntu othola isitikha"
          }
        }
      },
      xh: {
        translation: {
          welcome: "Wamkelekile abathandi beKofu",
          descriptionlineone: "Yonke indebe inebali kwaye sifuna ukuva eyakho.",
          descriptionlinetwo: "Qala ngokucofa kuyo nayiphi na indawo yeKofu yaseMotherland kuMzantsi Afrika wonke. Emva koko, sixelele:",
          descriptionlinethree: "Ithetha ntoni ikofu kuwe?",
          descriptionlinefour: "Yabelana ngomyalezo wakho, kwaye uyile isincamathelisi esisodwa esiphefumlelwe ngamazwi akho.",
          descriptionlinefive: "Nje ukuba ugqibile, uya kufumana umvuzo okhethekileyo.",
          descriptionlinesix: "Fumana ikhuphoni le-10% ngokuthumela isincamathelisi sakho nomntu - indlela yethu yokubulela ngokuba yinxalenye yohambo lwethu.",
          descriptionlineseven: "Masibhiyozele ulwimi, ikofu, kunye nokudibanisa ikomityi enye ngexesha.",
          subheading: "Ungayifumana phi ikofu yakho elandelayo",
          locationone: "Cape Town",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "Qhubeka",
          footer: "Silandele",
          sticker: {
            headingone: "Sazise ukuba ngubani othumela uthando",
            placeholderone: "Igama",
            headingtwo: "Yabelana ngamazwi akho okanye umbuliso",
            subheading: "Bhala umyalezo ochaza ukuba ikofu ithetha ntoni kuwe ngolwimi lwakho lwasekhaya",
            placeholdertwo: "Umyalezo",
            headingthree: "Khetha imvelaphi oyithandayo",
            buttontexttwo: "Ngaphambili",
            buttontextthree: "Okulandelayo",
            headingfour: "Yongeza umbala owuthandayo wokuchukumisa",
            headingfive: "Apho siyakuthumela khona isitikha sakho",
            placeholderthree: "I-imeyile",
            buttontextfour: "Thumela"
          },
          thankyou: {
            text: "Enkosi ngokuthatha inxaxheba",
            note1: "Iivawutsha ezimbini ziyafumaneka ukuze zikhutshelwe - enye yeyakho",
            note2: "kunye nesinye sesomntu ofumana isincamathelisi"
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
