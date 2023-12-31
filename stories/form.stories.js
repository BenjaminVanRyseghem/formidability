import { action } from "@storybook/addon-actions";
import { spec, validator } from "./utilities";
import Form from "../src/form";
import HtmlRenderer from "../src/renderer/htmlRenderer";

export default {
	title: "Example/Form",
	render: createForm,
	parameters: {
		layout: "fullscreen"
	}
};

export const Default = {
	args: {
		spec,
		state: {
			phone: "0123456789",
			showInfo: "no",
			info: {
				gender: "female"
			}
		},
		validator
	}
};

function createForm(args) {
	let renderer = new HtmlRenderer();
	let form = new Form({
		...args,
		onSubmit: action("onSubmit")
	});
	return renderer.render(form);
}
