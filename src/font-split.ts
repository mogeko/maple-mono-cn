import fs from "node:fs/promises";
import { resolve } from "node:path";
import { fontSplit } from "cn-font-split";

const __dirname = new URL(".", import.meta.url).pathname;

await fontSplit({
	input: new Uint8Array(
		await fs.readFile(resolve(__dirname, "./MapleMono-CN-Regular.ttf")),
	),
	outDir: "./dist/font",
	reporter: false,
	testHtml: false,
});
