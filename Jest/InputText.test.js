import React from 'react';
import {mount, shallow} from 'enzyme';
import { render } from "@testing-library/react";

// Components
import InputText from '../src/components/InputText';

// Test block
describe("InputText component check with 'name' and 'placeholder'", () => {
  test('InputText name field is "firstName"',() => {
    // Render a InputText component
    const inputText = shallow(<InputText id="test1234" inputName="firstName" placeholder="First Name"/>);

    expect(inputText.prop("name")).toEqual("firstName");
  })

  test('InputText placeholder field has "First name"',() => {
    // Render a InputText component
    const inputText = shallow(<InputText id="test1234" inputName="firstName" placeholder="First Name"/>);

    expect(inputText.prop("placeholder")).toEqual("First Name");
  })
})
