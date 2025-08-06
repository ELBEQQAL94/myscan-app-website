import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'My Next.js App',
  description: 'Step-by-step build',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
