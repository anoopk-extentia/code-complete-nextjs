import { FC, ReactNode } from "react";

interface TBodyProps {
  children: ReactNode;
}
const TBody: FC<TBodyProps> = ({ children }): JSX.Element => {
  return <tbody>{children}</tbody>;
};

export default TBody;
