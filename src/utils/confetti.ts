import confetti from "canvas-confetti";

export function throwConfetti() {
    confetti({
        colors: ['#592bad', '#f0b03c'],
        particleCount: 100,
        spread: 200,
        angle: 60,
        origin: { x:0, y: 1 }
    });
    confetti({
        colors: ['#592bad', '#f0b03c'],
        particleCount: 100,
        spread: 200,
        angle: 120,
        origin: { x:1, y: 1 }
    });
}