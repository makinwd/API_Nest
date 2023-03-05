import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';

@Module({
  imports: [MoviesController],
  controllers: [],
  providers: [],
})
export class MoviesModule {}
