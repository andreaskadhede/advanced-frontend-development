import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav.jsx";

export const metadata = {
  title: "Brætspilscafé",
  description: "Find spilmuligheder og bestil i baren på dit besøg på dit besøg på brætspilscafé.",
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
