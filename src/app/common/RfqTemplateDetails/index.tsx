import React from "react";
import _ from "lodash";
import Label from "../Label";
import Value from "../Label/Value";

export const RfqTemplateDetails = (props: any) => {
  const { basicDetails } = props;
  return (
    <>
      <div className="text-base font-semibold text-brand-text-title pt-8 pb-4">
        RFQ Terms
      </div>
      <div className="grid grid-cols-2 border gap-x-4 gap-y-8 p-6">
        {basicDetails &&
          basicDetails.terms &&
          Object.keys(basicDetails.terms)?.map((term: any) => {
            return (
              <div key={`terms.${term}`}>
                <Label>{_.startCase(_.camelCase(term)) ?? ""}</Label>
                <Value>
                  {basicDetails.terms ? basicDetails.terms[term] : ""}
                </Value>
              </div>
            );
          })}
      </div>
    </>
  );
};
