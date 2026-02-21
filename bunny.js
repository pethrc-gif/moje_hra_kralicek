// bunny.js
class Bunny {
    constructor(groundY) {
        this.groundY = groundY;
        this.width = 45;
        this.height = 45;
        this.x = 100;
        this.y = groundY - this.height;
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.7;
        this.jumpPower = -15;
        this.doubleJumpPower = -12;
        this.speed = 5.5;
        this.isGrounded = false;
        this.canDoubleJump = false;
        this.frame = 0;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        const hop = this.isGrounded ? Math.sin(this.frame * 0.2) * 3 : 0;

        // Uši
        ctx.fillStyle = '#ffafcc';
        ctx.beginPath();
        ctx.ellipse(15, -10 + hop, 6, 15, -0.1, 0, Math.PI * 2);
        ctx.ellipse(25, -10 + hop, 6, 15, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // MAŠLE
        ctx.fillStyle = '#d90429';
        ctx.beginPath(); ctx.moveTo(20, -2 + hop); ctx.lineTo(12, -8 + hop); ctx.lineTo(12, 4 + hop); ctx.fill();
        ctx.beginPath(); ctx.moveTo(20, -2 + hop); ctx.lineTo(28, -8 + hop); ctx.lineTo(28, 4 + hop); ctx.fill();
        ctx.fillStyle = '#a4161a'; ctx.fillRect(18, -4 + hop, 4, 4);

        // Tělo a hlava
        ctx.fillStyle = 'white'; ctx.beginPath(); ctx.arc(-5, 30 + hop, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.roundRect(0, 10 + hop, 45, 30, 15); ctx.fill();
        ctx.beginPath(); ctx.arc(35, 15 + hop, 15, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#2b2d42'; ctx.beginPath(); ctx.arc(42, 12 + hop, 2.5, 0, Math.PI * 2); ctx.fill();

        ctx.restore();
        this.frame++;
    }

    jump() {
        if (this.isGrounded) {
            this.vy = this.jumpPower;
            this.isGrounded = false;
            this.canDoubleJump = true;
        } else if (this.canDoubleJump) {
            this.vy = this.doubleJumpPower;
            this.canDoubleJump = false;
        }
    }

    reset(groundY) {
        this.x = 100;
        this.y = groundY - this.height;
        this.vx = 0;
        this.vy = 0;
        this.isGrounded = false;
    }
}