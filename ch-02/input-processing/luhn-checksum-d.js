//goal: declare the doubler function: doubles and handles doubles >= 10

function doubler(doublee) {
    doublee *= 2;
    if (doublee >= 10) {
        return 1 + doublee % 10;
    }
    else {
        return doublee;
    }
}

