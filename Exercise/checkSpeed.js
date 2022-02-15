// Speed Limit = 70
// 5 -> 1 Point
// Math.floor (1.3)
// 12 points -> suspended

function checkSpeed(speed) {
    const MAX_SPEED_LIMIT = 70;
    const KM_PER_POINT = 5;

    if (typeof speed !== 'number')
        return 'Not a Number';

    if (speed < 0)
        return 'Speed can\'t be a negative number';

    if (speed < (MAX_SPEED_LIMIT+KM_PER_POINT))
        return 'Ok';

    if (speed >= 75) {
        
        let EXCESS_SPEED = 0;
        
        EXCESS_SPEED = speed - MAX_SPEED_LIMIT;
        const total_points = Math.floor(EXCESS_SPEED / KM_PER_POINT);
        
        if(total_points >= 12)
            return 'License Suspended';
        
        return (`Point: ${total_points}`);
    }
}

console.log(checkSpeed(98));