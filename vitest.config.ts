import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
		include: ["src/**/*.test.{tsx,ts}"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "json-summary", "lcov"],
			reportsDirectory: "./coverage",
		},
	},
});
