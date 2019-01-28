/**
 * task name
 * タスク名
 */

enum TaskName {
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * ムビチケ承認アクション取消
     */
    CancelMvtk = 'cancelMvtk',
    /**
     * 口座承認アクション取消
     */
    CancelAccount = 'cancelAccount',
    /**
     * ポイントインセンティブ承認アクション取消
     */
    CancelPecorinoAward = 'cancelPecorinoAward',
    /**
     * 上映イベント在庫仕入れ
     */
    ImportScreeningEvents = 'importScreeningEvents',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * ムビチケ使用
     */
    UseMvtk = 'useMvtk',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * ポイントインセンティブ返却
     */
    ReturnPecorinoAward = 'returnPecorinoAward',
    /**
     * 口座支払
     */
    PayAccount = 'payAccount',
    /**
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * 口座返金
     */
    RefundAccount = 'refundAccount',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * ポイントインセンティブ付与
     */
    GivePecorinoAward = 'givePecorinoAward',
    /**
     * 会員プログラム登録
     */
    RegisterProgramMembership = 'registerProgramMembership',
    /**
     * 会員プログラム登録解除
     */
    UnRegisterProgramMembership = 'unRegisterProgramMembership',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook'
}

export default TaskName;
