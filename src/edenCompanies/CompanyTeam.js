import React from "react";

function CompanyTeam() {
  return (
    <section className="companyTeam">
      <div className="companyTeam__content wrapper">
        <div className="companyTeam__title">
          <h3>Your Team Needs Eden</h3>
          <p>
            With Eden, your team gets increased productivity, better retention,
            and reduced welfare workload. How?
          </p>
        </div>
        <div className="companyTeam__cards">
          <div className="companyTeam__cards-item efficiency">
            <h3>💯</h3>
            <h5>Increase Efficiency</h5>
            <p>
              Less time and energy spent on chores = more time and energy
              invested in work and leisure.
            </p>
          </div>
          <div className="companyTeam__cards-item efficiency">
            <h3>🤝</h3>
            <h5>Seamless Experience</h5>
            <p>
              We handle the bulk of your gifting needs, end-to-end. From
              creating the perfect plan, to delivering excellently.
            </p>
          </div>
          <div className="companyTeam__cards-item value">
            <h3>💚</h3>
            <h5>Appreciate Value</h5>
            <p>
              And with a subscription to any of our plans, your team members can
              see that they're highly valued by your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyTeam;
