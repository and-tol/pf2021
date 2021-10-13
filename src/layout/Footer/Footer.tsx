import { FooterProps } from "./Footer.props";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      <h1>Footer</h1>
    </footer>
  );
};
