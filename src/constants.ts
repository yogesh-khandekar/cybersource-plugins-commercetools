export abstract class Constants {
  //Constant values
  static readonly DEFAULT_PAYMENT_GATEWAY_LIMIT_SAVED_CARD_RATE = 10;
  static readonly DEFAULT_PAYMENT_GATEWAY_SAVED_CARD_LIMIT_FRAME = 1;

  //function name
  static readonly GET_AUTH_REVERSAL = 'getAuthReversal';
  static readonly GET_CAPTURE = 'getCapture';
  static readonly GET_DECISION_SYNC = 'getDecisionSync';
  static readonly GET_ORDERS = 'getOrders';
  static readonly GET_REFUND = 'getRefund';
  static readonly GET_PAYMENT_DETAILS = 'getPaymentDetails';
  static readonly POST_CONFIGURE_PLUGIN = 'postconfigurePlugin';
  static readonly POST_CUSTOMER_UPDATE = 'postCustomerUpdate';
  static readonly POST_PAYMENT_CREATE = 'postPaymentCreate';
  static readonly POST_PAYMENT_UPDATE = 'postPaymentUpdate';

  static readonly FUNC_ADD_CARD_HANDLER = 'FuncAddCardHandler';
  static readonly FUNC_ADD_CUSTOM_FIELD = 'FuncAddCustomField';
  static readonly FUNC_ADD_CUSTOM_TYPES = 'FuncAddCustomTypes';
  static readonly FUNC_ADD_TOKEN_RESPONSE = 'FuncAddTokenResponse';
  static readonly FUNC_ADD_TRANSACTION = 'FuncAddTransaction';
  static readonly FUNC_ADD_EXTENSIONS = 'FuncAddExtensions';
  static readonly FUNC_APPLE_PAY_SESSION_HANDLER = 'FuncApplePaySessionHandler';
  static readonly FUNC_AUTHORIZATION_HANDLER = 'FuncAuthorizationHandler';
  static readonly FUNC_AUTHORIZATION_RESPONSE = 'FuncAuthorizationResponse';
  static readonly FUNC_AUTH_REVERSAL_RESPONSE = 'FuncAuthReversalResponse';
  static readonly FUNC_CAPTURE_RESPONSE = 'FuncCaptureResponse';
  static readonly FUNC_CHANGE_STATE = 'FuncChangeState ';
  static readonly FUNC_CHECK_AUTH_REVERSAL_TRIGGERED = 'FuncCheckAuthReversalTriggered';
  static readonly FUNC_CLICK_TO_PAY = 'FuncClickToPayResponse';
  static readonly FUNC_CONVERSION_DETAILS = 'FuncConversionDetails';
  static readonly FUNC_CREATE_RESPONSE = 'FuncCreateResponse';
  static readonly FUNC_DECRYPTION = 'FuncDecryption';
  static readonly FUNC_DELETE_CARD_HANDLER = 'FuncDeleteCardHandler';
  static readonly FUNC_DELETE_CUSTOMER_TOKEN = 'FuncDeleteCustomerToken';
  static readonly FUNC_ENCRYPTION = 'FuncEncryption';
  static readonly FUNC_FAILURE_RESPONSE = 'FuncFailureResponse';
  static readonly FUNC_FIELD_MAPPER = 'FuncFieldMapper';
  static readonly FUNC_FIELD_MAPPER_NULL = 'FuncFieldMapperNull';
  static readonly FUNC_GET_APPLICATIONS_PRESENT = 'FuncGetApplicationsPresent';
  static readonly FUNC_GET_AUTH_RESPONSE = 'FuncGetAuthResponse';
  static readonly FUNC_GET_CAPTURED_AMOUNT = 'FuncGetCapturedAmount';
  static readonly FUNC_GET_CARD_TOKENS = 'FuncGetCardTokens';
  static readonly FUNC_GET_CREDIT_CARD_RESPONSE = 'FuncGetCreditCardResponse';
  static readonly FUNC_GET_CART_DETAILS_BY_PAYMENT_ID = 'FuncGetCartDetailsByPaymentId';
  static readonly FUNC_GET_CLIENT = 'FuncGetClient';
  static readonly FUNC_GET_CUSTOMER = 'FuncGetCustomer';
  static readonly FUNC_GET_ORDERS = 'FuncGetOrders';
  static readonly FUNC_GET_PAYER_AUTH_REVERSAL_HANDLER = 'FuncGetPayerAuthReversalHandler';
  static readonly FUNC_GET_PAYER_AUTH_ENROLL_RESPONSE = 'FuncGetPayerAuthEnrollResponse';
  static readonly FUNC_GET_PAYER_AUTH_SETUP_RESPONSE = 'FuncGetPayerAuthSetUpResponse';
  static readonly FUNC_GET_PAYER_AUTH_VALIDATE_RESPONSE = 'FuncGetPayerAuthValidateResponse';
  static readonly FUNC_GET_TRANSACTION_SEARCH_RESPONSE = 'FuncGetTransactionSearchResponse';
  static readonly FUNC_GET_SERVICE_RESPONSE = 'FuncGetOMServiceResponse';
  static readonly FUNC_GET_UPDATE_TOKEN_ACTIONS = 'FuncGetUpdateTokenActions';
  static readonly FUNC_GET_VISA_CHECKOUT_DATA = 'FuncGetVisaCheckoutData';
  static readonly FUNC_GOOGLE_PAY_RESPONSE = 'FuncGooglePayResponse';
  static readonly FUNC_KEYS = 'FuncKeys';
  static readonly FUNC_PAYER_AUTH_ACTIONS = 'FuncPayerAuthActions';
  static readonly FUNC_PAYER_AUTH_SETUP_RESPONSE = 'FuncPayerAuthSetupResponse';
  static readonly FUNC_PAYER_ENROLL_ACTIONS = 'FuncPayerEnrollActions';
  static readonly FUNC_ORDER_MANAGEMENT_HANDLER = 'FuncOrderManagementHandler';
  static readonly FUNC_REFUND_RESPONSE = 'FuncRefundResponse';
  static readonly FUNC_REPORT_HANDLER = 'FuncReportHandler';
  static readonly FUNC_RETRIEVE_CART_BY_ANONYMOUS_ID = 'FuncRetrieveCartByAnonymousId';
  static readonly FUNC_RETRIEVE_CART_BY_CUSTOMER_ID = 'FuncRetrieveCartByCustomerId';
  static readonly FUNC_RETRIEVE_CART_BY_PAYMENT_ID = 'FuncRetrieveCartByPaymentId';
  static readonly FUNC_RETRIEVE_ORDER_BY_CART_ID = 'FuncRetrieveOrderByCartId';
  static readonly FUNC_RETRIEVE_ORDER_BY_PAYMENT_ID = 'FuncRetrieveOrderByPaymentId';
  static readonly FUNC_RETRIEVE_PAYMENT = 'FuncRetrievePayment';
  static readonly FUNC_RUN_SYNC_ADD_TRANSACTION = 'FuncRunSyncAddTransaction';
  static readonly FUNC_SET_CUSTOMER_TOKEN_DATA = 'FuncSetCustomerTokenData';
  static readonly FUNC_SET_CUSTOMER_TOKENS = 'FuncSetCustomerTokens';
  static readonly FUNC_SET_CUSTOM_TYPE = 'FuncSetCustomType';
  static readonly FUNC_SET_TRANSACTION_ID = 'FuncSetTransactionId';
  static readonly FUNC_SYNC_HANDLER = 'FuncSyncHandler';
  static readonly FUNC_UPDATE_CART_BY_PAYMENT_ID = 'FuncUpdateCartByPaymentId';
  static readonly FUNC_UPDATE_CARD_HANDLER = 'FuncUpdateCardHandler';
  static readonly FUNC_UPDATE_CUSTOM_FIELDS = 'FuncUpdateCustomField';
  static readonly FUNC_UPDATE_DECISION_SYNC = 'FuncUpdateDecisionSync';
  static readonly FUNC_UPDATE_TOKEN_RESPONSE = 'FuncUpdateTokenResponse';
  static readonly FUNC_UPDATE_SYNC = 'FuncUpdateSync';
  static readonly FUNC_SYNC_ADD_TRANSACTION = 'FuncSyncAddTransaction';
  static readonly FUNC_SYNC_VISA_CARD_DETAILS = 'FuncSyncVisaCardDetails';
  static readonly FUNC_UPDATE_VISA_DETAILS = 'FuncUpdateVisaDetails';
  static readonly FUNC_VISA_CARD_DETAILS_ACTION = 'FuncVisaCardDetailsAction';

  //Numbers
  static readonly VAL_NEGATIVE_ONE = -1;
  static readonly VAL_ZERO = 0;
  static readonly VAL_FLOAT_ZERO = 0.0;
  static readonly VAL_ONE = 1;
  static readonly VAL_TWO = 2;
  static readonly VAL_TWELVE = 12;
  static readonly VAL_TWENTY_THREE = 23;
  static readonly VAL_THIRTY_SIX = 36;
  static readonly VAL_FIFTY = 50;
  static readonly VAL_FIFTY_NINE = 59;
  static readonly VAL_HUNDRED = 100;
  static readonly VAL_FOUR_HUNDRED_AND_ONE = 401;
  static readonly VAL_FOUR_SEVENTY_FIVE = 475;
  static readonly VAL_FOUR_EIGHTY = 480;
  static readonly VAL_FOUR_EIGHTY_ONE = 481;

  //Payments data
  static readonly PAYMENT_GATEWAY_TEST_ENVIRONMENT = 'apitest.cybersource.com';
  static readonly PAYMENT_GATEWAY_PRODUCTION_ENVIRONMENT = 'api.cybersource.com';
  static readonly TEST_ENVIRONMENT = 'TEST';
  static readonly LIVE_ENVIRONMENT = 'PRODUCTION';
  static readonly PAYMENT_GATEWAY_APPLE_PAY_DESCRIPTOR = 'RklEPUVNVi5QQVlNRU5ULkFQSQ==';
  static readonly PAYMENT_GATEWAY_APPLE_PAY_ENCODING = 'Base64';
  static readonly PAYMENT_GATEWAY_APPLE_PAY_INITIATIVE = 'web';
  static readonly PAYMENT_GATEWAY_APPLE_PAY_PAYMENT_SOLUTION = '001';
  static readonly PAYMENT_GATEWAY_AUTHENTICATION_TYPE = 'http_signature';
  static readonly PAYMENT_GATEWAY_CLICK_TO_PAY_PAYMENT_SOLUTION = 'visaCheckout';
  static readonly PAYMENT_GATEWAY_CLIENT_REFERENCE_CODE = 'clientReferenceInformation.code:';
  static readonly PAYMENT_GATEWAY_CONSUMER_AUTHENTICATION = 'CONSUMER_AUTHENTICATION';
  static readonly PAYMENT_GATEWAY_DECISION_SKIP = 'DECISION_SKIP';
  static readonly PAYMENT_GATEWAY_E_CHECK_PAYMENT_TYPE = 'CHECK';
  static readonly PAYMENT_GATEWAY_ENCRYPTION_TYPE = 'RsaOaep';
  static readonly PAYMENT_GATEWAY_GOOGLE_PAY_PAYMENT_SOLUTION = '012';
  static readonly PAYMENT_GATEWAY_JWT_FORMAT = 'JWT';
  static readonly PAYMENT_GATEWAY_PARTNER_SOLUTION_ID = 'YBBY8SIG';
  static readonly PAYMENT_GATEWAY_PAYER_AUTH_CHALLENGE_CODE = '04';
  static readonly PAYMENT_GATEWAY_TOKEN_ACTION_TYPES = 'customer,paymentInstrument,instrumentIdentifier';
  static readonly PAYMENT_GATEWAY_TOKEN_ACTION_TYPES_CUSTOMER_EXISTS = 'paymentInstrument,instrumentIdentifier';
  static readonly PAYMENT_GATEWAY_TOKEN_CREATE = 'TOKEN_CREATE';
  static readonly PAYMENT_GATEWAY_ACS_WINDOW_SIZE = '01';
  static readonly PAYMENT_GATEWAY_VALIDATE_CONSUMER_AUTHENTICATION = 'VALIDATE_CONSUMER_AUTHENTICATION';

  static readonly HTTP_METHOD_GET = 'GET';
  static readonly HTTP_METHOD_POST = 'POST';

  //Payment status codes
  static readonly HTTP_CODE_TWO_HUNDRED = 200;
  static readonly HTTP_CODE_TWO_HUNDRED_ONE = 201;
  static readonly HTTP_CODE_TWO_HUNDRED_FOUR = 204;
  static readonly HTTP_CODE_FOUR_HUNDRED = 400;

  //Payment response
  static readonly API_STATUS_AUTHORIZED = 'AUTHORIZED';
  static readonly API_STATUS_AUTHORIZED_RISK_DECLINED = 'AUTHORIZED_RISK_DECLINED';
  static readonly API_STATUS_COMPLETED = 'COMPLETED';
  static readonly API_STATUS_CUSTOMER_AUTHENTICATION_REQUIRED = 'CUSTOMER_AUTHENTICATION_REQUIRED';
  static readonly API_STATUS_PENDING = 'PENDING';
  static readonly API_STATUS_AUTHORIZED_PENDING_REVIEW = 'AUTHORIZED_PENDING_REVIEW';
  static readonly API_STATUS_PENDING_AUTHENTICATION = 'PENDING_AUTHENTICATION';
  static readonly API_STATUS_PENDING_REVIEW = 'PENDING_REVIEW';
  static readonly API_STATUS_REVERSED = 'REVERSED';
  static readonly HTTP_STATUS_DECISION_ACCEPT = 'ACCEPT';
  static readonly HTTP_STATUS_DECISION_REJECT = 'REJECT';
  static readonly APPLICATION_RCODE = 1;
  static readonly APPLICATION_RFLAG = 'SOK';
  //Regex
  static readonly CLICK_TO_PAY_CARD_MASK = 'XXXXXX';
  static readonly DOMAIN_REGEX = /^[^:/.]*[:/]+/i;
  static readonly REGEX_DOUBLE_SLASH = '//';
  static readonly REGEX_DOT = '.';
  static readonly REGEX_HYPHEN = '-';
  static readonly STRING_EMPTY = '';
  static readonly STRING_FULLCOLON = ':';
  static readonly STRING_HYPHEN = ' - ';
  static readonly STRING_EMPTY_SPACE = ' ';

  //Payment methods
  static readonly CREDIT_CARD = 'creditCard';
  static readonly CC_PAYER_AUTHENTICATION = 'creditCardWithPayerAuthentication';
  static readonly CLICK_TO_PAY = 'clickToPay';
  static readonly APPLE_PAY = 'applePay';
  static readonly ECHECK = 'eCheck';
  static readonly GOOGLE_PAY = 'googlePay';

  //Strings
  static readonly ACTIVE_CART_STATE = 'cartState="Active"';
  static readonly ANONYMOUS_ID = 'anonymousId';
  static readonly AUTHENTICATION_SCHEME_BASIC = 'Basic';
  static readonly AUTHENTICATION_SCHEME_BEARER = 'Bearer';
  static readonly CUSTOMER_ID = 'customerId';
  static readonly DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]';
  static readonly DESC_ORDER = 'desc';
  static readonly LAST_MODIFIED_AT = 'lastModifiedAt';
  static readonly PAYMENT_INSTRUMENT = 'paymentInstrument';
  static readonly REFUND_ID = 'refundId';
  static readonly REFUND_AMOUNT = 'refundAmount';
  static readonly SHIPPING_AND_HANDLING = 'shipping_and_handling';
  static readonly SHIPPING_INFO = 'shippingInfo';
  static readonly STRING_AMOUNT_PLANNED = 'amountPlanned';
  static readonly STRING_AND = ' AND ';
  static readonly STRING_BODY = 'body';
  static readonly STRING_BILLING_ADDRESS = 'billingAddress';
  static readonly STRING_CARD = 'card';
  static readonly STRING_CARD_EXPIRY_MONTH = 'cardExpiryMonth';
  static readonly STRING_CARD_EXPIRY_YEAR = 'cardExpiryYear';
  static readonly STRING_CART_STATE = 'Active';
  static readonly STATUS_CODE = 'statusCode';
  static readonly STRING_CONSUMER_AUTHENTICATION = 'consumerAuthenticationInformation';
  static readonly STRING_CUSTOM = 'custom';
  static readonly STRING_CUSTOMER = 'customer';
  static readonly STRING_DATA = 'data';
  static readonly STRING_DELETE = 'delete';
  static readonly STRING_DUPLICATE_FIELD = 'DuplicateField';
  static readonly STRING_EMAIL = 'email';
  static readonly STRING_ENROLL_CHECK = 'enrollCheck';
  static readonly STRING_ERRORS = 'errors';
  static readonly STRING_EXPIRATION_MONTH = 'expirationMonth';
  static readonly STRING_EXPIRATION_YEAR = 'expirationYear';
  static readonly STRING_FALSE = 'false';
  static readonly STRING_FIELDS = 'fields';
  static readonly STRING_FLAG = 'flag';
  static readonly STRING_GOOGLE = 'google';
  static readonly STRING_HOURS = 'hours';
  static readonly STRING_ID = 'id';
  static readonly STRING_MOTO = 'MOTO';
  static readonly STRING_OBJ = 'obj';
  static readonly STRING_ORDER_NUMBER = 'orderNumber';
  static readonly STRING_PAYMENT_TOKEN = 'paymentToken';
  static readonly STRING_PREFIX = 'prefix';
  static readonly STRING_QUERY = 'query';
  static readonly STRING_REASON = 'reason';
  static readonly STRING_RESOURCE = 'resource';
  static readonly STRING_RESPONSE = 'response';
  static readonly STRING_RESPONSE_STATUS = 'status';
  static readonly STRING_RESULTS = 'results';
  static readonly STRING_SUCCESS = 'success';
  static readonly STRING_SUFFIX = 'suffix';
  static readonly STRING_SYNC_AUTH_NAME = 'ics_auth';
  static readonly STRING_SYNC_AUTH_REVERSAL_NAME = 'ics_auth_reversal';
  static readonly STRING_SYNC_CAPTURE_NAME = 'ics_bill';
  static readonly STRING_SYNC_DECISION_NAME = 'ics_decision';
  static readonly STRING_SYNC_ECHECK_DEBIT_NAME = 'ics_ecp_debit';
  static readonly STRING_SYNC_QUERY = 'submitTimeUtc:[NOW/DAY-1DAY TO NOW/HOUR+1HOUR}';
  static readonly STRING_SYNC_REFUND_NAME = 'ics_credit';
  static readonly STRING_SYNC_SORT = 'submitTimeUtc:desc';
  static readonly STRING_TRANSACTIONS = 'transactions';
  static readonly STRING_TRUE = 'true';
  static readonly STRING_TEXT = 'text';
  static readonly STRING_UPDATE = 'update';
  static readonly STRING_UPDATED = 'updated';
  static readonly STRING_VALUE = 'value';
  static readonly STRING_VISA = 'visa';
  static readonly STRING_WWW_AUTHENTICATE = 'WWW-Authenticate';

  static readonly ASCII = 'ascii';
  static readonly CARD_FIELD_GROUP = 'cardFieldGroup';
  static readonly ENCODING_BASE_SIXTY_FOUR = 'base64';
  static readonly ERROR_INFORMATION = 'errorInformation';
  static readonly HEADER_ENCRYPTION_ALGORITHM = 'aes-256-gcm';
  static readonly HEX = 'hex';
  static readonly LOG_DEBUG = 'debug';
  static readonly LOG_ERROR = 'error';
  static readonly LOG_INFO = 'info';
  static readonly TOKEN_INFORMATION = 'tokenInformation';
  static readonly UNICODE_ENCODING_SYSTEM = 'utf8'
  static readonly VALIDATION = 'validation';
  static readonly VALIDATION_CALLBACK = 'validationCallback';
  static readonly STRING_DISCOUNTED_PRICE_PER_QUANTITY = 'discountedPricePerQuantity';
  static readonly STRING_DISCOUNTED = 'discounted';
  static readonly STRING_TAX_RATE = 'taxRate';
  static readonly STRING_CUSTOM_LINE_ITEMS = 'customLineItems';
  static readonly STRING_DISCOUNTED_PRICE = 'discountedPrice';
  static readonly STRING_INCLUDED_DISCOUNTS = 'includedDiscounts';
  static readonly STRING_LOCALE = 'locale';

  //CT transaction type
  static readonly CT_TRANSACTION_TYPE_AUTHORIZATION = 'Authorization';
  static readonly CT_TRANSACTION_TYPE_CANCEL_AUTHORIZATION = 'CancelAuthorization';
  static readonly CT_TRANSACTION_TYPE_CHARGE = 'Charge';
  static readonly CT_TRANSACTION_TYPE_REFUND = 'Refund';

  //CT transaction state
  static readonly CT_TRANSACTION_STATE_FAILURE = 'Failure';
  static readonly CT_TRANSACTION_STATE_INITIAL = 'Initial';
  static readonly CT_TRANSACTION_STATE_PENDING = 'Pending';
  static readonly CT_TRANSACTION_STATE_SUCCESS = 'Success';

  //CT custom fields
  static readonly ADD_FIELD_DEFINITION = 'addFieldDefinition';
  static readonly ADD_INTERFACE_INTERACTION = 'addInterfaceInteraction';
  static readonly ADD_TRANSACTION = 'addTransaction';
  static readonly CHANGE_TRANSACTION_INTERACTION_ID = 'changeTransactionInteractionId';
  static readonly CHANGE_TRANSACTION_STATE = 'changeTransactionState';
  static readonly CUSTOMER_UPDATE_KEY = 'isv_customer_update_extension';
  static readonly INVALID_OPERATION = 'InvalidOperation';
  static readonly INVALID_INPUT = 'InvalidInput';
  static readonly ISV_ACCEPT_HEADER = 'isv_acceptHeader';
  static readonly ISV_ADDRESS_ID = 'isv_addressId';
  static readonly ISV_APPLE_PAY_DISPLAY_NAME = 'isv_applePayDisplayName';
  static readonly ISV_APPLE_PAY_VALIDATION_URL = 'isv_applePayValidationUrl';
  static readonly ISV_ACS_URL = 'isv_payerAuthenticationAcsUrl';
  static readonly ISV_CARDINAL_REFERENCE_ID = 'isv_cardinalReferenceId';
  static readonly ISV_CAPTURE_CONTEXT_SIGNATURE = 'isv_tokenCaptureContextSignature';
  static readonly ISV_CARD_EXPIRY_MONTH = 'isv_cardExpiryMonth';
  static readonly ISV_CARD_EXPIRY_YEAR = 'isv_cardExpiryYear';
  static readonly ISV_CARD_TYPE = 'isv_cardType';
  static readonly ISV_DEVICE_FINGERPRINT_ID = 'isv_deviceFingerprintId';
  static readonly ISV_ENABLED_MOTO = 'isv_enabledMoto';
  static readonly ISV_ENROLMENT_CHECK = 'isv_payments_payer_authentication_enrolment_check';
  static readonly ISV_FAILED_TOKENS = 'isv_failedTokens';
  static readonly ISV_IP_ADDRESS = 'isv_customerIpAddress';
  static readonly ISV_MASKED_PAN = 'isv_maskedPan';
  static readonly ISV_PAREQ = 'isv_payerAuthenticationPaReq';
  static readonly ISV_PAYMENT_APPLE_PAY_SESSION_DATA = 'isv_applePaySessionData';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_HTTP_CODE = 'isv_payerEnrollHttpCode';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_TRANSACTION_ID = 'isv_payerEnrollTransactionId';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_STATUS = 'isv_payerEnrollStatus';
  static readonly ISV_PAYER_AUTHENTICATION_REQUIRED = 'isv_payerAuthenticationRequired';
  static readonly ISV_PAYER_AUTHENTICATION_TRANSACTION_ID = 'isv_payerAuthenticationTransactionId';
  static readonly ISV_PAYER_AUTHENTICATION_VALIDATE_RESULT = 'isv_payments_payer_authentication_validate_result';
  static readonly ISV_PAYMENTS_CUSTOMER_TOKENS = 'isv_payments_customer_tokens';
  static readonly ISV_PAYMENT_FAILURE = 'isv_payment_failure';
  static readonly ISV_RESPONSE_JWT = 'isv_responseJwt';
  static readonly ISV_SALE_ENABLED = 'isv_saleEnabled';
  static readonly ISV_SAVED_TOKEN = 'isv_savedToken';
  static readonly ISV_STEPUP_URL = 'isv_stepUpUrl';
  static readonly ISV_TOKEN = 'isv_token';
  static readonly ISV_TOKEN_ALIAS = 'isv_tokenAlias';
  static readonly ISV_TOKEN_VERIFICATION_CONTEXT = 'isv_tokenVerificationContext';
  static readonly ISV_TOKENS = 'isv_tokens';
  static readonly ISV_USER_AGENT_HEADER = 'isv_userAgentHeader';
  static readonly ISV_WALLET_TYPE = 'isv_walletType';
  static readonly PAYMENT_CREATE_KEY = 'isv_payment_create_extension';
  static readonly PAYMENT_UPDATE_KEY = 'isv_payment_update_extension';
  static readonly SEC_CODE_TEL = 'TEL';
  static readonly SEC_CODE_WEB = 'WEB';
  static readonly SET_BILLING_ADDRESS = 'setBillingAddress';
  static readonly SET_CUSTOM_FIELD = 'setCustomField';
  static readonly SET_CUSTOM_TYPE = 'setCustomType';
  static readonly SET_SHIPPING_ADDRESS = 'setShippingAddress';
  static readonly TYPE_ID_TYPE = 'type';

  //Success messages
  static readonly SUCCESS_MSG_CAPTURE_SERVICE = 'Capture is completed successfully';
  static readonly SUCCESS_MSG_CARD_TOKENS_UPDATE = 'Successfully updated card tokens';
  static readonly SUCCESS_MSG_DECISION_SYNC_SERVICE = 'Successfully completed Decision sync';
  static readonly SUCCESS_MSG_REFUND_SERVICE = 'Refund is completed successfully';
  static readonly SUCCESS_MSG_REVERSAL_SERVICE = 'Authorization reversal is completed successfully';
  static readonly SUCCESS_MSG_SYNC_SERVICE = 'Successfully updated payment details';
  static readonly SUCCESS_MSG_SCRIPT_PLUGIN = 'Successfully executed the script';
  static readonly SUCCESS_MSG_UPDATE_CLICK_TO_PAY_CARD_DETAILS = 'Updated click to pay card details successfully';

  //Exception messages
  static readonly EXCEPTION_MSG_ADD_EXTENSION = 'An exception occurred while adding extension to Commercetools';
  static readonly EXCEPTION_MSG_ADD_TRANSACTION = 'An exception occurred while adding transaction to the payment';
  static readonly EXCEPTION_MSG_AUTHORIZING_PAYMENT = 'An exception occurred while authorizing the payment';
  static readonly EXCEPTION_MSG_CART_UPDATE = 'An exception occurred while updating the cart';
  static readonly EXCEPTION_MSG_CART_DETAILS = 'An exception occurred while fetching cart details';
  static readonly EXCEPTION_MSG_COMMERCETOOLS_CONNECT = 'An exception occurred while connecting to commercetools';
  static readonly EXCEPTION_MSG_CONVERSION_DETAILS = 'An exception occurred while fetching conversion details';
  static readonly EXCEPTION_MSG_CUSTOM_TYPE = 'An exception occurred while adding custom type to Commercetools';
  static readonly EXCEPTION_MSG_CUSTOMER_UPDATE = 'An exception occurred while updating card tokens to customer';
  static readonly EXCEPTION_MSG_DECISION_SYNC = 'An exception occurred while fetching conversion detail report';
  static readonly EXCEPTION_MSG_FETCH_PAYMENT_DETAILS = 'An exception occurred while fetching payment details';
  static readonly EXCEPTION_MSG_FETCH_ORDER_DETAILS = 'An exception occurred while fetching order details';
  static readonly EXCEPTION_MSG_PAYER_AUTH = 'An exception occurred while authenticating the payment';
  static readonly EXCEPTION_MSG_SERVICE_PROCESS = 'An exception occurred while processing your payment';
  static readonly EXCEPTION_MSG_SYNC_DETAILS = 'An exception occurred while fetching sync conversion details';

  //Error messges
  static readonly ERROR_MSG_ADD_TRANSACTION_DETAILS = 'There was an error while adding transaction details, please try again';
  static readonly ERROR_MSG_APPLICATION_DETAILS = 'Unable to fetch transaction application details';
  static readonly ERROR_MSG_APPLE_PAY_CERTIFICATES = 'Please provide certificates paths for Apple Pay in configuration file';
  static readonly ERROR_MSG_EMPTY_PAYMENT_DATA = 'There was an error while fetching payment details';
  static readonly ERROR_MSG_EMPTY_TRANSACTION_DETAILS = 'There was an error while fetching transaction details, please try again';
  static readonly ERROR_MSG_ENABLE_SYNC = 'Please enable Run sync';
  static readonly ERROR_MSG_CART_DETAILS = 'Unable to fetch cart details';
  static readonly ERROR_MSG_CART_LOCALE = 'There is no locale set for the cart';
  static readonly ERROR_MSG_CAPTURE_FAILURE = 'Cannot process the capture as there are no transaction id available';
  static readonly ERROR_MSG_CAPTURE_SERVICE = 'Error in triggering capture service, please try again';
  static readonly ERROR_MSG_CANNOT_PROCESS = 'Unable to process your transaction, please try again';
  static readonly ERROR_MSG_CLICK_TO_PAY_DATA = 'There was an error while fetching click to pay data';
  static readonly ERROR_MSG_COMMERCETOOLS_CONNECT = 'There was an error connecting to Commercetools';
  static readonly ERROR_MSG_CREATE_CUSTOM_TYPE = 'There was an error creating custom type';
  static readonly ERROR_MSG_CUSTOMER_DETAILS = 'Unable to fetch customer details';
  static readonly ERROR_MSG_EMPTY_CART = 'There is no cart available for the payment';
  static readonly ERROR_MSG_EMPTY_CUSTOM_FIELDS = 'There was an error processing your request';
  static readonly ERROR_MSG_ENABLE_DECISION_SYNC = 'Please enable Decision sync';
  static readonly ERROR_MSG_CREATE_EXTENSION = 'There was an error creating extension';
  static readonly ERROR_MSG_FETCH_TRANSACTIONS = 'Unable to fetch transactions details';
  static readonly ERROR_MSG_FLEX_TOKEN_KEYS = 'Failed to generate one time key for Flex token';
  static readonly ERROR_MSG_INVALID_CUSTOMER_INPUT = 'Cannot delete the token due to invalid input';
  static readonly ERROR_MSG_INVALID_AUTHENTICATION_CREDENTIALS = 'Invalid Authentication Credentials';
  static readonly ERROR_MSG_INVALID_OPERATION = 'Cannot process the payment due to invalid operation';
  static readonly ERROR_MSG_INVALID_INPUT = 'Cannot process the payment due to invalid input';
  static readonly ERROR_MSG_MISSING_AUTHORIZATION_HEADER = 'Missing Authorization Header';
  static readonly ERROR_MSG_NO_CARD_DETAILS = 'There are no card details available for the payment';
  static readonly ERROR_MSG_NO_ORDER_DETAILS = 'Unable to retrieve order details, please try again';
  static readonly ERROR_MSG_NO_PAYMENT_METHODS = 'There are no payment method available for the payment';
  static readonly ERROR_MSG_NO_SYNC_DETAILS = 'There were no payment details found to update';
  static readonly ERROR_MSG_NO_TOKENS = 'There are no tokens to update';
  static readonly ERROR_MSG_NO_TRANSACTION = 'There are no transactions created for the payment';
  static readonly ERROR_MSG_PAYMENT_DETAILS = 'Unable to fetch payment details';
  static readonly ERROR_MSG_RATE_LIMITER = 'Please provide card count and hours for rate limiter';
  static readonly ERROR_MSG_REFUND_EXCEEDS_CAPTURE_AMOUNT = 'Cannot perform refund as the entered amount exceeds captured amount';
  static readonly ERROR_MSG_REFUND_FAILURE = 'Cannot process refund as there are no transaction id available';
  static readonly ERROR_MSG_REFUND_GREATER_THAN_ZERO = 'Refund amount should be greater than zero';
  static readonly ERROR_MSG_REFUND_SERVICE = 'Error in triggering refund service, please try again';
  static readonly ERROR_MSG_REFUND_AMOUNT = 'Refund amount must be a number and should be greater than zero';
  static readonly ERROR_MSG_RETRIEVE_PAYMENT_DETAILS = 'Unable to retrieve payment details';
  static readonly ERROR_MSG_REVERSAL_FAILURE = 'Cannot process authorization reversal as there are no transaction id available';
  static readonly ERROR_MSG_REVERSAL_SERVICE = 'Error in triggering authorization reversal service';
  static readonly ERROR_MSG_SERVICE_PROCESS = 'Unable to process your request';
  static readonly ERROR_MSG_SYNC_PAYMENT_DETAILS = 'An error occurred while trying to sync the payments details';
  static readonly ERROR_MSG_TOKEN_UPDATE = 'Failed to update card tokens';
  static readonly ERROR_MSG_UPDATE_CART = 'Unable to update the cart';
  static readonly ERROR_MSG_UPDATE_CUSTOM_TYPE = 'There was an error updating custom type';
  static readonly ERROR_MSG_UPDATE_CLICK_TO_PAY_DATA = 'Unable to update click to pay card details';

  //script data
  static readonly PAYMENT_CREATE_DESTINATION_URL = '/api/extension/payment/create';
  static readonly PAYMENT_UPDATE_DESTINATION_URL = '/api/extension/payment/update';
  static readonly CUSTOMER_CREATE_DESTINATION_URL = '/api/extension/customer/update';

   //Debug messages
   static readonly ADD_TOKEN_REQUEST = 'Add Token Request = ';
   static readonly ADD_TOKEN_RESPONSE = 'Add Token Response = ';
   static readonly TRANSACTION_DETAILS_RESPONSE = 'Transaction Details Response = ';
   static readonly CREATE_TRANSACTION_SEARCH_REQUEST = 'Create Transaction Search Request = ';
   static readonly CREATE_TRANSACTION_SEARCH_RESPONSE = 'Create Transaction Search Response = ';
   static readonly DECISION_SYNC_RESPONSE = 'Decision Sync Response = ';
   static readonly DELETE_TOKEN_RESPONSE = 'Delete Token Response = ';
   static readonly FLEX_KEYS_REQUEST = 'Flex Keys Request = ';
   static readonly FLEX_KEYS_RESPONSE = 'Flex Keys Response = ';
   static readonly PAYER_AUTHENTICATION_SETUP_REQUEST = 'Payer Authentication Setup Request = ';
   static readonly PAYER_AUTHENTICATION_SETUP_RESPONSE = 'Payer Authentication Setup Response = ';
   static readonly AUTHORIZATION_REVERSAL_REQUEST = 'Authorization Reversal Request = ';
   static readonly AUTHORIZATION_REVERSAL_RESPONSE = 'Authorization Reversal Response = ';
   static readonly PAYER_AUTHENTICATION_ENROLMENT_CHECK_REQUEST = 'Payer Authentication Enrolment Check Request = ';
   static readonly PAYER_AUTHENTICATION_ENROLMENT_CHECK_RESPONSE = 'Payer Authentication Enrolment Check Response = ';
   static readonly AUTHORIZATION_REQUEST = 'Authorization Request = ';
   static readonly AUTHORIZATION_RESPONSE = 'Authorization Response = ';
   static readonly CAPTURE_REQUEST = 'Capture Request = ';
   static readonly CAPTURE_RESPONSE = 'Capture Response = ';
   static readonly REFUND_REQUEST = 'Refund Request = ';
   static readonly REFUND_RESPONSE = 'Refund Response = ';
   static readonly UPDATE_TOKEN_REQUEST = 'Update Token Request = ';
   static readonly UPDATE_TOKEN_RESPONSE = 'Update Token Response = ';
   static readonly LOG_CUSTOMER_ID = 'CustomerId : ';
   static readonly LOG_ANONYMOUS_ID = 'AnonymousId : ';
   static readonly LOG_CART_ID = 'CartId : ';
   static readonly LOG_PAYMENT_ID = 'PaymentId : ';
}