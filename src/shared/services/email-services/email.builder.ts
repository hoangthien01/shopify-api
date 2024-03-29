/* eslint-disable unicorn/no-null */
import { BadRequestException, Injectable } from '@nestjs/common';
import _ from 'lodash';

import type { EmailTemplateType } from '../../../constants';
import { EmailTemplate } from '../../../constants';
import type { IEmailParams } from '../../../interfaces/email-builder.interface';
import { FORGOT_PASSWORD_OTP_EMAIL, USER_INVITATION } from './templates';
import { APPROVED_REQUEST } from './templates/approved-request.template';
import { DONATION_RESULT } from './templates/donation-result.template';
import { PENDING_APPROVE } from './templates/pending-approve.template';

@Injectable()
export class EmailBuilder {
    public build(type: EmailTemplateType, params: IEmailParams): { subject: string; message: string } {
        const template = this.loadTemplate(type);

        if (!template) {
            throw new BadRequestException('This template is not supported');
        }

        if (!template.message || !template.subject) {
            throw new BadRequestException('This template is valid');
        }

        const built = template;

        built.subject = this.setValues(template.subject, params.subject);
        built.message = this.setValues(template.message, params.message);

        return built;
    }

    loadTemplate(type: EmailTemplateType): { subject: string; message: string } | null {
        let template: { subject: string; message: string };

        switch (type) {
            case EmailTemplate.FORGOT_PASSWORD_OTP_EMAIL: {
                template = _.clone(FORGOT_PASSWORD_OTP_EMAIL);
                break;
            }

            case EmailTemplate.USER_INVITATION: {
                template = _.clone(USER_INVITATION);
                break;
            }

            case EmailTemplate.PENDING_APPROVE: {
                template = _.clone(PENDING_APPROVE);
                break;
            }

            case EmailTemplate.APPROVED_REQUEST: {
                template = _.clone(APPROVED_REQUEST);
                break;
            }

            case EmailTemplate.DONATION_RESULT: {
                template = _.clone(DONATION_RESULT);
                break;
            }

            case EmailTemplate.DEFAULT: {
                template = _.clone(FORGOT_PASSWORD_OTP_EMAIL);
                break;
            }

            default: {
                return null;
            }
        }

        if (!template) {
            throw new BadRequestException('Cannot find template');
        }

        return template;
    }

    private setValues(source: string, params: Record<string, string>): string {
        let built = source;

        for (const [key, value] of Object.entries(params)) {
            built = built.replace(new RegExp(`{{ ${key} }}`, 'gi'), value);
        }

        return built;
    }
}
