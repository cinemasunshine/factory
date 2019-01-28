/**
 * 上映イベントインターフェーステスト
 */
import * as assert from 'assert';

import * as ScreeningEventFactory from './screeningEvent';

describe('上映イベントID作成', () => {
    it('文字列を作成できるはず', () => {
        const id = ScreeningEventFactory.createIdentifierFromCOA({
            theaterCode: '001',
            titleCode: '00001',
            titleBranchNum: '01',
            dateJouei: '20190101',
            screenCode: '01',
            timeBegin: '0101'
        });
        assert(typeof id, 'string');
    });
});
