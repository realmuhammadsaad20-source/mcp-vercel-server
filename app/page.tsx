export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#090d16',
      color: '#f8fafc',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      direction: 'rtl'
    }}>
      <div style={{
        maxWidth: '680px',
        width: '100%',
        background: '#131b2e',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(56, 189, 248, 0.1)',
          color: '#38bdf8',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          ● الخادم نشط على Vercel
        </div>
        
        <h1 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px' }}>
          خادم الذاكرة والطلاقة اللفظية (MCP Server) 🧠
        </h1>
        
        <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
          هذا الخادم يعمل ببروتوكول Model Context Protocol (MCP) ويوفر لنماذج الذكاء الاصطناعي (Claude Desktop, Cursor, AI SDK) أدوات توليد سباقات الطلاقة الصوتية، وتحديات التشبيهات والمجاز، وتقييم جلسات Dual N-Back.
        </p>

        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 'bold', marginBottom: '6px' }}>
            رابط نقطة نهاية الـ MCP (Endpoint URL):
          </div>
          <code style={{ color: '#38bdf8', fontSize: '14px', fontFamily: 'monospace' }}>
            /api/mcp
          </code>
        </div>

        <div style={{ fontSize: '13px', color: '#94a3b8', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
          لربطه بتطبيق Claude Desktop، أضف الرابط إلى ملف <code>claude_desktop_config.json</code> تحت مفتاح <code>mcpServers</code>.
        </div>
      </div>
    </main>
  );
}
