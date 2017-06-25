+ function() {
    class Chess {
        constructor(x, y, deg) {
            this.x = x
            this.y = y
            this.degree = deg
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
    }


    function getDirection() {
        let direction = '',
            degree = chess.degree
        while (degree < 0) {
            degree += 360
        }
        if (degree !== 0) {
            if (degree % 360 === 270) {
                direction = 'left'
            } else if (degree % 360 === 180) {
                direction = 'back'
            } else if (degree % 90 === 0) {
                direction = 'right'
            }
        }
        return direction
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
        } else if (final > 120) {
            final -= 110
        }
        console.log(final)
        var $chess = document.querySelector('#chess')
        let ele = document.querySelectorAll('td')[x * 10 + y].innerHTML
        $chess.parentNode.removeChild($chess)
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
        console.log(degree)
        chessStyle.setProperty('transform', 'rotate(' + degree + 'deg)')
    }

    // function getCommand() {
    //     return document.querySelector('#input').value
    // }
    let chess = new Chess(0, 0, 0)
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