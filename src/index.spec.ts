/**
 * indexテスト
 */
import * as assert from 'assert';

import * as factory from './index';

describe('factory.errors', () => {
    it('errorsをオブジェクトとしてインポートできるはず', () => {
        assert.equal(typeof factory.errors, 'object');
    });
});
