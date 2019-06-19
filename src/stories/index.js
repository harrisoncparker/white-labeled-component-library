import React from "react";
import {storiesOf, addDecorator} from "@storybook/react";
import Button from "../features/common/Button";
import {ThemeProvider} from 'styled-components';

const theme = {
	greyDark: '#696969',
	greyMid: '#767675',
	greyLight: '#fafafa'
};

addDecorator(storyFn => (
	<ThemeProvider theme={theme}>
		{storyFn()}
	</ThemeProvider>
));

storiesOf("Button", module)
	.add("Default (Button)", () => (
		<Button label={`Button CTA`}/>
	))
	.add("Default (Link)", () => (
		<Button href={`#`} label={`Button CTA`}/>
	))
	.add("With Icon", () => (
		<Button href={`#`} iconPath={require(`../images/svg/icon.svg`)} label={`Button CTA`}/>
	))
	.add("With Loading", () => (
		<Button className={`loading`} href={`#`} label={`Loading...`}/>
	));
