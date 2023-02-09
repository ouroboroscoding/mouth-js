/**
 * Mouth Nouns
 *
 * Handles rest data requests related to mouth service
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @created 2023-01-17
 */
// Ouroboros modules
import { rest } from '@ouroboros/body';
import events from '@ouroboros/events';
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
function localeCreate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Make the REST request
        rest.create('mouth', 'locale', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function localeDelete(_id) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Make the REST request
        rest.delete('mouth', 'locale', { _id }).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function localeRead(_id) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Generate the data
        const oData = {};
        if (_id !== undefined) {
            oData._id = _id;
        }
        // Make the REST request
        rest.read('mouth', 'locale', oData).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function localeUpdate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Make the REST request
        rest.update('mouth', 'locale', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateCreate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.create('mouth', 'template', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateContentsRead(template) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.read('mouth', 'template/contents', { template }).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateDelete(_id) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.delete('mouth', 'template', { _id }).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateEmailCreate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.create('mouth', 'template/email', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateEmailGenerate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.create('mouth', 'template/email/generate', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateEmailUpdate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.update('mouth', 'template/email', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateSmsCreate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.create('mouth', 'template/sms', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateSmsGenerate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.create('mouth', 'template/sms/generate', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateSmsUpdate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.update('mouth', 'template/sms', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
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
function templateUpdate(data) {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.update('mouth', 'template', data).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
/**
 * Templates read
 *
 * Returns all templates in the service
 *
 * @name templatesRead
 * @access private
 * @returns a promise with the results of the request
 */
function templatesRead() {
    // Create a new Promise and return it
    return new Promise((resolve, reject) => {
        // Call the REST request
        rest.read('mouth', 'templates', {}).done((res) => {
            // If there's an error
            if (res.error && !res._handled) {
                // If we have no reject, or we do and it returns false
                if (!reject || reject(res.error) === false) {
                    events.trigger('error', rest.errorMessage(res.error));
                }
            }
            // If there's a warning
            if (res.warning) {
                events.trigger('warning', res.warning);
            }
            // If there's data
            if ('data' in res) {
                resolve(res.data);
            }
        });
    });
}
// Default export
const nouns = {
    locale: {
        create: localeCreate,
        delete: localeDelete,
        read: localeRead,
        update: localeUpdate
    },
    template: {
        create: templateCreate,
        contents: templateContentsRead,
        delete: templateDelete,
        email: {
            create: templateEmailCreate,
            generate: templateEmailGenerate,
            update: templateEmailUpdate
        },
        sms: {
            create: templateSmsCreate,
            generate: templateSmsGenerate,
            update: templateSmsUpdate
        },
        update: templateUpdate
    },
    templates: templatesRead
};
export default nouns;
