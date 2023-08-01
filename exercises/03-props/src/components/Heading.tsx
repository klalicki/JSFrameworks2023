import { ReactNode } from "react";

type HeadingPropsType = {
  children: ReactNode;
};
const Heading = (props: HeadingPropsType): ReactNode => {
  return <>{props.children}</>;
};
export default Heading;
