//ok
export const required = value => {
    if (value) return undefined;
    return "Поле обов'язкове";
}

//error
export const maxLengthCreator = (maxLength = 20) => (value) => {
    if (value && value.length > maxLength) return `Максимальна довжина: ${maxLength} символ`;
    if (value && value.length < 1) return `Мінімальна довжина: 1 символ`;
    return undefined;
}

//ok
export const containsDigitsValidator = value => {
    if (/^\d*$/.test(value)) return undefined;
    return 'Numbers must be entered';
};