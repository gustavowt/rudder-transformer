import { timestampMock } from '../mocks';

export const data = [
  {
    name: 'google_adwords_offline_conversions',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.0.0',
                  },
                  device: {
                    id: '0572f78fa49c648e',
                    name: 'generic_x86_arm',
                    type: 'Android',
                    model: 'AOSP on IA Emulator',
                    manufacturer: 'Google',
                    adTrackingEnabled: true,
                    advertisingId: '44c97318-9040-4361-8bc7-4eb30f665ca8',
                  },
                  traits: {
                    email: 'alex@example.com',
                    phone: '+1-202-555-0146',
                    firstName: 'John',
                    lastName: 'Gomes',
                    city: 'London',
                    state: 'England',
                    countryCode: 'GB',
                    postalCode: 'EC3M',
                    streetAddress: '71 Cherry Court SOUTHAMPTON SO53 5PD UK',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.0.0',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                  locale: 'en-US',
                  ip: '0.0.0.0',
                  os: {
                    name: '',
                    version: '',
                  },
                  screen: {
                    density: 2,
                  },
                },
                event: 'Promotion Clicked',
                type: 'track',
                messageId: '5e10d13a-bf9a-44bf-b884-43a9e591ea71',
                originalTimestamp: '2019-10-14T11:15:18.299Z',
                anonymousId: '00000000000000000000000000',
                userId: '12345',
                properties: {
                  gbraid: 'gbraid',
                  wbraid: 'wbraid',
                  externalAttributionCredit: 10,
                  externalAttributionModel: 'externalAttributionModel',
                  conversionCustomVariable: 'conversionCustomVariable',
                  value: 'value',
                  merchantId: '9876merchantId',
                  feedCountryCode: 'feedCountryCode',
                  feedLanguageCode: 'feedLanguageCode',
                  localTransactionCost: 20,
                  products: [
                    {
                      product_id: '507f1f77bcf86cd799439011',
                      quantity: '2',
                      price: '50',
                      sku: '45790-32',
                      name: 'Monopoly: 3rd Edition',
                      position: '1',
                      category: 'cars',
                      url: 'https://www.example.com/product/path',
                      image_url: 'https://www.example.com/product/path.jpg',
                    },
                  ],
                  userIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'WEB',
                  gclid: 'gclid',
                  conversionDateTime: '2022-01-01 12:32:45-08:00',
                  conversionValue: '1',
                  currency: 'GBP',
                },
                integrations: {
                  All: true,
                },
                name: 'ApplicationLoaded',
                sentAt: '2019-10-14T11:15:53.296Z',
              },
              metadata: {
                secret: {
                  access_token: 'abcd1234',
                  refresh_token: 'efgh5678',
                  developer_token: 'ijkl91011',
                },
              },
              destination: {
                Config: {
                  customerId: '962-581-2972',
                  eventsToOfflineConversionsTypeMapping: [
                    {
                      from: 'Sign up completed',
                      to: 'click',
                    },
                    {
                      from: 'Download',
                      to: 'call',
                    },
                    {
                      from: 'Promotion Clicked',
                      to: 'click',
                    },
                    {
                      from: 'Product Searched',
                      to: 'call',
                    },
                  ],
                  eventsToConversionsNamesMapping: [
                    {
                      from: 'Sign up completed',
                      to: 'Sign-up - click',
                    },
                    {
                      from: 'Download',
                      to: 'Page view',
                    },
                    {
                      from: 'Promotion Clicked',
                      to: 'Sign-up - click',
                    },
                    {
                      from: 'Product Searched',
                      to: 'search',
                    },
                  ],
                  customVariables: [
                    {
                      from: 'value',
                      to: 'revenue',
                    },
                    {
                      from: 'total',
                      to: 'cost',
                    },
                  ],
                  UserIdentifierSource: 'THIRD_PARTY',
                  conversionEnvironment: 'WEB',
                  hashUserIdentifier: true,
                  defaultUserIdentifier: 'email',
                  validateOnly: false,
                  rudderAccountId: '25u5whFH7gVTnCiAjn4ykoCLGoC',
                },
              },
            },
            {
              message: {
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.0.0',
                  },
                  device: {
                    id: '0572f78fa49c648e',
                    name: 'generic_x86_arm',
                    type: 'Android',
                    model: 'AOSP on IA Emulator',
                    manufacturer: 'Google',
                    adTrackingEnabled: true,
                    advertisingId: '44c97318-9040-4361-8bc7-4eb30f665ca8',
                  },
                  traits: {
                    email: 'alex@example.com',
                    phone: '+1-202-555-0146',
                    firstName: 'John',
                    lastName: 'Gomes',
                    city: 'London',
                    state: 'England',
                    countryCode: 'GB',
                    postalCode: 'EC3M',
                    streetAddress: '71 Cherry Court SOUTHAMPTON SO53 5PD UK',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.0.0',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                  locale: 'en-US',
                  ip: '0.0.0.0',
                  os: {
                    name: '',
                    version: '',
                  },
                  screen: {
                    density: 2,
                  },
                },
                event: 'Product Searched',
                type: 'track',
                messageId: '5e10d13a-bf9a-44bf-b884-43a9e591ea71',
                originalTimestamp: '2019-10-14T11:15:18.299Z',
                anonymousId: '00000000000000000000000000',
                userId: '12345',
                properties: {
                  externalAttributionCredit: 10,
                  externalAttributionModel: 'externalAttributionModel',
                  merchantId: 'merchantId',
                  feedCountryCode: 'feedCountryCode',
                  feedLanguageCode: 'feedLanguageCode',
                  localTransactionCost: 20,
                  products: [
                    {
                      product_id: '507f1f77bcf86cd799439011',
                      quantity: '2',
                      price: '50',
                      sku: '45790-32',
                      name: 'Monopoly: 3rd Edition',
                      position: '1',
                      category: 'cars',
                      url: 'https://www.example.com/product/path',
                      image_url: 'https://www.example.com/product/path.jpg',
                    },
                  ],
                  userIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'WEB',
                  gclid: 'gclid',

                  conversionCustomVariable: 'conversionCustomVariable',
                  value: 'value',

                  callerId: 'callerId',
                  callStartDateTime: '2022-08-28 15:01:30+05:30',
                  conversionDateTime: '2022-01-01 12:32:45-08:00',
                  conversionValue: '1',
                  currency: 'GBP',
                },
                integrations: {
                  All: true,
                },
                name: 'ApplicationLoaded',
                sentAt: '2019-10-14T11:15:53.296Z',
              },
              metadata: {
                secret: {
                  access_token: 'abcd1234',
                  refresh_token: 'efgh5678',
                  developer_token: 'ijkl91011',
                },
              },
              destination: {
                Config: {
                  customerId: '962-581-2972',
                  eventsToOfflineConversionsTypeMapping: [
                    {
                      from: 'Sign up completed',
                      to: 'click',
                    },
                    {
                      from: 'Download',
                      to: 'call',
                    },
                    {
                      from: 'Promotion Clicked',
                      to: 'click',
                    },
                    {
                      from: 'Product Searched',
                      to: 'call',
                    },
                  ],
                  eventsToConversionsNamesMapping: [
                    {
                      from: 'Sign up completed',
                      to: 'Sign-up - click',
                    },
                    {
                      from: 'Download',
                      to: 'Page view',
                    },
                    {
                      from: 'Promotion Clicked',
                      to: 'Sign-up - click',
                    },
                    {
                      from: 'Product Searched',
                      to: 'search',
                    },
                  ],
                  customVariables: [
                    {
                      from: 'value',
                      to: 'revenue',
                    },
                    {
                      from: 'total',
                      to: 'cost',
                    },
                  ],
                  UserIdentifierSource: 'THIRD_PARTY',
                  conversionEnvironment: 'WEB',
                  hashUserIdentifier: true,
                  defaultUserIdentifier: 'phone',
                  validateOnly: false,
                  rudderAccountId: '25u5whFH7gVTnCiAjn4ykoCLGoC',
                },
              },
            },
            {
              message: {
                channel: 'web',
                context: {
                  traits: {
                    firstName: 'John',
                  },
                },
                event: 'Product Clicked',
                type: 'track',
                messageId: '5e10d13a-bf9a-44bf-b884-43a9e591ea71',
                originalTimestamp: '2019-10-14T11:15:18.299Z',
                anonymousId: '00000000000000000000000000',
                userId: '12345',
                properties: {
                  loyaltyFraction: 1,
                  order_id: 'order id',
                  currency: 'INR',
                  revenue: '100',
                  store_code: 'store code',
                  email: 'alex@example.com',
                  gclid: 'gclid',
                  product_id: '123445',
                  quantity: 123,
                  callerId: '1234',
                  callStartDateTime: '2019-10-14T11:15:18.299Z',
                },
                integrations: {
                  All: true,
                },
                name: 'ApplicationLoaded',
                sentAt: '2019-10-14T11:15:53.296Z',
              },
              metadata: {
                secret: {
                  access_token: 'abcd1234',
                  refresh_token: 'efgh5678',
                  developer_token: 'ijkl91011',
                },
                jobId: 1,
              },
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Order Completed', to: 'store' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Order Completed', to: 'Order Completed' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
            {
              message: {
                channel: 'web',
                context: {
                  traits: {
                    firstName: 'John',
                  },
                },
                event: 'Order Completed',
                type: 'track',
                messageId: '5e10d13a-bf9a-44bf-b884-43a9e591ea71',
                originalTimestamp: '2019-10-14T11:15:18.299Z',
                anonymousId: '00000000000000000000000000',
                userId: '12345',
                properties: {
                  loyaltyFraction: 1,
                  order_id: 'order id',
                  currency: 'INR',
                  revenue: '100',
                  store_code: 'store code2',
                  email: 'alex@example.com',
                  gclid: 'gclid',
                  product_id: '123445',
                  quantity: 123,
                  callerId: '1234',
                  callStartDateTime: '2019-10-14T11:15:18.299Z',
                },
                integrations: {
                  All: true,
                },
                name: 'ApplicationLoaded',
                sentAt: '2019-10-14T11:15:53.296Z',
              },
              metadata: {
                secret: {
                  access_token: 'abcd1234',
                  refresh_token: 'efgh5678',
                  developer_token: 'ijkl91011',
                },
                jobId: 2,
              },
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Order Completed', to: 'store' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Order Completed', to: 'Order Completed' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
            {
              message: {
                channel: 'web',
                context: {
                  traits: {
                    firstName: 'John',
                  },
                },
                event: 'Order Completed',
                type: 'track',
                messageId: '5e10d13a-bf9a-44bf-b884-43a9e591ea71',
                originalTimestamp: '2019-10-14T11:15:18.299Z',
                anonymousId: '00000000000000000000000000',
                userId: '12345',
                properties: {
                  loyaltyFraction: 1,
                  order_id: 'order id',
                  currency: 'INR',
                  revenue: '100',
                  store_code: 'store code2',
                  email: 'alex@example.com',
                  gclid: 'gclid',
                  product_id: '123445',
                  quantity: 123,
                  callerId: '1234',
                  callStartDateTime: '2019-10-14T11:15:18.299Z',
                },
                integrations: {
                  All: true,
                },
                name: 'ApplicationLoaded',
                sentAt: '2019-10-14T11:15:53.296Z',
              },
              metadata: {
                secret: {
                  access_token: 'abcd1234',
                  refresh_token: 'efgh5678',
                  developer_token: 'ijkl91011',
                },
                jobId: 3,
              },
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
          ],
          destType: 'google_adwords_offline_conversions',
        },
        method: 'POST',
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint:
                  'https://googleads.googleapis.com/v14/customers/7693729833/offlineUserDataJobs',
                headers: {
                  Authorization: 'Bearer abcd1234',
                  'Content-Type': 'application/json',
                  'developer-token': 'ijkl91011',
                },
                params: { event: 'Store sales', customerId: '7693729833' },
                body: {
                  JSON: {
                    event: '7693729833',
                    isStoreConversion: true,
                    createJobPayload: {
                      job: {
                        storeSalesMetadata: {
                          loyaltyFraction: 1,
                          transaction_upload_fraction: '1',
                        },
                        type: 'STORE_SALES_UPLOAD_FIRST_PARTY',
                      },
                    },
                    addConversionPayload: {
                      operations: [
                        {
                          create: {
                            transaction_attribute: {
                              store_attribute: { store_code: 'store code' },
                              transaction_amount_micros: '100000000',
                              order_id: 'order id',
                              currency_code: 'INR',
                              transaction_date_time: '2019-10-14 16:45:18+05:30',
                            },
                            userIdentifiers: [
                              {
                                hashedEmail:
                                  '6db61e6dcbcf2390e4a46af426f26a133a3bee45021422fc7ae86e9136f14110',
                              },
                            ],
                          },
                        },
                        {
                          create: {
                            transaction_attribute: {
                              store_attribute: { store_code: 'store code2' },
                              transaction_amount_micros: '100000000',
                              order_id: 'order id',
                              currency_code: 'INR',
                              transaction_date_time: '2019-10-14 16:45:18+05:30',
                            },
                            userIdentifiers: [
                              {
                                hashedEmail:
                                  '6db61e6dcbcf2390e4a46af426f26a133a3bee45021422fc7ae86e9136f14110',
                              },
                            ],
                          },
                        },
                      ],
                      enable_partial_failure: false,
                      enable_warnings: false,
                      validate_only: true,
                    },
                    executeJobPayload: { validate_only: true },
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                  jobId: 1,
                },
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                  jobId: 2,
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Order Completed', to: 'store' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Order Completed', to: 'Order Completed' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint:
                  'https://googleads.googleapis.com/v14/customers/9625812972:uploadClickConversions',
                headers: {
                  Authorization: 'Bearer abcd1234',
                  'Content-Type': 'application/json',
                  'developer-token': 'ijkl91011',
                },
                params: {
                  event: 'Sign-up - click',
                  customerId: '9625812972',
                  customVariables: [
                    { from: 'value', to: 'revenue' },
                    { from: 'total', to: 'cost' },
                  ],
                  properties: {
                    gbraid: 'gbraid',
                    wbraid: 'wbraid',
                    externalAttributionCredit: 10,
                    externalAttributionModel: 'externalAttributionModel',
                    conversionCustomVariable: 'conversionCustomVariable',
                    value: 'value',
                    merchantId: '9876merchantId',
                    feedCountryCode: 'feedCountryCode',
                    feedLanguageCode: 'feedLanguageCode',
                    localTransactionCost: 20,
                    products: [
                      {
                        product_id: '507f1f77bcf86cd799439011',
                        quantity: '2',
                        price: '50',
                        sku: '45790-32',
                        name: 'Monopoly: 3rd Edition',
                        position: '1',
                        category: 'cars',
                        url: 'https://www.example.com/product/path',
                        image_url: 'https://www.example.com/product/path.jpg',
                      },
                    ],
                    userIdentifierSource: 'FIRST_PARTY',
                    conversionEnvironment: 'WEB',
                    gclid: 'gclid',
                    conversionDateTime: '2022-01-01 12:32:45-08:00',
                    conversionValue: '1',
                    currency: 'GBP',
                  },
                },
                body: {
                  JSON: {
                    conversions: [
                      {
                        gbraid: 'gbraid',
                        wbraid: 'wbraid',
                        externalAttributionData: {
                          externalAttributionCredit: 10,
                          externalAttributionModel: 'externalAttributionModel',
                        },
                        cartData: {
                          merchantId: 9876,
                          feedCountryCode: 'feedCountryCode',
                          feedLanguageCode: 'feedLanguageCode',
                          localTransactionCost: 20,
                          items: [
                            { productId: '507f1f77bcf86cd799439011', quantity: 2, unitPrice: 50 },
                          ],
                        },
                        userIdentifiers: [
                          {
                            userIdentifierSource: 'FIRST_PARTY',
                            hashedEmail:
                              '6db61e6dcbcf2390e4a46af426f26a133a3bee45021422fc7ae86e9136f14110',
                          },
                        ],
                        conversionEnvironment: 'WEB',
                        gclid: 'gclid',
                        conversionDateTime: '2022-01-01 12:32:45-08:00',
                        conversionValue: 1,
                        currencyCode: 'GBP',
                      },
                    ],
                    partialFailure: true,
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  customerId: '962-581-2972',
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Sign up completed', to: 'click' },
                    { from: 'Download', to: 'call' },
                    { from: 'Promotion Clicked', to: 'click' },
                    { from: 'Product Searched', to: 'call' },
                  ],
                  eventsToConversionsNamesMapping: [
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'Download', to: 'Page view' },
                    { from: 'Promotion Clicked', to: 'Sign-up - click' },
                    { from: 'Product Searched', to: 'search' },
                  ],
                  customVariables: [
                    { from: 'value', to: 'revenue' },
                    { from: 'total', to: 'cost' },
                  ],
                  UserIdentifierSource: 'THIRD_PARTY',
                  conversionEnvironment: 'WEB',
                  hashUserIdentifier: true,
                  defaultUserIdentifier: 'email',
                  validateOnly: false,
                  rudderAccountId: '25u5whFH7gVTnCiAjn4ykoCLGoC',
                },
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint:
                  'https://googleads.googleapis.com/v14/customers/9625812972:uploadCallConversions',
                headers: {
                  Authorization: 'Bearer abcd1234',
                  'Content-Type': 'application/json',
                  'developer-token': 'ijkl91011',
                },
                params: {
                  event: 'search',
                  customerId: '9625812972',
                  customVariables: [
                    { from: 'value', to: 'revenue' },
                    { from: 'total', to: 'cost' },
                  ],
                  properties: {
                    externalAttributionCredit: 10,
                    externalAttributionModel: 'externalAttributionModel',
                    merchantId: 'merchantId',
                    feedCountryCode: 'feedCountryCode',
                    feedLanguageCode: 'feedLanguageCode',
                    localTransactionCost: 20,
                    products: [
                      {
                        product_id: '507f1f77bcf86cd799439011',
                        quantity: '2',
                        price: '50',
                        sku: '45790-32',
                        name: 'Monopoly: 3rd Edition',
                        position: '1',
                        category: 'cars',
                        url: 'https://www.example.com/product/path',
                        image_url: 'https://www.example.com/product/path.jpg',
                      },
                    ],
                    userIdentifierSource: 'FIRST_PARTY',
                    conversionEnvironment: 'WEB',
                    gclid: 'gclid',
                    conversionCustomVariable: 'conversionCustomVariable',
                    value: 'value',
                    callerId: 'callerId',
                    callStartDateTime: '2022-08-28 15:01:30+05:30',
                    conversionDateTime: '2022-01-01 12:32:45-08:00',
                    conversionValue: '1',
                    currency: 'GBP',
                  },
                },
                body: {
                  JSON: {
                    conversions: [
                      {
                        callerId: 'callerId',
                        callStartDateTime: '2022-08-28 15:01:30+05:30',
                        conversionDateTime: '2022-01-01 12:32:45-08:00',
                        conversionValue: 1,
                        currencyCode: 'GBP',
                      },
                    ],
                    partialFailure: true,
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  customerId: '962-581-2972',
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Sign up completed', to: 'click' },
                    { from: 'Download', to: 'call' },
                    { from: 'Promotion Clicked', to: 'click' },
                    { from: 'Product Searched', to: 'call' },
                  ],
                  eventsToConversionsNamesMapping: [
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'Download', to: 'Page view' },
                    { from: 'Promotion Clicked', to: 'Sign-up - click' },
                    { from: 'Product Searched', to: 'search' },
                  ],
                  customVariables: [
                    { from: 'value', to: 'revenue' },
                    { from: 'total', to: 'cost' },
                  ],
                  UserIdentifierSource: 'THIRD_PARTY',
                  conversionEnvironment: 'WEB',
                  hashUserIdentifier: true,
                  defaultUserIdentifier: 'phone',
                  validateOnly: false,
                  rudderAccountId: '25u5whFH7gVTnCiAjn4ykoCLGoC',
                },
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint:
                  'https://googleads.googleapis.com/v14/customers/7693729833:uploadCallConversions',
                headers: {
                  Authorization: 'Bearer abcd1234',
                  'Content-Type': 'application/json',
                  'developer-token': 'ijkl91011',
                },
                params: {
                  event: 'Order Completed',
                  customerId: '7693729833',
                  customVariables: [{ from: '', to: '' }],
                  properties: {
                    loyaltyFraction: 1,
                    order_id: 'order id',
                    currency: 'INR',
                    revenue: '100',
                    store_code: 'store code2',
                    email: 'alex@example.com',
                    gclid: 'gclid',
                    product_id: '123445',
                    quantity: 123,
                    callerId: '1234',
                    callStartDateTime: '2019-10-14T11:15:18.299Z',
                  },
                },
                body: {
                  JSON: {
                    conversions: [
                      {
                        callerId: '1234',
                        callStartDateTime: '2019-10-14T11:15:18.299Z',
                        conversionDateTime: '2019-10-14 16:45:18+05:30',
                        conversionValue: 100,
                        currencyCode: 'INR',
                      },
                    ],
                    partialFailure: true,
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Order Completed', to: 'store' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Order Completed', to: 'Order Completed' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
            {
              metadata: [
                {
                  secret: {
                    access_token: 'abcd1234',
                    refresh_token: 'efgh5678',
                    developer_token: 'ijkl91011',
                  },
                  jobId: 3,
                },
              ],
              batched: false,
              statusCode: 400,
              error:
                "Event name 'order completed' is not present in the mapping provided in the dashboard.",
              statTags: {
                destType: 'GOOGLE_ADWORDS_OFFLINE_CONVERSIONS',
                errorCategory: 'dataValidation',
                errorType: 'configuration',
                feature: 'router',
                implementation: 'native',
                module: 'destination',
              },
              destination: {
                Config: {
                  rudderAccountId: '2Hsy2iFyoG5VLDd9wQcggHLMYFA',
                  customerId: '769-372-9833',
                  subAccount: false,
                  UserIdentifierSource: 'FIRST_PARTY',
                  conversionEnvironment: 'none',
                  defaultUserIdentifier: 'email',
                  hashUserIdentifier: true,
                  validateOnly: true,
                  eventsToOfflineConversionsTypeMapping: [
                    { from: 'Data Reading Guide', to: 'click' },
                    { from: 'Sign-up - click', to: 'click' },
                    { from: 'Outbound click (rudderstack.com)', to: 'click' },
                    { from: 'Page view', to: 'click' },
                    { from: 'download', to: 'click' },
                    { from: 'Product Clicked', to: 'store' },
                    { from: 'Order Completed', to: 'call' },
                  ],
                  loginCustomerId: '4219454086',
                  eventsToConversionsNamesMapping: [
                    { from: 'Data Reading Guide', to: 'Data Reading Guide' },
                    { from: 'Sign-up - click', to: 'Sign-up - click' },
                    {
                      from: 'Outbound click (rudderstack.com)',
                      to: 'Outbound click (rudderstack.com)',
                    },
                    { from: 'Page view', to: 'Page view' },
                    { from: 'Sign up completed', to: 'Sign-up - click' },
                    { from: 'download', to: 'Page view' },
                    { from: 'Product Clicked', to: 'Store sales' },
                  ],
                  authStatus: 'active',
                  oneTrustCookieCategories: [],
                  customVariables: [{ from: '', to: '' }],
                },
              },
            },
          ],
        },
      },
    },
    mockFns: timestampMock,
  },
];