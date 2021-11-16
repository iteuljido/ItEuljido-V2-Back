import { Database, MySQLConnector } from "./deps.ts";
import { User } from "./models/user.ts";

const sync = async () => {
  const connection = new MySQLConnector({
    host: Deno.env.get("DATABASE_HOST")!,
    username: Deno.env.get("DATABASE_USERNAME")!,
    password: Deno.env.get("DATABASE_PASSWORD")!,
    database: Deno.env.get("DATABASE_DBNAME")!
  });

  const db = new Database(connection);

  db.link([User]);

  await db.sync({ drop: true });
};

export { sync };
