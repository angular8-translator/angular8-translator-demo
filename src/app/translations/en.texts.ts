import { texts, Translation } from './default.text';

const t: Translation = Object.assign({}, texts);

/** English translations */
t.APP_NAME = 'NgTranslate';
t.WELCOME = 'Welcome to NgTranslate';
t.LANGUAGE = 'Language';

const en = t;

export { en };
