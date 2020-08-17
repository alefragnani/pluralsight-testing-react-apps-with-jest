import React from 'react';
import renderer from "react-test-renderer";
import TagsList from './TagsList';

describe('The Tags List', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
        <TagsList 
          tags={['css', 'html', 'go']}
        />
    );
    console.log(tree.toJSON());
    expect(tree.toJSON()).toMatchSnapshot();
  });
});