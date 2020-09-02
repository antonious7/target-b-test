import React from 'react';
import renderer from 'react-test-renderer';


describe('TestInput ', () => {
  it('Test children got rendered', () => {
    const TestComponent: React.FunctionComponent = () => <p>test</p>;
    const renderedTestComponent = renderer.create(<TestComponent />).toJSON();

    expect(renderedTestComponent && renderedTestComponent.children).toEqual(['test']);
  });
});
