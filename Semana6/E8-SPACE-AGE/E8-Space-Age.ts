export function age(planet: unknown, seconds: unknown): unknown {
    if (typeof planet !== 'string' || typeof seconds !== 'number') {
        throw new Error('Los argumentos deben ser una cadena para el planeta y un número para los segundos.');
    }

    const tiempoTierraSegundos: number = 31557600;

    switch ((planet as string).toLowerCase()) {
        case 'mercury':
            return roundToTwo((seconds as number) / (0.2408467 * tiempoTierraSegundos));
        case 'venus':
            return roundToTwo((seconds as number) / (0.61519726 * tiempoTierraSegundos));
        case 'earth':
            return roundToTwo((seconds as number) / tiempoTierraSegundos);
        case 'mars':
            return roundToTwo((seconds as number) / (1.8808158 * tiempoTierraSegundos));
        case 'jupiter':
            return roundToTwo((seconds as number) / (11.862615 * tiempoTierraSegundos));
        case 'saturn':
            return roundToTwo((seconds as number) / (29.447498 * tiempoTierraSegundos));
        case 'uranus':
            return roundToTwo((seconds as number) / (84.016846 * tiempoTierraSegundos));
        case 'neptune':
            return roundToTwo((seconds as number) / (164.79132 * tiempoTierraSegundos));
        default:
            throw new Error('Planeta no válido');
    }
}

function roundToTwo(num: number): number {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
