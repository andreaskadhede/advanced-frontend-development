import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav.jsx";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg", // Specify the favicon path here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Nav />
      </body>
    </html>
  );
}
