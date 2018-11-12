import React from "react";
import { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

import ContactSticker from "./ContactSticker";

describe('>>>C O N T A C T  S T I C K E R --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = { contactList: [{}] };
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ContactSticker store={store} /> );
    })



    describe('>>>C O N T A C T  S T I C K E R  --- Snapshot',()=>{
        it('+++capturing Snapshot of ContactList', () => {
            const renderedValue =  renderer.create(<ContactSticker  store={store}/>).toJSON()
            expect(renderedValue).toMatchSnapshot();
        });
    });
})