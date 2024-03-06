import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    exports: [ProductService, TypeOrmModule],
    providers: [ProductService]
})
export class ProductModule {}
