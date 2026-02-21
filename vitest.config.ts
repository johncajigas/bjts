import { loadEnv } from 'vite';
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
	test: {
		include: ["Test/*"],
		env: loadEnv(mode, process.cwd(), ''),
	},
}))
