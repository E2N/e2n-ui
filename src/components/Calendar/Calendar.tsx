import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../../lib/utils';
import { buttonVariants, IconButton } from '../Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { de } from 'date-fns/locale/de';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-slate-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-slate-400',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-blue-700 text-white hover:bg-blue-500 hover:text-slate-500 focus:bg-blue-700 focus:white',
        day_today: 'bg-slate-200 accent-slate-500',
        day_outside:
          'day-outside text-slate-500 opacity-50  aria-selected:bg-accent-slate-500/50 aria-selected:text-slate-100 aria-selected:opacity-50',
        day_disabled: 'text-slate-500 opacity-50',
        day_range_middle:
          'aria-selected:bg-slate-300 aria-selected:accent-slate-500',
        day_hidden: 'invisible',
        ...classNames,
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <IconButton icon={faArrowLeft} className="h-4 w-4 border-none" />
        ),
        IconRight: ({ ...props }) => (
          <IconButton icon={faArrowRight} className="h-4 w-4 border-none" />
        ),
      }}
      locale={de}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
