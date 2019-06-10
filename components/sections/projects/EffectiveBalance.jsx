import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"
// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"

export default class EffectiveBalance extends Component {
  render() {
    return (
      <div>
        <Project
          title="Effective Balance"
          subheader="Python script for tracking bank account and credit card balances"
          imgSrc={webshots.localSrc(webshots.pages.effectiveBalance)}>
          <p>
            Effective Balance is a scheduled Python script that runs every day.
            It scrapes my Gmail account for SunTrust and CitiBank daily balance
            emails, determines the balance, subtracts them, and then emails me
            my "real balance" (bankAccountBalance - creditCardBalance).
          </p>
          <TechStack>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>AWS Elastic Beanstalk</li>
              <li>AWS Simple Email Service</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={gitHub + "effective-balance-python"}
            text="Python Repo"
          />
          <ProjectButton
            url={gitHub + "effective-balance-node"}
            text="Node.js Repo"
          />
        </Project>
      </div>
    )
  }
}
