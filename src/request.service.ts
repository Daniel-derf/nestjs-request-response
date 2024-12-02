import { Injectable, Scope } from '@nestjs/common';

// fazendo com que cada request tenha seu escopo próprio, em vez de
// compartilhar a classe com os outros
@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private userId: string;

  setUser(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
