import { ReactNode } from "react";

type HeadingPropsType = {
  children: ReactNode;
};
const Heading = (props: HeadingPropsType) => {
  return <>{props.children}</>;
};
export default Heading;
