let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;
let radius: number;

export const drawClock = ( cv: HTMLCanvasElement ): void => {
    canvas = cv;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    window.requestAnimationFrame( draw );
}

const draw = (): void => {
    width = canvas.width;
    height = canvas.height;
    radius = width / 2;

    ctx.clearRect( 0, 0, width, height );
    ctx.save();
    ctx.translate( radius, radius );
    ctx.scale( 0.95, 0.95 );
    drawFace( ctx, radius );
    drawNumbers( ctx, radius );
    drawTime( ctx, radius );
    ctx.restore();

    window.requestAnimationFrame( draw );
}

const drawFace = ( ctx: CanvasRenderingContext2D, radius: number ): void => {

    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    // Draw outer silver circle
    ctx.beginPath();
    ctx.arc( 0, 0, radius, 0, 2 * Math.PI );
    ctx.fillStyle = '#C0C0C0';
    ctx.fill();

    // Create a gradient for the 3D effect
    let grad: CanvasGradient = ctx.createRadialGradient( 0, 0, radius * 0.95, 0, 0, radius * 1.05 );
    grad.addColorStop( 0, '#C0C0C0' );
    grad.addColorStop( 0.5, 'white' );
    grad.addColorStop( 1, '#C0C0C0' );
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    // Draw inner maroon circle
    ctx.beginPath();
    ctx.arc( 0, 0, radius * 0.9, 0, 2 * Math.PI );
    ctx.fillStyle = '#800000';
    ctx.fill();

    // Draw center cap
    ctx.beginPath();
    ctx.arc( 0, 0, radius * 0.09, 0, 2 * Math.PI );
    ctx.fillStyle = '#333';
    ctx.fill();

    // Draw tick marks
    for ( let i: number = 0; i < 60; i++ ) {
        let angle: number = ( i * Math.PI ) / 30;
        let tickStart: number = radius * 0.85;
        let tickEnd: number = radius * 0.9;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.lineWidth = ( i % 5 === 0 ) ? 3 : 1;
        ctx.moveTo( tickStart * Math.cos( angle ), tickStart * Math.sin( angle ));
        ctx.lineTo( tickEnd * Math.cos( angle ), tickEnd * Math.sin( angle ));
        ctx.stroke();
    }
}

const drawNumbers = ( ctx: CanvasRenderingContext2D, radius: number ): void => {
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.font = `${ radius * 0.18 }px BSMT`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#C0C0C0'; // Silver color for numbers

    // const numerals: string[] = [ '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII' ];

    for ( let num: number = 1; num <= 12; num++ ) {
        const ang: number = num * Math.PI / 6;
        ctx.rotate( ang );
        ctx.translate( 0, -radius * 0.75 );
        ctx.rotate( -ang );
        ctx.fillText( num.toString(), 0, 0 );
        ctx.rotate( ang );
        ctx.translate( 0, radius * 0.75 );
        ctx.rotate( -ang );
    }
}

const drawTime = ( ctx: CanvasRenderingContext2D, radius: number ): void => {
    const now: Date = new Date();
    const hour: number = now.getHours() % 12;
    const minute: number = now.getMinutes();
    const second: number = now.getSeconds();

    // Hour hand
    let hourPos: number = ( hour + minute / 60 ) * Math.PI / 6;
    drawHand( ctx, hourPos, radius * 0.5, radius * 0.05 );

    // Minute hand
    let minutePos: number = ( minute + second / 60 ) * Math.PI / 30;
    drawHand( ctx, minutePos, radius * 0.8, radius * 0.035 );

    // Second hand
    let secondPos: number = second * Math.PI / 30;
    drawHand( ctx, secondPos, radius * 0.9, radius * 0.015, '#FF0000' );

    // Draw center cap
    ctx.beginPath();
    ctx.arc( 0, 0, radius * 0.055, 0, 2 * Math.PI );
    ctx.fillStyle = '#F00';
    ctx.fill();
}

const drawHand = ( ctx: CanvasRenderingContext2D, pos: number, length: number, width: number, color: string = '#333' ):void => {
    ctx.save();
    ctx.rotate( pos );
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.moveTo( 0, 20 );
    ctx.lineTo( 0, -length );
    ctx.stroke();
    ctx.restore();
}