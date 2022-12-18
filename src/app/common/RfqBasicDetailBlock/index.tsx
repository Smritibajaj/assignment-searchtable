import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCityDetails } from "../../helpers/CommonHelper";
import { API_CONSTANTS, PLATFORM_USERS } from "../../utils/constants/constants";
import { BasicDetailBlock } from "./interfaces";
import Label from "../Label";
import Value from "../Label/Value";

const RfqBasicDetailsBlock = (props: BasicDetailBlock) => {
  const { basicDetails, isEditable, handleEditDetails, user } = props;
  const currentRfq = useSelector((state: any) => state.rfq.currentRfq);
  const [billingEntity, setBillingEntity] = useState<any>({});

  useEffect(() => {
    if (currentRfq.status === API_CONSTANTS.success) {
      currentRfq?.billingEntity && setBillingEntity(currentRfq?.billingEntity);
    }
  }, [currentRfq]);
  return (
    <div className="">
      <div className="flex justify-between items-center pt-8 pb-4">
        <div className="text-base font-semibold text-brand-text-title">
          Basic Details
        </div>
        {isEditable ? (
          <button
            className="text-base font-semibold text-brand-primary-blue"
            onClick={(e) => {
              e.preventDefault();
              handleEditDetails && handleEditDetails();
            }}
          >
            Edit Details
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="border">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 p-6">
          <div>
            <Label>Title</Label>
            <Value>{basicDetails.title}</Value>
          </div>
          <div>
            <Label>Date of Issue</Label>
            <Value>
              {basicDetails.release_at
                ? moment(basicDetails.release_at).format("DD/MM/YYYY")
                : ""}
            </Value>
          </div>
          <div>
            <Label>Last Submission Date</Label>
            <Value>
              {" "}
              {basicDetails.submission_at
                ? moment(basicDetails.submission_at).format("DD/MM/YYYY")
                : ""}
            </Value>
          </div>
          {user !== PLATFORM_USERS.SUPPLIER && (
            <div>
              <Label>Issued By(Name)</Label>
              <Value>{basicDetails.issued_by}</Value>
            </div>
          )}

          {/* <div>
          <Label>Issued By(Email)</Label>
          <Value>{basicDetails.title}</Value>
        </div> */}

          {/* <div>
          <Label>Issued By(Contact)</Label>
          <Value>{basicDetails.title}</Value>
        </div> */}

          <div>
            <Label>Contact Person(Name)</Label>
            <Value>{basicDetails.contact_person_name}</Value>
          </div>

          <div>
            <Label>Contact Person(Email)</Label>
            <Value>{basicDetails.contact_person_email}</Value>
          </div>

          {/* <div>
          <Label>Contact Person(Contact)</Label>
          <Value></Value>{basicDetails.title}</div>
        </div> */}

          <div>
            <Label>Billing Identity</Label>
            <Value>
              {billingEntity?._billing_entity
                ? getCityDetails(billingEntity?._billing_entity)?.getInfo
                : "NA"}
            </Value>
          </div>
          <div>
            <Label>Delivery Address</Label>
            <Value>
              {billingEntity._delivery
                ? getCityDetails(billingEntity._delivery)?.getInfo
                : "NA"}
            </Value>
          </div>
        </div>
        <div className="gap-x-4 p-6 pt-2">
          <div>
            <Label>Remarks</Label>
            <Value>{basicDetails.remarks}</Value>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfqBasicDetailsBlock;
