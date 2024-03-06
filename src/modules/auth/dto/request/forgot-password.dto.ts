import { NumberField } from '../../../../decorators';

export class ForgotPasswordDto {
    // @EmailField({ toLowerCase: true, example: 'user@vstation.com' })
    // @Matches(/^[\w+.-]+@[\dA-Za-z-]+\.[\d.A-Za-z-]+$/, {
    //     message: 'please enter a valid email address'
    // })
    // readonly email: string;

    @NumberField({ minLength: 8, maxLength: 12, example: '12345678' })
    readonly identifier: number;

    @NumberField({ minLength: 8, maxLength: 12, example: '12345678' })
    readonly phone: number;
}
