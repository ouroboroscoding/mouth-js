/**
 * Mouth Nouns
 *
 * Handles rest data requests related to mouth service
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @created 2023-01-17
 */
/**
 * Locale create
 *
 * Creates a new Locale in the system
 *
 * @name localeCreate
 * @access private
 * @param data The data of the new Locale
 * @returns a promise with the results of the request
 */
declare function localeCreate(data: Record<string, any>): Promise<object>;
/**
 * Locale delete
 *
 * Deletes an existing Locale from the system
 *
 * @name localeDelete
 * @access private
 * @param _id? The ID of the Locale to delete
 * @returns a promise with the results of the request
 */
declare function localeDelete(_id: string): Promise<object>;
/**
 * Locale read
 *
 * Fetches one or all locales from the service
 *
 * @name localeRead
 * @access private
 * @param _id? The ID of the locale to fetch, not set to get all
 * @returns a promise with the results of the request
 */
declare function localeRead(_id?: string): Promise<object | object[]>;
/**
 * Locale update
 *
 * Updates an existing Locale in the system
 *
 * @name localeUpdate
 * @access private
 * @param data The data for the Locale to update, including the ID
 * @returns a promise with the results of the request
 */
declare function localeUpdate(data: Record<string, any>): Promise<object>;
/**
 * Template create
 *
 * Creates a new template in the system
 *
 * @name templateCreate
 * @access private
 * @param data The template data
 * @returns a promise with the results of the request
 */
declare function templateCreate(data: Record<string, any>): Promise<unknown>;
/**
 * Template Contents read
 *
 * Fetches all different content values by type and locale for a specific
 * template
 *
 * @name templateContentsRead
 * @access private
 * @param {string} template The ID of the template
 * @returns a promise with the results of the request
 */
declare function templateContentsRead(template: Record<string, any>): Promise<object>;
/**
 * Template delete
 *
 * Deletes an existing template from the system
 *
 * @name templateDelete
 * @access private
 * @param _id The ID of the template
 * @returns a promise with the results of the request
 */
declare function templateDelete(_id: string): Promise<object>;
/**
 * Template Email create
 *
 * Creates a new template email record
 *
 * @name templateEmailCreate
 * @access private
 * @param data The record to create
 * @returns a promise with the results of the request
 */
declare function templateEmailCreate(data: Record<string, any>): Promise<object>;
/**
 * Template Email generate
 *
 * Creates a new template email record
 *
 * @name templateEmailGenerate
 * @access private
 * @param data The record to generate
 * @returns a promise with the results of the request
 */
declare function templateEmailGenerate(data: Record<string, any>): Promise<object>;
/**
 * Template Email update
 *
 * Creates a new template email record
 *
 * @name templateEmailUpdate
 * @access private
 * @param data The record to update
 * @returns a promise with the results of the request
 */
declare function templateEmailUpdate(data: Record<string, any>): Promise<object>;
/**
 * Template SMS create
 *
 * Creates a new template sms record
 *
 * @name templateSmsCreate
 * @access private
 * @param data The record to create
 * @returns a promise with the results of the request
 */
declare function templateSmsCreate(data: Record<string, any>): Promise<object>;
/**
 * Template SMS generate
 *
 * Creates a new template sms record
 *
 * @name templateSmsGenerate
 * @access private
 * @param data The record to generate
 * @returns a promise with the results of the request
 */
declare function templateSmsGenerate(data: Record<string, any>): Promise<object>;
/**
 * Template SMS update
 *
 * Creates a new template sms record
 *
 * @name templateSmsUpdate
 * @access private
 * @param data The record to update
 * @returns a promise with the results of the request
 */
declare function templateSmsUpdate(data: Record<string, any>): Promise<object>;
/**
 * Template update
 *
 * Updates an existing template in the system
 *
 * @name templateUpdate
 * @access private
 * @param data The template data
 * @returns a promise with the results of the request
 */
declare function templateUpdate(data: Record<string, any>): Promise<object>;
/**
 * Templates read
 *
 * Returns all templates in the service
 *
 * @name templatesRead
 * @access private
 * @returns a promise with the results of the request
 */
declare function templatesRead(): Promise<object>;
declare const nouns: {
    locale: {
        create: typeof localeCreate;
        delete: typeof localeDelete;
        read: typeof localeRead;
        update: typeof localeUpdate;
    };
    template: {
        create: typeof templateCreate;
        contents: typeof templateContentsRead;
        delete: typeof templateDelete;
        email: {
            create: typeof templateEmailCreate;
            generate: typeof templateEmailGenerate;
            update: typeof templateEmailUpdate;
        };
        sms: {
            create: typeof templateSmsCreate;
            generate: typeof templateSmsGenerate;
            update: typeof templateSmsUpdate;
        };
        update: typeof templateUpdate;
    };
    templates: typeof templatesRead;
};
export default nouns;
