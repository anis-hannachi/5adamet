import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';

import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CostestimationModule } from './costestimation/costestimation.module';
import { SpresponseModule } from './spresponse/spresponse.module';

import { ServiceModule } from './service/service.module';
import { CategoryModule } from './category/category.module';
import { LinkModule } from './link/link.module';
import { PackageModule } from './package/package.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),

    AuthModule,

    ServiceModule,
    CategoryModule,

    CloudinaryModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PackageModule,
    OrderModule,
    LinkModule,
  ],
  providers: [CostestimationModule, SpresponseModule],
})
export class AppModule {}
