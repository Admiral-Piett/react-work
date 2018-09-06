import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../components/Header';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    const wrapper = shallow(<Header />);
    // Using import toJSON from 'enzyme-to-json'; behind the scenes in jest.config.json
    expect(wrapper).toMatchSnapshot();
});