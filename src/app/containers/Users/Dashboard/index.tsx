import React, { useEffect, useState } from "react";
import PageTitle from "../../../common/Typography/PageTitle";

import { useSelector } from "react-redux";
import Loader from "../../../common/Loader";
import axiosInstance from "../../../utils/interceptor";
import { API_URLS } from "../../../utils/constants/apiUrls";
import { useGetTableDataQuery } from "../../../redux/features/paginationApis";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import EnhancedTable from "../../../common/Table";
import moment from "moment";
import dayjs from "dayjs";

const Dashboard = (props: any) => {
  const userSelector = useSelector((state: any) => state.user);
  const [query, setQuery] = useState<any>({
    page: 1,
    limit: 10,
    sort: "",
    sortBy: "",
    filter: "",
  });
  const columns = [
    {
      id: "company.name",
      numeric: false,
      disablePadding: false,
      label: "Company Name",
      callBackArguments: ["id"],
      getCustomColumn: true,
      getColData: (row: any) => (
        <div className="underline underline-offset-4 font-semibold">
          {row.company.name}
        </div>
      ),
    },
    {
      id: "asic",
      numeric: false,
      disablePadding: false,
      label: "ASIC Number",
      callBackArguments: ["id"],
      getCustomColumn: true,
      getColData: (row: any) => (
        <div className="font-semibold">{row.company?.asic?.$text ?? "NA"}</div>
      ),
    },
    {
      id: "gst_status",
      numeric: false,
      disablePadding: false,
      label: "GST Status",
      callBackArguments: ["id"],
      getCustomColumn: true,
      getColData: (row: any) => (
        <div className="font-semibold">
          {row.company?.gst?.$?.status ?? "NA"}
        </div>
      ),
    },
    {
      id: "legalPersonName",
      numeric: false,
      disablePadding: false,
      label: "Legal Person Name",
      callBackArguments: ["id"],
      getCustomColumn: true,
      getColData: (row: any) => (
        <div className="font-semibold">
          {row.company?.legalPersonName ?? "NA"}
        </div>
      ),
    },
    {
      id: "ABNStatusFromDate",
      numeric: false,
      disablePadding: false,
      label: "Registration Date",
      callBackArguments: ["id"],
      getCustomColumn: true,
      getColData: (row: any) => (
        <div className="font-semibold">
          {row.company?.status?.$.ABNStatusFromDate
            ? moment(
                `${row.company?.status?.$.ABNStatusFromDate}`,
                "YYYYMMDD"
              ).format("MM-DD-YYYY")
            : "NA"}
        </div>
      ),
    },
  ];
  const { data, isLoading } = useGetTableDataQuery(
    { ...query },
    { refetchOnMountOrArgChange: true }
  );
  console.log(data, isLoading);
  useEffect(() => {
    axiosInstance
      .get(API_URLS.getAllCompanies, { params: { page: 0, limit: 10 } })
      .then((res) => {
        console.log(res);
      });
  }, []);
  const onPageQueryChange = (page?: number, limit?: number) => {
    setQuery({ ...query, page, limit });
  };
  const onSortQueryChange = (sort?: string, sortBy?: string) => {
    setQuery({ ...query, sort, sortBy });
  };
  if (isLoading) {
    return <Loader />;
  }
  const search = () => {
    toast.success("Create your own query");
  };
  return (
    <React.Fragment>
      <PageTitle className="py-4">Australian Business Registration </PageTitle>
      <EnhancedTable
        columns={columns}
        rows={data?.data || []}
        meta={{ ...data?.meta, rowsPerPage: data?.meta?.limit }}
        onPageChange={onPageQueryChange}
        onSortChange={onSortQueryChange}
        actions={[]}
        image={
          require("assignment-typescript-fe/assets/img/rfq/datagrid.svg")
            .default
        }
        headingText={"No Data Present"}
        description={"Your type of data is not present yet"}
        text={"Create Data"}
        onClickFunc={() => search()}
      />
    </React.Fragment>
  );
};

export default Dashboard;
