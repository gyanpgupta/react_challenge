
import React from "react";

import Enzyme,{shallow} from 'enzyme';
import App from "./App";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('testing App Component', () => {
    it('renders without crashing', () => {
          const div = document.createElement('div');
          ReactDOM.render(<App />, div);
          ReactDOM.unmountComponentAtNode(div);
        });
  it('testing componentDidMount', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.instance().componentDidMount()).toBeCalled();

  })

  it('should call handleSvg', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<App />)
    expect(wrapper.instance().handleClick.mock.calls.length).toBe(1)
  })
})
