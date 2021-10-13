import { PropsWithChildren } from "react";
import { SectionProps } from "./Section.props";

export const Section = ({
  children,
  className,
  ...props
}: PropsWithChildren<SectionProps>): JSX.Element => {
  return (
    <section {...props}>
      <h2>{props.title} </h2>
      <div>{props.description} </div>
      {children}
    </section>
  );
};
