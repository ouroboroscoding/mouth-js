/**
 * Errors
 *
 * Contains constants to describe errors from the mouth service
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-03-07
 */
// Re-export the body errors
export { errors as body } from '@ouroboros/body';
// Constants
export const TEMPLATE_CONTENT_ERROR = 1300;
export const ATTACHMENT_STRUCTURE = 1301;
export const ATTACHMENT_DECODE = 1302;
export const SMTP_ERROR = 1303;
