import { quantitativeValue } from '@cinerino/factory';

import { UnitCode } from './unitCode';

/**
 * 定量値インターフェース
 */
export type IQuantitativeValue<T extends UnitCode> = quantitativeValue.IQuantitativeValue<T>;
