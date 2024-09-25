import { config } from "./src/providers/aws/secret-manager";

(async () => {
    await config.loadCreds();
    try {
        const app = await import("./src/run")
        app.run();
    } catch (error) {
        console.log(error)
    }
})();