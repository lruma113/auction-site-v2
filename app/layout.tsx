export const metadata = {
  title: '拍賣網站',
  description: 'LINE 社群導用卡拍賣首頁',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
