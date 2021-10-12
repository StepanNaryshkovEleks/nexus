interface ITheme {
  [key: string]: {
    [key: string]: string
  }
}

export const customTheme: ITheme = {
  dark: {
    primaryText: '#ffffff',
    primaryBg: '#332e4d',
    secondaryBg: '#17181a',
  } as const,
  light: {
    primaryText: '#17181a',
    primaryBg: '#ffffff',
    secondaryBg: '#17181a',
  } as const,
} as const;

export default customTheme;
