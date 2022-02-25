import { FC, ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}
const Table: FC<TableProps> = ({ children }): JSX.Element => {
  return <table>{children}</table>;
};

export default Table;
