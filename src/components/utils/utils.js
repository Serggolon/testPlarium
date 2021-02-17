const hexToRgb = (hexWord) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexWord);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const decToHex = (num) => {

    if (num === 0) return ('0');
    let remainders = [];
    let nextNum = num;

    while (nextNum !== 0) {
        const mathTrunc = Math.trunc(nextNum / 16);

        if (mathTrunc !== 0) {
            remainders.push(nextNum % 16);
            nextNum = mathTrunc;
        } else {
            remainders.push(nextNum);
            nextNum = mathTrunc;
        }
    }
    return (remainders.reduceRight((sum, current) => {
            return (`${sum}${current.toString(16)}`);
        }, '')
    )
};

const rgbToHex = (r, g, b) => {
    const red = decToHex(r);
    const green = decToHex(g);
    const blue = decToHex(b);
    const formatVerifier = (hexNumber) => {
        if (hexNumber.length === 1) return (`0${hexNumber}`);
        return (hexNumber);
    };
    return ("#" + formatVerifier(red) + formatVerifier(green) + formatVerifier(blue));
};

export {
    hexToRgb,
    rgbToHex
};
