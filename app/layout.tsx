import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/layout/Header";
import FooterNavigation from "./components/layout/FooterNavigation";
import StarfieldBackground from "./themes/starFieldBackground";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nakamoto Dir",
  description: "Stamping on BTC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box bg="background" color="text" minH="100vh">
            {/* <Header /> */}
            <Flex direction={{ base: 'column', md: 'row' }}>
              <Box flex="1">
                {children}
              </Box>
            </Flex>
            {/* <FooterNavigation /> */}
          </Box>
        </Providers>
      </body>
    </html>
  );
}