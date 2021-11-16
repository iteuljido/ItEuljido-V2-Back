import { Application, green, yellow } from "./deps.ts";
import routes from "./routes/index.ts";

const app = new Application();
const port = 8080;

// logging
app.addEventListener("listen", ({ secure, hostname, port }) => {
  const host = hostname === "0.0.0.0" ? "localhost" : hostname;
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${host ?? "localhost"}:${port}`;

  console.log(`${yellow("Listening on:")} ${green(url)}`);
});

app.use(routes.routes());
app.use(routes.allowedMethods());

await app.listen({ port });
