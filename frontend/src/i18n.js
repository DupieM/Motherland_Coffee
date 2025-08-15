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
          descriptionlinefive: "Once you're done, you’ll receive a special reward:",
          descriptionlinesix: "Get a 10% coupon by sending your sticker too someone – our way of saying thanks for being part of our journey",
          descriptionlineseven: "Let’s celebrate language, coffee, and connection one cup at a time.",
          subheading: "Where to find your next coffee",
          locationone: "Cape Town",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "Continue",
          footer: "Follow Us",
          sticker: {
            headingone: "",
            placeholderone: "",
            headingtwo: "",
            subheading: "",
            placeholdertwo: "",
            headingthree: "",
            buttontexttwo: "",
            buttontextthree: "",
            headingfour: "",
            headingfive: "",
            placeholderthree: "",
            buttontextfour: ""
          },
          thankyou: {
            text: ""
          }
        }
      },
      af: {
        translation: {
          welcome: "Welkom Koffie liefhebbers",
          descriptionlineone: "Elke koppie het ‘n storie so deel dit met ons.",
          descriptionlinetwo: "Kies die Moederland Koffie naaste aan jou en vertel dan vir ons die volgende:",
          descriptionlinethree: "Wat beteken koffie vir jou?",
          descriptionlinefour: "Deel jou boodskap met ons en skep dan jou eie plakker wat geinspireerd deur jou woorde.",
          descriptionlinefive: "Wanneer jy klaar is, wag jou beloning:",
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
            placeholdertwo: "Jou Boodkspa",
            headingthree: "Kies ‘n agtergrond vir jou plakker",
            buttontexttwo: "Vorig",
            buttontextthree: "Volgende",
            headingfour: "Kies jou gunsteling kleur",
            headingfive: "Sê vir ons na wie om die plakker te stuur",
            placeholderthree: "Jou Email",
            buttontextfour: "Stuur"
          },
          thankyou: {
            text: "Dankie dat jy deel geneem het."
          }
        }
      },
      zu: {
        translation: {
          welcome: "nam’kelekile we’bathandi bekhofi",
          descriptionlineone: "Yonke ikomishi ine nganekwane yayo, thina sifuna ukuzwa eyakho.",
          descriptionlinetwo: "Kqala ngoku’chofoza kunoma iyiphi indawo yase Motherland Coffee eNingizimu Afrika. Mese uyas’tshela ke:",
          descriptionlinethree: "Lisho ukuthini ikhofi kuwe?",
          descriptionlinefour: "Wabelane ngomlayezo wakho, mese uklama isincametheli esiyingqayizevele, esigqugquzelwe amaga akho",
          descriptionlinefive: "Mawu’qeda, uzothola umvuzo okhethekile:",
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
            headingtwo: "wabelane ngamazwi akho noma awokubingelela",
            subheading: "bala umyalezo wokuthi ikhofi lisho uk’thini kuwe, ngolimi lwakho lwasekhaya",
            placeholdertwo: "umyalezo wakho",
            headingthree: "ketha ingemuva oyithandayo",
            buttontexttwo: "edlule",
            buttontextthree: "okulandelayo",
            headingfour: "engexa ukuthinta kombala owukhonzile",
            headingfive: "la sizo’kthumela khona isincamatheli sakho",
            placeholderthree: "iemail yomuntu",
            buttontextfour: "thumela"
          },
          thankyou: {
            text: "Siyabonga ngokubamba iqhaza"
          }
        }
      },
      sh: {
        translation: {
          welcome: "",
          descriptionlineone: "",
          descriptionlinetwo: "",
          descriptionlinethree: "",
          descriptionlinefour: "",
          descriptionlinefive: "",
          descriptionlinesix: "",
          descriptionlineseven: "",
          subheading: "",
          locationone: "Cape Town",
          locationtwo: "Randburg (Johannesburg)",
          locationthree: "Bedfordview (Johannesburg)",
          locationfour: "Groenkloof (Pretoria)",
          buttontextone: "",
          footer: "",
          sticker: {
            headingone: "",
            placeholderone: "",
            headingtwo: "",
            subheading: "",
            placeholdertwo: "",
            headingthree: "",
            buttontexttwo: "",
            buttontextthree: "",
            headingfour: "",
            headingfive: "",
            placeholderthree: "",
            buttontextfour: ""
          },
          thankyou: {
            text: ""
          }
        }
      }
      // 👉 you can keep adding more of SA’s 11 languages here
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
