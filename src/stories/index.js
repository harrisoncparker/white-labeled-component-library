import React from "react";
import {storiesOf} from "@storybook/react";
import Button from "../features/common/Button";

storiesOf("Button", module)
	.add("With text", () => (
		<Button label={`some text`}/>
	))
	.add("With text (inverted)", () => (
		<Button label={`some text`} className={`inverted`}/>
	));
