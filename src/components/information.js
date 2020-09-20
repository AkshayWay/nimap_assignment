import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import App from "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderSwitch(param) {
    switch (param) {
      case "1":
        return "The history of independent India began when the country became an independent nation within the British Commonwealth on 15 August 1947. Direct administration by the British, which began in 1858, effected a political and economic unification of the subcontinent. When British rule came to an end in 1947, the subcontinent was partitioned along religious lines into two separate countries—India, with a majority of Hindus, and Pakistan, with a majority of Muslims; the eastern portion of Pakistan later split off to form Bangladesh.[1] Concurrently the Muslim-majority northwest and east of British India was separated into the Dominion of Pakistan, by the partition of India. The partition led to a population transfer of more than 10 million people between India and Pakistan and the death of about one million people. Indian National Congress leader Jawaharlal Nehru became the first Prime Minister of India, but the leader most associated with the independence struggle, Mahatma Gandhi, accepted no office. The Constitution adopted in 1950 made India a democratic country, and this democracy has been sustained since then. India's sustained democratic freedoms are unique among the world's newly independent states.[2]";
      case "2":
        return "After 11 years in the market, Tesla ranked as the world's best-selling plug-in and battery electric passenger car manufacturer in 2019, with a market share of 17% of the plug-in segment and 23% of the battery electric segment.[26] Tesla global vehicle sales increased 50% from 245,240 units in 2018[27] to 367,849 units in 2019.[26] In 2020, the company surpassed the 1 million mark of electric cars produced.[28] The Model 3 ranks as the world's all-time best-selling plug-in electric car, with more than 500,000 delivered.[29] Tesla cars accounted for 81% of the battery electric vehicles sold in the United States in the first half of 2020";

      case "3":
        return "The Indian Premier League is a professional Twenty20 cricket league in India contested during March or April and May of every year by eight teams representing eight different cities in India. The league was founded by the Board of Control for Cricket in India in 2008. ";

      default:
        return "Change data from drop down";
    }
  }

  render() {
    return <div>{this.renderSwitch(this.props.passedVal)}</div>;
  }
}
