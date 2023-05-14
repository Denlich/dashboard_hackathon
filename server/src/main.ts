import { NestFactory } from "@nestjs/core";
import * as process from "process";
import { AppModule } from "./module/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as path from "path";
import { ClassSerializerInterceptor } from "@nestjs/common";


async function start() {
  const PORT = process.env.port || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.resolve(__dirname, "static"), {
    prefix: '/static/',
  });
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(PORT, () => {
    console.log("Server was started on PORT", PORT);
  });
  app.useGlobalGuards()
}

start();




