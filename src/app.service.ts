import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly requestService: RequestService) {}

  getHello(): string {
    const userID = this.requestService.getUserId();
    this.logger.log('getHello userID: ', userID);
    return 'Hello World!';
  }
}
