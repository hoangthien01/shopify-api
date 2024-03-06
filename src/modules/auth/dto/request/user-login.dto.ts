import { MinLength } from 'class-validator';

import { NumberField, StringField } from '../../../../decorators';

export class UserLoginDto {
    // @EmailField({ toLowerCase: true, example: 'user@vstation.com' })
    // @Matches(/^[\w+.-]+@[\dA-Za-z-]+\.[\d.A-Za-z-]+$/, {
    //     message: 'please enter a valid email address'
    // })
    // readonly email: string;

    @NumberField({ minLength: 8, maxLength: 12, example: 12_345_678 })
    readonly identifier: number;

    @StringField({ minLength: 6, example: 'vStation@123' })
    @MinLength(6)
    readonly password: string;
}
