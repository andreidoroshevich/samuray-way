export const  required= (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'field is required'
    }
}

export const maxLengthCreator = (maxLength: number) => (value: string) =>{
    return value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined
    }

