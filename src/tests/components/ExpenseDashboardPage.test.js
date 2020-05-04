import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseDashBoardPage  from '../../components/ExpenseDashBoardPage';

test('Should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});
