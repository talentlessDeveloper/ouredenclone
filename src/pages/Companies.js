import React from "react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HeroCompanies from "../edenCompanies/HeroCompanies";
import LoadSpinner from "../utils/Loader";
import ErrorFallback from "../utils/ErrorBoundary";

const CompanyDescription = lazy(() =>
  import("../edenCompanies/CompanyDescription")
);
const CompanyTeam = lazy(() => import("../edenCompanies/CompanyTeam"));
const Services = lazy(() => import("../components/Services"));
const CompanyCustomer = lazy(() => import("../edenCompanies/CompanyCustomer"));

function Companies() {
  return (
    <>
      <HeroCompanies />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadSpinner />}>
          <CompanyTeam />
          <Services
            title="Team Perks"
            subtitle="A happy team is a productive team"
          />
          <CompanyDescription />
          <CompanyCustomer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Companies;
