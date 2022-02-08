import {Toast} from 'native-base';

export const success = (message: string): void =>
  Toast.show({
    title: message,
    placement: 'top',
    status: 'success',
  });

export const error = (message: string): void =>
  Toast.show({
    title: message,
    placement: 'top',
    status: 'error',
  });
