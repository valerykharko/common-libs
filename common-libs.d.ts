declare module 'common-libs/src' {
  export class JwtService {
    sign(payload: object, secret: string): string;
    verify(token: string, secret: string): object;
  }

  export class WinstonService {
    log(message: string): void;
    error(message: string, trace: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
  }

  // Пример для других типов и сервисов
  export * from './src/guards/jwt-auth.guard';
  export * from './src/services/logger.service';
  export * from './src/services/jwt.service';
}
