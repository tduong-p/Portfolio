const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');

var temp_i = 0;
var temp_j = 0;

class Board {
    constructor(cellWidth, row, col) {
		this.cellWidth = cellWidth;
		this.row = row;
		this.col = col;

		canvas.width = this.col * this.cellWidth;
		canvas.height = this.row * this.cellWidth;

        this.data = [];
        this.create2DArray();
        this.xTurn = true;
        this.xTurn_1_2 = 1;
    }


    create2DArray() {
        for (let i = 0; i < this.row; i++) {
            this.data[i] = []
            for (let j = 0; j < this.col; j++) {
                this.data[i][j] = 0;
            }
        }
        console.log(this.data);
    }


    drawGrid() {
        c.lineWidth = 1;
        for(let i = 0; i <= this.row; i++) {
            c.beginPath();
            if(i == 0 || i == this.row) {
                c.strokeStyle = '#000';
            } else {
                c.strokeStyle = '#777';
            }
            c.moveTo(0, i * this.cellWidth);
            c.lineTo(this.col * this.cellWidth, i * this.cellWidth);
            c.stroke();
            c.closePath();
        }
    
        for(let j = 0; j <= this.col; j++) {
            c.beginPath();
            if(j == 0 || j == this.col) {
                c.strokeStyle = '#000';
            } else {
                c.strokeStyle = '#777';
            }
            c.moveTo(j * this.cellWidth, 0);
            c.lineTo(j * this.cellWidth, this.row * this.cellWidth);
            c.stroke();
            c.closePath();
        }
    }   


    handleClick(e) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (x >= 0 && y >= 0 && this.data[i][j] === 0) {
            if (this.xTurn === true) {
                this.data [i][j] = 1;
            }
            else {
                this.data [i][j] = 2;
            }
            this.xTurn = !this.xTurn
        }

        

    }
    
    // WIN CHECK

    myFunction() {
        var x = document.getElementById("myimg");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    
    winCheck_Un(e, n) {
        let x = e.offsetX;
        let y = e.offsetY;

        let j = Math.floor(x / this.cellWidth);
        let i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i+1+n][j] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i+1+n][j] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_Up(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        
        if (n === undefined) {
            var n = 0;
        }

        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i-1-n][j] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i-1-n][j] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_L(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i][j-1-n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i][j-1-n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_R(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i][j+1+n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i][j+1+n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }


    winCheck_UpR(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i-1-n][j+1+n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i-1-n][j+1+n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_UnL(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i+1+n][j-1-n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i+1+n][j-1-n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }


    winCheck_UpL(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i-1-n][j-1-n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i-1-n][j-1-n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }

    winCheck_UnR(e, n) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        if (n === undefined) {
            var n = 0;
        }


        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }

        if (this.data [i+1+n][j+1+n] === 1 && this.xTurn_1_2 === 1) {
            console.log('X checked');
            return 1;
        }
        else if (this.data [i+1+n][j+1+n] === 2 && this.xTurn_1_2 === 2) {
            console.log('O checked');
            return 2;
        }
        else {
            return undefined;
        }
    }



    winCheck_main(e) {
        var x = e.offsetX;
        var y = e.offsetY;

        var j = Math.floor(x / this.cellWidth);
        var i = Math.floor(y / this.cellWidth);

        var count = 0;
        if (this.xTurn === true) {
            this.xTurn_1_2 = 2;
        }
        else if (this.xTurn === false) {
            this.xTurn_1_2 = 1;
        }
        var temp_count = 0;
        if (this.winCheck_Un(e) === this.xTurn_1_2 || this.winCheck_Up(e) === this.xTurn_1_2) {
            console.log('check2')
            for ( let n = 0; this.winCheck_Up(e, n) === this.xTurn_1_2 && n <= 4; n++) {
                if (this.winCheck_Up(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('up checked. end ' + temp_count)
                    break;
                }
            }
            if (this.winCheck_Un(e, n) === this.xTurn_1_2) {
                
            for ( var n = 0; n <= 4; ++n) {
                
                if (this.winCheck_Un(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('un checked. end ' + temp_count);
                    break;
                }
            }
            }
            if (temp_count === 4) {
                console.log('win');
                if (this.xTurn_1_2 === 1) {
                setTimeout(function(){                 if(alert('X won!')){}
                else window.location.reload(); }, 200);
                }
                else {
                    setTimeout(function(){                 if(alert('O won!')){}
                    else window.location.reload(); }, 200);
                }
            }
            else {
                var temp_count = 0;
                return; 
            }
        }






        if (this.winCheck_L(e) === this.xTurn_1_2 || this.winCheck_R(e) === this.xTurn_1_2) {
            console.log('check2')
            for ( let n = 0; this.winCheck_L(e, n) === this.xTurn_1_2 && n <= 4; n++) {
                if (this.winCheck_L(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('up checked. end ' + temp_count)
                    break;
                }
            }
            if (this.winCheck_R(e, n) === this.xTurn_1_2) {
                
            for ( var n = 0; n <= 4; ++n) {
                
                if (this.winCheck_R(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('un checked. end ' + temp_count);
                    break;
                }
            }
            }
            if (temp_count === 4) {
                console.log('win');
                if (this.xTurn_1_2 === 1) {
                setTimeout(function(){                 if(alert('X won!')){}
                else window.location.reload(); }, 200);
                }
                else {
                    setTimeout(function(){                 if(alert('O won!')){}
                    else window.location.reload(); }, 200);
                }
            }
            else {
                var temp_count = 0;
                return; 
            }
        }





        if (this.winCheck_UpR(e) === this.xTurn_1_2 || this.winCheck_UnL(e) === this.xTurn_1_2) {
            console.log('check2')
            for ( let n = 0; this.winCheck_UpR(e, n) === this.xTurn_1_2 && n <= 4; n++) {
                if (this.winCheck_UpR(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('up checked. end ' + temp_count)
                    break;
                }
            }
            if (this.winCheck_UnL(e, n) === this.xTurn_1_2) {
                
            for ( var n = 0; n <= 4; ++n) {
                
                if (this.winCheck_UnL(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('un checked. end ' + temp_count);
                    break;
                }
            }
            }
            if (temp_count === 4) {
                console.log('win');
                if (this.xTurn_1_2 === 1) {
                setTimeout(function(){                 if(alert('X won!')){}
                else window.location.reload(); }, 200);
                }
                else {
                    setTimeout(function(){                 if(alert('O won!')){}
                    else window.location.reload(); }, 200);
                }
            }
            else {
                var temp_count = 0;
                return; 
            }
        }



        if (this.winCheck_UpL(e) === this.xTurn_1_2 || this.winCheck_UnR(e) === this.xTurn_1_2) {
            console.log('check2')
            for ( let n = 0; this.winCheck_UpL(e, n) === this.xTurn_1_2 && n <= 4; n++) {
                if (this.winCheck_UpL(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('up checked. end ' + temp_count)
                    break;
                }
            }
            if (this.winCheck_UnR(e, n) === this.xTurn_1_2) {
                
            for ( var n = 0; n <= 4; ++n) {
                
                if (this.winCheck_UnR(e, n) === this.xTurn_1_2) {
                    temp_count++;
                    console.log('a');
                    continue;
                }
                else {
                    var count = n;
                    console.log('un checked. end ' + temp_count);
                    break;
                }
            }
            }
            if (temp_count === 4) {
                console.log('win');
                if (this.xTurn_1_2 === 1) {
                setTimeout(function(){                 if(alert('X won!')){}
                else window.location.reload(); }, 200);
                }
                else {
                    setTimeout(function(){                 if(alert('O won!')){}
                    else window.location.reload(); }, 200);
                }
            }
            else {
                var temp_count = 0;
                return; 
            }
        }
    }





    redrawXO() {
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data.length; j++) {
                if (this.data[i][j] === 1) {
                    this.redrawX(i, j);
                } else if (this.data[i][j] === 2) {
                    this.redrawO(i, j);
                }
            }
        }
    }

    redrawX(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.strokeStyle = "yellow";
        c.lineWidth = 3;
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.2);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.8);
        c.stroke();
        c.closePath();
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.8);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.2);
        c.stroke();
        c.closePath();
    }
    
    redrawO(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.beginPath();
        c.strokeStyle = "yellow";
        c.lineWidth = 3;
        c.arc(
            x + this.cellWidth / 2,
            y + this.cellWidth / 2,
            this.cellWidth * 0.3,
            0,
            2 * Math.PI
        );
        c.stroke();
        c.closePath();
    }


    drawXO() {
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data.length; j++) {
                if (this.data[i][j] === 1) {
                    this.drawX(i, j);
                } else if (this.data[i][j] === 2) {
                    this.drawO(i, j);
                }
            }
        }
    }


    drawX(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.strokeStyle = "#123456";
        c.lineWidth = 3;
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.2);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.8);
        c.stroke();
        c.closePath();
    
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.8);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.2);
        c.stroke();
        c.closePath();
    }
    
    drawO(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;
    
        c.beginPath();
        c.strokeStyle = "red";
        c.lineWidth = 3;
        c.arc(
            x + this.cellWidth / 2,
            y + this.cellWidth / 2,
            this.cellWidth * 0.3,
            0,
            2 * Math.PI
        );
        c.stroke();
        c.closePath();
    }
}

const board = new Board(40, 40, 40);
board.drawGrid();   
var count = 0;
canvas.addEventListener ('click', function(e) {
    board.handleClick(e);
    board.winCheck_main(e);
})

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
    board.drawGrid();
    board.drawXO();
}

animate()
