declare function setStyle(elem: HTMLElement, obj: CSSStyleSheet): void;
interface PlayerAdapterProps {
}
declare class PlayerAdapter {
    private video;
    constructor(props: PlayerAdapterProps);
}
interface PlayerProps {
}
declare class Player {
    private player;
    constructor(props: PlayerProps);
    private videoEventInit;
}
