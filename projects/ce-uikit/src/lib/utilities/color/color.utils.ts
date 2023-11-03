export class CeColorUtils {

    static rgbToHex(r: number, g: number, b: number): string {
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    }

    static hexToRgb(hex: string) {
        // Remove the hash if it exists
        hex = hex.replace(/^#/, '');

        // Parse the hex value into a number
        let bigint = parseInt(hex, 16);

        // Extract the R, G, and B components
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        return [r, g, b];
    }

    static rgbToHsb(r: number, g: number, b: number) {
        r /= 255;
        g /= 255;
        b /= 255;
        const v = Math.max(r, g, b),
            n = v - Math.min(r, g, b);
        const h =
            n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
        const hue = 60 * (h < 0 ? h + 6 : h);
        const saturation = v && (n / v) * 100;
        const brightness = v * 100;
        return [hue, saturation, brightness];
    };

    static hsbToRgb(h: number, s: number, b: number) {
        s /= 100;
        b /= 100;
        const k = (n: number) => (n + h / 60) % 6;
        const f = (n: number) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
        return [255 * f(5), 255 * f(3), 255 * f(1)];
    };

    static hsbToHex(hue: number, saturation: number, brightness: number): string {
        const [r, g, b] = this.hsbToRgb(hue, saturation, brightness);
        return this.rgbToHex(r, g, b);
    }

    static hexToHsb(hexColor: string) {
        let [r, g, b] = this.hexToRgb(hexColor);
        return this.rgbToHsb(r, g, b);
    }

    static hslToHex(h: number, s: number, l: number): string {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n: number) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    static rgbToHsl(r: number, g: number, b: number) {
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
            ? l === r
                ? (g - b) / s
                : l === g
                    ? 2 + (b - r) / s
                    : 4 + (r - g) / s
            : 0;
        return [
            60 * h < 0 ? 60 * h + 360 : 60 * h,
            100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
            (100 * (2 * l - s)) / 2,
        ];
    }

    static hexToHsl(hexColor: string): number[] {
        let [r, g, b] = this.hexToRgb(hexColor);
        return this.rgbToHsl(r, g, b);
    }

    static saturateColor(hexColor: string) {
        let [r, g, b] = this.hexToRgb(hexColor);
        let [hue, saturation, brightness] = this.rgbToHsb(r, g, b);
        saturation = 100;
        brightness = 100;
        return this.hsbToHex(hue, saturation, brightness);
    }

    static bgrBase10ToHex(dColor: number) {
        return '#' + ("000000" + (((dColor & 0xFF) << 16) + (dColor & 0xFF00) + ((dColor >> 16) & 0xFF)).toString(16)).slice(-6);
    }

    static hexStringToBgrBase10(hexColor: string) {
        var r = parseInt(hexColor.slice(1, 3), 16),
            g = parseInt(hexColor.slice(3, 5), 16),
            b = parseInt(hexColor.slice(5, 7), 16);
        return (r | g << 8 | b << 16);
    }
}