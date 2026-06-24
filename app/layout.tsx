import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mộc An Hill - Nghỉ dưỡng thiên nhiên',
  description: 'Khu nghỉ dưỡng Mộc An Hill - Tựa lưng vào núi, tách biệt ồn ào. Đặt phòng ngay qua Hotline 0986683168 hoặc Zalo.',
  keywords: ['Mộc An Hill', 'nghỉ dưỡng', 'homestay', 'view núi', 'thiên nhiên'],
  openGraph: {
    title: 'Mộc An Hill - Nghỉ dưỡng thiên nhiên',
    description: 'Khu nghỉ dưỡng Mộc An Hill - Tựa lưng vào núi, tách biệt ồn ào',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#18181b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark bg-zinc-950">
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
