import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/chat')
  @Render('index')
  Home() {
    return;
  }

  // @Get()
  // getHello(): string {
  //   // return this.appService.getHello();
  // }
}
