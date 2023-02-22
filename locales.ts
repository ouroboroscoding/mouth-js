/**
 * Locales
 *
 * Keeps track of the locales available
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2021-03-17
 */

// Ouroboros modules
import { clone } from '@ouroboros/tools';

// Local modules
import nouns from './nouns';

// Locale interface
interface Locale {
	_id: string,
	name: string
}

// Option interface
interface Option {
	id: string,
	text: string
}

// Options type
type Options = Record<string, Option[]>;

// Callback type
type Callback = (locales: Locale[]) => void

// Global variables
const _callbacks: Callback[] = [];
let _locales: Locale[] | null = null;
let _running: boolean = false;

/**
 * Fetch
 *
 * Gets all the locales from the server
 *
 * @name fetch
 * @access private
 * @returns void
 */
function fetch() {

	// If we're not already running
	if(!_running) {
		_running = true;

		// Fetch the data from the server
		nouns.locale.read().then(list => {

			// If there's data
			if(list) {

				// Store the data
				_locales = list as Locale[];

				// Trigger all callbacks
				notify();
			}

			// Finish running
			_running = false;
		});
	}
}

/**
 * Get
 *
 * Returns the current list of locales
 *
 * @name get
 * @access public
 */
export function get(): Locale[] {

	// If we have the data
	if(_locales !== null) {
		return clone(_locales);
	}

	// Return an empty list for now
	return [];
}

/**
 * Notify
 *
 * Calls all the callbacks with the current data
 *
 * @name notify
 * @access private
 */
function notify(): void {

	// Clone the current data
	const lLocales = clone(_locales);

	// Pass the clone to everyone tracking
	for(const f of _callbacks) {
		f(lLocales);
	}
}

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
function sortArray(records: Record<string, any>[], idKey='_id', valueKey='locales'): Options {

	// Init the return
	const oRet: Options = {};

	// Go through each record
	for(const oRecord of records) {

		// Go through each locale
		for(const sLocale of Object.keys(oRecord[valueKey])) {

			// If we don't have the locale
			if(!(sLocale in oRet)) {
				oRet[sLocale] = [];
			}

			// Add the ID and text to the list
			oRet[sLocale].push({
				id: oRecord[idKey],
				text: oRecord[valueKey][sLocale]
			});
		}
	}

	// Go through each locale
	for(const sLocale of Object.keys(oRet)) {

		// Sort it alphabetically
		oRet[sLocale].sort((a, b) => {
			if(a.text.normalize('NFD') === b.text.normalize('NFD')) return 0;
			else return (a.text.normalize('NFD') < b.text.normalize('NFD')) ? -1 : 1;
		});
	}

	// Return the new structure
	return oRet;
}

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
function sortObject(records: Record<string, Record<string, string>>): Options {

	// Init the return
	const oRet: Options = {};

	// Go through each record
	for(const sID of Object.keys(records)) {

		// Go through each locale
		for(const sLocale of Object.keys(records[sID])) {

			// If we don't have the locale
			if(!(sLocale in oRet)) {
				oRet[sLocale] = [];
			}

			// Add the ID and text to the list
			oRet[sLocale].push({
				id: sID,
				text: records[sID][sLocale]
			});
		}
	}

	// Go through each locale
	for(const sLocale of Object.keys(oRet)) {

		// Sort it alphabetically
		oRet[sLocale].sort((a, b) => {
			if(a.text.normalize('NFD') === b.text.normalize('NFD')) return 0;
			else return (a.text.normalize('NFD') < b.text.normalize('NFD')) ? -1 : 1;
		});
	}

	// Return the new structure
	return oRet;
}

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
function subscribe(callback: Callback): Locale[] {

	// Add the callback to the list
	_callbacks.push(callback);

	// If we have the data
	if(_locales !== null) {
		return clone(_locales);
	}

	// Fetch the locales
	fetch();

	// Return an empty list for now
	return [];
}

/**
 * Ubsubscribe
 *
 * Removes a callback from the list of who gets notified on changes
 *
 * @name ubsubscribe
 * @access public
 * @param callback The callback to remove
 */
function unsubscribe(callback: Callback): void {
	const i = _callbacks.indexOf(callback);
	if(i > -1) {
		_callbacks.splice(i, 1);
	}
}

// Default export
const locales = { get, sortArray, sortObject, subscribe, unsubscribe }
export default locales;
