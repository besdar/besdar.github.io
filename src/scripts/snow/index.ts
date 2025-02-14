import "./index.css";

function debounce(func: () => void, wait = 1000) {
    let timeout: number | undefined;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min)) + min;
}

type SnowFlake = {
    xpos: number;
    ypos: number;
    radius: number;
    opacity: number;
    speed: number;
    dx: number;
};

class Snowfall {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    snowCounter = 0;
    speedMultiplier = 0;
    snowflakes: SnowFlake[] = [];
    animationFrameId: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Failed to get 2D context");
        }

        this.context = context;

        this.resize();
    }

    #createSnowflake(): SnowFlake {
        const radius = getRandomInt(1, 8);

        return {
            xpos: getRandomInt(0, this.canvas.width),
            ypos: getRandomInt(-this.canvas.height, 0),
            radius: radius,
            opacity: radius * 10,
            speed: this.speedMultiplier * (radius / 6),
            dx: (Math.random() - 0.5) * 2,
        };
    }

    #drawSnowflake(flake: SnowFlake) {
        this.context.beginPath();
        this.context.arc(flake.xpos, flake.ypos, flake.radius, 0, Math.PI * 2);
        this.context.fillStyle = `hsl(202.33deg 53.09% 84.12% / ${flake.opacity}%)`;
        this.context.fill();
    }

    #updateSnowflake(flake: SnowFlake) {
        flake.xpos += flake.dx;
        flake.ypos += flake.speed;

        if (flake.ypos - flake.radius > this.canvas.height) {
            flake.ypos = getRandomInt(-this.canvas.height, 0);
            flake.xpos = getRandomInt(0, this.canvas.width);
        }
    }

    start() {
        this.snowCounter = 100;
        this.speedMultiplier = 1;

        this.stop();
        this.snowflakes = Array.from({ length: this.snowCounter }, () => this.#createSnowflake());
        this.#animate();
    }

    #animate() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snowflakes.forEach((flake) => {
            this.#updateSnowflake(flake);
            this.#drawSnowflake(flake);
        });

        this.animationFrameId = requestAnimationFrame(this.#animate.bind(this));
    }

    stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = 0;
        }

        this.snowflakes = [];
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setCounter(newCount: number) {
        this.snowCounter = newCount;
        this.snowflakes = Array.from({ length: this.snowCounter }, () => this.#createSnowflake());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

export function initSnow() {
    const canvas = document.getElementById("snow-canvas") as HTMLCanvasElement;
    const snowfall = new Snowfall(canvas);

    snowfall.start();

    window.addEventListener(
        "resize",
        debounce(() => snowfall.resize(), 150),
    );

    window.onbeforeprint = () => snowfall.stop();
    window.onafterprint = () => snowfall.start();
}
