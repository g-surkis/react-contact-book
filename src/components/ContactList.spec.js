import React from "react";
import { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

import ContactList from "./ContactList";

describe('>>>C O N T A C T  L I S T --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = { contactList: [{}] };
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ContactList store={store} /> );
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('output')).toEqual(initialState.output);
    });


    describe('>>>C O N T A C T  L I S T --- Snapshot',()=>{
        it('+++capturing Snapshot of ContactList', () => {
            const renderedValue =  renderer.create(<ContactList output={10} store={store}/>).toJSON()
            expect(renderedValue).toMatchSnapshot();
        });
    });
})