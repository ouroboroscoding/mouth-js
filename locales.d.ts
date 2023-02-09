/**
 * Locales
 *
 * Keeps track of the locales available
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2021-03-17
 */
interface Locale {
    _id: string;
    name: string;
}
interface Option {
    id: string;
    text: string;
}
type Options = Record<string, Option[]>;
type Callback = (locales: Locale[]) => void;
/**
 * Get
 *
 * Returns the current list of locales
 *
 * @name get
 * @access public
 * @returnss list
 */
export declare function get(): any;
/**
 * Sort Array
 *
 * Splits the records so they are stored by locale and then orders them
 * alphabetically
 *
 * @name sortArray
 * @access public
 * @param records The records to re-order
 * @param idKey? Optional key for ID value
 * @param valueKey? Optional key for locale values
 * @returns an object of locale keys to option records sorted by the display
 * 			text
 */
declare function sortArray(records: Record<string, any>[], idKey?: string, valueKey?: string): Options;
/**
 * Sort Object
 *
 * Splits the records so they are stored by locale and then orders them
 * alphabetically
 *
 * @name sortObject
 * @access public
 * @param records The records to re-order
 * @returns an object of locale keys to option records sorted by the display
 * 			text
 */
declare function sortObject(records: Record<string, Record<string, string>>): Options;
/**
 * Subscribe
 *
 * Subscribes to locale changes and returns the current data
 *
 * @name subscribe
 * @access public
 * @param Function callback The callback to register for future updates
 * @returns the current list of locales
 */
declare function subscribe(callback: Callback): Locale[];
/**
 * Ubsubscribe
 *
 * Removes a callback from the list of who gets notified on changes
 *
 * @name ubsubscribe
 * @access public
 * @param callback The callback to remove
 */
declare function unsubscribe(callback: Callback): void;
declare const locales: {
    get: typeof get;
    sortArray: typeof sortArray;
    sortObject: typeof sortObject;
    subscribe: typeof subscribe;
    unsubscribe: typeof unsubscribe;
};
export default locales;
