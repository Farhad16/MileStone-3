function feetToMile(feet) {
    if (feet >= 0) {
        var miles = feet / 5280;
        return miles;
    }
    else
        return "Distance cannot be negative."

}


function woodCalculator(chair, table, cot) {
    if (chair < 0 || table < 0 || cot < 0) {
        return "None of them cannot be a negative number";
    }
    else {
        var totalWood = (chair * 1 + table * 3 + cot * 5);
    }
    return totalWood;
}


function brickCalculator(numberOfFloor) {
    var totalBricks,
        bricksupto10Floor = 10 * 15 * 1000,
        bricks11To20Floor = 10 * 12 * 1000;

    if (numberOfFloor > 0) {
        if (numberOfFloor <= 10) {
            totalBricks = numberOfFloor * 15 * 1000;
            return totalBricks;
        }
        else if (numberOfFloor >= 11 && numberOfFloor <= 20) {
            totalBricks = bricksupto10Floor + (numberOfFloor - 10) * 12 * 1000;
            return totalBricks;
        }
        else {
            totalBricks = bricksupto10Floor + bricks11To20Floor + (numberOfFloor - 20) * 10 * 1000;;
            return totalBricks;
        }
    }
    else {
        return "Floor cannot be negative or equal zero"
    }

}


function tinyFriends(friends) {
    var tinyNameLength = friends[0].length;
    if (friends === undefined || friends.length == 0) {
        return "Friends does not exist"
    }

    else {
        for (let i = 0; i < friends.length; i++) {
            var currentNameLength = friends[i].length;
            if (currentNameLength < tinyNameLength) {
                tinyNameLength = currentNameLength;
            }
        }
    }
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == tinyNameLength) {
            return friends[i]
        }
    }
}
