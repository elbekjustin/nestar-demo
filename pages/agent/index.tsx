import useDeviceDetect from '@/libs/components/hooks/useDeviceDetect';
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';

const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === 'mobile') {
    return <Stack>AGENTS LIST  MOBILE</Stack>
  } else {
      return (
        <div style={{ margin: '20px 0' }}>
          <Stack className="container">AGENTS LIST</Stack>
        </div>
      );
    }
};

export default withLayoutBasic(AgentList);
