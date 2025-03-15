/**
 * Mouth
 *
 * Main export of @ouroboros/mouth module
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-03-07
 */
// Ouroboros modules
import { Service } from '@ouroboros/body';
import * as errors_1 from './errors';
export { errors_1 as errors };
// Create an instance of Service and export it as default
const mouth = new Service('mouth');
export default mouth;
