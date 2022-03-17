//import { render } from "@testing-library/react";
import React from 'react';
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'


describe('PrimeraApp Tests', () => { 
    /*
    USING JEST EXTENSIONS
    test('Should display "Hola"', () => { 

        const greeting = "Hola";
        const {getByText} = render(<PrimeraApp saludo = {greeting}/>);

        expect(getByText(greeting)).toBeInTheDocument();
    });
    */
    
    test('Should display <PrimeraApp/> correctly', () => { 
        const greeting = 'Hello';
        const wrapper = shallow(<PrimeraApp saludo = {greeting}/>);

        expect(wrapper).toMatchSnapshot();

    })

    test('Should display subtitle specified in props', () => { 
        const greeting = 'Hello';
        const subtitle = 'SUBTITLES';

        const wrapper = shallow(<PrimeraApp 
            saludo = {greeting}
            subtitulo = {subtitle} 
        />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitle);

    })


})