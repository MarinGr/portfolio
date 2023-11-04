import { v4 as uuidv4 } from "uuid";
import foodShopImg from "../images/projectsImages/food-shop.png";
import weatherAppImg from "../images/projectsImages/weather-app.png";
import savingsGoalsImg from "../images/projectsImages/savings-goals.png";
import cryptocurrencyAppImg from "../images/projectsImages/cryptocurrency-app.png";
import loanCalculatorImg from "../images/projectsImages/loan-calculator.png";
import chatbotImg from "../images/projectsImages/chatbot-interface.png";

export const projectsData = [
  {
    id: uuidv4(),
    img: foodShopImg,
    title: "Food shop",
    desc: "Grocery shopping app built with React and React Router. Includes cart and favourites functionality.",
    stack: "React, React Router, Styled Components",
    github: "https://github.com/MarinGr/shop-react",
    liveDemo: "https://maringr.github.io/shop-react/",
  },
  {
    id: uuidv4(),
    img: savingsGoalsImg,
    title: "Savings goals",
    desc: "This app lets users to keep track of their savings goals progress. Includes additional dependencies such as react-circular-progressbar, react-confetti.",
    stack: "React, Styled Components",
    github: "https://github.com/MarinGr/savings-goals",
    liveDemo: "https://maringr.github.io/savings-goals/",
  },
  {
    id: uuidv4(),
    img: chatbotImg,
    title: "Chatbot interface",
    desc: "Chatbot interface with response options built with Vue and Pinia. Includes additional dependency vue-loading-overlay.",
    stack: "Vue, Pinia",
    github: "https://github.com/MarinGr/chatbot-interface",
    liveDemo: "https://maringr.github.io/chatbot-interface/",
  },
  {
    id: uuidv4(),
    img: loanCalculatorImg,
    title: "Loan calculator",
    desc: "Loan calculator with real-time results update built with Vue and Vuex. Includes additional dependency vue-chart-3.",
    stack: "Vue, Vuex",
    github: "https://github.com/MarinGr/loan-calculator-vue",
    liveDemo: "https://maringr.github.io/loan-calculator-vue/",
  },

  {
    id: uuidv4(),
    img: cryptocurrencyAppImg,
    title: "Cryptocurrency app",
    desc: "Cryptocurrency app that provides data about current cryptocurrency prices. Built with React and React Router and includes integration with CoinStats API.",
    stack: "React, React Router, Styled Components, CoinStats API",
    github: "https://github.com/MarinGr/cryptocurrency-app",
    liveDemo: "https://maringr.github.io/cryptocurrency-app/",
  },
  {
    id: uuidv4(),
    img: weatherAppImg,
    title: "Weather app",
    desc: "Weather app built with React and Typescript. Includes integration with OpenWeatherAPI.",
    stack: "React, Typescript, OpenWeather API",
    github: "https://github.com/MarinGr/weather-ts",
    liveDemo: "https://maringr.github.io/weather-ts/",
  },
];
