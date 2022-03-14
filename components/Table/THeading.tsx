import { FC, ReactNode } from "react";

interface THeadingProps {
  children: ReactNode;
}
const THeading: FC<THeadingProps> = ({ children }): JSX.Element => {
  return <thead>{children}</thead>;
};

export default THeading;
