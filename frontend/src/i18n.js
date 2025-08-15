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
      zu: {
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
          locationone: "",
          locationtwo: "",
          locationthree: "",
          locationfour: "",
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
          locationone: "",
          locationtwo: "",
          locationthree: "",
          locationfour: "",
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
