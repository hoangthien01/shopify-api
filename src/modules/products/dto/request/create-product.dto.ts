import {NumberField, StringField} from '../../../../decorators';

export class CreateProductDto {
    @StringField({})
    readonly title: string;

    @StringField({})
    readonly description: string;

    @NumberField({})
    readonly price: number;
}

