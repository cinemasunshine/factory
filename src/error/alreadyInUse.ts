import * as util from 'util';

import SSKTSFactoryError from '../error';
import ErrorCode from '../errorCode';

/**
 * AlreadyInUseError
 *
 * @class AlreadyInUseError
 * @extends {SSKTSFactoryError}
 */
export default class AlreadyInUseError extends SSKTSFactoryError {
    public readonly entityName: string;
    public readonly fieldNames: string[];

    constructor(entityName: string, fieldNames: string[], message?: string) {
        if (message === undefined || message.length === 0) {
            message = util.format('The specified \'%s\' value is already in use for: %s', entityName, fieldNames.join(', '));
        }

        super(ErrorCode.AlreadyInUse, message);

        this.entityName = entityName;
        this.fieldNames = fieldNames;

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AlreadyInUseError.prototype);
    }
}
