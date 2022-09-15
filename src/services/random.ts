/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function* randomIntGenerator(min: number, max: number): Generator<number> {
    min = Math.ceil(min);
    max = Math.ceil(max);

    while(true) {
        yield Math.ceil(Math.random() * (max - min + 1)) + min;
    }
}

export function* randomStringGenerator(length: number): Generator<string> {
    while(true) {
        yield randomString(length);
    }
}


/**
 * Random string
 *
 * @remarks
 * This method is part of the 
 *
 * @param length :number
 * @returns a random string with input length
 *
 */
export function randomString(length: number): string {
    const CHARS: string = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id: string = "";
    let randomNumber: number = 0;

    for (let i = 0; i < length; i++) {
        randomNumber = Math.ceil(Math.random() * CHARS.length);
        id += CHARS[randomNumber];
    }

    return id;
}