import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// console.log(yarg)

const main = () => {
    const { b:base, l:limit, s:showTable, n:fileName, d: fileDestination } = yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}

(async () => {
    await main();
})();
