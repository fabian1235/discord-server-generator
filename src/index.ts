import { Client, ClientOptions } from 'discord.js';
import EventEmitter from 'events';

import { ServerGeneratorManagerOptions } from './types';

/**
 *
 * @export
 * @class ServerGeneratorManager
 * @extends {EventEmitter}
 */
export class ServerGeneratorManager extends EventEmitter {
  /**
   * The configuration of the manager.
   *
   * @private
   * @type {ServerGeneratorManagerOptions}
   */
  public readonly options: ServerGeneratorManagerOptions;

  /**
   * The client that instantiated this Manager
   * @name ServerGeneratorManager#client
   * @type {Client}
   * @readonly
   */
  public readonly client: Client;

  /**
   * Creates an instance of ServerGeneratorManager.
   * @param {Client} client
   * @param {ServerGeneratorManagerOptions} options
   */
  constructor(client: Client, options: ServerGeneratorManagerOptions) {
    super();
  }
}

/**
 * A wrapper class for {@link Client} that carries a {@link ServerGeneratorManager} instance.
 *
 * @export
 * @class ServerGeneratorClient
 * @extends {Client}
 */
export class ServerGeneratorClient extends Client {
  /**
   * The mailbox manager.
   *
   * @type {ServerGeneratorManager}
   */
  public readonly serverGeneratorManager: ServerGeneratorManager;

  /**
   *Creates an instance of MailboxClient.
   * @param {ClientOptions} [options]
   * @param {ServerGeneratorManagerOptions} [serverGeneratorOptions]
   * @memberof MailboxClient
   */
  constructor(serverGeneratorOptions: ServerGeneratorManagerOptions, options?: ClientOptions) {
    super(options);

    this.serverGeneratorManager = new ServerGeneratorManager(this, serverGeneratorOptions);
  }
}

/**
 * Emitted when 
 * @event ServerGeneratorManager#
 * @param {Type} param
 * @example
 * manager.on('', () => {
 *  console.log(``);
 * });
 */
