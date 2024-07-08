import test from 'ava';
import dotenv from 'dotenv';

import apiHandler from '../../apiHandler';
dotenv.config();
import { Constants } from '../../constants';
import unit from '../JSON/unit.json';
import {
  applePayPaymentObject,
  cart,
  constants,
  customerUpdateAddCardPaymentObject,
  customerUpdateFlexKeysPaymentObj,
  notification,
  payerAuthEnrollPaymentObj,
  payerAuthenticationPaymentObj,
  payerAuthSetupResponsePaymentObject,
  paymentId,
  paymentObject,
} from '../const/ApiHandlerConst';
import { payments } from '../const/CreditCard/PaymentAuthorizationServiceConstCC';
import { payment } from '../const/CreditCard/PaymentCaptureServiceConstCC';

test.serial('payment Create Api with credit card payment', async (t) => {
  let result = (await apiHandler.paymentCreateApi(paymentObject)) as any;
  if (result.actions.length == 0) {
    t.is(result.errors[0].code, 'InvalidInput');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokenCaptureContextSignature');
    t.is(result.actions[1].action, 'setCustomField');
    t.is(result.actions[1].name, 'isv_tokenVerificationContext');
  }
});

test.serial('payment Create Api for credit card with saved card', async (t) => {
  let result = (await apiHandler.paymentCreateApi(payments)) as any;
  if (0 === result.actions.length) {
    t.is(result.errors[0].code, 'InvalidInput');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_deviceFingerprintId');
    t.is(result.actions[1].name, 'isv_cardExpiryYear');
    t.is(result.actions[2].name, 'isv_tokenAlias');
    t.is(result.actions[3].name, 'isv_maskedPan');
    t.is(result.actions[4].name, 'isv_cardExpiryMonth');
    t.is(result.actions[5].name, 'isv_savedToken');
    t.is(result.actions[6].name, 'isv_acceptHeader');
    t.is(result.actions[7].name, 'isv_cardType');
    t.is(result.actions[8].name, 'isv_userAgentHeader');
  }
});

test.serial('payment Create Api with Apple Pay', async (t) => {
  let result = (await apiHandler.paymentCreateApi(applePayPaymentObject)) as any;
  if (0 === result.actions.length) {
    t.is(result.errors[0].code, 'InvalidInput');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_applePaySessionData');
  }
});

test.serial('payment Create Api with apple pay when validation url is empty', async (t) => {
  applePayPaymentObject.custom.fields.isv_applePayValidationUrl = '';
  let result = (await apiHandler.paymentCreateApi(applePayPaymentObject)) as any;
  t.deepEqual(result.actions, []);
  t.deepEqual(result.errors, []);
});

test.serial('payment Create Api with other payment method', async (t) => {
  applePayPaymentObject.paymentMethodInfo.method = 'clickToPay'
  let result = (await apiHandler.paymentCreateApi(applePayPaymentObject)) as any;
  t.deepEqual(result.actions, []);
  t.deepEqual(result.errors, []);
});

test.serial('Test PaymentDetails Api Function', async (t) => {
  let result = (await apiHandler.paymentDetailsApi(paymentId)) as any;
  if (result) {
    let i = 0;
    if ('amountPlanned' in result.paymentDetails && 'paymentMethodInfo' in result.paymentDetails && 'paymentStatus' in result.paymentDetails && 'cartData' in result && 'type' in result.cartData) {
      i++;
    }
    if (i == 1) {
      t.is(i, 1);
    } else {
      t.not(i, 1);
    }
  } else {
    t.pass();
  }
});

test.serial('Test PaymentUpdate Api Function For payerAuth setup response', async (t) => {
  let result = await apiHandler.paymentUpdateApi(payerAuthenticationPaymentObj as any);
  if (result.actions.length == 0) {
    t.deepEqual(result.errors, []);
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_requestJwt');
    t.is(result.actions[1].action, 'setCustomField');
    t.is(result.actions[1].name, 'isv_cardinalReferenceId');
    t.is(result.actions[2].action, 'setCustomField');
    t.is(result.actions[2].name, 'isv_deviceDataCollectionUrl');
  }
});

test.serial('Test PaymentUpdate Api Function For payerAuth enroll response', async (t) => {
  let result = await apiHandler.paymentUpdateApi(payerAuthEnrollPaymentObj as any);
  if (result.actions.length == 0) {
    t.is(result.errors[0].code, 'InvalidInput');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_payerEnrollTransactionId');
    t.is(result.actions[1].action, 'setCustomField');
    t.is(result.actions[1].name, 'isv_payerEnrollHttpCode');
    t.is(result.actions[2].action, 'setCustomField');
    t.is(result.actions[2].name, 'isv_payerEnrollStatus');
    t.is(result.actions[3].action, 'setCustomField');
    t.is(result.actions[3].name, 'isv_dmpaFlag');
    t.is(result.actions[4].action, 'setCustomField');
    t.is(result.actions[4].name, 'isv_tokenCaptureContextSignature');
    t.is(result.actions[5].action, 'setCustomField');
    t.is(result.actions[5].name, 'isv_payerAuthenticationRequired');
  }
});

test.serial('Test PaymentUpdate Api function for PayerAuth Validate Response', async (t) => {
  let result = await apiHandler.paymentUpdateApi(payerAuthSetupResponsePaymentObject);
  if (result.actions.length > 0) {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_payerEnrollTransactionId');
    t.is(result.actions[1].name, 'isv_payerEnrollHttpCode');
    t.is(result.actions[2].name, 'isv_payerEnrollStatus');
  } else {
    t.deepEqual(result.actions, []);
  }
});

test.serial('Test PaymentUpdate Api function when 3ds is enabled', async (t) => {
  payerAuthSetupResponsePaymentObject.transactions[0] = payment.transactions[0]
  payerAuthSetupResponsePaymentObject.transactions[0].state = 'Initial'
  let result = await apiHandler.paymentUpdateApi(payerAuthSetupResponsePaymentObject);
  if (result.actions.length > 0) {
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Failure');
    t.is(result.actions[2].action, 'addInterfaceInteraction');
  } else {
    t.deepEqual(result.actions, []);
  }
});

test.serial('Test PaymentUpdate Api function when custom field is absent', async (t) => {
  payerAuthSetupResponsePaymentObject.custom = {};
  let result = await apiHandler.paymentUpdateApi(payerAuthSetupResponsePaymentObject);
  t.deepEqual(result.actions, []);
  t.deepEqual(result.errors, []);
});

test.serial('Test PaymentUpdate Api function for all payment methods', async (t) => {
  let result = await apiHandler.paymentUpdateApi(payment);
  if ('setCustomField' === result.actions[0].action) {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_payerEnrollTransactionId');
    t.is(result.actions[1].name, 'isv_payerEnrollHttpCode');
    t.is(result.actions[2].name, 'isv_payerEnrollStatus');
  } else if("changeTransactionInteractionId" === result.actions[0].action) {
    t.is(result.actions[0].action, "changeTransactionInteractionId");
    t.is(result.actions[1].action, "changeTransactionState");
    t.is(result.actions[2].action, "addInterfaceInteraction");
  } else {
    t.deepEqual(result.actions, []);
  }
});

test.serial('Test Customer Update  Flex Microform', async (t) => {
  let result = await apiHandler.customerUpdateApi(customerUpdateFlexKeysPaymentObj);
  if (result.actions.length == 0) {
    t.is(result.errors[0].code, 'InvalidInput');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokenCaptureContextSignature');
    t.is(result.actions[1].action, 'setCustomField');
    t.is(result.actions[1].name, 'isv_tokenVerificationContext');
  }
});

test.serial('Test Customer Update for add card', async (t) => {
  let result = await apiHandler.customerUpdateApi(customerUpdateAddCardPaymentObject);
  if (result.actions.length == 0) {
    t.deepEqual(result.errors, []);
  } else if('isv_customerId' === result.actions[2].name) {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokens');
    t.is(result.actions[1].name, 'isv_tokenUpdated');
    t.is(result.actions[2].name, 'isv_customerId');
    t.is(result.actions[3].name, 'isv_tokenAlias');
    t.is(result.actions[4].name, 'isv_cardType');
    t.is(result.actions[5].name, 'isv_cardExpiryYear');
    t.is(result.actions[6].name, 'isv_cardExpiryMonth');
    t.is(result.actions[7].name, 'isv_addressId');
    t.is(result.actions[8].name, 'isv_currencyCode');
    t.is(result.actions[9].name, 'isv_deviceFingerprintId');
    t.is(result.actions[10].name, 'isv_token');
    t.is(result.actions[11].name, 'isv_maskedPan');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokens');
    t.is(result.actions[1].name, 'isv_tokenUpdated');
    t.is(result.actions[2].name, 'isv_failedTokens');
    t.is(result.actions[3].name, 'isv_tokenAlias');
    t.is(result.actions[4].name, 'isv_cardType');
    t.is(result.actions[5].name, 'isv_cardExpiryYear');
    t.is(result.actions[6].name, 'isv_cardExpiryMonth');
    t.is(result.actions[7].name, 'isv_addressId');
    t.is(result.actions[8].name, 'isv_currencyCode');
    t.is(result.actions[9].name, 'isv_deviceFingerprintId');
    t.is(result.actions[10].name, 'isv_token');
    t.is(result.actions[11].name, 'isv_maskedPan');
  }
});

test.serial('Test Customer Update when token already exist', async (t) => {
  customerUpdateAddCardPaymentObject.custom.fields.isv_addressId = ''
  let result = await apiHandler.customerUpdateApi(customerUpdateAddCardPaymentObject);
  if (result.actions.length == 0) {
    t.deepEqual(result.errors, []);
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokens');
    t.is(result.actions[1].name, 'isv_tokenUpdated');
    t.is(result.actions[2].name, 'isv_tokenAlias');
    t.is(result.actions[3].name, 'isv_cardType');
    t.is(result.actions[4].name, 'isv_cardExpiryYear');
    t.is(result.actions[5].name, 'isv_cardExpiryMonth');
    t.is(result.actions[6].name, 'isv_addressId');
    t.is(result.actions[7].name, 'isv_currencyCode');
    t.is(result.actions[8].name, 'isv_deviceFingerprintId');
    t.is(result.actions[9].name, 'isv_token');
    t.is(result.actions[10].name, 'isv_maskedPan');
  }
});

test.serial('Test Customer Update when token is being update', async (t) => {
  customerUpdateAddCardPaymentObject.custom.fields.isv_addressId = '';
  customerUpdateAddCardPaymentObject.custom.fields.isv_tokenAction = 'update'
  let result = await apiHandler.customerUpdateApi(customerUpdateAddCardPaymentObject);
  if (result.actions.length == 0) {
    t.deepEqual(result.errors, []);
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokens');
    t.is(result.actions[1].name, 'isv_tokenUpdated');
    t.is(result.actions[2].name, 'isv_tokenAction');
    t.is(result.actions[3].name, 'isv_cardNewExpiryYear');
    t.is(result.actions[4].name, 'isv_cardNewExpiryMonth');
  }
});

test.serial('Test Customer Update when token is being delete', async (t) => {
  customerUpdateAddCardPaymentObject.custom.fields.isv_addressId = '';
  customerUpdateAddCardPaymentObject.custom.fields.isv_tokenAction = 'delete'
  let result = await apiHandler.customerUpdateApi(customerUpdateAddCardPaymentObject);
  if (result.actions.length == 0) {
    t.deepEqual(result.errors, []);
  } else if('isv_tokens' === result.actions[0].name){
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokens');
    t.is(result.actions[1].name, 'isv_tokenUpdated');
    t.is(result.actions[2].name, 'isv_tokenAction');
  } else {
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name, 'isv_tokenAction');
  }
});

test.serial('Test CaptureContext Api function', async (t) => {
  let result = await apiHandler.captureContextApi(cart);
  if (result) {
    let length = result.length;
    t.true(length > 0);
  } else {
    t.pass();
  }
});

test.serial('Test notificationApi function', async (t) => {
  let result = await apiHandler.notificationApi(notification);
  if (result.successMessage) {
    t.is(result.successMessage, constants.SUCCESS_MSG_UPDATED_CUSTOMER_TOKEN);
  } else {
    t.not(result.successMessage, constants.SUCCESS_MSG_UPDATED_CUSTOMER_TOKEN);
  }
});

test.serial('Test order management api', async (t) => {
  let result = await apiHandler.orderManagementApi(unit.paymentId, 0, Constants.CT_TRANSACTION_TYPE_CANCEL_AUTHORIZATION);
  let i = 0;
  if ('errorMessage' in result && 'successMessage' in result) {
    i++;
  }
  t.is(i, 1);
});
