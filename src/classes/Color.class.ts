
class Color {

    /**
     * Red component, integer values from 0 to 255.
     */
    r: number;
    /**
     * Green component, integer values from 0 to 255.
     */
    g: number;
    /**
     * Blue component, integer values from 0 to 255.
     */
    b: number;
    
    /**
     * Generates a random color upon creation if one is not provided.
     */
    constructor();
    constructor(r: number, g: number, b: number);
    constructor(r?: number, g?: number, b?: number) {
        this.r = r ?? Math.floor(Math.random() * 255);;
        this.g = g ?? Math.floor(Math.random() * 255);;
        this.b  = b ?? Math.floor(Math.random() * 255);;
    }

    /**
     * Get the score for a guess compared to this current color.
     * 
     * Formula:
    *   (255 - abs(actual_red - guessed_red)) + 
    *   (255 - abs(actual_green - guessed_green)) + 
    *   (255 - abs(actual_blue - gussed_blue)) * 
    *   floor(seconds_remaining) * 
    *   (1000 * (101 - seconds_selected))
     */
    getScore(guess: Color, secondsRemaining: number, totalSeconds: number): number {
      return (255 - Math.abs(this.r - guess.r)) +
            (255 - Math.abs(this.g - guess.g)) +
            (255 - Math.abs(this.b - guess.b)) *
            Math.floor(secondsRemaining) *
            (1000 * (101 - totalSeconds));
    }

    /**
     * Get this Color as a hexadecimal color code.
     *   E.g. rgb(255, 0, 0) -> #ff0000
     */
    toString(): string {
        return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
    }
}

export default Color;