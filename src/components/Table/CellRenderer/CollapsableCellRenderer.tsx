import { css, cx } from '@emotion/css';
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { colorPalette } from '../../../theme';
import { IconButton } from '../../Button';

function getStyle(open: boolean) {
  return {
    value: css({
      width: 200,
      overflow: !open ? 'hidden' : undefined,
      textOverflow: !open ? 'ellipsis' : undefined,
      display: 'inline-block',
      whiteSpace: !open ? 'nowrap' : undefined,
      backgroundColor: colorPalette.grey200,
      fontSize: 13,
      border: `4px solid ${colorPalette.grey200}`,
      borderRadius: 4,
    }),
  };
}

export function CollapsableCellRenderer({ value }: { value: string }) {
  const [open, setOpen] = useState(false);
  const style = getStyle(open);
  return (
    <div className="d-flex align-items-center">
      <div className={cx(style.value)}>{value}</div>
      <IconButton
        icon={open ? faChevronCircleUp : faChevronCircleDown}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
