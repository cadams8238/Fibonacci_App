import React from "react";
import InputNumberForm from "../components/InputNumberForm";
import { mount } from "enzyme";

describe("<InputNumberForm />", () => {
	describe("rendering", () => {
		let props, wrapper;

		beforeEach(() => {
			props = {
				changeValue: jest.fn(),
				onSubmit: jest.fn()
			};

			wrapper = mount(<InputNumberForm {...props} />);
		});

		it("Should render without crashing", () => {
			// eslint-disable-next-line no-unused-expressions
			wrapper;
		});

		it("Should render a form", () => {
			expect(wrapper.find("form")).toHaveLength(1);
		});

		it("Should contain an input element", () => {
			expect(wrapper.find("input")).toHaveLength(1);
		});

		it("Should contain a button element", () => {
			expect(wrapper.find("button")).toHaveLength(1);
		});

		describe("props", () => {
			it("should receive 2 props", () => {
				expect(Object.keys(wrapper.props()).length).toBe(2);
			});

			it("should receive changeValue function", () => {
				expect(wrapper.props().changeValue).toBe(props.changeValue);
			});

			it("should receive onSubmit function", () => {
				expect(wrapper.props().onSubmit).toBe(props.onSubmit);
			});
		});

		describe("behavior", () => {
			let props, component;

			beforeEach(() => {
				props = {
					changeValue: jest.fn(),
					onSubmit: jest.fn()
				};

				component = mount(<InputNumberForm {...props} />);
			});

			it("Should call `onSubmit` when form is submitted", () => {
				component.find("form").simulate("submit");
				expect(props.onSubmit).toBeCalled();
			});

			it("Should call `changeValue()` when text in input element changes", () => {
				component.find("input").simulate("change", { target: { value: "" } });
				expect(props.changeValue).toBeCalled();
			});

			it("Should update `value` when text in input element changes", () => {
				component.find("input").simulate("change", { target: { value: "45" } });
				expect(props.changeValue).toBeCalledWith("45");
			});
		});
	});
});
