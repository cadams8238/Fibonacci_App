import React from "react";
import Number from "../components/Number";
import { mount } from "enzyme";

describe("<Number />", () => {
	describe("rendering", () => {
		let props, wrapper;

		beforeEach(() => {
			props = {
				label: ""
			};

			wrapper = mount(<Number {...props} />);
		});

		it("Should render without crashing", () => {
			// eslint-disable-next-line no-unused-expressions
			wrapper;
		});

		it("Should render a list element", () => {
			expect(wrapper.find("li")).toHaveLength(1);
		});

		describe("props", () => {
			it("should receive 1 props", () => {
				expect(Object.keys(wrapper.props()).length).toBe(1);
			});

			it("should receive label prop", () => {
				expect(wrapper.props().label).toBe(props.label);
			});
		});
	});
});
