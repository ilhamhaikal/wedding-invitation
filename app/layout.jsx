export const metadata = {
  title: 'Romeo & Juliet Wedding',
  description: 'Wedding Invitation Romeo & Juliet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Your+Font+Here&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}