import '@/styles/globals.scss';

import Header from './Header';
import Nav from './Nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
