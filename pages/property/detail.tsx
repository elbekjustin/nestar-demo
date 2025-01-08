import useDeviceDetect from '@/libs/components/hooks/useDeviceDetect';
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Container, Stack } from '@mui/material';

const PropertyDetail = () => {
  const device = useDeviceDetect();

  if (device === 'mobile') {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);
