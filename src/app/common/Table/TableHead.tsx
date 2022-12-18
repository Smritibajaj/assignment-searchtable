import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { capitalize } from "../../utils/common";
import { Box, Checkbox } from "@mui/material";
import { Data, EnhancedTableProps } from "./interfaces";
import { customActionsHeadCellStyles } from "./styles";

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headerCells,
    inputCells,
    actions,
  } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const checkIfCustomCellExist = () => {
    return headerCells.find((i: any) => i.customCell);
  };

  return (
    <TableHead className="bg-brand-background-skyblue relative">
      <TableRow>
        {!checkIfCustomCellExist() && (
          <TableCell align={"left"} padding={"normal"}>
            <span className="text-brand-text-tableHead pl-8 font-semibold">
              S.no
            </span>
          </TableCell>
        )}
        {headerCells.map((headCell: any, i: number) => (
          <React.Fragment key={`headcell${i}-${headCell.label}`}>
            {headCell.customCell && (
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                  size="small"
                  sx={{
                    color: "#9DACB4",
                  }}
                />
              </TableCell>
            )}
            <TableCell
              key={headCell.id + "x"}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              // sx={customTableCellStyles}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                <span className="text-brand-text-tableHead font-semibold whitespace-normal">
                  {headCell.label && capitalize(headCell.label)}
                </span>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          </React.Fragment>
        ))}
        {inputCells?.map((headCell: any, i: number) => (
          <React.Fragment key={`headcell${i}-${headCell.label}`}>
            {headCell.customCell && (
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                  size="small"
                  sx={{
                    color: "#9DACB4",
                  }}
                />
              </TableCell>
            )}
            <TableCell
              key={headCell.id + "x"}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={customActionsHeadCellStyles}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                <span className="text-brand-text-tableHead whitespace-normal">
                  {headCell.label && capitalize(headCell.label)}
                </span>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          </React.Fragment>
        ))}
        {actions && actions.length ? (
          <TableCell
            key={"hjcvdvsc"}
            align={"left"}
            padding={"normal"}
            sortDirection={false}
            className="text-brand-text-title "
            sx={customActionsHeadCellStyles}
          >
            Actions
          </TableCell>
        ) : (
          <></>
        )}
      </TableRow>
    </TableHead>
  );
}
