import { KinveyError } from 'kinvey-js-sdk';
import * as Memory from './memory';

export enum StorageProvider {
  Memory = 'Memory'
};

export function getStorageAdapter(storageProvider = StorageProvider.Memory) {
  if (storageProvider === StorageProvider.Memory) {
    return Memory;
  }

  throw new KinveyError('You must override the default cache store.');
}
