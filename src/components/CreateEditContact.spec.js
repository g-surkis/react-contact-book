import React from "react";
import { shallow} from "enzyme";
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

import CreateEditContact from "./CreateEditContact";

describe('>>>C R E A T E  E D I T  C O N T A C T --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = { contactList: [{}] };
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<CreateEditContact store={store} /> );
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.prop('output')).toEqual(initialState.output);
    });


    describe('>>>C R E A T E  E D I T  C O N T A C T --- Snapshot',()=>{
        it('+++capturing Snapshot of ContactList', () => {
            const renderedValue =  renderer.create(<CreateEditContact output={10} store={store}/>).toJSON()
            expect(renderedValue).toMatchSnapshot();
        });
    });
})