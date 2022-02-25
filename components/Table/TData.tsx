import { FC, ReactNode } from "react";

interface TDataProps {
  children: ReactNode;
}
const TData: FC<TDataProps> = ({ children }): JSX.Element => {
  return <td>{children}</td>;
};

export default TData;
