declare module 'common-libs' {
  export class JwtService {
    // Здесь объявите методы и свойства класса JwtService
    sign(payload: object, secret: string): string;
    verify(token: string, secret: string): object;
  }

  // Можете добавлять другие типы или сервисы
}