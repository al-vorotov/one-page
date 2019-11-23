import React from 'react';
import { cleanup, render } from "@testing-library/react";

import Layout from './index';

afterEach(() => {
  cleanup();
});
describe('Layout', () => {
  it('should render without Data💥', () => {
    const wrapper = render(
        <Layout/>
    );
    expect(wrapper).toBeTruthy();
  });
});