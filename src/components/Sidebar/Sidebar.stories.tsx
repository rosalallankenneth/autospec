import React from 'react';
import Sidebar from './Sidebar';

export default {
  children: '',
  title: 'Component/Sidebar',
  component: Sidebar
}

const Template = (args: any) => {
  return (
    <Sidebar {...args} />
  )
}

const props = {
  defaultProps: () => ({

  })
}

export const SidebarStory: any = Template.bind({
  storyName: 'Sidebar',
  args: { ...props.defaultProps() }
});