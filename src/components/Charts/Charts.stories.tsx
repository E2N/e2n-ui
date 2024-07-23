import { StoryObj } from '@storybook/react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from './Charts';
import { useMemo } from 'react';

export default {
  title: 'Components/Chart',
  tags: ['autodocs'],
  component: ChartContainer,
};

export const Default: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: '#2563eb',
      },
      mobile: {
        label: 'Mobile',
        color: '#60a5fa',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    );
  },
};

export const BarChartExample: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(12 76% 61%)',
      },
      mobile: {
        label: 'Mobile',
        color: 'hsl(173 58% 39%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent indicator="dashed" className="bg-white" />
            }
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    );
  },
};

export const BarChartHorizontalExample: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186 },
      { month: 'February', desktop: 305 },
      { month: 'March', desktop: 237 },
      { month: 'April', desktop: 73 },
      { month: 'May', desktop: 209 },
      { month: 'June', desktop: 214 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(12 76% 61%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: -20,
          }}>
          <XAxis type="number" dataKey="desktop" hide />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
        </BarChart>
      </ChartContainer>
    );
  },
};

export const AreaChartExample: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(12 76% 61%)',
      },
      mobile: {
        label: 'Mobile',
        color: 'hsl(173 58% 39%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    );
  },
};

export const LineChartExample: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(12 76% 61%)',
      },
      mobile: {
        label: 'Mobile',
        color: 'hsl(173 58% 39%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            left: 12,
            right: 12,
          }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={{
              fill: 'var(--color-desktop)',
            }}
            activeDot={{
              r: 6,
            }}>
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ChartContainer>
    );
  },
};

export const PieChartExample: StoryObj = {
  render: () => {
    const chartData = [
      { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
      { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
      { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
      { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
      { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
    ];

    const chartConfig = {
      visitors: {
        label: 'Visitors',
      },
      chrome: {
        label: 'Chrome',
        color: 'hsl(12 76% 61%)',
      },
      safari: {
        label: 'Safari',
        color: 'hsl(173 58% 39%)',
      },
      firefox: {
        label: 'Firefox',
        color: 'hsl(197 37% 24%)',
      },
      edge: {
        label: 'Edge',
        color: 'hsl(43 74% 66%)',
      },
      other: {
        label: 'Other',
        color: 'hsl(27 87% 67%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-lvh">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          <ChartLegend
            content={<ChartLegendContent nameKey="browser" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    );
  },
};

export const PieChartDonutExampls: StoryObj = {
  render: () => {
    const chartData = [
      { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
      { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
      { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
      { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
      { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
    ];

    const chartConfig = {
      visitors: {
        label: 'Visitors',
      },
      chrome: {
        label: 'Chrome',
        color: 'hsl(12 76% 61%)',
      },
      safari: {
        label: 'Safari',
        color: 'hsl(173 58% 39%)',
      },
      firefox: {
        label: 'Firefox',
        color: 'hsl(197 37% 24%)',
      },
      edge: {
        label: 'Edge',
        color: 'hsl(43 74% 66%)',
      },
      other: {
        label: 'Other',
        color: 'hsl(27 87% 67%)',
      },
    } satisfies ChartConfig;

    const totalVisitors = useMemo(() => {
      return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    }, []);

    return (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-svh">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={150}
            strokeWidth={5}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold">
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground">
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    );
  },
};

export const RadarChartExample: StoryObj = {
  render: () => {
    const chartData = [
      { month: 'January', desktop: 186 },
      { month: 'February', desktop: 285 },
      { month: 'March', desktop: 237 },
      { month: 'April', desktop: 203 },
      { month: 'May', desktop: 209 },
      { month: 'June', desktop: 264 },
    ];

    const chartConfig = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(12 76% 61%)',
      },
    } satisfies ChartConfig;

    return (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-lvh">
        <RadarChart data={chartData}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarGrid className="fill-[--color-desktop] opacity-20" />
          <PolarAngleAxis dataKey="month" />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ChartContainer>
    );
  },
};
