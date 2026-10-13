# خادم الذاكرة والطلاقة اللفظية (MCP TypeScript Server on Vercel)

خادم سحابي مبني بـ TypeScript وفق معيار **Model Context Protocol (MCP)** لربط نماذج وعملاء الذكاء الاصطناعي (Claude Desktop, Cursor, AI SDK) بأدوات وبروتوكولات الذاكرة والطلاقة اللفظية.

---

### 🚀 خطوات النشر على Vercel بنقرة واحدة

1. ادخل إلى [Vercel](https://vercel.com/) وسجل الدخول بحساب GitHub.
2. اضغط **Add New Project** واختر هذا المستودع `mcp-vercel-server`.
3. اضغط **Deploy**.
4. ستحصل على رابط الخادم فوراً: `https://your-project.vercel.app`.

### 🔌 الربط مع Claude Desktop أو Cursor:
أضف الخادم إلى ملف `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "cognitive-fluency": {
      "url": "https://your-project.vercel.app/api/mcp"
    }
  }
}
```
