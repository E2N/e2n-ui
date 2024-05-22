import { css, cx } from '@emotion/css';
import { Placement } from '@popperjs/core';
import { cloneElement, ReactElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { colorPalette, shadow, theme } from '../../theme';

export type DropdownProps = {
  content: ReactElement;
  children: ReactElement;
  width?: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  placement?: Placement;
};

function getStyles(width?: number) {
  return {
    popover: css({
      backgroundColor: colorPalette.white,
      width: width ? width : 'auto',
      borderRadius: theme.borderRadius.md,
      boxShadow: shadow.dropdown,
    }),
  };
}

/**
 * @deprecated This dropdown component is deprecated. Use Dropdown2 instead.
 */
export function Dropdown({
  content,
  children,
  width,
  isOpen,
  setIsOpen,
  placement = 'bottom',
}: DropdownProps) {
  const styles = getStyles(width);
  const referenceRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    attributes,
    styles: popperStyles,
    update,
  } = usePopper(referenceRef.current, popoverRef.current, {
    placement,
    modifiers: [{ name: 'offset', enabled: true, options: { offset: [0, 8] } }],
  });

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        (referenceRef.current &&
          referenceRef.current.contains(event.target as Node)) ||
        (popoverRef.current &&
          popoverRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [setIsOpen]);

  async function handleDropdownClick() {
    setIsOpen(!isOpen);
    if (update) {
      await update();
    }
  }

  return (
    <>
      {cloneElement(children, {
        ref: referenceRef,
        onClick: handleDropdownClick,
      })}
      {createPortal(
        <div
          ref={popoverRef}
          style={{
            ...popperStyles.popper,
            minWidth: referenceRef.current?.scrollWidth,
            zIndex: 200,
          }}
          {...attributes.popper}
        >
          {isOpen && <div className={cx(styles.popover)}>{content}</div>}
        </div>,
        document.body,
      )}
    </>
  );
}
