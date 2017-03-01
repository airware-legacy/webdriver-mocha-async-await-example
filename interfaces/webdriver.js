// Type definitions for Selenium WebDriverJS 2.44.0
// Stolen somewhat and adapted to Flow from https://github.com/DefinitelyTyped/DefinitelyTyped

type ButtonEnum = {
  LEFT: number,
  MIDDLE: number,
  RIGHT: number
};

type KeyEnum = {
  NULL: string,
  CANCEL: string,  // ^break
  HELP: string,
  BACK_SPACE: string,
  TAB: string,
  CLEAR: string,
  RETURN: string,
  ENTER: string,
  SHIFT: string,
  CONTROL: string,
  ALT: string,
  PAUSE: string,
  ESCAPE: string,
  SPACE: string,
  PAGE_UP: string,
  PAGE_DOWN: string,
  END: string,
  HOME: string,
  ARROW_LEFT: string,
  LEFT: string,
  ARROW_UP: string,
  UP: string,
  ARROW_RIGHT: string,
  RIGHT: string,
  ARROW_DOWN: string,
  DOWN: string,
  INSERT: string,
  DELETE: string,
  SEMICOLON: string,
  EQUALS: string,
  NUMPAD0: string,  // number pad keys
  NUMPAD1: string,
  NUMPAD2: string,
  NUMPAD3: string,
  NUMPAD4: string,
  NUMPAD5: string,
  NUMPAD6: string,
  NUMPAD7: string,
  NUMPAD8: string,
  NUMPAD9: string,
  MULTIPLY: string,
  ADD: string,
  SEPARATOR: string,
  SUBTRACT: string,
  DECIMAL: string,
  DIVIDE: string,
  F1: string,  // function keys
  F2: string,
  F3: string,
  F4: string,
  F5: string,
  F6: string,
  F7: string,
  F8: string,
  F9: string,
  F10: string,
  F11: string,
  F12: string,
  COMMAND: string,  // Apple command key
  META: string,   // alias for Windows key
  chord: (...var_args: Array<string>) => string
};

type BrowserEnum = {
  ANDROID: string,
  CHROME: string,
  FIREFOX: string,
  INTERNET_EXPLORER: string,
  IPAD: string,
  IPHONE: string,
  OPERA: string,
  PHANTOM_JS: string,
  SAFARI: string,
  HTMLUNIT: string
};

type CapabilityEnum = {
  ACCEPT_SSL_CERTS: string,
  BROWSER_NAME: string,
  ELEMENT_SCROLL_BEHAVIOR: string,
  HANDLES_ALERTS: string,
  LOGGING_PREFS: string,
  NATIVE_EVENTS: string,
  PLATFORM: string,
  PROXY: string,
  ROTATABLE: string,
  SECURE_SSL: string,
  SUPPORTS_APPLICATION_CACHE: string,
  SUPPORTS_CSS_SELECTORS: string,
  SUPPORTS_JAVASCRIPT: string,
  SUPPORTS_LOCATION_CONTEXT: string,
  TAKES_SCREENSHOT: string,
  UNEXPECTED_ALERT_BEHAVIOR: string,
  VERSION: string
}

type CommandNameEnum = {
  GET_SERVER_STATUS: string,
  NEW_SESSION: string,
  GET_SESSIONS: string,
  DESCRIBE_SESSION: string,
  CLOSE: string,
  QUIT: string,
  GET_CURRENT_URL: string,
  GET: string,
  GO_BACK: string,
  GO_FORWARD: string,
  REFRESH: string,
  ADD_COOKIE: string,
  GET_COOKIE: string,
  GET_ALL_COOKIES: string,
  DELETE_COOKIE: string,
  DELETE_ALL_COOKIES: string,
  GET_ACTIVE_ELEMENT: string,
  FIND_ELEMENT: string,
  FIND_ELEMENTS: string,
  FIND_CHILD_ELEMENT: string,
  FIND_CHILD_ELEMENTS: string,
  CLEAR_ELEMENT: string,
  CLICK_ELEMENT: string,
  SEND_KEYS_TO_ELEMENT: string,
  SUBMIT_ELEMENT: string,
  GET_CURRENT_WINDOW_HANDLE: string,
  GET_WINDOW_HANDLES: string,
  GET_WINDOW_POSITION: string,
  SET_WINDOW_POSITION: string,
  GET_WINDOW_SIZE: string,
  SET_WINDOW_SIZE: string,
  MAXIMIZE_WINDOW: string,
  SWITCH_TO_WINDOW: string,
  SWITCH_TO_FRAME: string,
  GET_PAGE_SOURCE: string,
  GET_TITLE: string,
  EXECUTE_SCRIPT: string,
  EXECUTE_ASYNC_SCRIPT: string,
  GET_ELEMENT_TEXT: string,
  GET_ELEMENT_TAG_NAME: string,
  IS_ELEMENT_SELECTED: string,
  IS_ELEMENT_ENABLED: string,
  IS_ELEMENT_DISPLAYED: string,
  GET_ELEMENT_LOCATION: string,
  GET_ELEMENT_LOCATION_IN_VIEW: string,
  GET_ELEMENT_SIZE: string,
  GET_ELEMENT_ATTRIBUTE: string,
  GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string,
  ELEMENT_EQUALS: string,
  SCREENSHOT: string,
  IMPLICITLY_WAIT: string,
  SET_SCRIPT_TIMEOUT: string,
  SET_TIMEOUT: string,
  ACCEPT_ALERT: string,
  DISMISS_ALERT: string,
  GET_ALERT_TEXT: string,
  SET_ALERT_TEXT: string,
  EXECUTE_SQL: string,
  GET_LOCATION: string,
  SET_LOCATION: string,
  GET_APP_CACHE: string,
  GET_APP_CACHE_STATUS: string,
  CLEAR_APP_CACHE: string,
  IS_BROWSER_ONLINE: string,
  SET_BROWSER_ONLINE: string,
  GET_LOCAL_STORAGE_ITEM: string,
  GET_LOCAL_STORAGE_KEYS: string,
  SET_LOCAL_STORAGE_ITEM: string,
  REMOVE_LOCAL_STORAGE_ITEM: string,
  CLEAR_LOCAL_STORAGE: string,
  GET_LOCAL_STORAGE_SIZE: string,
  GET_SESSION_STORAGE_ITEM: string,
  GET_SESSION_STORAGE_KEYS: string,
  SET_SESSION_STORAGE_ITEM: string,
  REMOVE_SESSION_STORAGE_ITEM: string,
  CLEAR_SESSION_STORAGE: string,
  GET_SESSION_STORAGE_SIZE: string,
  SET_SCREEN_ORIENTATION: string,
  GET_SCREEN_ORIENTATION: string,
  CLICK: string,
  DOUBLE_CLICK: string,
  MOUSE_DOWN: string,
  MOUSE_UP: string,
  MOVE_TO: string,
  SEND_KEYS_TO_ACTIVE_ELEMENT: string,
  TOUCH_SINGLE_TAP: string,
  TOUCH_DOWN: string,
  TOUCH_UP: string,
  TOUCH_MOVE: string,
  TOUCH_SCROLL: string,
  TOUCH_DOUBLE_TAP: string,
  TOUCH_LONG_PRESS: string,
  TOUCH_FLICK: string,
  GET_AVAILABLE_LOG_TYPES: string,
  GET_LOG: string,
  GET_SESSION_LOGS: string
}

declare type WebDriverByLib = {
  className(value: string): WebDriverLocator;
  css(value: string): WebDriverLocator;
  id(value: string): WebDriverLocator;
  linkText(value: string): WebDriverLocator;
  js(script: any, ...var_args: any[]): (WebDriver: WebDriverClass) => WebDriverPromise<any>;
  name(value: string): WebDriverLocator;
  partialLinkText(value: string): WebDriverLocator;
  tagName(value: string): WebDriverLocator;
  xpath(value: string): WebDriverLocator;
};

declare type ByHash = {className: string} |
{css: string} |
{id: string} |
{js: string} |
{linkText: string} |
{name: string} |
{partialLinkText: string} |
{tagName: string} |
{xpath: string};

declare type ErrorCodeEnum = {
  SUCCESS: number,
  NO_SUCH_ELEMENT: number,
  NO_SUCH_FRAME: number,
  UNKNOWN_COMMAND: number,
  UNSUPPORTED_OPERATION: number,  // Alias for UNKNOWN_COMMAND.
  STALE_ELEMENT_REFERENCE: number,
  ELEMENT_NOT_VISIBLE: number,
  INVALID_ELEMENT_STATE: number,
  UNKNOWN_ERROR: number,
  ELEMENT_NOT_SELECTABLE: number,
  JAVASCRIPT_ERROR: number,
  XPATH_LOOKUP_ERROR: number,
  TIMEOUT: number,
  NO_SUCH_WINDOW: number,
  INVALID_COOKIE_DOMAIN: number,
  UNABLE_TO_SET_COOKIE: number,
  MODAL_DIALOG_OPENED: number,
  UNEXPECTED_ALERT_OPEN: number,
  NO_SUCH_ALERT: number,
  NO_MODAL_DIALOG_OPEN: number,
  SCRIPT_TIMEOUT: number,
  INVALID_ELEMENT_COORDINATES: number,
  IME_NOT_AVAILABLE: number,
  IME_ENGINE_ACTIVATION_FAILED: number,
  INVALID_SELECTOR_ERROR: number,
  SESSION_NOT_CREATED: number,
  MOVE_TARGET_OUT_OF_BOUNDS: number,
  SQL_DATABASE_ERROR: number,
  INVALID_XPATH_SELECTOR: number,
  INVALID_XPATH_SELECTOR_RETURN_TYPE: number,
  METHOD_NOT_ALLOWED: number;
}

declare class WebDriverError extends Error {
  constructor(code: number, opt_message?: string): WebDriverError;
  code: number;
  State: {
    ELEMENT_NOT_SELECTABLE: string;
    ELEMENT_NOT_VISIBLE: string;
    IME_ENGINE_ACTIVATION_FAILED: string;
    IME_NOT_AVAILABLE: string;
    INVALID_COOKIE_DOMAIN: string;
    INVALID_ELEMENT_COORDINATES: string;
    INVALID_ELEMENT_STATE: string;
    INVALID_SELECTOR: string;
    JAVASCRIPT_ERROR: string;
    MOVE_TARGET_OUT_OF_BOUNDS: string;
    NO_SUCH_ALERT: string;
    NO_SUCH_DOM: string;
    NO_SUCH_ELEMENT: string;
    NO_SUCH_FRAME: string;
    NO_SUCH_WINDOW: string;
    SCRIPT_TIMEOUT: string;
    SESSION_NOT_CREATED: string;
    STALE_ELEMENT_REFERENCE: string;
    SUCCESS: string;
    TIMEOUT: string;
    UNABLE_TO_SET_COOKIE: string;
    UNEXPECTED_ALERT_OPEN: string;
    UNKNOWN_COMMAND: string;
    UNKNOWN_ERROR: string;
    UNSUPPORTED_OPERATION: string;
  };
  state: string;
  message: string;
  name: string;
  stack: string;
  isAutomationError: boolean;
  toString(): string;
}

declare type WebDriverErrorLib = {
  ErrorCode: ErrorCodeEnum,
  WebDriverError: WebDriverError
};

// /////////////////

declare class WebDriverLoggingPreferences {
  setLevel(type: string, level: { value: number, name: string }): void;
  toJSON(): { [key: string]: string };
}

declare type TypeEnum = {
  BROWSER: string,
  CLIENT: string,
  DRIVER: string,
  PERFORMANCE: string,
  SERVER: string
};

declare type LevelEnum = {
  ALL: { value: number, name: string },
  DEBUG: { value: number, name: string },
  INFO: { value: number, name: string },
  WARNING: { value: number, name: string },
  SEVERE: { value: number, name: string },
  OFF: { value: number, name: string }
};

declare class WebDriverEntry {
  constructor(level: { value: number, name: string } | string, message: string, opt_timestamp?: number, opt_type?: string): WebDriverEntry;
  level: { value: number, name: string };
  message: string;
  timestamp: number;
  type: string;
  static fromClosureLogRecord(logRecord: any, opt_type?: string): WebDriverEntry;
  toJSON(): {
    level: string,
    message: string,
    timestamp: number,
    type: string
  }
}

declare type WebDriverLoggingLib = {
  Preferences: WebDriverLoggingPreferences,
  Type: TypeEnum,
  Level: LevelEnum,
  getLevel(nameOrValue: string): { value: number, name: string },
  getLevel(nameOrValue: number): { value: number, name: string },
  Entry: WebDriverEntry
};

// /////////////////

declare class WebDriverCancellationError {
  name: string;
  message: string
}

declare class WebDriverPromise<T> extends Promise<T> {
  constructor(resolver: (onFulfilled: (value: T | WebDriverPromise<T> | WebDriverThenable<T> | void)=> void, onRejected: (reason: any)=> void)=>void, opt_flow?: WebDriverControlFlow): WebDriverPromise<*>;
  constructor(opt_msg?: string): WebDriverPromise<T>;
  cancel(opt_reason?: string): void;
  isPending(): boolean;
  then<R>(opt_callback?: (value: T) => WebDriverPromise<R> | Promise<R> | R, opt_errback?: (error: any) => any): WebDriverPromise<R>;
  thenCatch<R>(errback: (error: any) => any): WebDriverPromise<R>;
  thenFinally<R>(callback: () => any): WebDriverPromise<R>;
}

declare class WebDriverThenable<T> extends WebDriverPromise<T> {
  static addImplementation(ctor: Function): void;
  static isImplementation(object: any): boolean;
}

declare class WebDriverDeferred<T> extends WebDriverPromise<T> {
  constructor(opt_flow?: WebDriverControlFlow): WebDriverDeferred<*>;
  static State_: {
    BLOCKED: number,
    PENDING: number,
    REJECTED: number,
    RESOLVED: number
  };
  promise: WebDriverPromise<T>;
  reject(opt_error?: any): void;
  errback(opt_error?: any): void;
  fulfill(opt_value?: T): void;
  removeAll(): void;
}

declare class WebDriverControlFlow extends WebDriverEventEmitter {
  constructor(): WebDriverControlFlow;
  static EventType: {
          IDLE: string;
          RESET: string;
          SCHEDULE_TASK: string;
          UNCAUGHT_EXCEPTION: string;
  };
  toString(): string;
  reset(): void;
  getSchedule(opt_includeStackTraces?: boolean): string;
  execute<T>(fn: ()=>(T | WebDriverPromise<T>) | Generator<any>, opt_description?: string): WebDriverPromise<T>;
  timeout(ms: number, opt_description?: string): WebDriverPromise<void>;
  wait<T>(condition: WebDriverPromise<T> | Function, opt_timeout?: number, opt_message?: string): WebDriverPromise<T>;
}

declare type WebDriverPromiseLib = {
  all(arr: WebDriverPromise<any>[]): WebDriverPromise<any[]>,
  asap(value: any, callback: Function, opt_errback?: Function): void,
  controlFlow(): WebDriverControlFlow,
  createFlow<R>(callback: (flow: WebDriverControlFlow) => R): WebDriverPromise<R>,
  isPromise(value: any): boolean,
  isGenerator(fn: Function): boolean,
  delayed(ms: number): WebDriverPromise<void>,
  filter<T>(arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any): WebDriverPromise<T[]>,
  filter<T>(arr: WebDriverPromise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): WebDriverPromise<T[]>,
  defer<T>(): WebDriverDeferred<T>,
  fulfilled<T>(opt_value?: T): WebDriverPromise<T>,
  map<T>(arr: T[] | WebDriverPromise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any): WebDriverPromise<T[]>,
  rejected(opt_reason?: any): WebDriverPromise<void>,
  checkedNodeCall<T>(fn: Function, ...var_args: any[]): WebDriverPromise<T>,
  consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): WebDriverPromise<T>,
  when<T, R>(value: T, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): WebDriverPromise<R>,
  when<T, R>(value: WebDriverPromise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): WebDriverPromise<R>,
  fullyResolved<T>(value: any): WebDriverPromise<T>,
  setDefaultFlow(flow: WebDriverControlFlow): void,
  CancellationError: WebDriverCancellationError,
  Thenable: WebDriverThenable<*>,
  Promise: WebDriverPromise<*>,
  Deferred: WebDriverDeferred<*>,
  ControlFlow: WebDriverControlFlow
}

// /////////////

declare class WebDriverFrame {
  constructor(context?: string, name?: string, alias?: string, path?: string): WebDriverFrame;
  getName(): string;
  getUrl(): string;
  getLine(): number;
  getColumn(): number;
  isAnonymous(): boolean;
  toString(): string;
}

declare class WebDriverSnapshot {
  constructor(opt_slice?: number): WebDriverSnapshot;
  getStacktrace(): WebDriverFrame[];
}

declare type WebDriverStacktraceLib = {
    Frame: WebDriverFrame,
    Snapshot: WebDriverSnapshot,
    format(error: any): any,
    get(): WebDriverFrame[],
    BROWSER_SUPPORTED: boolean
}

// //////////

declare class WebDriverCondition<T> {
  constructor(message: string, fn: (webdriver: WebDriverClass) => any): WebDriverCondition<T>;
  description(): string;
  fn(webdriver: WebDriverClass): any;
}

declare type WebDriverUntilLib = {
  Condition: WebDriverCondition<*>,
  ableToSwitchToFrame(frame: number | WebDriverElement | WebDriverLocator | ByHash | ((webdriver: WebDriverClass)=>WebDriverElement)): WebDriverCondition<boolean>;
  alertIsPresent(): WebDriverCondition<WebDriverAlert>;
  elementIsDisabled(element: WebDriverElement): WebDriverCondition<boolean>;
  elementIsEnabled(element: WebDriverElement): WebDriverCondition<boolean>;
  elementIsNotSelected(element: WebDriverElement): WebDriverCondition<boolean>;
  elementIsNotVisible(element: WebDriverElement): WebDriverCondition<boolean>;
  elementIsSelected(element: WebDriverElement): WebDriverCondition<boolean>;
  elementIsVisible(element: WebDriverElement): WebDriverCondition<boolean>;
  elementLocated(locator: WebDriverLocator | ByHash | Function): WebDriverCondition<WebDriverElement>;
  elementTextContains(element: WebDriverElement, substr: string): WebDriverCondition<boolean>;
  elementTextIs(element: WebDriverElement, text: string): WebDriverCondition<boolean>;
  elementTextMatches(element: WebDriverElement, regex: RegExp): WebDriverCondition<boolean>;
  elementsLocated(locator: WebDriverLocator | ByHash | Function): WebDriverCondition<WebDriverElement[]>;
  stalenessOf(element: WebDriverElement): WebDriverCondition<boolean>;
  titleContains(substr: string): WebDriverCondition<boolean>;
  titleIs(title: string): WebDriverCondition<boolean>;
  titleMatches(regex: RegExp): WebDriverCondition<boolean>;
}

// ///////////
// CLASSES

declare type location = {
  x: number,
  y: number
};
declare type offset = {
  x: number,
  y: number
};
declare type speed = {
  xspeed: number,
  yspeed: number
}

declare type size = {
  width: number,
  height: number
}

declare class WebDriverActionSequence {
  perform(): WebDriverPromise<void>;
  mouseMove(location: WebDriverElement, opt_offset?: location): WebDriverActionSequence;
  mouseMove(location: location): WebDriverActionSequence;
  mouseDown(opt_elementOrButton?: WebDriverElement, opt_button?: number): WebDriverActionSequence;
  mouseDown(opt_elementOrButton?: number): WebDriverActionSequence;
  mouseUp(opt_elementOrButton?: WebDriverElement, opt_button?: number): WebDriverActionSequence;
  mouseUp(opt_elementOrButton?: number): WebDriverActionSequence;
  dragAndDrop(element: WebDriverElement, location: WebDriverElement): WebDriverActionSequence;
  dragAndDrop(element: WebDriverElement, location: location): WebDriverActionSequence;
  click(opt_elementOrButton?: WebDriverElement, opt_button?: number): WebDriverActionSequence;
  click(opt_elementOrButton?: number): WebDriverActionSequence;
  doubleClick(opt_elementOrButton?: WebDriverElement, opt_button?: number): WebDriverActionSequence;
  doubleClick(opt_elementOrButton?: number): WebDriverActionSequence;
  keyDown(key: string): WebDriverActionSequence;
  keyUp(key: string): WebDriverActionSequence;
  sendKeys(...var_args: any[]): WebDriverActionSequence;
}

declare class WebDriverTouchSequence {
  constructor(driver: WebDriverClass): WebDriverTouchSequence;
  perform(): WebDriverPromise<void>;
  tap(elem: WebDriverElement): WebDriverTouchSequence;
  doubleTap(elem: WebDriverElement): WebDriverTouchSequence;
  longPress(elem: WebDriverElement): WebDriverTouchSequence;
  tapAndHold(location: location): WebDriverTouchSequence;
  move(location: location): WebDriverTouchSequence;
  release(location: location): WebDriverTouchSequence;
  scroll(offset: offset): WebDriverTouchSequence;
  scrollFromElement(elem: WebDriverElement, offset: offset): WebDriverTouchSequence;
  flick(speed: speed): WebDriverTouchSequence;
  flickElement(elem: WebDriverElement, offset: offset, speed: number): WebDriverTouchSequence;
}

declare class WebDriverAlert {
  getText(): WebDriverPromise<string>;
  accept(): WebDriverPromise<void>;
  dismiss(): WebDriverPromise<void>;
  sendKeys(text: string): WebDriverPromise<void>;
}

declare class WebDriverAlertPromise extends WebDriverAlert {
  cancel(opt_reason?: string): void;
  isPending(): boolean;
  then<R>(opt_callback?: (value: WebDriverAlert) => WebDriverPromise<R>, opt_errback?: (error: any) => any): WebDriverPromise<R>;
  then<R>(opt_callback?: (value: WebDriverAlert) => R, opt_errback?: (error: any) => any): WebDriverPromise<R>;
  thenCatch<R>(errback: (error: any) => any): WebDriverPromise<R>;
  thenFinally<R>(callback: () => any): WebDriverPromise<R>;
}

declare type proxyConfig = {
  proxyType: string,
  proxyAutoconfigUrl?: string,
  ftpProxy?: string,
  httpProxy?: string,
  sslProxy?: string,
  noProxy?: string
}

declare class WebDriverBuilder {
  constructor(): void;
  forBrowser(name: string, opt_version?: string, opt_platform?: string): WebDriverBuilder;
  build(): WebDriverClass;
  buildAsync(): WebDriverPromise<WebDriverClass>;
  getCapabilities(): WebDriverCapabilities;
  getServerUrl(): string;
  setAlertBehavior(behavior: string): WebDriverBuilder;
  // setChromeOptions(options: chrome.Options): WebDriverBuilder;
  setControlFlow(flow: WebDriverControlFlow): WebDriverBuilder;
  setEnableNativeEvents(enabled: boolean): WebDriverBuilder;
  // setFirefoxOptions(options: firefox.Options): WebDriverBuilder;
  setLoggingPrefs(prefs: WebDriverLoggingPreferences): WebDriverBuilder;
  setLoggingPrefs(prefs: { [key: string]: string }): WebDriverBuilder;
  setProxy(config: proxyConfig): WebDriverBuilder;
  setScrollBehavior(behavior: number): WebDriverBuilder;
  usingServer(url: string): WebDriverBuilder;
  withCapabilities(capabilities: WebDriverCapabilities): WebDriverBuilder;
  withCapabilities(capabilities: any): WebDriverBuilder;
}

declare class WebDriverCapabilities {
  constructor(opt_other?: any): WebDriverCapabilities;
  toJSON(): any;
  merge(other: WebDriverCapabilities): WebDriverCapabilities;
  merge(other: any): WebDriverCapabilities;
  set(key: string, value: any): WebDriverCapabilities;
  setLoggingPrefs(prefs: WebDriverLoggingPreferences): WebDriverCapabilities;
  setLoggingPrefs(prefs: { [key: string]: string }): WebDriverCapabilities;
  setProxy(proxy: proxyConfig): WebDriverCapabilities;
  setEnableNativeEvents(enabled: boolean): WebDriverCapabilities;
  setScrollBehavior(behavior: number): WebDriverCapabilities;
  setAlertBehavior(behavior: string): WebDriverCapabilities;
  get(key: string): any;
  has(key: string): boolean;
  static android(): WebDriverCapabilities;
  static chrome(): WebDriverCapabilities;
  static firefox(): WebDriverCapabilities;
  static ie(): WebDriverCapabilities;
  static ipad(): WebDriverCapabilities;
  static iphone(): WebDriverCapabilities;
  static opera(): WebDriverCapabilities;
  static phantomjs(): WebDriverCapabilities;
  static safari(): WebDriverCapabilities;
  static htmlunit(): WebDriverCapabilities;
  static htmlunitwithjs(): WebDriverCapabilities;
}

declare class WebDriverCommand {
  constructor(name: string): WebDriverCommand;
  getName(): string;
  setParameter(name: string, value: any): WebDriverCommand;
  setParameters(parameters: any): WebDriverCommand;
  getParameter(key: string): any;
  getParameters(): any;
}

declare class WebDriverEventEmitter {
  constructor(): WebDriverEventEmitter;
  emit(type: string, ...var_args: any[]): void;
  listeners(type: string): Array<{fn: Function; oneshot: boolean; scope: any;}>;
  addListener(type: string, listenerFn: Function, opt_scope?: any): WebDriverEventEmitter;
  once(type: string, listenerFn: any, opt_scope?: any): WebDriverEventEmitter;
  on(type: string, listenerFn: Function, opt_scope?: any): WebDriverEventEmitter;
  removeListener(type: string, listenerFn: Function): WebDriverEventEmitter;
  removeAllListeners(opt_type?: string): WebDriverEventEmitter;
}

declare class WebDriverFileDetector {
  constructor(): WebDriverFileDetector;
  handleFile(driver: WebDriverClass, path: string): WebDriverPromise<string>;
}

// WebDriver sub classes

declare class WebDriverNavigation {
  to(url: string): WebDriverPromise<void>;
  back(): WebDriverPromise<void>;
  forward(): WebDriverPromise<void>;
  refresh(): WebDriverPromise<void>;
}

declare type optionsCookie = {
  name: string,
  value: string,
  path?: string,
  domain?: string,
  secure?: boolean,
  expiry?: number
}

declare class WebDriverOptions {
  addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number): WebDriverPromise<void>;
  addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: Date): WebDriverPromise<void>;
  deleteAllCookies(): WebDriverPromise<void>;
  deleteCookie(name: string): WebDriverPromise<void>;
  getCookies(): WebDriverPromise<optionsCookie[]>;
  getCookie(name: string): WebDriverPromise<optionsCookie>;
  logs(): WebDriverLogs;
  timeouts(): WebDriverTimeouts;
  window(): WebDriverWindow;
}

declare class WebDriverTimeouts {
  implicitlyWait(ms: number): WebDriverPromise<void>;
  setScriptTimeout(ms: number): WebDriverPromise<void>;
  pageLoadTimeout(ms: number): WebDriverPromise<void>;
}

declare class WebDriverWindow {
  getPosition(): WebDriverPromise<location>;
  setPosition(x: number, y: number): WebDriverPromise<void>;
  getSize(): WebDriverPromise<size>;
  setSize(width: number, height: number): WebDriverPromise<void>;
  maximize(): WebDriverPromise<void>;
}

declare class WebDriverLogs {
 get(type: string): WebDriverPromise<WebDriverEntry[]>;
 getAvailableLogTypes(): WebDriverPromise<string[]>;
}

declare class WebDriverTargetLocator {
  activeElement(): WebDriverElementPromise;
  defaultContent(): WebDriverPromise<void>;
  frame(nameOrIndex: string): WebDriverPromise<void>;
  frame(nameOrIndex: number): WebDriverPromise<void>;
  window(nameOrHandle: string): WebDriverPromise<void>;
  alert(): WebDriverAlertPromise;
}

declare class WebDriverCommandExecutor {
  execute(command: WebDriverCommand, callback: (error: WebDriverError, responseObject: any) => any): void;
}

declare class WebDriverClass {
  constructor(session: WebDriverSession | WebDriverPromise<WebDriverSession>, executor: WebDriverCommandExecutor, opt_flow?: WebDriverControlFlow): WebDriverClass;
  static Navigation: WebDriverNavigation;
  static Options: WebDriverOptions;
  static Timeouts: WebDriverTimeouts;
  static Window: WebDriverWindow;
  static Logs: WebDriverLogs;
  static TargetLocator: WebDriverTargetLocator;
  static attachToSession(executor: WebDriverCommandExecutor, sessionId: string, opt_flow?: WebDriverControlFlow): WebDriverClass;
  static createSession(executor: WebDriverCommandExecutor, desiredCapabilities: WebDriverCapabilities, opt_flow?: WebDriverControlFlow): WebDriverClass;
  controlFlow(): WebDriverControlFlow;
  schedule<T>(command: WebDriverCommand, description: string): WebDriverPromise<T>;
  setFileDetector(detector: WebDriverFileDetector): void;
  getSession(): WebDriverPromise<WebDriverSession>;
  getCapabilities(): WebDriverPromise<WebDriverCapabilities>;
  quit(): WebDriverPromise<void>;
  actions(): WebDriverActionSequence;
  touchActions(): WebDriverTouchSequence;
  executeScript<T>(script: string, ...var_args: any[]): WebDriverPromise<T>;
  executeScript<T>(script: Function, ...var_args: any[]): WebDriverPromise<T>;
  executeAsyncScript<T>(script: string | Function, ...var_args: any[]): WebDriverPromise<T>;
  call<T>(fn: (...var_args: any[])=>(T | WebDriverPromise<T>), opt_scope?: any, ...var_args: any[]): WebDriverPromise<T>;
  wait<T>(condition: WebDriverPromise<T> | WebDriverCondition<T> | ((driver: WebDriverClass)=>T), timeout?: number, opt_message?: string): WebDriverPromise<T>;
  sleep(ms: number): WebDriverPromise<void>;
  getWindowHandle(): WebDriverPromise<string>;
  getAllWindowHandles(): WebDriverPromise<string[]>;
  getPageSource(): WebDriverPromise<string>;
  close(): WebDriverPromise<void>;
  get(url: string): WebDriverPromise<void>;
  getCurrentUrl(): WebDriverPromise<string>;
  getTitle(): WebDriverPromise<string>;
  findElement(locatorOrElement: WebDriverLocator | WebDriverElement | ByHash | Function): WebDriverElementPromise;
  isElementPresent(locatorOrElement: WebDriverLocator | ByHash | WebDriverElement | Function): WebDriverPromise<boolean>;
  findElements(locator: WebDriverLocator | ByHash | Function): WebDriverPromise<WebDriverElement[]>;
  takeScreenshot(): WebDriverPromise<string>;
  manage(): WebDriverOptions;
  navigate(): WebDriverNavigation;
  switchTo(): WebDriverTargetLocator;
}

declare class WebDriverElement {
  constructor(driver: WebDriverClass, id: WebDriverPromise<{ELEMENT: string}> | {ELEMENT: string}): WebDriverElement;
  serialize(): {ELEMENT: string} | WebDriverPromise<{ELEMENT: string}>;
  static Id: {ELEMENT: string};
  static ELEMENT_KEY: string;
  getDriver(): WebDriverClass;
  findElement(locator: WebDriverLocator | ByHash | Function): WebDriverElementPromise;
  isElementPresent(locator: WebDriverLocator | ByHash | Function): WebDriverPromise<boolean>;
  findElements(locator: WebDriverLocator | ByHash | Function): WebDriverPromise<WebDriverElement[]>;
  click(): WebDriverPromise<void>;
  sendKeys(...var_args: Array<string | WebDriverPromise<string>>): WebDriverPromise<void>;
  getTagName(): WebDriverPromise<string>;
  getCssValue(cssStyleProperty: string): WebDriverPromise<string>;
  getAttribute(attributeName: string): WebDriverPromise<string>;
  getText(): WebDriverPromise<string>;
  getSize(): WebDriverPromise<size>;
  getLocation(): WebDriverPromise<location>;
  isEnabled(): WebDriverPromise<boolean>;
  isSelected(): WebDriverPromise<boolean>;
  submit(): WebDriverPromise<void>;
  clear(): WebDriverPromise<void>;
  isDisplayed(): WebDriverPromise<boolean>;
  getOuterHtml(): WebDriverPromise<string>;
  getId(): WebDriverPromise<{ELEMENT: string}>;
  getRawId(): WebDriverPromise<string>;
  getInnerHtml(): WebDriverPromise<string>;
  static equals(a: WebDriverElement, b: WebDriverElement): WebDriverPromise<boolean>;
}

declare class WebDriverElementPromise extends WebDriverElement {
  cancel(opt_reason?: string): void;
  isPending(): boolean;
  then<R>(opt_callback?: (value: WebDriverElement) => WebDriverPromise<R>, opt_errback?: (error: any) => any): WebDriverPromise<R>;
  then<R>(opt_callback?: (value: WebDriverElement) => R, opt_errback?: (error: any) => any): WebDriverPromise<R>;
  thenCatch<R>(errback: (error: any) => any): WebDriverPromise<R>;
  thenFinally<R>(callback: () => any): WebDriverPromise<R>;
}

declare class WebDriverLocator {
  constructor(using: string, value: string): WebDriverLocator;
  static checkLocator(value: any): WebDriverLocator | Function;
  using: string;
  value: string;
  toString(): string;
}

declare class WebDriverSession {
  constructor(id: string, capabilities: any): WebDriverSession;
  getId(): string;
  getCapabilities(): WebDriverCapabilities;
  getCapability(key: string): any;
  toJSON(): string;
}

declare module 'selenium-webdriver' {
  // libs
  declare var By: WebDriverByLib;
  declare var error: WebDriverErrorLib;
  declare var logging: WebDriverLoggingLib;
  declare var promise: WebDriverPromiseLib;
  declare var stacktrace: WebDriverStacktraceLib;
  declare var until: WebDriverUntilLib;

  // classes
  declare var ActionSequence: typeof WebDriverActionSequence;
  declare var TouchSequence: typeof WebDriverTouchSequence;
  declare var Builder: typeof WebDriverBuilder;
  declare var Capabilities: typeof WebDriverCapabilities;
  declare var Command: typeof WebDriverCommand;
  declare var EventEmitter: typeof WebDriverEventEmitter;
  declare var FileDetector: typeof WebDriverFileDetector;
  declare var WebDriver: typeof WebDriverClass;
  declare var WebElement: typeof WebDriverElement;
  declare var WebElementPromise: typeof WebDriverElementPromise;
  declare var Locator: typeof WebDriverLocator;
  declare var Session: typeof WebDriverSession;

  // props
  declare var Button: ButtonEnum;
  declare var Key: KeyEnum;
  declare var Browser: BrowserEnum;
  declare var Capability: CapabilityEnum;
  declare var CommandName: CommandNameEnum;
}

// /// TESTING

declare module 'selenium-webdriver/testing' {
  declare type WebDriverTest = {
    describe(name: string, fn: Function): void;
    xdescribe(name: string, fn: Function): void;
    after(fn: Function): void;
    afterEach(fn: Function): void;
    before(fn: Function): void;
    beforeEach(fn: Function): void;
    it(name: string, fn: Function): void;
    iit(name: string, fn: Function): void;
    xit(name: string, fn: Function): void;
  }
  declare var exports: WebDriverTest
}

// /// CHROME

declare type optionsValues = {
    args: string[],
    binary?: string,
    detach: boolean,
    extensions: string[],
    localState?: any,
    logFile?: string,
    prefs?: any
};

declare type perfLoggingPrefs = {
  enableNetwork: boolean,
  enablePage: boolean,
  enableTimeline: boolean,
  tracingCategories: string,
  bufferUsageReportingInterval: number
};

declare class ChromeOptions {
  constructor(): ChromeOptions;
  static fromCapabilities(capabilities: WebDriverCapabilities): ChromeOptions;
  addArguments(...var_args: string[]): ChromeOptions;
  excludeSwitches(...var_args: string[]): ChromeOptions;
  addExtensions(...var_args: any[]): ChromeOptions;
  setChromeBinaryPath(path: string): ChromeOptions;
  detachDriver(detach: boolean): ChromeOptions;
  setUserPreferences(prefs: any): ChromeOptions;
  setLoggingPrefs(prefs: WebDriverLoggingPreferences): ChromeOptions;
  setPerfLoggingPrefs(prefs: perfLoggingPrefs): ChromeOptions;
  setLocalState(state: any): ChromeOptions;
  androidActivity(name: string): ChromeOptions;
  androidDeviceSerial(serial: string): ChromeOptions;
  androidChrome(): ChromeOptions;
  androidPackage(pkg: string): ChromeOptions;
  androidProcess(processName: string): ChromeOptions;
  androidUseRunningApp(useRunning: boolean): ChromeOptions;
  setChromeLogFile(path: string): ChromeOptions;
  setProxy(proxy: proxyConfig): ChromeOptions;
  toCapabilities(opt_capabilities?: WebDriverCapabilities): WebDriverCapabilities;
  toJSON(): optionsValues;
}

declare class ChromeServiceBuilder {
  constructor(opt_exe?: string): ChromeServiceBuilder;
  usingPort(port: number): ChromeServiceBuilder;
  setAdbPort(port: number): ChromeServiceBuilder;
  loggingTo(path: string): ChromeServiceBuilder;
  enableVerboseLogging(): ChromeServiceBuilder;
  setNumHttpThreads(n: number): ChromeServiceBuilder;
  setUrlBasePath(path: string): ChromeServiceBuilder;
  setStdio(config: string): ChromeServiceBuilder;
  setStdio(config: any[]): ChromeServiceBuilder;
  withEnvironment(env: { [key: string]: string }): ChromeServiceBuilder;
  build(): any;
}

declare module 'selenium-webdriver/chrome' {
  declare type WebDriverChrome = {
    Driver: WebDriverClass,
    Options: ChromeOptions,
    ServiceBuilder: ChromeServiceBuilder,
    getDefaultService(): any,
    setDefaultService(service: any): void
  }
  declare var exports: WebDriverChrome;
}

// /// FIREFOX

declare class FirefoxBinary {
  constructor(opt_exe?: string): FirefoxBinary;
  addArguments(...var_args: string[]): void;
  launch(profile: string): WebDriverPromise<any>;
  kill(): WebDriverPromise<void>;
}

declare class FirefoxOptions {
  constructor(): FirefoxOptions;
  setProfile(profile: string): FirefoxOptions;
  setProfile(profile: FirefoxProfile): FirefoxOptions;
  setBinary(binary: string): FirefoxOptions;
  setBinary(binary: FirefoxBinary): FirefoxOptions;
  setLoggingPreferences(prefs: WebDriverLoggingPreferences): FirefoxOptions;
  setProxy(proxy: proxyConfig): FirefoxOptions;
  toCapabilities(opt_remote?: any): WebDriverCapabilities;
}

declare class FirefoxProfile {
  constructor(opt_dir?: string): FirefoxProfile;
  addExtension(extension: string): void;
  setPreference(key: string, value: string): void;
  setPreference(key: string, value: number): void;
  setPreference(key: string, value: boolean): void;
  getPreference(key: string): any;
  getPort(): number;
  setPort(port: number): void;
  acceptUntrustedCerts(): boolean;
  setAcceptUntrustedCerts(value: boolean): void;
  setAssumeUntrustedCertIssuer(value: boolean): void;
  assumeUntrustedCertIssuer(): boolean;
  setNativeEventsEnabled(enabled: boolean): void;
  nativeEventsEnabled(): boolean;
  writeToDisk(opt_excludeWebDriverExt?: boolean): WebDriverPromise<string>;
  encode(): WebDriverPromise<string>;
}

declare module 'selenium-webdriver/firefox' {
  declare type WebDriverFirefox = {
    Binary: FirefoxBinary,
    Driver: WebDriverClass,
    Options: FirefoxOptions,
    Profile: FirefoxProfile
  }

  declare var exports: WebDriverFirefox;
}

// //// EXECUTORS

declare module 'selenium-webdriver/executors' {
  declare type WebDriverExecutors = {
    createExecutor(url: string): WebDriverCommandExecutor,
    createExecutor(url: WebDriverPromise<string>): WebDriverCommandExecutor
  }
  declare var exports: WebDriverExecutors
}
