import Link from 'next/link';
import { AppConfig } from '../../utils/App.config';
import { LogoProps } from './Logo.props';

export const Logo = (props: LogoProps): JSX.Element => {
  return (
    <div>
      <Link href="/">
        <a>
          {/* logo */}
          {props.isSiteName && AppConfig.site_name}
        </a>
      </Link>
    </div>
  );
};
