/**
 * @description error response 객체
 */
export class ErrorResponse {
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  status: number;
  message: string;
}
