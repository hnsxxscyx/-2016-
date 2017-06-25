+ function() {
    class chess {
        constructor() {
            this.x = 0
            this.y = 0
            this.degree = 0
        };
    }

    function randomPlace() {
        // 返回值使用ES6的解构
        let x = Math.floor(Math.random() * (11 - 1) + 1)
        let y = Math.floor(Math.random() * (11 - 1) + 1)
        if (x !== y) {
            return [x, y]
        } else {
            randomPlace()
        }
    }

    function startNewPiece() {
        let [x, y] = randomPlace()
        let ele = "<div id='chess'><div class='blue'></div></div>"
        document.querySelectorAll('td')[x * 10 + y].innerHTML = ele
        chess.x = x
        chess.y = y
        chess.degree = 0
    }


    function getDirection() {
        return document.querySelector('#chess').className
    }

    function move(direction) {
        let x = chess.x,
            y = chess.y,
            final = x * 10 + y
        if (direction === 'left') {
            y - 1 !== x ? final-- : final -= 2
        } else if (direction === 'right') {
            y + 1 !== x ? final++ : final += 2
        } else if (direction === 'back') {
            final += 11
        } else {
            final -= 11
        }
        if (final < 11) {
            final += 110
        }
        var $chess = document.querySelector('#chess')
        $chess.parentNode.removeChild($chess)
        let ele = "<div id='chess' class='" + direction + "'><div class='blue'></div></div>"
        document.querySelectorAll('td')[final].innerHTML = ele
        chess.y = final % 10
        chess.x = Math.floor(final / 10)
    }

    function transform(val) {
        let chessStyle = document.querySelector('#chess').style,
            degree = chess.degree
        switch (val) {
            case 'left':
                degree -= 90
                break
            case 'right':
                degree += 90
                break
            case 'back':
                degree += 180
                break
            default:
                break
        }
        chess.degree = degree
        chessStyle.setProperty('transform', 'rotate(' + degree + 'deg)')
    }

    // function getCommand() {
    //     return document.querySelector('#input').value
    // }
    startNewPiece()
    let monitorInput = document.getElementById('input').addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            let val = event.target.value.toLowerCase()
            if (val === 'go') {
                move(getDirection())
            } else {
                transform(val)
            }
        }
    })

}()