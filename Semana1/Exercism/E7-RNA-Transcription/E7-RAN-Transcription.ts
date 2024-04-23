export function toRna(cadenaADN: string): string {
    let complementoARN = '';
    for (let nucleotido of cadenaADN) {
        switch (nucleotido) {
            case 'G':
                complementoARN += 'C';
                break;
            case 'C':
                complementoARN += 'G';
                break;
            case 'T':
                complementoARN += 'A';
                break;
            case 'A':
                complementoARN += 'U';
                break;
            default:
                throw new Error('Invalid input DNA. ');
        }
    }

    return complementoARN;
}