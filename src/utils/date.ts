export const getYearMonthString = (date: Date, separator: string): string => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    return `${month}${separator}${year}`;
}
