import { ReactNode } from "react";
type WelcomePropsType = {
  name: string;
};
const Welcome = (props: WelcomePropsType): ReactNode => {
  return <h1>Hello {props.name}</h1>;
};

export default Welcome;
