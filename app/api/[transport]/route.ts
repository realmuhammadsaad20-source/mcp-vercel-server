import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const handler = createMcpHandler({
  name: 'cognitive-memory-fluency-server',
  version: '1.0.0',
  description: 'MCP Server on Vercel providing AI assistants with Memory & Verbal Fluency tools',

  tools: [
    {
      name: 'generate_fluency_sprint',
      description: 'توليد جولة سباق طلاقة صوتية أو دلالية لمدة 60 ثانية مع شروط الاستبعاد',
      parameters: z.object({
        type: z.enum(['phonemic', 'semantic']).describe('نوع السباق: صوتي بحرف محدد أو دلالي بحقل مفاهيمي'),
        difficulty: z.enum(['beginner', 'advanced']).default('beginner')
      }),
      execute: async ({ type, difficulty }) => {
        const letters = ['م', 'ك', 'ر', 'س', 'ب', 'ت', 'ع', 'ن'];
        const categories = ['أدوات ومهن', 'مشاعر إنسانية', 'أفعال حركة', 'عناصر طبيعية', 'مدن وعواصم'];

        if (type === 'phonemic') {
          const letter = letters[Math.floor(Math.random() * letters.length)];
          const target = difficulty === 'advanced' ? 22 : 18;
          return {
            content: [
              {
                type: 'text',
                text: `[سباق الطلاقة الصوتية]\nالحرف المستهدف: "${letter}"\nالمدة: 60 ثانية\nالشرط: اذكر أكبر عدد من الكلمات التي تبدأ بهذا الحرف، ممنوع التكرار أو الاشتقاق من نفس الجذر.\nالمستهدف القياسي: ${target} كلمة/دقيقة.`
              }
            ]
          };
        } else {
          const cat = categories[Math.floor(Math.random() * categories.length)];
          return {
            content: [
              {
                type: 'text',
                text: `[سباق الطلاقة الدلالية]\nالحقل المفهومي: "${cat}"\nالمدة: 60 ثانية\nالمستهدف: 25 كلمة تنتمي لهذا الحقل دون انقطاع أو استخدام كلمات حشو.`
              }
            ]
          };
        }
      }
    },
    {
      name: 'generate_metaphor_challenge',
      description: 'توليد تحدي قصف التشبيهات والمجاز السريع لمفهوم مجرد أو جسور الأضداد',
      parameters: z.object({
        mode: z.enum(['abstract_concept', 'opposite_pairs']).default('abstract_concept')
      }),
      execute: async ({ mode }) => {
        const concepts = ['الوقت', 'الغضب', 'الصبر', 'الفكرة', 'الشك', 'العزيمة', 'الصمت', 'الأمل'];
        const pairs = [
          ['الحاسوب', 'الشجرة'],
          ['المفتاح', 'الصمت'],
          ['النهر', 'الذاكرة'],
          ['السيف', 'الكلمة']
        ];

        if (mode === 'abstract_concept') {
          const c = concepts[Math.floor(Math.random() * concepts.length)];
          return {
            content: [
              {
                type: 'text',
                text: `[تحدي قصف التشبيهات]\nالمفهوم المجرد: "${c}"\nالمدة: 45 ثانية\nالمطلوب: صياغة 3 تشبيهات مبتكرة وغير تقليدية فوراً لهذا المفهوم.`
              }
            ]
          };
        } else {
          const p = pairs[Math.floor(Math.random() * pairs.length)];
          return {
            content: [
              {
                type: 'text',
                text: `[تحدي جسور الأضداد]\nالزوج المطلوب الربط بينهما: "${p[0]}" و "${p[1]}"\nالمدة: 30 ثانية\nالمطلوب: استخراج 3 نقاط تشابه جوهرية خفية بينهما بصوت عالٍ.`
              }
            ]
          };
        }
      }
    },
    {
      name: 'calculate_nback_score',
      description: 'تقييم دقة جلسة Dual N-Back واقتراح المستوى العصبي التالي',
      parameters: z.object({
        level: z.number().min(1).max(5),
        correctMatches: z.number(),
        falseAlarms: z.number(),
        totalRounds: z.number().default(20)
      }),
      execute: async ({ level, correctMatches, falseAlarms, totalRounds }) => {
        const accuracy = Math.max(0, Math.round(((correctMatches - falseAlarms) / totalRounds) * 100));
        const canAdvance = accuracy >= 85;

        return {
          content: [
            {
              type: 'text',
              text: `[نتيجة تقييم Dual N-Back]\nالمستوى: ${level}-Back\nالدقة: ${accuracy}%\nالتوصية: ${
                canAdvance
                  ? `أداء خارق! حققت دقة أعلى من 85%. يمكنك الانتقال للمستوى ${level + 1}-Back فوراً.`
                  : `استمر في تمرين ${level}-Back لترسيخ غمد الميالين وتقليل التنافس المشبكي.`
              }`
            }
          ]
        };
      }
    }
  ],

  resources: [
    {
      uri: 'cognitive://protocols/daily-schedule',
      name: 'الجدول البيولوجي اليومي للتمارين',
      mimeType: 'text/markdown',
      read: async () => ({
        contents: [
          {
            uri: 'cognitive://protocols/daily-schedule',
            text: `# التوزيع الزمني البيولوجي اليومي\n- الصباح (7:00 ص): تثبيت النظر + Dual N-Back\n- منتصف اليوم (11:30 ص): سباق الطلاقة وقصف التشبيهات\n- العصر (4:30 م): رياضة هوائية (BDNF) وفحص كيم\n- قبل النوم (10:00 م): الاسترجاع المسائي وترقية صياغة الحوارات`
          }
        ]
      })
    }
  ]
});

export const GET = handler;
export const POST = handler;
