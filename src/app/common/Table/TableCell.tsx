import React from "react";
import TableCell from "@mui/material/TableCell";
import {  Checkbox } from "@mui/material";
import Input from "../Input";
import Dropdown from "../Dropdown";
import { customTableCellStyles } from "./styles";

export const CustomTableCell = ({
    row,
    name,
    onChange,
    index,
    inputType,
    onBlur,
    options,
  }: any) => {
    return (
      <TableCell
        align="left"
        component="td"
        id={row.id}
        key={`${row.id}-label-${index}`}
        scope="row"
        padding={"normal"}
        sx={customTableCellStyles}
      >
        {inputType === "checkbox" ? (
          <Checkbox
            name={name}
            id={row.id}
            key={`${row.id}-label-${index}`}
            color="primary"
            value={row[name]}
            //indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={row[name] ? true : false}
            onChange={(e) => onChange(e, row)}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            size="small"
            sx={{
              color: "#9DACB4",
            }}
          />
        ) : inputType === "dropdown" ? (
          <Dropdown
            id={name}
            type={inputType}
            options={options ?? []}
            value={row[name] === 0 ? "0" : row[name] || ""}
            name={name}
            onChange={(e: any) => onChange(e, row)}
            onBlur={(e: any) => {
              onBlur && onBlur(e, row);
            }}
          />
        ) : (
          <Input
            type={inputType}
            value={row[name] === 0 ? "0" : row[name] || ""}
            name={name}
            onChange={(e: any) => onChange(e, row)}
            onBlur={(e: any) => {
              onBlur && onBlur(e, row);
            }}
          />
        )}
      </TableCell>
    );
  };