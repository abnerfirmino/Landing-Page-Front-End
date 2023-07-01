import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Texto claro',
    lightColor: false,
  },
  argTypes: {
    children: { type: 'string' },
    lightColor: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} lightColor={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'Texto escuro',
  lightColor: false,
};
