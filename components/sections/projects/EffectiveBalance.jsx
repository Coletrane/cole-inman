import React, { Component } from "react";
import webshots from "../../../util/webshots";
import { gitHub } from "../../header/NavIcons";

// Components
import Project from "./Project";
import ProjectButton from "./ProjectButton";

export default class EffectiveBalance extends Component {
  render() {
    return (
      <div>
        <Project
          title="Effective Balance"
          subheader="Python script for tracking bank account and credit card balances"
          imgSrc={webshots.localSrc(webshots.pages.effectiveBalance)}
          customButtons={
            <div>
              <ProjectButton
                url={gitHub + "effective-balance-python"}
                text="Python Repo"
              />
              <ProjectButton
                url={gitHub + "effective-balance-node"}
                text="Node.js Repo"
              />
            </div>
          }
        >
          <p>
            Effective Balance is a scheduled Python script that runs every day.
            It scrapes my Gmail account for SunTrust and CitiBank daily balance
            emails, determines the balance, subtracts them, and then emails me
            my "real balance" (bankAccountBalance - creditCardBalance). It is
            deployed on AWS Elastic Beanstalk and uses AWS Simple Email Service
            to send emails. I originally prototyped this project in Node.js but
            there is a good deal of Callback Hell™ and async issues with it.
          </p>
        </Project>
      </div>
    );
  }
}
