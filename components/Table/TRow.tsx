import { FC, ReactNode } from "react";

interface TRowProps {
  children: ReactNode;
}
const TRow: FC<TRowProps> = ({ children }): JSX.Element => {
  return <tr>{children}</tr>;
};

export default TRow;
