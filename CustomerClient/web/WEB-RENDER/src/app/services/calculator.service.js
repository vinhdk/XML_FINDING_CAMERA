export class CalculatorService {
    static calc = (size, ratio, dpi) => {
        const width = size * dpi / 25.4;
        const height = (size * ratio) * dpi / 25.4;
        return ((width * height)/1E6).toFixed(2);
    }
}