import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('CounterApp component Test', () => { 
    let wrapper;
    
    beforeEach( ()=>{
        wrapper = shallow(<CounterApp/>);
    });


    test('Should display CounterApp correctly', () => {

        const wrapper = shallow(<CounterApp valor = {0}/>);
        expect(wrapper).toMatchSnapshot();

    });


    test('Should display default value if no prop is set', () => { 

        const defaultValue = wrapper.find('h2').text().trim();
        expect(defaultValue).toBe('10');

    });

    test('Counter should INCREASE by 1 when the +1 button is pressed', () => { 
        
        wrapper.find('button').at(0).simulate('click');
        const counterValue = wrapper.find('h2').text().trim();
        expect(counterValue).toBe('11');

    });

    test('Counter should DECREASE by 1 when the -1 button is pressed', () => { 
        
        wrapper.find('button').at(2).simulate('click');
        const counterValue = wrapper.find('h2').text().trim();
        expect(counterValue).toBe('9');

    });

    test('Should return to initial value when the reset button is pressed', () => { 
        const initialValue = 0;
        const wrapper = shallow(<CounterApp valor = {initialValue}/>);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');


        const counterValue = wrapper.find('h2').text().trim();
        expect(counterValue).toBe('0');
        
    });
})