export const join = (arr: any[], ...rest: string[]): string => {
    const separator = [...rest].length > 1 ? [...rest][1] : ', '
    return arr.filter((n) => n)
        .join(separator)
}

export const dateConverter = (str: string) => {
    const locale = 'ru-Ru'
    return new Date(str).toLocaleDateString(locale)
}
