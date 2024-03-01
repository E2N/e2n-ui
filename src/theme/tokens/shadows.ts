import { Shadow } from '../types';

export const lightShadow: Shadow = {
  card: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
  dialog: `-40px 40px 80px -8px rgba(145, 158, 171, 0.24)`,
  dropdown: `0px 0px 2px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)`,
  tableFooter: `0px 12px 24px 4px rgba(145, 158, 171, 0.16)`,
};

export const darkShadow: Shadow = {
  card: `0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px -4px rgba(0, 0, 0, 0.12)`,
  dialog: `-40px 40px 80px -8px rgba(0, 0, 0, 0.24)`,
  dropdown: `0px 0px 2px rgba(0, 0, 0, 0.24), -20px 20px 40px -4px rgba(0, 0, 0, 0.24)`,
  tableFooter: `0px 12px 24px 4px rgba(0, 0, 0, 0.16)`,
};
