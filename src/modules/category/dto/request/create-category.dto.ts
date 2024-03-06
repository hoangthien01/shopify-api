import { StringField} from '../../../../decorators';

export class CreateCategoryDto {
    @StringField({})
    readonly name: string;
}
