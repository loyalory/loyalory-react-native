import constants from '@components/constants';
import {AppConfig} from '@entities/app';

const useAppConfig = (): AppConfig => {
  return {
    title: constants.appConfig.title,
  };
};

export default useAppConfig;
