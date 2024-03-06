import { Matches, MinLength } from 'class-validator';

import { EmailField, NumberField, StringField } from '../../../../decorators';

export class UserRegisterDto {
    @EmailField({ toLowerCase: true, example: 'user@vstation.com' })
    @Matches(/^[\w+.-]+@[\dA-Za-z-]+\.[\d.A-Za-z-]+$/, {
        message: 'please enter a valid email address'
    })
    readonly email: string;

    @NumberField({ minLength: 9, maxLength: 12, example: '206271224' })
    readonly identifier: number;

    @NumberField({ minLength: 9, maxLength: 12, example: '1213232313' })
    readonly phone: number;

    @StringField({ example: 'ThienHo' })
    readonly name: string;

    @StringField({ minLength: 8, example: 'vStation@123', default: 'ThienHo1204@' })
    @MinLength(8)
    readonly password?: string;
}
