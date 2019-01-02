import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Allows Jest to understand when we invoke window.scrollTo
global.scrollTo = jest.fn();


Enzyme.configure({adapter: new Adapter()});