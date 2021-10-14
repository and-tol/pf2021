import Link from "next/link";
import { sections } from "../../utils/App.config";
import { NavigationProps } from "./Navigation.props";

export const Navigation = ({ ...props }: NavigationProps): JSX.Element => {
  return (
    <nav {...props}>
      {sections.map(({ id, sectionName }) => {
        return (
          <Link key={id} href={`#${id}`}>
            <a>{sectionName}</a>
          </Link>
        );
      })}
    </nav>
  );
};
