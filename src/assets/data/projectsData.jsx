import { v4 as uuidv4 } from "uuid";
import foodShopImg from "../images/projectsImages/food-shop.png";
import weatherAppImg from "../images/projectsImages/weather-app.png";
import loanCalculatorImg from "../images/projectsImages/loan-calculator.png";
import currencyConverterImg from "../images/projectsImages/currency-converter.png";
import savingsGoalsImg from "../images/projectsImages/savings-goals.png";
import qrCodeGeneratorImg from "../images/projectsImages/qr-code-generator.png";
import cryptocurrencyAppImg from "../images/projectsImages/cryptocurrency-app.png";
import todoListImg from "../images/projectsImages/todo-list.png";
import budgetAppImg from "../images/projectsImages/budget-app.png";

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
    desc: "App that lets users create and edit savings goals and keep track of their progress. Includes additional dependencies such as react-circular-progressbar, react-confetti.",
    stack: "React, Styled Components",
    github: "https://github.com/MarinGr/savings-goals",
    liveDemo: "https://maringr.github.io/savings-goals/",
  },
  {
    id: uuidv4(),
    img: budgetAppImg,
    title: "Budget App",
    desc: "Budget app that allows users to track their total balance based on expenses and income. Data is saved in localStorage.",
    stack: "Vue, Javascript",
    github: "https://github.com/MarinGr/budget-app-vue",
    liveDemo: "https://maringr.github.io/budget-app-vue/",
  },
  {
    id: uuidv4(),
    img: cryptocurrencyAppImg,
    title: "Cryptocurrency app",
    desc: "Cryptocurrency app that provides data about current cryptocurrency prices. This app is built with React and React Router and includes integration with CoinStats API.",
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
  {
    id: uuidv4(),
    img: loanCalculatorImg,
    title: "Loan calculator",
    desc: "Loan calculator built with Javascript. App allows users to get information about their total and monthly payments based on provided amount and terms of loan.",
    stack: "HTML, CSS, Javascript",
    github: "https://github.com/MarinGr/loan-calculator",
    liveDemo: "https://maringr.github.io/loan-calculator/",
  },
  {
    id: uuidv4(),
    img: currencyConverterImg,
    title: "Currency converter",
    desc: "Currency converter built with Javascript. Includes integration with Exchange rates API.",
    stack: "HTML, CSS, Javascript, Exchange rates API",
    github: "https://github.com/MarinGr/currency-converter",
    liveDemo: "https://maringr.github.io/currency-converter/",
  },
  {
    id: uuidv4(),
    img: qrCodeGeneratorImg,
    title: "QR code generator",
    desc: "React app that allows user to transform URL or text into QR code.",
    stack: "React, Javascript",
    github: "https://github.com/MarinGr/qr-generator",
    liveDemo: "https://maringr.github.io/qr-generator/",
  },
  {
    id: uuidv4(),
    img: todoListImg,
    title: "To do list",
    desc: "A simple to do list built with Javascript , saves data in local storage.",
    stack: "HTML, CSS, Javascript",
    github: "https://github.com/MarinGr/todo-list",
    liveDemo: "https://maringr.github.io/todo-list/",
  },
];
