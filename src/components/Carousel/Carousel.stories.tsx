import { Meta } from '@storybook/react';
import { Card } from '..';
import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from './Carousel';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  title: 'Components/Carousel',
  parameters: {
    docs: {
      description: {
        component:
          'Die Carousel-Komponente besteht aus Slides, zwischen denen man wechseln und die View je nach Bedarf anpassen kann.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Ändere die Ausrichtung der Carousel Komponente.',
    },
  },
};
export default meta;

export const Default = {
  name: 'Default',
  render: () => (
    <Carousel className="w-full max-w-xs mx-10" orientation="horizontal">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <>
            <CarouselItem key={index + 1} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>1</div>} />
            </CarouselItem>
            <CarouselItem key={index + 2} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>2</div>} />
            </CarouselItem>
            <CarouselItem key={index + 3} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>3</div>} />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export function Size() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm mx-10"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <CarouselItem
              key={index + 1}
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            >
              <Card header="Das ist eine Überschrift" content={<div>1</div>} />
            </CarouselItem>
            <CarouselItem
              key={index + 2}
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            >
              <Card header="Das ist eine Überschrift" content={<div>2</div>} />
            </CarouselItem>
            <CarouselItem
              key={index + 3}
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            >
              <Card header="Das ist eine Überschrift" content={<div>3</div>} />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function Orientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full max-w-xs my-10"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <CarouselItem key={index + 1} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>1</div>} />
            </CarouselItem>
            <CarouselItem key={index + 2} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>2</div>} />
            </CarouselItem>
            <CarouselItem key={index + 3} className="pl-2 md:pl-4">
              <Card
                className="overflow-y-scroll"
                header="Das ist eine Überschrift"
                content={
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </div>
                }
              />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export function Automation() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs mx-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <CarouselItem key={index + 1} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>1</div>} />
            </CarouselItem>
            <CarouselItem key={index + 2} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>2</div>} />
            </CarouselItem>
            <CarouselItem key={index + 3} className="pl-2 md:pl-4">
              <Card header="Das ist eine Überschrift" content={<div>3</div>} />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
