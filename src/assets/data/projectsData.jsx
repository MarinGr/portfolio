import { v4 as uuidv4 } from "uuid";
import foodShopImg from "../images/projectsImages/food-shop.png";
import weatherAppImg from "../images/projectsImages/weather-app.png";
import loanCalculatorImg from "../images/projectsImages/loan-calculator.png";
import currencyConverterImg from "../images/projectsImages/currency-converter.png";
import savingsGoalsImg from "../images/projectsImages/savings-goals.png";
import qrCodeGeneratorImg from "../images/projectsImages/qr-code-generator.png";
import cryptocurrencyAppImg from "../images/projectsImages/cryptocurrency-app.png";
import todoList from "../images/projectsImages/todo-list.png";

export const projectsData = [
  {
    id: uuidv4(),
    img: foodShopImg,
    title: "Food shop",
    desc: "A grocery shopping app with cart functionality developed with React.",
    github: "https://github.com/MarinGr/shop-react",
    liveDemo: "https://maringr.github.io/shop-react/",
  },
  {
    id: uuidv4(),
    img: savingsGoalsImg,
    title: "Savings goals",
    desc: "React app that lets user create savings goals and keep track of their progress.",
    github: "https://github.com/MarinGr/savings-goals",
    liveDemo: "https://maringr.github.io/savings-goals/",
  },
  {
    id: uuidv4(),
    img: cryptocurrencyAppImg,
    title: "Cryptocurrency app",
    desc: "React app that provides current data about cryptocurrencies rates.",
    github: "https://github.com/MarinGr/cryptocurrency-app",
    liveDemo: "https://maringr.github.io/cryptocurrency-app/",
  },
  {
    id: uuidv4(),
    img: weatherAppImg,
    title: "Weather app",
    desc: "Weather app built with React and Typescript.",
    github: "https://github.com/MarinGr/weather-ts",
    liveDemo: "https://maringr.github.io/weather-ts/",
  },
  {
    id: uuidv4(),
    img: loanCalculatorImg,
    title: "Loan calculator",
    desc: "Loan calculator built with Javascript.",
    github: "https://github.com/MarinGr/loan-calculator",
    liveDemo: "https://maringr.github.io/loan-calculator/",
  },
  {
    id: uuidv4(),
    img: currencyConverterImg,
    title: "Currency converter",
    desc: "Currency converter built with Javascript.",
    github: "https://github.com/MarinGr/currency-converter",
    liveDemo: "https://maringr.github.io/currency-converter/",
  },
  {
    id: uuidv4(),
    img: qrCodeGeneratorImg,
    title: "QR code generator",
    desc: "React app that allows user to transform URL or text into QR code.",
    github: "https://github.com/MarinGr/qr-generator",
    liveDemo: "https://maringr.github.io/qr-generator/",
  },
  {
    id: uuidv4(),
    img: todoList,
    title: "To do list",
    desc: "A simple to do list built with Javascript.",
    github: "https://github.com/MarinGr/todo-list",
    liveDemo: "https://maringr.github.io/todo-list/",
  },
];
