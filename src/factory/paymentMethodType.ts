/**
 * 決済方法タイプ
 */
enum PaymentMethodType {
    /**
     * 現金
     */
    Cash = 'Cash',
    /**
     * 口座決済
     * @deprecated Use PaymentMethodType.Account
     */
    Pecorino = 'Account',
    /**
     * 口座決済
     */
    Account = 'Account',
    /**
     * 電子マネー
     */
    EMoney = 'EMoney',
    /**
     * クレジットカード決済
     */
    CreditCard = 'CreditCard',
    /**
     * ムビチケ
     */
    MovieTicket = 'MovieTicket'
}

export default PaymentMethodType;
