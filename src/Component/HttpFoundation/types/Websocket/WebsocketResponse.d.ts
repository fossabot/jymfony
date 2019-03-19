declare namespace Jymfony.Component.HttpFoundation.Websocket {
    import EventDispatcherInterface = Jymfony.Component.EventDispatcher.EventDispatcherInterface;
    import EventSubscriberInterface = Jymfony.Component.EventDispatcher.EventSubscriberInterface;

    export class WebsocketResponse extends mix(Response, EventSubscriberInterface) {
        public static readonly CLOSE_NORMAL = 1000;
        public static readonly CLOSE_SHUTDOWN = 1001;
        public static readonly CLOSE_ERROR = 1002;

        public static readonly RFC6455_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

        private _socket: any;
        private _connected: boolean;
        private _frameBuffer: FrameBuffer;
        private _websocket: Websocket;
        private _eventDispatcher?: EventDispatcherInterface;

        /**
         * Constructor.
         */
        __construct(websocket: Websocket, headers?: Record<string, string | string[]>): void;
        constructor(websocket: Websocket, headers?: Record<string, string | string[]>);

        /**
         * Subscribe to the given event dispatcher.
         */
        public /* writeonly */ eventDispatcher: EventDispatcherInterface;

        /**
         * @inheritdoc
         */
        prepare(request: Request): WebsocketResponse;

        /**
         * @inheritdoc
         */
        sendResponse(req: any, res: any): void;

        /**
         * Closes the websocket connection.
         */
        closeConnection(reason: number | string): Promise<void>;

        /**
         * Called upon http server termination.
         */
        onTerminate(): Promise<void>;

        /**
         * @inheritdoc
         */
        static getSubscribedEvents(): Record<string, string|[string, number]|[string, number][]>;

        /**
         * Handles incoming data from websocket.
         */
        private _handleWebSocketData(data: Buffer): Promise<void>;

        /**
         * Sends a ping request.
         */
        private _sendPing(): Promise<void>;

        /**
         * Sends a pong in response to a ping request.
         */
        private _sendPong(message: Message): Promise<void>;

        /**
         * Sends a frame.
         */
        private _sendFrame(frame: Frame): Promise<void>;
    }

}
