import { httpErrors } from "../deps.ts";

export const githubLogin = async (code: string) => {
  const clientId = Deno.env.get("CLIENT_ID");
  const clientSecret = Deno.env.get("CLIENT_SECRET");

  const loginBody = new URLSearchParams({
    code: code,
    client_id: clientId!,
    client_secret: clientSecret!
  });

  const loginResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json"
    },
    body: loginBody
  });

  const data = await loginResponse.json();

  console.log(data);
  if (data.error) throw new httpErrors.BadRequest("code is invalid");

  const userResponse = await fetch("https://api.github.com/user", {
    headers: { Authorization: `token ${data.access_token}` }
  });

  return await userResponse.json();
};
