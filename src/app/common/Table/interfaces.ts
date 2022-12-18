export interface TableProps {
  rows: any[];
  inputColumns?: any[];
  columns?: any;
  actions?: any[];
  onClickFunc?: any;
  text?: string;
  stroke?: any;
  image?: any;
  description?: string;
  headingText?: string;
  onPageChange?: any;
  meta?: any;
  status?: string | undefined;
  scrollFix?: boolean;
  tableContainerStyles?: any;
  onChange?: (e: any, row: any) => void;
  onBlur?: (e: any, row: any) => void;
  onSortChange?: (sort: string, sortBy: string) => void;
}

type Order = "asc" | "desc";

export interface Data {
    updated_at: number;
  }
  
export interface EnhancedTableToolbarProps {
    numSelected: number;
  }

  export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof Data
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headerCells: any;
    inputCells: any;
    actions: Array<object>;
  }
