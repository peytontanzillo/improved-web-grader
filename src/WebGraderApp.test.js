import React from 'react';
import ReactDOM from 'react-dom';
import WebGraderApp from './WebGraderApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebGraderApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
