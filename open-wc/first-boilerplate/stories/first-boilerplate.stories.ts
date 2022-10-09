import { html, TemplateResult } from 'lit';
import '../src/first-boilerplate.js';

export default {
  title: 'FirstBoilerplate',
  component: 'first-boilerplate',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <first-boilerplate style="--first-boilerplate-background-color: ${backgroundColor}" .title=${title}></first-boilerplate>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
