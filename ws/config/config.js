const Joi= require('joi');
// require and configure dotenv, will load vars in .env in process.env
require('dotenv').config();

const envVarSchema = Joi.object().keys({
    NODE_ENV: Joi.string().default('development').allow(['development', 'production']), // 字串且預設值為development 並只允許兩種參數
    WS_HOST: Joi.string()
    .when(
      'NODE_ENV', { is: 'development', then: Joi.string().default(process.env['DEV_HOST']) }
      )
    .when(
      'NODE_ENV', { is: 'WEBDUINO', then: Joi.string().default(process.env['WEBDUINO_HOST']) }
    )
    .when(
      'NODE_ENV', { is: 'NUWA', then: Joi.string().default(process.env['NUWA_HOST']) }
    ),
    WS_USERNAME: Joi.string()
    .when(
      'NODE_ENV', { is: 'development', then: Joi.string().default(process.env['DEV_USERNAME']) }
      )
    .when(
      'NODE_ENV', { is: 'WEBDUINO', then: Joi.string().default(process.env['WEBDUINO_USERNAME']) }
    )
    .when(
      'NODE_ENV', { is: 'NUWA', then: Joi.string().default(process.env['NUWA_USERNAME']) }
    ),
      WS_PASSWORD: Joi.string()
      .when(
        'NODE_ENV', { is: 'development', then: Joi.string().default(process.env['DEV_PASSWORD']) }
        )
      .when(
        'NODE_ENV', { is: 'WEBDUINO', then: Joi.string().default(process.env['WEBDUINO_PASSWORD']) }
      )
      .when(
        'NODE_ENV', { is: 'NUWA', then: Joi.string().default(process.env['NUWA_PASSWORD']) }
      )
  }).unknown().required();

  // process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = Joi.validate(process.env, envVarSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config={
    env: envVars.NODE_ENV, // 開發模式(development、WEBDUINO、NUWA)
    wsHost: envVars.WS_HOST,
    wsUsername:envVars.WS_USERNAME,
    wsPassword:envVars.WS_PASSWORD
}

module.exports = config;