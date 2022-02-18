import { Properties } from "csstype";

function setStyle(elem: HTMLElement, obj: Properties){
    Object.assign(elem.style, obj);
}

interface PlayerAdapterProps{
    src: string;
}

class PlayerAdapter{
    private readonly video: HTMLVideoElement;
    constructor(props: PlayerAdapterProps) {
        this.video = window.document.createElement("video");

        setStyle(this.video, {
            width: "100%",
            height: "100%",
        });

        this.video.setAttribute("src", props.src);
    }

    public onError(){

    }
}

interface PlayerProps{

}

class Player{
    private player: HTMLDivElement;
    constructor(props: PlayerProps) {
        this.player = window.document.createElement("div");

    }

    private videoEventInit(){

    }
}
