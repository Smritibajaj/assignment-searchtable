import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useCommonStyles } from "../../assets/styles/common";
import CommonButton from "../Button";
import { Grid, Checkbox } from "@mui/material";
import { Data, TableProps } from "./interfaces";
import EnhancedTableToolbar from "./Toobar";
import EnhancedTableHead from "./TableHead";
import { customActionsCellStyles, customTableCellStyles } from "./styles";
import { CustomTableCell } from "./TableCell";


/**
 *
 * @param props (rows, columns, actions)
 * @returns Customized table based on props
 */
const EnhancedTable: React.FC<TableProps> = (props) => {
  const {
    rows,
    columns,
    actions,
    onClickFunc,
    text,
    stroke,
    image,
    description,
    headingText,
    onPageChange,
    meta,
    status,
    inputColumns,
    scrollFix,
    tableContainerStyles,
    onChange,
    onBlur,
    onSortChange,
  } = props;
  const classes = useCommonStyles();
  const [order, setOrder] = React.useState<any>("");
  const [orderBy, setOrderBy] = React.useState<any>("");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const compoRef = React.useRef<HTMLDivElement>(null);;
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setPage(meta?.currentPage ? meta?.currentPage - 1 : 0);
    meta?.perPage && setRowsPerPage(meta?.perPage);
  }, [meta]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    onSortChange && onSortChange(isAsc ? "DESC" : "ASC", property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows?.map((n) => n.name);
      newSelecteds && setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const getIntoView = () => {
    if (compoRef.current) {
      compoRef?.current?.scrollIntoView();
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    onPageChange(newPage + 1, rowsPerPage, status);
    getIntoView();
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    onPageChange(page + 1, parseInt(event.target.value, 10), status);
    getIntoView();
  };

  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

  const getCustomCell = () => {
    if (columns.find((i: any) => i.customCell)) return true;
    return false;
  };

  const onSelectActions = (action: any, row: any) => {
    if (!action?.callbackArguments?.length) {
      action.onClick(row);
    } else if (action?.callbackArguments?.length === 1) {
      action.onClick(row[action?.callbackArguments[0]]);
    } else if (action?.callbackArguments?.length === 2) {
      action.onClick(
        row[action?.callbackArguments[0]],
        row[action?.callbackArguments[1]]
      );
    } else if (action?.callbackArguments?.length === 3) {
      action.onClick(
        row[action?.callbackArguments[0]],
        row[action?.callbackArguments[1]],
        row[action?.callbackArguments[2]]
      );
    } else if (action?.callbackArguments?.length === 4) {
      action.onClick(
        row[action?.callbackArguments[0]],
        row[action?.callbackArguments[1]],
        row[action?.callbackArguments[2]],
        row[action?.callbackArguments[3]]
      );
    }
    handleClose();
  };

  return (
    <Box
      sx={{ width: "100%", overflow: "hidden" }}
      ref={compoRef}
      className="table_container_common"
    >
      <Paper
        sx={{ width: "100%", mb: 2, boxShadow: "none", overflow: "hidden" }}
        className={`shadow-card border-brand-extra-divider border ${
          stroke ? "border border-brand-extra-border" : ""
        }`}
      >
        <TableContainer
          className={`shadow-card ${
            tableContainerStyles ? tableContainerStyles : ""
          } ${scrollFix ? "always-scrollbar" : ""}`}
        >
          <EnhancedTableToolbar numSelected={selected.length} />
          <Table
            sx={{ border: `1px solid #EDF6FF`, overflow: "scroll" }}
            // sx={{ minWidth: 1200 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order ?? ""}
              orderBy={orderBy ?? ""}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows?.length}
              headerCells={columns}
              inputCells={inputColumns}
              actions={actions || []}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {rows.map((row: any, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `${row.id}`;

                return (
                  <TableRow
                    // hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id + index}
                    selected={isItemSelected}
                  >
                    {getCustomCell() ? (
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.name)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          className="border-brand-extra-border"
                          size="small"
                          sx={{
                            color: "#9DACB4",
                          }}
                        />
                      </TableCell>
                    ) : (
                      <TableCell sx={customTableCellStyles}>
                        <span className="text-brand-text-title pl-8">
                          {index + 1}
                        </span>
                      </TableCell>
                    )}
                    {columns.map((i: any, index: any) => (
                      <TableCell
                        component="td"
                        id={labelId}
                        key={`${labelId}-label-${index}`}
                        scope="row"
                        padding={"normal"}
                        align="left"
                        title={row[i.id]}
                        sx={customTableCellStyles}
                      >
                        {i.makeLinkable ? (
                          <a
                            href=""
                            onClick={() =>
                              i.onClickAction &&
                              i.onClickAction(row[i.callBackArguments[0]])
                            }
                            className="text-brand-primary-blue cursor-pointer	"
                          >
                            {row[i.id]}
                          </a>
                        ) : (
                          <span className="text-brand-text-primary">
                            {i.getCustomColumn ? i.getColData(row) : row[i.id]}
                          </span>
                        )}
                      </TableCell>
                    ))}
                    {inputColumns?.map((i: any, index: number) => {
                      return (
                        <CustomTableCell
                          {...{
                            row,
                            name: `${i.id}`,
                            onChange,
                            onBlur,
                            index,
                            inputType: i.inputType,
                            options: i.options ?? [],
                          }}
                        />
                      );
                    })}
                    {actions && actions.length > 1 ? (
                      <TableCell
                        component="td"
                        id={"cgvdhcvhd"}
                        scope="row"
                        padding="normal"
                        align="left"
                        className="text-brand-text-tableHead  font-punlic_sans "
                        sx={customActionsCellStyles}
                      >
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment key={"popper"}>
                              {/* <IconButton 
                              style={{padding:'0'}} {...bindTrigger(popupState)}>
                                <MoreHorizIcon className="text-brand-extra-icon1" fontSize="medium"/>
                              </IconButton> */}
                              <button
                                className="text-brand-primary-blue w-20 font-semibold"
                                style={{ padding: "0" }}
                                {...bindTrigger(popupState)}
                              >
                                {"Action"}
                                <ArrowDropDownIcon color="primary" />
                              </button>

                              <Menu
                                {...bindMenu(popupState)}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                  className: "shadow-card",
                                }}
                                style={{ boxShadow: "none" }}
                              >
                                {actions.map((i: any) => {
                                  return (
                                    <MenuItem
                                      sx={{ padding: "0" }}
                                      disabled={i?.disabled && i.disabled(row)}
                                      key={`menu-${
                                        i?.customLabel
                                          ? i?.customLabel(row)
                                          : i.label
                                      }}`}
                                    >
                                      {!i?.hidden?.value?.includes(
                                        row[i.hidden.key]
                                      ) && (
                                        <div
                                          className="w-full px-4 py-2"
                                          onClick={() => {
                                            onSelectActions(i, row);
                                            popupState.close();
                                          }}
                                        >
                                          <p
                                            className={
                                              "font-dm_sans text-sm" +
                                              `${
                                                i.id === "delete"
                                                  ? " text-brand-primary-red"
                                                  : " text-brand-text-title"
                                              }`
                                            }
                                          >
                                            {i?.customLabel
                                              ? i?.customLabel(row)
                                              : i.label}
                                          </p>
                                        </div>
                                      )}
                                    </MenuItem>
                                  );
                                })}
                              </Menu>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </TableCell>
                    ) : (
                      <></>
                    )}

                    {actions && actions.length == 1 ? (
                      <TableCell
                        component="td"
                        id={"cgvdhcvhd"}
                        scope="row"
                        padding="normal"
                        align="left"
                        className="text-brand-text-tableHead  font-punlic_sans "
                        sx={customActionsCellStyles}
                      >
                        <div
                          className="w-full"
                          onClick={() => {
                            onSelectActions(actions[0], row);
                          }}
                        >
                          <p
                            className={
                              "font-dm_sans text-sm text-brand-primary-blue font-semibold cursor-pointer " +
                              `${
                                actions[0].id === "delete"
                                  ? " text-brand-primary-red"
                                  : " text-brand-text-title"
                              }`
                            }
                          >
                            {actions[0]?.customLabel
                              ? actions[0]?.customLabel(row)
                              : actions[0].label}
                          </p>
                        </div>
                      </TableCell>
                    ) : (
                      <></>
                    )}
                  </TableRow>
                );
              })}
              {rows.length === 0 && (
                <TableRow
                  style={{
                    height: 100,
                  }}
                >
                  <TableCell
                    colSpan={12}
                    align="center"
                    style={{ padding: "2rem" }}
                  >
                    <img
                      src={
                        image ??
                        require("assignment-typescript-fe/assets/img/rfq/datagrid.svg").default
                      }
                      className="mx-auto mt-4"
                      width={"64px"}
                      height={"64px"}
                    />

                    <h5 className="mt-4 text-brand-text-title text-xl font-semibold">
                      {headingText ?? "No Data Found"}
                    </h5>

                    {description ? (
                      <p className="text-base text-brand-text-primary mt-2 mb-2">
                        {description}
                      </p>
                    ) : (
                      <></>
                    )}
                    {text ? (
                      <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        style={{ maxWidth: "initial" }}
                      >
                        <Grid
                          item
                          lg={2}
                          md={4}
                          xs={12}
                          className={classes.mpt5}
                          style={{ maxWidth: "initial" }}
                        >
                          <CommonButton text={text} onClick={onClickFunc} />
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {meta && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 25, 50]}
            component="div"
            count={meta?.total || rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className={"text-brand-text-title bg-white"}
            style={{ overflow: "hidden" }}
          />
        )}
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
