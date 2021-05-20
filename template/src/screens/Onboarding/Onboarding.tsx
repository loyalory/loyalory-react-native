import React from 'react';

import Layout from '@components/Layout';
import Typography from '@components/Typography';
import useAppConfig from '@hooks/useAppConfig';

interface Props {}

const Onboarding: React.FC<Props> = () => {
  const {title} = useAppConfig();

  return (
    <Layout>
      <Typography>{title}</Typography>
    </Layout>
  );
};

export default Onboarding;
