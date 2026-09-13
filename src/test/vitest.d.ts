import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vitest" {
	interface Assertion<R = void, T = unknown>
		extends TestingLibraryMatchers<R, T> {}
	interface AsymmetricMatchersContaining
		extends TestingLibraryMatchers<unknown, unknown> {}
}
