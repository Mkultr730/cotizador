export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

export function getBrandFee(brand) {
    let increment;
    switch (brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment;
}

export function getPlanFee(plan) {
    return (plan === 'completo') ? 1.50 : 1.20;
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}