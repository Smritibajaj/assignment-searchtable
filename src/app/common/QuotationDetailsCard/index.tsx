import moment from "moment";
import { formatPrice } from "../../helpers/CommonHelper";
import Label from "../Label";
import Value from "../Label/Value";

const QuotationDetailsCardComponent = (props: {
  quotationDetails: any;
  rfqDetails: any;
  user: string;
}) => {
  const { quotationDetails, rfqDetails, user } = props;

  return (
    <div className="">
      <div className="flex justify-between items-center pt-8 mb-4">
        <div className="text-base font-semibold text-brand-text-title">
          Quotation Details
        </div>
      </div>
      <div className="border bg-white">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 p-6">
          <div>
            <Label>Quotation No.</Label>
            <Value>{quotationDetails.quotation_no}</Value>
          </div>
          <div>
            <Label>RFQ No.</Label>
            <Value>{rfqDetails?.rfq_no}</Value>
          </div>
          <div>
            <Label>Submitted On</Label>
            <Value>
              {" "}
              {quotationDetails.submitted_at
                ? moment(quotationDetails.submitted_at).format("MMM DD, YYYY hh:mmA")
                : ""}
            </Value>
          </div>
          <div>
            <Label>Total Price</Label>
            <Value>Rs. {formatPrice(quotationDetails?.total_price)}</Value>
          </div>

        </div>
        <div className="gap-x-4 p-6 pt-2">
          <div>
            <Label>Remarks</Label>
            <Value>{quotationDetails.remarks || "NA"}</Value>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetailsCardComponent;
