import React from "react";
import App from "../components/App";
import InputNumberForm from "../components/InputNumberForm";
import { mount } from "enzyme";

describe("<App />", () => {
	describe("rendering", () => {
		let wrapper;

		beforeEach(() => {
			wrapper = mount(<App />);
		});

		it("Should render without crashing", () => {
			// eslint-disable-next-line no-unused-expressions
			wrapper;
		});

		it("Should render a form", () => {
			expect(wrapper.find("form")).toHaveLength(1);
		});

		it("Should contain a h1 element", () => {
			expect(wrapper.find("h1")).toHaveLength(1);
		});

		it("Should contain a couple p elements", () => {
			expect(wrapper.find("p")).toHaveLength(2);
		});

		it("Should contain a InputNumberForm element", () => {
			expect(wrapper.find("InputNumberForm")).toHaveLength(1);
		});

		describe("props", () => {
			it("Should not receive props", () => {
				expect(Object.keys(wrapper.props()).length).toBe(0);
			});
		});
	});
});
