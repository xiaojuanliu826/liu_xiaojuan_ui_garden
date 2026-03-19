import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

// 2. 为 meta 指定类型，这会让 Storybook 知道你的组件是 Table
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

// 3. 定义一个 Story 类型，它会自动继承 meta 中的类型定义
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: '#ffffff',
    disabled: false,
  },
  // 此时 args 会被自动推断为 Table 的 Props 类型，报错消失
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <TableHeader label="Name" />
          <TableHeader label="Age" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell value="Alice" />
          <TableCell value="22" />
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <TableFooter label="End" colSpan={2} />
        </tr>
      </tfoot>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  // 复用 Default 的渲染逻辑
  render: Default.render,
};
