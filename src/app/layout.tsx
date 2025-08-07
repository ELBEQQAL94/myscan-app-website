import './globals.css';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Scan Web Site',
  description: 'web site for scan application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
