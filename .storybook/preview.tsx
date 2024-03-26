import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
