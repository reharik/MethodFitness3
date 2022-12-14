export const storybookTemplate = (componentName: string): string => {
	const render = `
    // GENERATED BY ./scripts/storyBookScript.ts
    import React from 'react'
    import { ComponentStory, ComponentMeta } from '@storybook/react'
    import { ${componentName} } from './${componentName}'
    
    export default {
      title: 'Design System/icons/${componentName}',
      component: ${componentName},
      argTypes: {
        color: { control: 'color' },
        rotate: { control: 'number' },
        width: {
          control: {type: 'number'},
        },
				height: {
          control: {type: 'number'}
        }
      }
    } as ComponentMeta<typeof ${componentName}>
    
    export const Default: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />
    `;
	return render;
};
