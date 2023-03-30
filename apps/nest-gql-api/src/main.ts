import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalInterceptors(new TimeoutInterceptor(), new LoggingInterceptor());

  const configService = app.get(ConfigService);

  try {
    await app.listen(configService.get('PORT'));

    console.log(
      `[server] Started server. Environment [${configService.get('NODE_ENV')}]`,
    );
    console.log(
      `[server] Running at http://localhost:${configService.get(
        'PORT',
      )} in ${configService.get('NODE_ENV')} mode`,
    );
  } catch (error) {
    console.error(`[server.start] ${error}`);
  }
}

bootstrap();
