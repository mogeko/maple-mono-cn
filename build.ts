import { fontSplit } from "cn-font-split/dist/bun";

const ttf = Bun.file("./assets/MapleMono-CN-Regular.ttf");

await fontSplit({
	input: await ttf.bytes(),
	outDir: "./dist/font",
	reporter: false,
	testHtml: false,
});
