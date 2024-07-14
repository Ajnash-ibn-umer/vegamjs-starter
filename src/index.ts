import { Context } from "node_modules/vegamjs/dist/types/index.js";
import { Vegam } from "../../my-framework/dist/index.js";

const app = new Vegam();

app.get("/", (ctx) => {
  ctx.res.json({ message: "hai" });
});




app.post("/", (ctx: Context) => {
  console.log(ctx.req.body);
  return ctx.res.json(ctx.req.body);
});
app.listen(8002);

