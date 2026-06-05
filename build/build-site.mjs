import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(rootDirectory, "dist");
const publicDirectory = path.join(rootDirectory, "public");

const copyPublicAssets = async () => {
    await fs.mkdir(distDirectory, { recursive: true });

    const entries = await fs.readdir(publicDirectory, { withFileTypes: true });
    await Promise.all(
        entries
            .filter((entry) => entry.name !== "index.html")
            .map((entry) => fs.cp(path.join(publicDirectory, entry.name), path.join(distDirectory, entry.name), { recursive: true })),
    );
};

const build = async () => {
    await fs.rm(distDirectory, { force: true, recursive: true });
    await copyPublicAssets();

    const vite = await createServer({
        appType: "custom",
        configFile: path.join(rootDirectory, "vite.config.ts"),
        root: rootDirectory,
        server: {
            middlewareMode: true,
        },
    });

    try {
        const { renderSite } = await vite.ssrLoadModule("/src/app/render-site/index.tsx");
        const pages = renderSite();

        await Promise.all(
            pages.map(async ({ html, outputPath }) => {
                const targetPath = path.join(distDirectory, outputPath);
                await fs.mkdir(path.dirname(targetPath), { recursive: true });
                await fs.writeFile(targetPath, html);
            }),
        );
    } finally {
        await vite.close();
    }
};

await build();
