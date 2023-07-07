import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quibusdam autem consequatur assumenda et rerum? Ipsum, error
    ullam vitae temporibus fugiat, obcaecati rem quam hic voluptas ut
    labore! Maiores, corporis quos!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
