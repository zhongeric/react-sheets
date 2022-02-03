import React from 'react';
import Sheet from '../Sheet';

export const NUM_COLUMNS = 5;
export const NUM_ROWS = 5;
const defaultCellValue = {
  value: ''
};
export const defaultCellValues = Array(NUM_ROWS)
  .fill(defaultCellValue)
  .map(() => Array(NUM_COLUMNS).fill(defaultCellValue));

export const SheetController = () => {
  return <Sheet />;
};
