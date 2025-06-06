import { BROWSER } from "esm-env";

export type ConfigurableWindow = {
	/** Provide a custom `window` object to use in place of the global `window` object. */
	window?: typeof globalThis & Window;
};

export type ConfigurableDocument = {
	/** Provide a custom `document` object to use in place of the global `document` object. */
	document?: Document;
};

export type ConfigurableDocumentOrShadowRoot = {
	/*
	 * Specify a custom `document` instance or a shadow root, e.g. working with iframes or in testing environments.
	 */
	document?: DocumentOrShadowRoot;
};

export type ConfigurableNavigator = {
	/** Provide a custom `navigator` object to use in place of the global `navigator` object. */
	navigator?: Navigator;
};

export type ConfigurableLocation = {
	/** Provide a custom `location` object to use in place of the global `location` object. */
	location?: Location;
};

export const defaultWindow = BROWSER && typeof window !== "undefined" ? window : undefined;
export const defaultDocument =
	BROWSER && typeof window !== "undefined" ? window.document : undefined;
export const defaultNavigator =
	BROWSER && typeof window !== "undefined" ? window.navigator : undefined;
export const defaultLocation =
	BROWSER && typeof window !== "undefined" ? window.location : undefined;
