// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { hackerTheme } from './themes/hacker';
import { windows95Theme } from './themes/windows95';

const themeMap = {
    windows95: windows95Theme,
    hacker: hackerTheme,

}


type ThemeName = keyof typeof themeMap;

const themeName = (process.env.NEXT_PUBLIC_THEME as ThemeName) || 'hacker';
const selectedTheme = themeMap[themeName];

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={selectedTheme}>
            {children}
        </ChakraProvider>
    )
}