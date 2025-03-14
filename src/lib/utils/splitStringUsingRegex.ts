export const splitStringUsingRegex = (str: string): string[] => {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
    let match;

    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    while ((match = regex.exec(str)) !== null) {
        characters.push(match[0]);
    }
    return characters;
};
