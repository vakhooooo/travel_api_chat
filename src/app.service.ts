import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async saveMessage(messageData: any) {
    const { from, to, message } = messageData;

    const cacheKey = `${from}${to}`;

    const dataInCache = await this.cacheManager.get(cacheKey);

    if (dataInCache) {
      return console.log('egaa');
    }
  }
}
