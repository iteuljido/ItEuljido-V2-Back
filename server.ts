import { Application, green, yellow } from "./deps.ts";
import controllers from "./controllers/index.ts";
import { errorHandle } from "./middlewares/errors.middleware.ts";
import { sync } from "./database.ts";

const app = new Application();
const port = 8080;

// logging
app.addEventListener("listen", ({ secure, hostname, port }) => {
  const host = hostname === "0.0.0.0" ? "localhost" : hostname;
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${host ?? "localhost"}:${port}`;

  console.log(`${yellow("Listening on:")} ${green(url)}`);

  sync();
});

app.use(errorHandle);
app.use(controllers.routes());
app.use(controllers.allowedMethods());

await app.listen({ port });
