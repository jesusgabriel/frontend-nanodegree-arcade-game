// Enemies our player must avoid
var Enemy = function(x, y) {
    this.x = x
    this.y = y
    this.speed = Math.floor(Math.random() * 60) + 100
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
var Player = function() {
    this.x = 200
    this.y = 400
    this.sprite = 'images/char-boy.png';
}
var GemGreen = function(x,y){
  this.x = 300
  this.y = 400
  this.sprite = 'images/Gem Green.png';
}
GemGreen.prototype.update = function() {}
GemGreen.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function() {
    if (this.x > 410) {
        this.x = 410
    }
    if (this.x < 3) {
        this.x = 0
    }
    if (this.y < 0) {
        this.y = 410
    }
    if (this.y > 410) {
        this.y = 410
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(x) {
        if (x === 'left') {
            this.x = this.x - 20
        }
        if (x === 'right') {
            this.x = this.x + 20
        }
        if (x === 'up') {
            this.y = this.y - 20
        }
        if (x === 'down') {
            this.y = this.y + 20
        }
      }

        // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        Enemy.prototype.update = function(dt) {
            this.x += this.speed * dt
            if (this.x > 505) {
                this.x = -100
            }


            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
        };

        // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };
        var allEnemies = [];
        var player = new Player;
        var gemgreen = new GemGreen;
        var gemgreen = [];
        allEnemies.push(new Enemy(20, 50))
        allEnemies.push(new Enemy(300, 150))
        allEnemies.push(new Enemy(100, 230))
        gemgreen.push(new GemGreen(100, 200))





        // Now write your own player class
        // This class requires an update(), render() and
        // a handleInput() method.


        // Now instantiate your objects.
        // Place all enemy objects in an array called allEnemies
        // Place the player object in a variable called player



        // This listens for key presses and sends the keys to your
        // Player.handleInput() method. You don't need to modify this.
        document.addEventListener('keyup', function(e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            player.handleInput(allowedKeys[e.keyCode]);
        });
