
function processRoverCommands(x, y, direction, commands, maxX, maxY) {
    
    function turnLeft(direction) {
        switch (direction) {
            case 'N': return 'W';
            case 'W': return 'S';
            case 'S': return 'E';
            case 'E': return 'N';
        }
    }

    
    function turnRight(direction) {
        switch (direction) {
            case 'N': return 'E';
            case 'E': return 'S';
            case 'S': return 'W';
            case 'W': return 'N';
        }
    }


    function moveForward(x, y, direction) {
        switch (direction) {
            case 'N': return [x, Math.min(y + 1, maxY)];
            case 'E': return [Math.min(x + 1, maxX), y];
            case 'S': return [x, Math.max(y - 1, 0)];
            case 'W': return [Math.max(x - 1, 0), y];
        }
    }

   
    for (let command of commands) {
        if (command === 'L') {
            direction = turnLeft(direction);
        } else if (command === 'R') {
            direction = turnRight(direction);
        } else if (command === 'M') {
            [x, y] = moveForward(x, y, direction);
        }
    }

    return `${x} ${y} ${direction}`;
}


function marsRovers(input) {
    const lines = input.trim().split('\n');
    const [maxX, maxY] = lines[0].split(' ').map(Number);
    const result = [];

    for (let i = 1; i < lines.length; i += 2) {
        const [x, y, direction] = lines[i].split(' ');
        const commands = lines[i + 1];
        const finalPosition = processRoverCommands(parseInt(x), parseInt(y), direction, commands, maxX, maxY);
        result.push(finalPosition);
    }

    return result.join('\n');
}


const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

console.log(marsRovers(input));
