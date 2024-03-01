import * as RadixUITooltip from '@radix-ui/react-tooltip';
import { cx } from '@emotion/css';
import { getStyles } from './styles';
import { TooltipProps } from './types';

export function Tooltip({
  variant = 'default',
  side = 'bottom',
  children,
  trigger: Trigger,
}: TooltipProps) {
  const styles = getStyles(variant);

  return (
    <div data-testid="tooltipContainer">
      <RadixUITooltip.Provider>
        <RadixUITooltip.Root>
          <RadixUITooltip.Trigger asChild>{Trigger}</RadixUITooltip.Trigger>
          <RadixUITooltip.Portal>
            <RadixUITooltip.Content
              side={side}
              className={cx(styles.container, 'tooltip')}
              sideOffset={2}>
              {children}
              <RadixUITooltip.Arrow
                width={'8px'}
                height={'4px'}
                className={cx(styles.arrow, 'arrow')}
              />
            </RadixUITooltip.Content>
          </RadixUITooltip.Portal>
        </RadixUITooltip.Root>
      </RadixUITooltip.Provider>
    </div>
  );
}
