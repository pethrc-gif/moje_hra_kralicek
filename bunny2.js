// bunny.js
class Bunny {
    constructor(groundY) {
        this.groundY = groundY;
        this.width = 50;
        this.height = 50;
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
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        
        // Jemné pohupování celého těla
        const hop = this.isGrounded ? Math.sin(this.frame * 0.2) * 4 : 0;
        ctx.translate(0, hop);

        // 1. UŠI (Větší a s vnitřkem)
        ctx.fillStyle = '#ffffff'; // Vnější ucho
        // Levé ucho
        ctx.beginPath();
        ctx.ellipse(-12, -25, 8, 22, -0.1, 0, Math.PI * 2);
        ctx.fill();
        // Pravé ucho
        ctx.beginPath();
        ctx.ellipse(12, -25, 8, 22, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Růžové vnitřky uší
        ctx.fillStyle = '#ffc8dd';
        ctx.beginPath();
        ctx.ellipse(-12, -25, 4, 15, -0.1, 0, Math.PI * 2);
        ctx.ellipse(12, -25, 4, 15, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // 2. TĚLO (Buculaté)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 10, 22, 0, Math.PI * 2);
        ctx.fill();

        // 3. OČI (Velké černé s odleskem)
        ctx.fillStyle = '#2b2d42';
        ctx.beginPath();
        ctx.arc(8, 5, 4, 0, Math.PI * 2); // Pravé oko
        ctx.arc(-8, 5, 4, 0, Math.PI * 2); // Levé oko
        ctx.fill();
        
        // Odlesk v očích
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(9, 4, 1.5, 0, Math.PI * 2);
        ctx.arc(-7, 4, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // 4. ČUMÁČEK A TVÁŘIČKY
        ctx.fillStyle = '#ffafcc';
        ctx.beginPath();
        ctx.arc(0, 10, 2, 0, Math.PI * 2); // Čumáček
        ctx.fill();
        // Tvářičky (jemné)
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(14, 10, 5, 0, Math.PI * 2);
        ctx.arc(-14, 10, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // 5. MAŠLE (Stylová pod bradou / u krku)
        ctx.fillStyle = '#d90429';
        // Levá smyčka
        ctx.beginPath();
        ctx.ellipse(-8, 20, 8, 5, -0.5, 0, Math.PI * 2);
        ctx.fill();
        // Pravá smyčka
        ctx.beginPath();
        ctx.ellipse(8, 20, 8, 5, 0.5, 0, Math.PI * 2);
        ctx.fill();
        // Střed mašle
        ctx.fillStyle = '#a4161a';
        ctx.beginPath();
        ctx.arc(0, 20, 3.5, 0, Math.PI * 2);
        ctx.fill();

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