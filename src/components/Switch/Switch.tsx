import * as RadixUISwitch from '@radix-ui/react-switch';
import { SwitchProps } from './types';
import { cx } from '@emotion/css';
import { useRef } from 'react';
import { getStyles } from './styles';

/**
 * React component that renders a switch. It is used to toggle between two different states, for example
 * something is turned on or off instantly. It is recommended to use a pairing label. Furthermore display a message
 * in order to let people know what happens when the switch is pressed.
 */
export function Switch({
  disabled = false,
  variant = 'default',
  size = 'medium',
  onCheckedChange,
  checked,
  label,
  htmlFor,
  className,
  ...otherProps
}: SwitchProps) {
  const styles = getStyles(variant, size, disabled);
  const ref = useRef<HTMLSpanElement>(null);

  /**
   * Workarround der dafür sorgt, dass die Animation des Thumbs nur nach einem Click-Event und nicht nach dem initalen
   * Rendering der Komponente oder Veränderung des States (z.B. Size oder Variant) ausgeführt wird.
   */
  function handleClick(checked: boolean) {
    const state = ref.current?.getAttribute('data-state') ?? '';
    if (state === 'checked' && ref.current) {
      ref.current.classList.add('animation-unchecked');
      ref.current.classList.remove('animation-checked');
    }
    if (state === 'unchecked' && ref.current) {
      ref.current.classList.add('animation-checked');
      ref.current.classList.remove('animation-unchecked');
    }
    if (onCheckedChange) {
      onCheckedChange(checked);
    }
  }

  return (
    <div className={cx(styles.container, className)}>
      <RadixUISwitch.Root
        id={label}
        data-testid="switch"
        disabled={disabled}
        onClick={() => {
          handleClick(!checked);
        }}
        className={cx(styles.button, styles.root, 'switch-root')}
        {...otherProps}>
        <RadixUISwitch.Thumb
          ref={ref}
          className={cx(styles.thumb, 'switch-thumb')}
        />
      </RadixUISwitch.Root>
      {label && (
        <label className={cx(styles.label)} htmlFor={htmlFor}>
          {label}
        </label>
      )}
    </div>
  );
}
