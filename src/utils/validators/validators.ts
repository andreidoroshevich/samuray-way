export const required = (value: string) => {
    if (value) {
        return
    }

    return 'field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) {
        return `Must be ${maxLength} characters or less`
    }
    return undefined;
}

