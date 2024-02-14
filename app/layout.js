
import "./globals.css";


export const metadata = {
  title: "GetItDone",
  description: "A to-do list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
