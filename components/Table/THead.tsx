import { FC, ReactNode } from "react";

interface THeadProps {
  children: ReactNode;
}
const THead: FC<THeadProps> = ({ children }): JSX.Element => {
  return <th>{children}</th>;
};

export default THead;
