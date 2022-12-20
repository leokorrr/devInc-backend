import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: ['https://dev-inc-landing.vercel.app', 'http://localhost:3003'],
    allowedHeaders: 'Content-Type, Access-Control-Allow-Headers, Authorization',
  })
  await app.listen(process.env.PORT || 5001)
}
bootstrap()
