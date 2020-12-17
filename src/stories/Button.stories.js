import Fired from 'index'

export default {
  title: 'Components/Button',
  component: Fired.Button
}

const Template = (args) => <Fired.Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Matrícula 100% free'
}
