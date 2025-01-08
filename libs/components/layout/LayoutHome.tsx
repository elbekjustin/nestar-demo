import { Stack } from '@mui/material';
import Head from 'next/head';
import Top from '../Top';
import Footer from '../Footer';
import HeaderFilder from '../homepage/HeaderFilder';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDetect from '../hooks/useDeviceDetect';

const withLayoutMain = (Component: any) => {
  return (props: any) => {

       const device = useDeviceDetect();

  if (device == 'mobile') {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="mobile-wrap">
          <Stack id={'top'}>
            <Top />
          </Stack>

          <Stack id={'main'}>
            <Component {...props} />
          </Stack>

          <Stack id={'footer'}>
            <Footer />
          </Stack>
        </Stack>
      </>)
  } else {
     return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={'top'}>
            <Top />
          </Stack>
          <Stack className={'header-main'}>
            <Stack className={"container"}>
              <HeaderFilder />
            </Stack>
          </Stack>

          <Stack id={'main'}>
            <Component {...props} />
          </Stack>

          <Stack id={'footer'}>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
    
  };
};

export default withLayoutMain;
