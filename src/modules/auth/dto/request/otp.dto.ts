import { NumberField, StringField } from '../../../../decorators';

export class OTPDto {
    // @EmailField({ toLowerCase: true, example: 'user@vstation.com' })
    // @Matches(/^[\w+.-]+@[\dA-Za-z-]+\.[\d.A-Za-z-]+$/)
    // readonly email: string;

    @NumberField({ minLength: 8, maxLength: 12, example: '12345678' })
    readonly identifier: number;

    @StringField()
    readonly otpCode: string;
}
