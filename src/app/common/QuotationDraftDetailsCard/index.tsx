import moment from "moment";
import Label from "../Label";
import Value from "../Label/Value";


const QuotationDraftDetailsCard = (props: {
  quotationDetails: any;
  rfqDetails: any;
  user: string;
}) => {
  const { quotationDetails, rfqDetails } = props;
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
            <Label>Total Items</Label>
            <Value>{quotationDetails?.quotation_products?.length}</Value>
          </div>
          <div>
            <Label>Created On</Label>
            <Value>
              {" "}
              {quotationDetails.created_at
                ? moment(quotationDetails.created_at).format("MMM DD, YYYY hh:mmA")
                : ""}
            </Value>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDraftDetailsCard;
