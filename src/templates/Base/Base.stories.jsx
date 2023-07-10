import { Base } from '.';

import { MockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: MockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
