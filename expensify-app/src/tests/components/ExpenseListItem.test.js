import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseItem } from '../../components/ExpenseListItem';

import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expense[2] as the expense', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[2]} />)
    expect(wrapper).toMatchSnapshot();
});