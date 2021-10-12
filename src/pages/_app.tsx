import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

// ?   Раскомментируйте этот метод только в том случае, если у вас есть требования к блокировке данных для каждой отдельной страницы в вашем приложении. Это отключает возможность автоматической статической оптимизации, в результате чего каждая страница в вашем приложении отображается на стороне сервера.
/*
MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});
*/

export default MyApp;
