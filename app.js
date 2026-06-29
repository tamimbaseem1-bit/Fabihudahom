// ════════════════════════════════════════════════
// فَبِهُدَاهُمُ اقْتَدِهْ — Application Logic
// رحلة صناعة طالب العلم
// ════════════════════════════════════════════════

// ════════════════════ DATA ════════════════════
const BASE_STUDENTS = [
  {u:"Amd",p:"Run40",name:"احمد مجاهد الدوغان",halqa:"أ"},
  {u:"Aao",p:"Sun15",name:"احمد العصفور",halqa:"أ"},
  {u:"Eid",p:"Sea72",name:"إياد إسلام",halqa:"أ"},
  {u:"Zah",p:"Red50",name:"زايد الهاشم",halqa:"أ"},
  {u:"Zhh",p:"Air18",name:"زكريا الهاشم",halqa:"أ"},
  {u:"Ald",p:"Hot63",name:"عبدالله لؤي الدوغان",halqa:"أ"},
  {u:"Aha",p:"Car21",name:"عبدالعزيز العرفج",halqa:"أ"},
  {u:"Amjb",p:"Bus94",name:"عبدالله الجغيمان",halqa:"أ"},
  {u:"Amad",p:"Oak47",name:"عبدالعزيز الدوغان",halqa:"أ"},
  {u:"Nah",p:"Book88",name:"نواف الحليبي",halqa:"أ"},
  {u:"Nof",p:"Cat12",name:"نواف الفلاح",halqa:"أ"},
  {u:"Yaob",p:"Dog90",name:"يوسف العمير بويعقوب",halqa:"أ"},
  {u:"Aahn",p:"Fun31",name:"عبد الرحمن النعيم",halqa:"أ"},
  {u:"Nka",p:"Box25",name:"نبيل العرفج",halqa:"أ"},
  {u:"Aba",p:"Kid74",name:"احمد بندر العرفج",halqa:"أ"},
  {u:"Kaa",p:"Ice49",name:"خالد العبدالقادر",halqa:"أ"},
  {u:"Fma",p:"Pot85",name:"فيصل العرفج",halqa:"أ"},
  {u:"Amj",p:"Fan36",name:"احمد الجغيمان",halqa:"ب"},
  {u:"Aak",p:"Pen70",name:"انس الخطيب",halqa:"ب"},
  {u:"Bkd",p:"Star55",name:"بدر الدوغان",halqa:"ب"},
  {u:"Rak",p:"Cup33",name:"رائد الخطيب",halqa:"ب"},
  {u:"Mak",p:"Joy22",name:"محمد الخطيب",halqa:"ب"},
  {u:"Ma3",p:"Win66",name:"محمد العرفج",halqa:"ب"},
  {u:"Maa",p:"Key48",name:"محمد العبدالقادر",halqa:"ب"},
  {u:"Myb",p:"Fly93",name:"محمد بودي",halqa:"ب"},
  {u:"Mao",p:"Top10",name:"محمد الدولة",halqa:"ب"},
  {u:"Akd",p:"New27",name:"عبداللطيف الدوغان",halqa:"ب"},
  {u:"Amdt",p:"Bus52",name:"عبدالله معاذ الدغان",halqa:"ب"},
  {u:"Aaj",p:"Sky13",name:"عبدالرحمن الجلال",halqa:"ب"},
  {u:"Aan",p:"Pen99",name:"عبدالعزيز النعيم",halqa:"ب"},
  {u:"Amh",p:"Art77",name:"عبداللطيف الحليبي",halqa:"ب"},
  {u:"Amm",p:"Map44",name:"عبدالرحمن الملا",halqa:"ب"},
  {u:"Mah",p:"Box11",name:"معاذ السيد",halqa:"ب"},
  {u:"Ash",p:"Tea82",name:"احمد صلاح السيد",halqa:"ب"},
  {u:"Yao",p:"Day37",name:"يوسف العمير",halqa:"ب"},
  {u:"Nkh",p:"Jam56",name:"نجيب الحليبي",halqa:"ب"},
  {u:"Rko",p:"Fix19",name:"راشد العصفور",halqa:"ب"},
  {u:"Sia",p:"Lip64",name:"سيف العامر",halqa:"ب"},
  {u:"Ama",p:"One81",name:"انس العرفج",halqa:"ب"},
  {u:"Asy",p:"Cup29",name:"احمد السيد",halqa:"أ"},
  {u:"Otf",p:"Top93",name:"عثمان الفلاح",halqa:"أ"},
  {u:"Ala",p:"Red19",name:"عبد الله العامر",halqa:"أ"},
  {u:"Ahh",p:"Lip22",name:"عبدالحميد الحليبي",halqa:"أ"},
  {u:"Aao2",p:"Key84",name:"عبد العزيز العثمان",halqa:"أ"},
  {u:"Aap",p:"Red74",name:"عبدالعزيز العبدالقادر",halqa:"أ"},
  {u:"Amm2",p:"Box14",name:"عبدالمحسن الملا",halqa:"أ"},
  {u:"Aqj",p:"Hot65",name:"احمد قاسم الجعفري",halqa:"أ"},
  {u:"Alm",p:"New18",name:"عبدالله المظفر",halqa:"أ"}
];
const EXCEL_SCORES = {
  "احمد مجاهد الدوغان":{total:89,attend:15,tahdir:13,kitab:12,abyat:12,hadith:5,wajh:3.5},
  "احمد العصفور":{total:98,attend:14,tahdir:14,kitab:14,abyat:18,hadith:8,wajh:4},
  "إياد إسلام":{total:84,attend:12,tahdir:12,kitab:12,abyat:10,hadith:6,wajh:3},
  "زايد الهاشم":{total:63,attend:9,tahdir:9,kitab:9,abyat:8,hadith:3,wajh:2},
  "زكريا الهاشم":{total:110,attend:16,tahdir:15,kitab:16,abyat:22,hadith:10,wajh:5},
  "عبدالله لؤي الدوغان":{total:109,attend:16,tahdir:15,kitab:15,abyat:20,hadith:9,wajh:4.5},
  "عبدالعزيز العرفج":{total:91,attend:13,tahdir:13,kitab:13,abyat:14,hadith:6,wajh:3.5},
  "عبدالله الجغيمان":{total:5,attend:1,tahdir:0,kitab:1,abyat:0,hadith:0,wajh:0},
  "عبدالعزيز الدوغان":{total:111,attend:16,tahdir:16,kitab:15,abyat:24,hadith:11,wajh:5},
  "نواف الحليبي":{total:10,attend:3,tahdir:0,kitab:0,abyat:2,hadith:1,wajh:0},
  "نواف الفلاح":{total:112,attend:16,tahdir:16,kitab:16,abyat:28,hadith:14,wajh:5.5},
  "يوسف العمير بويعقوب":{total:106,attend:16,tahdir:14,kitab:15,abyat:18,hadith:9,wajh:4},
  "عبد الرحمن النعيم":{total:79,attend:12,tahdir:11,kitab:10,abyat:10,hadith:5,wajh:3},
  "نبيل العرفج":{total:6,attend:2,tahdir:0,kitab:0,abyat:1,hadith:0,wajh:0},
  "احمد بندر العرفج":{total:6,attend:2,tahdir:0,kitab:0,abyat:1,hadith:0,wajh:0},
  "خالد العبدالقادر":{total:26,attend:7,tahdir:0,kitab:0,abyat:4,hadith:2,wajh:1},
  "فيصل العرفج":{total:0,attend:3,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "احمد الجغيمان":{total:79,attend:13,tahdir:8,kitab:13,abyat:10,hadith:5,wajh:3},
  "انس الخطيب":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "بدر الدوغان":{total:69,attend:11,tahdir:7,kitab:11,abyat:8,hadith:4,wajh:2.5},
  "رائد الخطيب":{total:41,attend:9,tahdir:0,kitab:5,abyat:5,hadith:2,wajh:1.5},
  "محمد الخطيب":{total:106,attend:16,tahdir:13,kitab:16,abyat:20,hadith:9,wajh:4},
  "محمد العرفج":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "محمد العبدالقادر":{total:106,attend:16,tahdir:13,kitab:16,abyat:18,hadith:8,wajh:4},
  "محمد بودي":{total:108,attend:16,tahdir:14,kitab:16,abyat:22,hadith:10,wajh:4.5},
  "محمد الدولة":{total:101,attend:15,tahdir:14,kitab:13,abyat:16,hadith:8,wajh:3.5},
  "عبداللطيف الدوغان":{total:106,attend:16,tahdir:14,kitab:14,abyat:18,hadith:8,wajh:4},
  "عبدالله معاذ الدغان":{total:79,attend:12,tahdir:12,kitab:7,abyat:10,hadith:4,wajh:3},
  "عبدالرحمن الجلال":{total:52,attend:9,tahdir:5,kitab:6,abyat:6,hadith:3,wajh:2},
  "عبدالعزيز النعيم":{total:12,attend:3,tahdir:0,kitab:0,abyat:2,hadith:1,wajh:0.5},
  "عبداللطيف الحليبي":{total:80,attend:14,tahdir:6,kitab:12,abyat:10,hadith:5,wajh:3},
  "عبدالرحمن الملا":{total:103,attend:16,tahdir:13,kitab:14,abyat:16,hadith:7,wajh:4},
  "معاذ السيد":{total:77,attend:13,tahdir:7,kitab:11,abyat:10,hadith:5,wajh:3},
  "احمد صلاح السيد":{total:35,attend:6,tahdir:4,kitab:4,abyat:4,hadith:2,wajh:1},
  "يوسف العمير":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "نجيب الحليبي":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "راشد العصفور":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "سيف العامر":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
  "انس العرفج":{total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0},
};
const QUOTES=[
  {t:"«إني رأيت أنه لا يكتب إنسان كتاباً في يومه إلا قال في غده: لو قدم هذا لكان أحسن، ولو زيد هذا لكان يستحسن، ولو قدم هذا لكان أجمل»",a:"الإمام الشافعي رحمه الله"},
  {t:"العلم لا يُعطيك بعضه حتى تُعطيه كلك",a:"الإمام مالك رحمه الله"},
  {t:"من خرج في طلب العلم فهو في سبيل الله حتى يرجع",a:"الترمذي"},
  {t:"الوقت كالسيف إن لم تقطعه قطعك",a:"الإمام الشافعي رحمه الله"},
  {t:"طالب العلم يُكتب له أجر المجاهد في سبيل الله",a:"الإمام أحمد رحمه الله"},
];
const JOURNEY=[
  {icon:"🌿",title:"الإخلاص",guide:"الشيخ أحمد الدوغان",desc:"أساس كل علم نافع. لا قيمة للعلم بلا إخلاص لله تعالى."},
  {icon:"📖",title:"معرفة طالب العلم مهمته",guide:"الإمام الجرجاني",desc:"يعرف طالب العلم لماذا يتعلم فيُحسن الطلب ويُتقن العمل."},
  {icon:"⏰",title:"الحرص على الوقت",guide:"الإمام النووي",desc:"الوقت رأس مال طالب العلم، من ضيّعه خسر كل شيء."},
  {icon:"🦅",title:"علو الهمة",guide:"الإمام البخاري",desc:"لا يُدرَك العلم بنفس متواضعة الهمة بل بهمة عالية تأبى الكلل."},
  {icon:"🕌",title:"التفرغ من الشواغل",guide:"الإمام أبو يوسف",desc:"من فرّغ قلبه لله وللعلم فُتحت له أبواب الفهم والتوفيق."},
  {icon:"🌹",title:"الأدب مع العلم والشيخ",guide:"الإمام مالك",desc:"تعلّم الأدب قبل أن تتعلم العلم. الأدب نصف الطريق."},
  {icon:"🔁",title:"المراجعة المستمرة",guide:"الإمام الشيرازي",desc:"من حفظ فلم يراجع كمن زرع فلم يسقِ."},
  {icon:"💬",title:"اللسان السؤول",guide:"عبدالله بن عباس رضي الله عنهما",desc:"من استحيا لم يتعلم، ومن تعلم بلغ ما أراد."},
];
const SCHEDULE={
  "أ":[{d:"الأحد",s:"فقه"},{d:"الاثنين",s:"نحو"},{d:"الثلاثاء",s:"فقه"},{d:"الأربعاء",s:"نحو"}],
  "ب":[{d:"الأحد",s:"فقه"},{d:"الاثنين",s:"أصول"},{d:"الثلاثاء",s:"فقه"},{d:"الأربعاء",s:"مراجعة"}],
};
const MAX_DAYS=16;
const STAR_COLORS=["🟡","⭐","🌙","📚"];

// ════════════════════ SUPABASE CONFIG ════════════════════
const SUPABASE_URL = 'https://cakpfqublqgdinaufpae.supabase.co';
const SUPABASE_KEY = 'sb_publishable_oal3kdLl1J6Yvl3ydt4RXw_RlEjyRte';
const APP_VERSION = 'v4.5';

// Show version badge on load
document.addEventListener('DOMContentLoaded', () => {
  const badge = document.createElement('div');
  badge.style.cssText = 'position:fixed;bottom:8px;left:8px;background:#1a1a2e;color:#E8BC5A;font-size:11px;padding:3px 8px;border-radius:20px;z-index:9999;opacity:0.7;font-family:monospace';
  badge.textContent = APP_VERSION;
  document.body.appendChild(badge);
});

const sb = {
  async query(sql, params={}) {
    // Use REST API via fetch
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/run_sql`, {
      method:'POST',
      headers:{
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sql, params})
    });
    return res.json();
  },
  async from(table) {
    return {
      _table: table,
      _filters: [],
      _select: '*',
      select(cols){ this._select=cols; return this; },
      eq(col,val){ this._filters.push({col,val,op:'eq'}); return this; },
      async get(){
        let url = `${SUPABASE_URL}/rest/v1/${this._table}?select=${this._select}`;
        for(const f of this._filters) url += `&${f.col}=eq.${encodeURIComponent(f.val)}`;
        const res = await fetch(url, {
          headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}
        });
        return {data: await res.json(), error: res.ok ? null : 'error'};
      },
      async upsert(obj, onConflict=''){
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${this._table}`, {
          method:'POST',
          headers:{
            'apikey':SUPABASE_KEY,
            'Authorization':`Bearer ${SUPABASE_KEY}`,
            'Content-Type':'application/json',
            'Prefer': onConflict ? `resolution=merge-duplicates` : 'return=representation'
          },
          body: JSON.stringify(Array.isArray(obj)?obj:[obj])
        });
        const data = await res.json();
        return {data, error: res.ok ? null : data};
      },
      async delete(){
        let url = `${SUPABASE_URL}/rest/v1/${this._table}?`;
        for(const f of this._filters) url += `${f.col}=eq.${encodeURIComponent(f.val)}&`;
        const res = await fetch(url, {
          method:'DELETE',
          headers:{
            'apikey':SUPABASE_KEY,
            'Authorization':`Bearer ${SUPABASE_KEY}`,
            'Prefer':'return=minimal'
          }
        });
        return {error: res.ok ? null : 'error'};
      }
    };
  }
};

// ════════════════════ DB HELPERS ════════════════════
async function dbGetStudents(){
  const url = `${SUPABASE_URL}/rest/v1/students?select=*&order=name`;
  try {
    const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
    if(!res.ok){ console.error('dbGetStudents failed:', res.status, await res.text()); return []; }
    const data = await res.json();
    console.log('dbGetStudents:', data.length, 'students loaded');
    return data;
  } catch(e){ console.error('dbGetStudents error:', e); return []; }
}

async function dbSaveStudent(s, isNew=false){
  // Map all possible field name variants to the DB schema
  const body = {
    name:     s.name,
    halqa:    s.halqa || 'أ',
    username: s.u || s.username,
    password: s.p || s.password
  };
  if(!body.name || !body.username || !body.password){
    console.error('dbSaveStudent: missing required fields', body);
    return false;
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/students`, {
      method: 'POST',
      headers: {
        'apikey':        SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type':  'application/json',
        'Prefer':        'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(body)
    });
    if(!res.ok){
      const errText = await res.text();
      console.error('dbSaveStudent HTTP error:', res.status, errText);
    }
    return res.ok;
  } catch(e){
    console.error('dbSaveStudent fetch error:', e);
    return false;
  }
}

async function dbDeleteStudent(name){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/students?name=eq.${encodeURIComponent(name)}`,{
    method:'DELETE',
    headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Prefer':'return=minimal'}
  });
  return res.ok;
}

async function dbGetWeeklyData(studentName){
  const url = `${SUPABASE_URL}/rest/v1/weekly_data?student_name=eq.${encodeURIComponent(studentName)}&select=*`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return {};
  const rows = await res.json();
  // Convert to nested {w1:{d1:{...},d2:{...}}} format
  const result = {};
  for(const row of rows){
    const wk = 'w'+row.week_num;
    if(!result[wk]) result[wk]={};
    result[wk][row.day_key] = {att:row.att,tah:row.tah,kit:row.kit,aby:row.aby,wj:row.wj,hd:row.hd,hf:row.hf};
  }
  return result;
}

async function dbGetAllWeeklyData(){
  const url = `${SUPABASE_URL}/rest/v1/weekly_data?select=*`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return {};
  const rows = await res.json();
  const result = {};
  for(const row of rows){
    if(!result[row.student_name]) result[row.student_name]={};
    const wk = 'w'+row.week_num;
    if(!result[row.student_name][wk]) result[row.student_name][wk]={};
    result[row.student_name][wk][row.day_key] = {att:row.att,tah:row.tah,kit:row.kit,aby:row.aby,wj:row.wj,hd:row.hd,hf:row.hf};
  }
  // Merge weekly summaries (sum field) into result
  try {
    const sumUrl = `${SUPABASE_URL}/rest/v1/weekly_summary?select=*`;
    const sumRes = await fetch(sumUrl,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
    if(sumRes.ok){
      const sumRows = await sumRes.json();
      for(const row of sumRows){
        if(!row.has_summary) continue;
        if(!result[row.student_name]) result[row.student_name]={};
        const wk = 'w'+row.week_num;
        if(!result[row.student_name][wk]) result[row.student_name][wk]={};
        result[row.student_name][wk].sum = true;
      }
    }
  } catch(e){}
  return result;
}

async function dbSaveDay(studentName, weekNum, dayKey, dayData){
  const body = {
    student_name:studentName, week_num:weekNum, day_key:dayKey,
    att:!!dayData.att, tah:!!dayData.tah, kit:!!dayData.kit,
    aby:dayData.aby||0, wj:dayData.wj||0, hd:dayData.hd||0, hf:dayData.hf||0,
    updated_at: new Date().toISOString()
  };
  const res = await fetch(`${SUPABASE_URL}/rest/v1/weekly_data`,{
    method:'POST',
    headers:{
      'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,
      'Content-Type':'application/json',
      'Prefer':'resolution=merge-duplicates,return=minimal'
    },
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function dbGetWeeklySummaries(studentName){
  const url = `${SUPABASE_URL}/rest/v1/weekly_summary?student_name=eq.${encodeURIComponent(studentName)}&select=*`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return {};
  const rows = await res.json();
  const result = {};
  for(const row of rows) if(row.has_summary) result['w'+row.week_num] = true;
  return result;
}

async function dbSaveWeeklySummary(studentName, weekNum, hasSummary){
  const body = {student_name:studentName, week_num:weekNum, has_summary:hasSummary, updated_at:new Date().toISOString()};
  const res = await fetch(`${SUPABASE_URL}/rest/v1/weekly_summary`,{
    method:'POST',
    headers:{
      'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,
      'Content-Type':'application/json',
      'Prefer':'resolution=merge-duplicates,return=minimal'
    },
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function dbGetAwards(){
  const url = `${SUPABASE_URL}/rest/v1/weekly_awards?select=*`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return {};
  const rows = await res.json();
  const result = {};
  for(const row of rows){
    result[row.student_name+'_w'+row.week_num] = {akhlaq:row.akhlaq,sab:row.sab,week:row.week_num,name:row.student_name};
  }
  return result;
}

async function dbSaveAward(studentName, weekNum, akhlaq, sab){
  const body = {student_name:studentName, week_num:weekNum, akhlaq:!!akhlaq, sab:!!sab, updated_at:new Date().toISOString()};
  const res = await fetch(`${SUPABASE_URL}/rest/v1/weekly_awards`,{
    method:'POST',
    headers:{
      'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,
      'Content-Type':'application/json',
      'Prefer':'resolution=merge-duplicates,return=minimal'
    },
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function dbGetNotifications(studentName){
  const url = `${SUPABASE_URL}/rest/v1/notifications?student_name=eq.${encodeURIComponent(studentName)}&order=created_at.desc&limit=30`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return [];
  const rows = await res.json();
  return rows.map(r=>({msg:r.message, read:r.is_read, time:new Date(r.created_at).getTime(), id:r.id}));
}

async function dbAddNotification(studentName, message){
  const body = {student_name:studentName, message, is_read:false};
  const res = await fetch(`${SUPABASE_URL}/rest/v1/notifications`,{
    method:'POST',
    headers:{
      'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,
      'Content-Type':'application/json','Prefer':'return=minimal'
    },
    body:JSON.stringify(body)
  });
  return res.ok;
}

async function dbMarkNotifsRead(studentName){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/notifications?student_name=eq.${encodeURIComponent(studentName)}&is_read=eq.false`,{
    method:'PATCH',
    headers:{
      'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,
      'Content-Type':'application/json','Prefer':'return=minimal'
    },
    body:JSON.stringify({is_read:true})
  });
  return res.ok;
}

async function dbVerifySupervisor(username, password){
  const url = `${SUPABASE_URL}/rest/v1/supervisors?username=eq.${encodeURIComponent(username)}&password=eq.${encodeURIComponent(password)}&select=*`;
  const res = await fetch(url,{headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}});
  if(!res.ok) return null;
  const rows = await res.json();
  return rows.length > 0 ? rows[0] : null;
}

// ════════════════════ IN-MEMORY CACHE (for speed) ════════════════════
// Data is loaded once at login and kept in memory; written to DB on every change
let _cache = {
  students: null,      // [{name,halqa,username,password}]
  weekly: null,        // {studentName: {w1:{d1:{...}}}}
  awards: null,        // {studentName_wN: {akhlaq,sab}}
  scores: {},          // computed from weekly
};

// ════════════════════ COMPATIBILITY WRAPPERS ════════════════════
// These replace the old localStorage functions so all old code still works

function getStudents(){
  return _cache.students || BASE_STUDENTS.map(s=>({...s,id:s.u}));
}
function saveStudents(arr){ _cache.students = arr; /* saved individually via dbSaveStudent */ }

function getScores(){ return _cache.scores || {}; }
function saveScores(sc){ _cache.scores = sc; }

function getScore(name){
  const sc = getScores();
  if(!sc[name]) sc[name]={total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0,badges:{star:0,akhlaq:0,sab:0}};
  return sc[name];
}

function getState(){
  return {
    weekly: _cache.weekly || {},
    weeklyAwards: _cache.awards || {},
    notifications: {},
    notifSent: _cache.notifSent || {}
  };
}
function saveStateObj(st){
  if(st.weeklyAwards) _cache.awards = st.weeklyAwards;
  if(st.notifSent) _cache.notifSent = st.notifSent;
}

function getAwardData(){ return _cache.awards || {}; }
function saveAwardData(data){ _cache.awards = data; }

// ════════════════════ AUTH ════════════════════
let currentUser=null, loginMode='student';

function gotoLogin(mode){
  loginMode=mode;
  document.getElementById('login-role-tag').textContent=mode==='admin'?'مشرف':'طالب';
  document.getElementById('usr-inp').value='';
  document.getElementById('pw-inp').value='';
  document.getElementById('login-err').style.display='none';
  showScreen('login-screen');
}
function gotoPortal(){showScreen('portal-screen')}

async function doLogin(){
  const u=document.getElementById('usr-inp').value.trim();
  const p=document.getElementById('pw-inp').value.trim();
  const errEl=document.getElementById('login-err');
  const btn=document.querySelector('.login-submit');
  errEl.style.display='none';
  if(!u||!p){errEl.style.display='block';return;}
  
  btn.textContent='جاري التحقق...'; btn.disabled=true;
  
  try {
    if(loginMode==='admin'){
      // Try DB first, fallback to hardcoded
      let isAdmin = false;
      try {
        const sup = await dbVerifySupervisor(u, p);
        if(sup){
          currentUser={name:sup.display_name,u:sup.username,role:'admin'};
          isAdmin=true;
        }
      } catch(e){}
      if(!isAdmin){
        const adminUsers=['admin1','admin2','admin3','admin4','admin5','admin6'];
        if(adminUsers.includes(u) && p==='Mshrf123'){
          currentUser={u,name:'المشرف '+u.replace('admin',''),role:'admin'}; isAdmin=true;
        }
      }
      if(!isAdmin){errEl.style.display='block';btn.textContent='دخول';btn.disabled=false;return;}
      
      showLoadingOverlay('جاري تحميل البيانات...');
      await loadAllDataIntoCache();
      hideLoadingOverlay();
      document.getElementById('admin-name-lbl').textContent = 'مشرف: ' + currentUser.name;
      initAdmin();
      showScreen('admin-screen');
    } else {
      showLoadingOverlay('جاري التحقق...');
      const dbStudents = await dbGetStudents();
      if(dbStudents.length > 0) _cache.students = dbStudents;
      else _cache.students = BASE_STUDENTS;
      
      const match = _cache.students.find(s=>(s.u||s.username)===u&&(s.p||s.password)===p);
      if(!match){hideLoadingOverlay();errEl.style.display='block';btn.textContent='دخول';btn.disabled=false;return;}
      
      const cleanName = (match.name||'').trim();
      currentUser={...match, name: cleanName, role:'student'};
      document.getElementById('loading-msg').textContent='جاري تحميل بياناتك...';
      // Pre-populate leaderboard scores from EXCEL_SCORES for all students
      if(_cache.students){
        const sc=getScores();
        for(const s of _cache.students){
          const n=(s.name||'').trim();
          const h=EXCEL_SCORES[n]||{};
          if(!sc[n]) sc[n]={total:h.total||0,attend:h.attend||0,tahdir:h.tahdir||0,kitab:h.kitab||0,abyat:h.abyat||0,hadith:h.hadith||0,wajh:h.wajh||0,badges:{star:0,akhlaq:0,sab:0}};
        }
        saveScores(sc);
      }
      const weekly = await dbGetWeeklyData(cleanName);
      // Merge weekly summaries into weekly cache
      const sums = await dbGetWeeklySummaries(cleanName);
      for(const wk in sums){ if(!weekly[wk]) weekly[wk]={}; weekly[wk].sum=true; }
      if(!_cache.weekly) _cache.weekly={};
      _cache.weekly[cleanName] = weekly;
      _cache.awards = await dbGetAwards();
      const st = getState();
      recalcStudentScore(cleanName, st);
      hideLoadingOverlay();
      initApp();
      startStudentAutoRefresh();
      showScreen('app-screen');
      setTimeout(checkAndShowNotifications, 600);
    }
  } catch(e){
    hideLoadingOverlay();
    errEl.textContent='خطأ في الاتصال — تحقق من إعدادات Supabase';
    errEl.style.display='block';
  }
  btn.textContent='دخول'; btn.disabled=false;
}

async function loadAllDataIntoCache(){
  const dbStudents = await dbGetStudents();
  _cache.students = dbStudents.length > 0 ? dbStudents : BASE_STUDENTS;
  _cache.weekly = await dbGetAllWeeklyData();
  _cache.awards = await dbGetAwards();
  const st = getState();
  for(const s of _cache.students) recalcStudentScore(s.name, st);
}

function showLoadingOverlay(msg='جاري التحميل...'){
  let ov=document.getElementById('loading-overlay');
  if(!ov){
    ov=document.createElement('div');ov.id='loading-overlay';
    ov.style.cssText='position:fixed;inset:0;background:rgba(15,26,15,0.88);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;backdrop-filter:blur(6px)';
    document.body.appendChild(ov);
  }
  ov.innerHTML=`<div style="font-size:2.5rem;animation:spin 1.2s linear infinite">📚</div><div id="loading-msg" style="font-family:'Scheherazade New',serif;font-size:1.1rem;color:#E8BC5A;text-align:center">${msg}</div>`;
  ov.style.display='flex';
  if(!document.getElementById('spin-style')){const s=document.createElement('style');s.id='spin-style';s.textContent='@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}';document.head.appendChild(s);}
}
function hideLoadingOverlay(){const ov=document.getElementById('loading-overlay');if(ov)ov.style.display='none';}
document.getElementById('pw-inp').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin()});



function doLogout(){
  currentUser=null;
  if(_studentRefreshTimer){ clearInterval(_studentRefreshTimer); _studentRefreshTimer=null; }
  _cache.students=null; _cache.weekly=null; _cache.awards=null; _cache.scores={}; _cache.notifs=null;
  showScreen('portal-screen');
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ════════════════════ HELPERS ════════════════════
function getRank(pts){
  if(pts<=30)return'طويلب علم';
  if(pts<=80)return'طالب علم';
  if(pts<=150)return'شيخ';
  if(pts<=250)return'عالم';
  if(pts<=400)return'إمام';
  return'علامة';
}
function getSorted(){
  const students=getStudents();
  const sc=getScores();
  return students.map(s=>({...s,score:sc[s.name]||{total:0}})).sort((a,b)=>b.score.total-a.score.total);
}

// ── STREAK: count consecutive days where mem pts > 5 ──
function calcStreak(name){
  const st = getState();
  const weekly = (st.weekly && st.weekly[name]) || {};
  const allDays = []; // {active: bool, memPts: number, hasData: bool}
  for(let w=1;w<=6;w++){
    const wd = weekly['w'+w];
    ['d1','d2','d3','d4'].forEach(d=>{
      const dd = (wd && wd[d]) || {};
      const memPts = dayMemPtsFromData(dd);
      const hasData = dd.att || dd.tah || dd.kit || dd.aby || dd.wj || dd.hd || dd.hf;
      allDays.push({ active: !!dd.att && memPts > 5, memPts, hasData: !!hasData });
    });
  }

  // Find last day that has ANY data (to anchor the streak window)
  let lastActive = -1;
  for(let i=allDays.length-1;i>=0;i--){
    if(allDays[i].active){ lastActive=i; break; }
  }

  // Build per-day status for the books display (all 24 days)
  // days array: each entry has .active (met minimum), .hasData
  const dayStatus = allDays.map(d => ({
    active: d.active,
    hasData: d.hasData,
    memPts: d.memPts
  }));

  if(lastActive < 0) return { current: 0, crownLevel: 0, dayStatus };

  let current = 0;
  for(let i=lastActive;i>=0;i--){
    if(allDays[i].active) current++;
    else break;
  }
  const crownLevel = Math.floor(current / 6);
  return { current, crownLevel, dayStatus };
}
function initials(name){const p=name.split(' ');return(p[0]?.[0]||'')+(p[1]?.[0]||'')}
function pct(v,max){return Math.round(Math.min(100,(v/max)*100))}

// ════════════════════ APP INIT ════════════════════
// Auto-refresh student data every 2 minutes to pick up supervisor changes
let _studentRefreshTimer = null;
async function startStudentAutoRefresh(){
  if(_studentRefreshTimer) clearInterval(_studentRefreshTimer);
  _studentRefreshTimer = setInterval(async () => {
    if(!currentUser || currentUser.role !== 'student') return;
    try {
      const weekly = await dbGetWeeklyData(currentUser.name);
      const sums = await dbGetWeeklySummaries(currentUser.name);
      for(const wk in sums){ if(!weekly[wk]) weekly[wk]={}; weekly[wk].sum=true; }
      _cache.weekly[currentUser.name] = weekly;
      _cache.awards = await dbGetAwards();
      const st = getState();
      recalcStudentScore(currentUser.name, st);
      initApp(); // re-render
    } catch(e){}
  }, 2 * 60 * 1000); // every 2 minutes
}

function initApp(){
  const name=currentUser.name;
  const sc=getScore(name);
  const sorted=getSorted();
  const pos=sorted.findIndex(s=>s.name===name)+1;

  document.getElementById('h-avatar').textContent=initials(name);
  document.getElementById('h-name').textContent=name;
  document.getElementById('h-rank').textContent=getRank(sc.total);
  document.getElementById('h-pts').textContent=sc.total;
  document.getElementById('h-pos').textContent='المركز '+pos;
  document.getElementById('h-pos-lbl').textContent='من '+sorted.length+' طالب';

  // ── STREAK ──
  const streakData = calcStreak(name);
  const streak = streakData.current;
  const crownLevel = streakData.crownLevel;

  // Rank pill — no crown here, crown shown separately in streak row
  document.getElementById('h-rank').textContent = getRank(sc.total);

  // Books: show progress within current 6-day cycle
  // currentCycleDay = how many days done in the current (incomplete) cycle
  const currentCycleDay = streak % 6; // 0 means just finished a full cycle
  const booksLit = crownLevel > 0 && currentCycleDay === 0 ? 6 : currentCycleDay;

  let books = '';
  for(let i=0;i<6;i++){
    books += `<span class="streak-book ${i < booksLit ? 'on' : 'off'}">📚</span>`;
  }
  document.getElementById('streak-books').innerHTML = books;
  document.getElementById('streak-text').textContent = streak + ' أيام متتالية';

  // Crown — only show if at least 1 full cycle (6 consecutive days) earned
  const crownEl = document.getElementById('streak-crown');
  if(crownEl){
    if(crownLevel >= 1){
      crownEl.style.display = 'inline';
      crownEl.textContent = crownLevel === 1 ? '👑' : '👑×'+crownLevel;
    } else {
      crownEl.style.display = 'none';
    }
  }

  const stageIdx=Math.min(7,Math.floor(sc.total/25));
  const stage=JOURNEY[stageIdx];
  document.getElementById('sta-icon').textContent=stage.icon;
  document.getElementById('sta-title').textContent=stage.title;
  document.getElementById('sta-guide').textContent='القدوة: '+stage.guide;
  const stagePct=pct(sc.total%25,25);
  document.getElementById('sta-prog').style.width=stagePct+'%';
  document.getElementById('sta-pct').textContent=stagePct+'%';
  // XP bar in hero
  const xpInStage = sc.total % 25;
  document.getElementById('h-xp-fill').style.width = stagePct + '%';
  document.getElementById('h-xp-pts').textContent = xpInStage + '/25 نقطة';
  document.getElementById('h-xp-next').textContent = 'المحطة ' + (stageIdx+1) + '/8';
  document.getElementById('sta-num').textContent=stageIdx+1;

  const b=sc.badges||{star:0,akhlaq:0,sab:0};
  document.getElementById('b-star').textContent=b.star||0;
  document.getElementById('b-star-x').textContent=b.star||0;
  document.getElementById('b-akhlaq').textContent=b.akhlaq||0;
  document.getElementById('b-akhlaq-x').textContent=b.akhlaq||0;
  document.getElementById('b-sab').textContent=b.sab||0;
  document.getElementById('b-sab-x').textContent=b.sab||0;

  const q=QUOTES[Math.floor(Date.now()/86400000)%QUOTES.length];
  document.getElementById('q-text').textContent=q.t;
  document.getElementById('q-author').textContent='- '+q.a;

  const sched=SCHEDULE[currentUser.halqa]||[];
  document.getElementById('sched-grid').innerHTML=sched.map(d=>`
    <div class="sched-cell">
      <div class="sched-day">${d.d}</div>
      <div class="sched-subj">${d.s}</div>
      <div class="sched-star">⭐</div>
    </div>`).join('');

  document.getElementById('sm-abyat').textContent=sc.abyat||0;
  document.getElementById('sm-hadith').textContent=sc.hadith||0;
  document.getElementById('sm-wajh').textContent=sc.wajh||0;

  // Stats section
  document.getElementById('st-pts').textContent=sc.total;
  document.getElementById('st-rank').textContent='#'+pos;
  document.getElementById('st-att').textContent=sc.attend||0;
  document.getElementById('st-tah').textContent=sc.tahdir||0;
  document.getElementById('st-att2').textContent=sc.attend||0;
  document.getElementById('st-tah2').textContent=sc.tahdir||0;
  document.getElementById('st-kit2').textContent=sc.kitab||0;

  // Memorization totals
  document.getElementById('st-abyat').textContent=sc.abyat||0;
  document.getElementById('st-wajh').textContent=sc.wajh||0;
  document.getElementById('st-hadith').textContent=sc.hadith||0;

  // Per-week breakdown
  const st=getState();
  const weekly=(st.weekly&&st.weekly[name])||{};
  const dayNames=['الأحد','الاثنين','الثلاثاء','الأربعاء'];
  let weeksHtml='';
  for(let w=1;w<=6;w++){
    const wd=weekly['w'+w];
    if(!wd) continue;
    const hasStar=checkWeekStarPublic(wd);
    let weekPts=0,weekAby=0,weekWj=0,weekHd=0,attDays=0;
    ['d1','d2','d3','d4'].forEach(d=>{
      const dd=wd[d]||{};
      if(dd.att) attDays++;
      weekAby+=(dd.aby||0); weekWj+=(dd.wj||0); weekHd+=(dd.hd||0);
      weekPts+=(dd.aby||0)+(dd.hf||0)*5+(dd.wj||0)*10+(dd.hd||0)*3;
      weekPts+=(dd.att?1:0)+(dd.tah?1:0)+(dd.kit?1:0);
    });
    if(wd.sum) weekPts+=5;
    weeksHtml+=`
      <div style="border-radius:var(--radius);background:var(--bg);padding:10px 12px;margin-bottom:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:0.82rem;font-weight:700;color:var(--green)">الأسبوع ${w} ${hasStar?'🏅':''}</span>
          <span style="font-size:0.75rem;font-weight:700;color:var(--sub)">${weekPts} نقطة</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:6px">
          ${['d1','d2','d3','d4'].map((d,i)=>{
            const dd=wd[d]||{};
            const mp=(dd.aby||0)+(dd.hf||0)*5+(dd.wj||0)*10+(dd.hd||0)*3;
            const ok=dd.att&&dd.tah&&dd.kit&&mp>=5;
            return`<div style="background:${ok?'var(--green-light)':'#fff'};border:1px solid ${ok?'var(--green-pale)':'var(--border)'};border-radius:8px;padding:5px;text-align:center">
              <div style="font-size:0.62rem;color:var(--sub);margin-bottom:2px">${dayNames[i]}</div>
              <div style="font-size:0.7rem;font-weight:700;color:${ok?'var(--green)':'var(--sub)'}">
                ${dd.att?'✓':'✗'}${dd.tah?'✓':'✗'}${dd.kit?'✓':'✗'}
              </div>
              <div style="font-size:0.68rem;color:${mp>=5?'var(--green)':'var(--sub)'};">${mp} نق</div>
            </div>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:10px;font-size:0.72rem;color:var(--sub)">
          ${weekAby?`<span>📜 ${weekAby} بيت</span>`:''}
          ${weekWj?`<span>📕 ${weekWj} وجه</span>`:''}
          ${weekHd?`<span>🕌 ${weekHd} حديث</span>`:''}
          ${wd.sum?`<span>📝 ملخص</span>`:''}
        </div>
      </div>`;
  }
  document.getElementById('st-weekly-breakdown').innerHTML=weeksHtml||'<div style="text-align:center;color:var(--sub);font-size:0.8rem;padding:10px">لا يوجد بيانات بعد</div>';

  renderLB();
  renderJourney();
  // Update bell dot — check cached notifs
  const bellDot = document.getElementById('bell-dot');
  if(bellDot){
    const cached = (_cache.notifs&&_cache.notifs[name])||[];
    bellDot.style.display = cached.filter(n=>!n.read).length ? 'block' : 'none';
  }
}

function switchSec(id,btn){
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(btn){
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function renderLB(){
  const sorted=getSorted();
  const myName=currentUser&&currentUser.name;
  const myPos=sorted.findIndex(s=>s.name===myName);

  // Top 3 podium (positions 0,1,2)
  const reorder=[sorted[1],sorted[0],sorted[2]].filter(Boolean);
  document.getElementById('lb-top3').innerHTML=reorder.map(s=>{
    const isFst=s===sorted[0];
    const cls=isFst?'first':s===sorted[1]?'second':'third';
    return`<div class="lb-podium ${cls}" style="min-width:90px">
      <div class="lb-avatar" style="${isFst?'width:64px;height:64px;background:var(--green)':'width:52px;height:52px;background:var(--sub)'}">
        ${isFst?'<span class="lb-crown">👑</span>':''}${initials(s.name)}
      </div>
      <div class="lb-pod-name">${s.name.split(' ')[0]}</div>
      <div class="lb-pod-pts">${s.score.total} نقطة</div>
      <div class="lb-pod-base"></div>
    </div>`;
  }).join('');

  // Positions 4 & 5 (index 3,4)
  const listItems=[];
  sorted.slice(3,5).forEach((s,i)=>{
    listItems.push({s,pos:i+4,isMe:s.name===myName});
  });

  // Add separator + student's own row if outside top 5
  let sep='';
  if(myPos>=5){
    sep=`<div style="text-align:center;color:var(--sub);font-size:0.72rem;padding:6px 0">• • •</div>`;
    listItems.push({s:sorted[myPos],pos:myPos+1,isMe:true});
  }

  document.getElementById('lb-list').innerHTML=
    sorted.slice(3,5).map((s,i)=>`
      <div class="lb-row ${s.name===myName?'me':''}">
        <div class="lb-num">${i+4}</div>
        <div class="lb-av">${initials(s.name)}</div>
        <div class="lb-nm">${s.name}</div>
        <div class="lb-pts">${s.score.total}</div>
      </div>`).join('')
    +(myPos>=5
      ? `<div style="text-align:center;color:var(--sub);font-size:0.72rem;padding:8px 0;letter-spacing:2px">• • •</div>
         <div class="lb-row me">
           <div class="lb-num">${myPos+1}</div>
           <div class="lb-av">${initials(sorted[myPos].name)}</div>
           <div class="lb-nm">${sorted[myPos].name}</div>
           <div class="lb-pts">${sorted[myPos].score.total}</div>
         </div>`
      : '');
}

function renderJourney(){
  const sc=currentUser&&currentUser.role==='student'?getScore(currentUser.name):{total:0};
  const stageIdx=Math.min(7,Math.floor(sc.total/25));
  document.getElementById('journey-list').innerHTML=JOURNEY.map((j,i)=>{
    const cls=i<stageIdx?'done':i===stageIdx?'active':'locked';
    const stagePct=i<stageIdx?100:i===stageIdx?pct(sc.total%25,25):0;
    return`<div class="journey-item">
      <div class="j-icon-wrap ${cls}">${j.icon}</div>
      <div class="j-body">
        <div class="j-title">${j.title} ${i<stageIdx?'✓':i===stageIdx?'◀':''}</div>
        <div class="j-guide">القدوة: ${j.guide}</div>
        <div class="j-desc">${j.desc}</div>
        ${i===stageIdx?`<div class="prog-bar" style="margin-top:8px"><div class="prog-fill" style="width:${stagePct}%"></div></div><div class="prog-pct">${stagePct}%</div>`:''}
      </div>
    </div>`;
  }).join('');
}

// ════════════════════ ADMIN ════════════════════
let currentWeek = 1;
let statsFilter = 'all';
let statsSort = 'desc';
let statsViewMode = 'points';
let badgeFilter = 'all';
let currentAwardWeek = 1;

function switchAdminTab(panelId,btn){
  document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
  btn.classList.add('active');
}

function initAdmin(){
  populateSelects();
  renderAdminStudents();
  setupCalc();
  renderWeekAwardSummary();
  // Always auto-sync attendance from the linked Google Sheet
  syncFromSheet();
}

function populateSelects(){
  const students=getStudents();
  ['adm-sel','aw-sel'].forEach(id=>{
    const sel=document.getElementById(id);
    sel.innerHTML='<option value="">— اختر طالباً —</option>';
    students.forEach(s=>{
      const o=document.createElement('option');
      o.value=s.name;o.textContent=s.name+' (حلقة '+s.halqa+')';
      sel.appendChild(o);
    });
  });
}

function selectWeek(w, btn){
  currentWeek = w;
  document.querySelectorAll('.week-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  loadWeekData();
}

async function loadAdmStu(){
  const name = document.getElementById('adm-sel').value;
  const formEl = document.getElementById('adm-form');
  if(!name){ formEl.style.display = 'none'; return; }

  // Show the form immediately — don't wait on network
  formEl.style.display = 'block';

  // Ensure this student's weekly data is in cache before populating fields
  if(!_cache.weekly) _cache.weekly = {};
  if(!_cache.weekly[name]){
    try {
      const w = await dbGetWeeklyData(name);
      _cache.weekly[name] = w || {};
    } catch(e){
      console.error('loadAdmStu: failed to fetch weekly data for', name, e);
      _cache.weekly[name] = {};
      showToast('⚠️ تعذّر تحميل بيانات الطالب من قاعدة البيانات — تحقق من الاتصال');
    }
  }
  loadWeekData();
}

function loadWeekData(){
  const name=document.getElementById('adm-sel').value;
  if(!name) return;
  try {
    const st=getState();
    const weekly=(st.weekly&&st.weekly[name]&&st.weekly[name]['w'+currentWeek])||{};
    ['d1','d2','d3','d4'].forEach(d=>{
      const dd=weekly[d]||{};
      ['att','tah','kit'].forEach(f=>{
        const el=document.getElementById(d+'-'+f);
        if(el) el.checked=!!dd[f];
      });
      ['aby','hf','wj','hd'].forEach(f=>{
        const el=document.getElementById(d+'-'+f);
        if(el) el.value=dd[f]||0;
      });
    });
    const sumEl = document.getElementById('af-sum');
    if(sumEl) sumEl.checked=!!weekly.sum;
    calcPts();
    updateWeekStarIndicators(name,st);
  } catch(e){
    console.error('loadWeekData error:', e);
  }
}

function setupCalc(){
  const ids=['d1-att','d1-tah','d1-kit','d1-aby','d1-hf','d1-wj','d1-hd',
             'd2-att','d2-tah','d2-kit','d2-aby','d2-hf','d2-wj','d2-hd',
             'd3-att','d3-tah','d3-kit','d3-aby','d3-hf','d3-wj','d3-hd',
             'd4-att','d4-tah','d4-kit','d4-aby','d4-hf','d4-wj','d4-hd',
             'af-sum'];
  ids.forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.addEventListener('change',calcPts);el.addEventListener('input',calcPts);}
  });
}

function dayMemPts(d){
  return parseInt(document.getElementById(d+'-aby').value||0)*1
       + parseInt(document.getElementById(d+'-hf').value||0)*5
       + parseFloat(document.getElementById(d+'-wj').value||0)*10
       + parseInt(document.getElementById(d+'-hd').value||0)*3;
}

function calcPts(){
  let p=0;
  ['d1','d2','d3','d4'].forEach(d=>{
    if(document.getElementById(d+'-att')&&document.getElementById(d+'-att').checked) p+=1;
    if(document.getElementById(d+'-tah')&&document.getElementById(d+'-tah').checked) p+=1;
    if(document.getElementById(d+'-kit')&&document.getElementById(d+'-kit').checked) p+=1;
    const mp=dayMemPts(d);
    p+=mp;
    // update per-day badge
    const badge=document.getElementById(d+'-pts-badge');
    if(badge){
      badge.textContent=mp+' نقطة تسميع';
      badge.className='day-mem-pts '+(mp>=5?'met':mp>0?'low':'');
    }
  });
  if(document.getElementById('af-sum').checked) p+=5;
  document.getElementById('adm-calc').textContent=p;
  updateStarMeter();
  return p;
}

function updateStarMeter(){
  const el=document.getElementById('star-meter');
  if(!el) return;
  const allDays=['d1','d2','d3','d4'].every(d=>{
    const a=document.getElementById(d+'-att'),t=document.getElementById(d+'-tah'),k=document.getElementById(d+'-kit');
    return a&&a.checked&&t&&t.checked&&k&&k.checked;
  });
  const hasSummary=document.getElementById('af-sum').checked;
  const dayPtsArr=['d1','d2','d3','d4'].map(d=>({d,pts:dayMemPts(d)}));
  const allMem20=dayPtsArr.every(x=>x.pts>=5);
  const earned=allDays&&hasSummary&&allMem20;
  el.innerHTML=`
    <div style="font-size:0.78rem;font-weight:700;color:${earned?'var(--gold)':'var(--sub)'};margin-bottom:8px">
      🏅 شروط وسام مجتهد الأسبوع ${earned?'— مكتمل ✓':''}
    </div>
    <div style="display:flex;flex-direction:column;gap:5px">
      <div class="star-req ${allDays?'ok':''}">
        ${allDays?'✅':'⬜'} الحضور والتحضير والكتاب في جميع الأيام الأربعة
      </div>
      <div class="star-req ${hasSummary?'ok':''}">
        ${hasSummary?'✅':'⬜'} التلخيص الأسبوعي
      </div>
      ${dayPtsArr.map((x,i)=>{
        const names=['الأحد','الاثنين','الثلاثاء','الأربعاء'];
        return`<div class="star-req ${x.pts>=5?'ok':''}">
          ${x.pts>=5?'✅':'⬜'} التسميع يوم ${names[i]}: ${x.pts}/5 نقطة${x.pts<5?' (ناقص '+(5-x.pts)+')':''}
        </div>`;
      }).join('')}
    </div>`;
  el.style.background=earned?'var(--gold-light)':'var(--bg)';
  el.style.borderColor=earned?'var(--gold-pale)':'var(--border)';
}

async function saveWeekly(){
  const name=document.getElementById('adm-sel').value;
  if(!name) return;

  const newWeek={
    d1:{att:document.getElementById('d1-att').checked,tah:document.getElementById('d1-tah').checked,kit:document.getElementById('d1-kit').checked,
        aby:parseInt(document.getElementById('d1-aby').value||0),hf:parseInt(document.getElementById('d1-hf').value||0),wj:parseFloat(document.getElementById('d1-wj').value||0),hd:parseInt(document.getElementById('d1-hd').value||0)},
    d2:{att:document.getElementById('d2-att').checked,tah:document.getElementById('d2-tah').checked,kit:document.getElementById('d2-kit').checked,
        aby:parseInt(document.getElementById('d2-aby').value||0),hf:parseInt(document.getElementById('d2-hf').value||0),wj:parseFloat(document.getElementById('d2-wj').value||0),hd:parseInt(document.getElementById('d2-hd').value||0)},
    d3:{att:document.getElementById('d3-att').checked,tah:document.getElementById('d3-tah').checked,kit:document.getElementById('d3-kit').checked,
        aby:parseInt(document.getElementById('d3-aby').value||0),hf:parseInt(document.getElementById('d3-hf').value||0),wj:parseFloat(document.getElementById('d3-wj').value||0),hd:parseInt(document.getElementById('d3-hd').value||0)},
    d4:{att:document.getElementById('d4-att').checked,tah:document.getElementById('d4-tah').checked,kit:document.getElementById('d4-kit').checked,
        aby:parseInt(document.getElementById('d4-aby').value||0),hf:parseInt(document.getElementById('d4-hf').value||0),wj:parseFloat(document.getElementById('d4-wj').value||0),hd:parseInt(document.getElementById('d4-hd').value||0)},
    sum:document.getElementById('af-sum').checked,
  };

  // Update in-memory cache
  if(!_cache.weekly) _cache.weekly={};
  if(!_cache.weekly[name]) _cache.weekly[name]={};
  const prevStars = (getScore(name).badges||{}).star||0;
  _cache.weekly[name]['w'+currentWeek] = newWeek;

  // Save to Supabase — each day as a row
  const saveBtn = document.querySelector('#ap-entry .m-save');
  if(saveBtn){saveBtn.textContent='جاري الحفظ...';saveBtn.disabled=true;}
  
  const saves = ['d1','d2','d3','d4'].map(dk =>
    dbSaveDay(name, currentWeek, dk, newWeek[dk])
  );
  saves.push(dbSaveWeeklySummary(name, currentWeek, newWeek.sum));
  
  try {
    await Promise.all(saves);
  } catch(e){ console.error('DB save error', e); }

  // Recalculate
  const st = getState();
  recalcStudentScore(name, st);
  const newStars = (getScore(name).badges||{}).star||0;

  if(saveBtn){saveBtn.textContent='💾 حفظ وتسجيل الأسبوع';saveBtn.disabled=false;}

  if(newStars > prevStars){
    showToast('🏅 مبروك! حصل على وسام مجتهد الأسبوع '+currentWeek);
    await dbAddNotification(name,'🏅 مبروك! حصلت على وسام مجتهد الأسبوع '+currentWeek);
  } else if(prevStars > newStars){
    showToast('✓ تم الحفظ — سُحب وسام الأسبوع '+currentWeek);
  } else {
    const missing = getMissingStarReqs(newWeek);
    showToast(missing.length===0?'✓ تم حفظ الأسبوع '+currentWeek+' 🌟':'✓ تم الحفظ — ناقص: '+missing.join('، '));
  }
  renderAdminStudents();
  updateWeekStarIndicators(name, st);
}

function dayMemPtsFromData(dd){
  return (dd.aby||0)*1 + (dd.hf||0)*5 + (dd.wj||0)*10 + (dd.hd||0)*3;
}

function checkWeekStar(wd){
  // شرط 1: جميع الأيام الأربعة بها حضور + تحضير + كتاب
  const allDays=['d1','d2','d3','d4'].every(d=>wd[d]&&wd[d].att&&wd[d].tah&&wd[d].kit);
  // شرط 2: تلخيص أسبوعي
  const hasSummary=!!wd.sum;
  // شرط 3: تسميع كل يوم >= 20 نقطة
  const allMem20=['d1','d2','d3','d4'].every(d=>wd[d]&&dayMemPtsFromData(wd[d])>=5);
  return allDays&&hasSummary&&allMem20;
}
const checkWeekStarPublic=checkWeekStar;

function recalcStudentScore(name,st){
  name = name ? name.trim() : name;
  const sc=getScores();
  if(!sc[name]) sc[name]={total:0,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0,badges:{star:0,akhlaq:0,sab:0}};
  console.log('[recalc] name=',JSON.stringify(name),'inExcel=',!!EXCEL_SCORES[name],'weeklyKeys=',Object.keys((st.weekly&&st.weekly[name])||{}));

  // Get akhlaq/sab from weeklyAwards (the authoritative source), not from cached badges
  const awardsData = st.weeklyAwards || {};
  let akhlaq=0, sab=0;
  for(let w=1;w<=6;w++){
    const key = name+'_w'+w;
    if(awardsData[key]){ if(awardsData[key].akhlaq) akhlaq++; if(awardsData[key].sab) sab++; }
  }

  // الحضور والتحضير والكتاب والتلخيص: من قوقل شيت فقط
  const hist = EXCEL_SCORES[name] || {};
  let total   = hist.total   || 0;
  let attend  = hist.attend  || 0;
  let tahdir  = hist.tahdir  || 0;
  let kitab   = hist.kitab   || 0;
  let abyat   = hist.abyat   || 0;
  let hadith  = hist.hadith  || 0;
  let wajh    = hist.wajh    || 0;
  let starCount = 0;

  // الحفظ فقط: من إدخال المشرف في الموقع (weekly_data)
  const weekly=(st.weekly&&st.weekly[name])||{};
  for(let w=1;w<=6;w++){
    const wd=weekly['w'+w];
    if(!wd) continue;
    ['d1','d2','d3','d4'].forEach(d=>{
      const dd=wd[d]||{};
      // وجه = 5 نقاط، بيت/أبيات = 1 نقطة لكل بيت
      const newWajh = dd.wj||0;
      const newAby  = dd.aby||0;
      abyat += newAby;
      wajh  += newWajh;
      total += newWajh*5 + newAby*1;
    });
  }

  const badges={star:starCount,akhlaq,sab};
  sc[name]={total,attend,tahdir,kitab,abyat,hadith,wajh,badges};
  saveScores(sc);
  console.log('[recalc] result for',name,'→ total=',total);
  return{starCount};
}

// legacy kept for compatibility
function saveDaily(){saveWeekly();}

function getMissingStarReqs(wd){
  const missing=[];
  const allDays=['d1','d2','d3','d4'].every(d=>wd[d]&&wd[d].att&&wd[d].tah&&wd[d].kit);
  if(!allDays) missing.push('الحضور والتحضير والكتاب في كل الأيام');
  if(!wd.sum) missing.push('التلخيص الأسبوعي');
  const names=['الأحد','الاثنين','الثلاثاء','الأربعاء'];
  ['d1','d2','d3','d4'].forEach((d,i)=>{
    const mp=wd[d]?dayMemPtsFromData(wd[d]):0;
    if(mp<5) missing.push('تسميع '+names[i]+' ('+mp+'/5)');
  });
  return missing;
}

function updateWeekStarIndicators(name, st){
  const weekly=(st.weekly&&st.weekly[name])||{};
  for(let w=1;w<=6;w++){
    const btn=document.querySelector('.week-tab:nth-child('+w+')');
    if(!btn) continue;
    const wd=weekly['w'+w];
    if(wd && checkWeekStar(wd)){
      btn.textContent='الأسبوع '+w+' 🏅';
    } else {
      btn.textContent='الأسبوع '+w;
    }
    if(w===currentWeek) btn.classList.add('active');
  }
}

// ════ STATS TABLE ════
function setStatsFilter(f, btn){
  statsFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderStatsTable();
}

function renderStatsTable(){
  let sorted = getSorted();
  // apply sort direction
  if(statsSort === 'asc') sorted = [...sorted].reverse();
  const filtered = statsFilter==='all' ? sorted : sorted.filter(s=>s.halqa===statsFilter);

  const totPts = filtered.reduce((a,s)=>a+(s.score.total||0),0);
  document.getElementById('stats-summary-boxes').innerHTML=`
    <div class="sum-box"><div class="sum-val">${filtered.length}</div><div class="sum-lbl">عدد الطلاب</div></div>
    <div class="sum-box"><div class="sum-val">${totPts}</div><div class="sum-lbl">مجموع النقاط</div></div>
    <div class="sum-box"><div class="sum-val">${filtered.length?Math.round(totPts/filtered.length):0}</div><div class="sum-lbl">متوسط النقاط</div></div>
  `;

  const ranks=['🥇','🥈','🥉'];
  // for rank badge always use position from desc order
  const descSorted = getSorted();
  document.getElementById('stats-tbody').innerHTML = filtered.map((s,i)=>{
    const sc = s.score;
    const descPos = descSorted.findIndex(x=>x.name===s.name);
    const rankBadge = descPos<3 ? `<span class="rank-badge r${descPos+1}">${ranks[descPos]}</span>` : `<span style="color:var(--sub);font-size:0.8rem">${i+1}</span>`;
    return `<tr>
      <td>${rankBadge}</td>
      <td class="stu-name-cell">${s.name}</td>
      <td class="${s.halqa==='أ'?'halqa-a':'halqa-b'}">${s.halqa}</td>
      <td style="font-weight:900;color:var(--green)">${sc.total||0}</td>
      <td>${sc.attend||0}</td>
      <td>${sc.tahdir||0}</td>
      <td>${sc.kitab||0}</td>
      <td>${sc.abyat||0}</td>
      <td>${sc.hadith||0}</td>
      <td>${sc.wajh||0}</td>
    </tr>`;
  }).join('');
}

// ════ AWARDS WEEKLY ════

function selectAwardWeek(w, btn){
  currentAwardWeek = w;
  document.querySelectorAll('#aw-week-tabs .week-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  loadAwardState();
  renderWeekAwardSummary();
}

function loadAwardState(){
  const name = document.getElementById('aw-sel').value;
  if(!name){ document.getElementById('aw-current-status').style.display='none'; return; }
  const data = getAwardData();
  const key = name + '_w' + currentAwardWeek;
  const existing = data[key] || {akhlaq:false,sab:false};
  document.getElementById('aw-akhl').checked = !!existing.akhlaq;
  document.getElementById('aw-sab').checked = !!existing.sab;
  const statusEl = document.getElementById('aw-current-status');
  const parts = [];
  if(existing.akhlaq) parts.push('🌟 صاحب الخلق الحسن');
  if(existing.sab) parts.push('🏃 السبّاق');
  if(parts.length){
    statusEl.textContent = 'أوسمة هذا الأسبوع: ' + parts.join(' • ');
    statusEl.style.display='block';
  } else {
    statusEl.textContent = 'لا توجد أوسمة لهذا الطالب في الأسبوع ' + currentAwardWeek;
    statusEl.style.display='block';
  }
}

async function saveAward(){
  const name=document.getElementById('aw-sel').value;
  if(!name)return;
  const data = getAwardData();
  const key = name + '_w' + currentAwardWeek;
  const prevAkhlaq = (data[key]||{}).akhlaq || false;
  const prevSab = (data[key]||{}).sab || false;
  const newAkhlaq = document.getElementById('aw-akhl').checked;
  const newSab = document.getElementById('aw-sab').checked;
  data[key] = { akhlaq: newAkhlaq, sab: newSab, week: currentAwardWeek, name };
  saveAwardData(data);

  // Save to DB
  await dbSaveAward(name, currentAwardWeek, newAkhlaq, newSab);
  // Rebuild all totals
  const st2 = getState();
  recalcStudentScore(name, st2);
  // Send notifications
  if(newAkhlaq && !prevAkhlaq) await dbAddNotification(name,'🌟 مبروك! حصلت على وسام صاحب الخلق الحسن في الأسبوع '+currentAwardWeek);
  if(newSab && !prevSab) await dbAddNotification(name,'🏃 مبروك! حصلت على وسام السبّاق في الأسبوع '+currentAwardWeek);

  showToast('✓ تم حفظ الأوسمة للأسبوع ' + currentAwardWeek);
  loadAwardState();
  renderWeekAwardSummary();
}

function renderWeekAwardSummary(){
  const data = getAwardData();
  const students = getStudents();
  const rows = [];
  students.forEach(s=>{
    const key = s.name+'_w'+currentAwardWeek;
    if(data[key] && (data[key].akhlaq || data[key].sab)){
      rows.push({name:s.name, halqa:s.halqa, akhlaq:data[key].akhlaq, sab:data[key].sab});
    }
  });
  const summaryEl = document.getElementById('aw-week-summary');
  const listEl = document.getElementById('aw-week-list');
  if(!rows.length){
    summaryEl.style.display='none';
    return;
  }
  summaryEl.style.display='block';
  listEl.innerHTML = rows.map(r=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;flex-shrink:0">${initials(r.name)}</div>
      <div style="flex:1;font-size:0.85rem;font-weight:700">${r.name}</div>
      <div style="display:flex;gap:6px">
        ${r.akhlaq?'<span style="background:var(--purple-light);color:var(--purple);border-radius:20px;padding:3px 10px;font-size:0.72rem;font-weight:700">🌟 خلق حسن</span>':''}
        ${r.sab?'<span style="background:var(--green-light);color:var(--green);border-radius:20px;padding:3px 10px;font-size:0.72rem;font-weight:700">🏃 سبّاق</span>':''}
      </div>
    </div>`).join('');
}

// ════ STATS VIEW TOGGLE ════
function setStatsView(mode, btn){
  statsViewMode = mode;
  document.querySelectorAll('#ap-stats .filter-btn').forEach(b=>{
    if(b.id==='stats-view-pts'||b.id==='stats-view-bdg') b.classList.remove('active');
  });
  btn.classList.add('active');
  document.getElementById('stats-points-view').style.display = mode==='points'?'block':'none';
  document.getElementById('stats-badges-view').style.display = mode==='badges'?'block':'none';
  if(mode==='badges') renderBadgesTable();
}

function setStatsSort(dir, btn){
  statsSort = dir;
  document.getElementById('sort-desc-btn').classList.toggle('active', dir==='desc');
  document.getElementById('sort-asc-btn').classList.toggle('active', dir==='asc');
  renderStatsTable();
}

function setBadgeFilter(f, btn){
  badgeFilter = f;
  document.querySelectorAll('#stats-badges-view .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderBadgesTable();
}

function renderBadgesTable(){
  const students = getStudents();
  const sc_all = getScores();
  const filtered = statsFilter==='all' ? students : students.filter(s=>s.halqa===statsFilter);
  const ranks = ['🥇','🥈','🥉'];

  // Sort by selected badge or total
  const sorted = filtered.map(s=>{
    const b = (sc_all[s.name]&&sc_all[s.name].badges)||{star:0,akhlaq:0,sab:0};
    const total = (b.star||0)+(b.akhlaq||0)+(b.sab||0);
    return {...s, b, total};
  }).sort((a,b2)=> badgeFilter==='star'?(b2.b.star-a.b.star)
                  :badgeFilter==='akhlaq'?(b2.b.akhlaq-a.b.akhlaq)
                  :badgeFilter==='sab'?(b2.b.sab-a.b.sab)
                  :(b2.total-a.total));

  // Summary
  const totStar = sorted.reduce((a,s)=>a+(s.b.star||0),0);
  const totAkhlaq = sorted.reduce((a,s)=>a+(s.b.akhlaq||0),0);
  const totSab = sorted.reduce((a,s)=>a+(s.b.sab||0),0);
  document.getElementById('badge-summary-boxes').innerHTML=`
    <div class="sum-box"><div class="sum-val" style="color:var(--gold)">${totStar}</div><div class="sum-lbl">🏅 مجتهد الأسبوع</div></div>
    <div class="sum-box"><div class="sum-val" style="color:var(--purple)">${totAkhlaq}</div><div class="sum-lbl">🌟 الخلق الحسن</div></div>
    <div class="sum-box"><div class="sum-val" style="color:var(--green)">${totSab}</div><div class="sum-lbl">🏃 السبّاق</div></div>`;

  // Highlight sorted column
  ['star','akhlaq','sab'].forEach(k=>{
    const th = document.getElementById('bdg-th-'+k);
    if(th) th.style.background = (badgeFilter===k||badgeFilter==='all') ? '' : 'rgba(255,255,255,0.1)';
  });

  document.getElementById('badges-tbody').innerHTML = sorted.map((s,i)=>{
    const rankBadge = i<3?`<span class="rank-badge r${i+1}">${ranks[i]}</span>`:`<span style="color:var(--sub);font-size:0.8rem">${i+1}</span>`;
    const hl = (k)=> badgeFilter===k?'font-weight:900;color:var(--green)':'';
    return `<tr>
      <td>${rankBadge}</td>
      <td class="stu-name-cell">${s.name}</td>
      <td class="${s.halqa==='أ'?'halqa-a':'halqa-b'}">${s.halqa}</td>
      <td style="${hl('star')}">${s.b.star||0}</td>
      <td style="${hl('akhlaq')}">${s.b.akhlaq||0}</td>
      <td style="${hl('sab')}">${s.b.sab||0}</td>
      <td style="font-weight:900;color:var(--green)">${s.total}</td>
    </tr>`;
  }).join('');
}

function renderAdminStudents(){
  const sorted=getSorted();
  document.getElementById('adm-stu-list').innerHTML=sorted.map(s=>`
    <div class="student-card">
      <div class="stu-av">${initials(s.name)}</div>
      <div class="stu-info">
        <div class="stu-name">${s.name}</div>
        <div class="stu-meta">${getRank(s.score.total)} • حلقة ${s.halqa} • ${s.u}</div>
      </div>
      <div class="stu-pts">${s.score.total}</div>
      <div class="stu-actions">
        <button class="stu-btn edit" onclick="openEditModal('${s.name}')">تعديل</button>
        <button class="stu-btn del" onclick="confirmDelete('${s.name}')">حذف</button>
      </div>
    </div>`).join('');
}

// ════════════════════ MODAL ════════════════════
let editingName=null;

function openAddModal(){
  editingName=null;
  document.getElementById('modal-title-text').textContent='إضافة طالب جديد';
  document.getElementById('m-name').value='';
  document.getElementById('m-usr').value='';
  document.getElementById('m-pw').value='';
  document.getElementById('m-halqa').value='أ';
  document.getElementById('m-pts').value=0;
  document.getElementById('m-del-btn').style.display='none';
  document.getElementById('modal-overlay').classList.add('open');
}

function openEditModal(name){
  editingName=name;
  const students=getStudents();
  const s=students.find(x=>x.name===name)||{};
  const sc=getScore(name);
  document.getElementById('modal-title-text').textContent='تعديل بيانات الطالب';
  document.getElementById('m-name').value=name;
  document.getElementById('m-usr').value=s.u||'';
  document.getElementById('m-pw').value=s.p||'';
  document.getElementById('m-halqa').value=s.halqa||'أ';
  document.getElementById('m-pts').value=sc.total||0;
  document.getElementById('m-del-btn').style.display='block';
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e){if(e.target===document.getElementById('modal-overlay'))closeModalDirect()}
function closeModalDirect(){document.getElementById('modal-overlay').classList.remove('open')}

async function saveStudent(){
  const newName=document.getElementById('m-name').value.trim();
  const newUsr=document.getElementById('m-usr').value.trim();
  const newPw=document.getElementById('m-pw').value.trim();
  const newHalqa=document.getElementById('m-halqa').value;
  const newPts=parseInt(document.getElementById('m-pts').value||0);
  if(!newName||!newUsr||!newPw)return alert('يرجى ملء جميع الحقول');

  const students=getStudents();
  const sc=getScores();
  const saveBtn=document.querySelector('#student-modal .m-save');
  if(saveBtn){saveBtn.textContent='جاري الحفظ...';saveBtn.disabled=true;}

  const studentObj={u:newUsr, p:newPw, name:newName, halqa:newHalqa, username:newUsr, password:newPw, id:newUsr};

  if(editingName){
    // ── UPDATE existing student ──
    const idx=students.findIndex(s=>s.name===editingName);
    if(idx>=0){
      students[idx]={...students[idx],...studentObj};
      if(newName!==editingName && sc[editingName]){
        sc[newName]={...sc[editingName]};
        delete sc[editingName];
      }
      if(sc[newName])sc[newName].total=newPts;
    }
    // Delete old + insert new in Supabase (name may have changed)
    try {
      if(newName!==editingName) await dbDeleteStudent(editingName);
      await dbSaveStudent(studentObj);
    } catch(e){ console.error('DB update student error', e); }
  } else {
    // ── INSERT new student ──
    if(students.find(s=>s.u===newUsr||s.username===newUsr)){
      if(saveBtn){saveBtn.textContent='💾 حفظ';saveBtn.disabled=false;}
      return alert('اسم المستخدم موجود مسبقاً');
    }
    students.push(studentObj);
    sc[newName]={total:newPts,attend:0,tahdir:0,kitab:0,abyat:0,hadith:0,wajh:0,badges:{star:0,akhlaq:0,sab:0}};
    // ── INSERT into Supabase ──
    try {
      const ok = await dbSaveStudent(studentObj, true);
      if(!ok) console.warn('Supabase insert returned non-ok');
    } catch(e){ console.error('DB insert student error', e); }
  }

  saveStudents(students);
  saveScores(sc);
  if(saveBtn){saveBtn.textContent='💾 حفظ';saveBtn.disabled=false;}
  closeModalDirect();
  populateSelects();
  renderAdminStudents();
  showToast('✓ تم الحفظ في قاعدة البيانات');
}

async function confirmDelete(name){
  if(!confirm('هل تريد حذف الطالب '+name+'؟'))return;
  deleteStudentByName(name);
}

function deleteStudent(){
  if(!editingName)return;
  if(!confirm('هل تريد حذف الطالب '+editingName+'؟'))return;
  deleteStudentByName(editingName);
  closeModalDirect();
}

async function deleteStudentByName(name){
  let students=getStudents().filter(s=>s.name!==name);
  const sc=getScores();
  delete sc[name];
  saveStudents(students);
  saveScores(sc);
  try { await dbDeleteStudent(name); } catch(e){ console.error('DB delete error',e); }
  populateSelects();
  renderAdminStudents();
  showToast('تم الحذف من قاعدة البيانات');
}


// ════════════════════ NOTIFICATION SYSTEM ════════════════════
// In-app notification modal (used since PWA push needs a server)
function showNotification(msg, targetName){
  dbAddNotification(targetName, msg).catch(e=>console.error('notif error',e));
}

function getUnreadNotifs(name){
  return _cache.notifs ? (_cache.notifs[name]||[]).filter(n=>!n.read) : [];
}

function markNotifsRead(name){
  dbMarkNotifsRead(name).catch(()=>{});
  if(_cache.notifs && _cache.notifs[name])
    _cache.notifs[name].forEach(n=>n.read=true);
}

async function checkAndShowNotifications(){
  if(!currentUser||currentUser.role!=='student') return;
  const name = currentUser.name;
  // Load fresh notifs from DB
  try {
    const dbNotifs = await dbGetNotifications(name);
    if(!_cache.notifs) _cache.notifs={};
    _cache.notifs[name] = dbNotifs;
  } catch(e){}
  const notifs = [...((_cache.notifs&&_cache.notifs[name])||[])];

  // Auto-checks: stage progress, Tuesday memorization warning
  const sc = getScore(name);
  const stageIdx = Math.min(7, Math.floor(sc.total/25));
  const stagePct = pct(sc.total % 25, 25);

  // Use localStorage just for "already sent" flags (they're per-device, not data)
  const sentKey = 'fbhd_sent_'+name;
  const sent = JSON.parse(localStorage.getItem(sentKey)||'{}');
  let sentChanged = false;
  const autoNotifs = [];

  const stageKey = name+'_stage75_'+stageIdx;
  if(stagePct >= 75 && stagePct < 100 && !sent[stageKey]){
    const msg='🌟 أنت على بُعد خطوات من إتمام مرحلة "'+JOURNEY[stageIdx].title+'"! اجتهد وأكمل الرحلة.';
    await dbAddNotification(name, msg);
    sent[stageKey]=true; sentChanged=true;
  }

  const prevStageKey = name+'_stageComplete_'+(stageIdx-1);
  if(stageIdx > 0 && !sent[prevStageKey]){
    const msg='🎉 تهانيّ! لقد أتممت مرحلة "'+JOURNEY[stageIdx-1].title+'" بنجاح. استمر في مسيرتك!';
    await dbAddNotification(name, msg);
    sent[prevStageKey]=true; sentChanged=true;
  }

  const dayOfWeek = new Date().getDay();
  if(dayOfWeek === 2){
    const tuesdayKey = name+'_tuePts_'+getWeekNumber();
    if(!sent[tuesdayKey]){
      const weeklyData = (_cache.weekly&&_cache.weekly[name])||{};
      const cw = weeklyData['w'+currentWeek]||{};
      // Check days so far this week (d1=Sunday, d2=Monday) meet the 5-point daily minimum
      const daysToCheck = ['d1','d2'];
      const belowMin = daysToCheck.filter(d => dayMemPtsFromData(cw[d]||{}) < 5);
      if(belowMin.length > 0){
        const weekMemPts = daysToCheck.reduce((s,d)=>s+dayMemPtsFromData(cw[d]||{}),0);
        const msg='⚠️ تنبيه: لم تُكمل الحد الأدنى اليومي للحفظ (5 نقاط) في بعض أيام هذا الأسبوع. اجتهد في الحفظ للحصول على وسام مجتهد الأسبوع 🏅';
        await dbAddNotification(name, msg);
        sent[tuesdayKey]=true; sentChanged=true;
      }
    }
  }

  if(sentChanged) localStorage.setItem(sentKey, JSON.stringify(sent));

  // Reload notifs from DB after adding
  const freshNotifs = await dbGetNotifications(name);
  if(!_cache.notifs) _cache.notifs={};
  _cache.notifs[name] = freshNotifs;
  const unread = freshNotifs.filter(n=>!n.read);
  if(!unread.length) return;
  renderNotifPanel(unread, name);
}

function getWeekNumber(){
  const d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
}

function renderNotifPanel(notifs, name, showAll=false){
  // Create notification drawer if not exists
  let panel = document.getElementById('notif-panel');
  if(!panel){
    panel = document.createElement('div');
    panel.id = 'notif-panel';
    panel.style.cssText = 'position:fixed;top:0;right:0;left:0;bottom:0;z-index:500;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px)';
    document.body.appendChild(panel);
  }
  panel.innerHTML = `
    <div style="background:var(--ivory);border-radius:var(--radius-lg) var(--radius-lg) 0 0;padding:24px;width:100%;max-width:430px;max-height:75vh;overflow-y:auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
        <div style="font-family:'Scheherazade New',serif;font-size:1.3rem;font-weight:700">🔔 إشعاراتك <span style="font-size:0.8rem;font-weight:400;color:var(--sub)">(${notifs.length})</span></div>
        <button onclick="closeNotifPanel('${name}')" style="border:none;background:var(--border);border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:1rem;color:var(--sub)">✕</button>
      </div>
      ${notifs.length===0?'<div style="text-align:center;padding:20px;color:var(--sub);font-size:0.9rem">لا توجد إشعارات</div>':
        [...notifs].reverse().map(n=>`
        <div style="background:${n.read?'var(--bg)':n.msg.startsWith('⚠️')?'#FFF7ED':n.msg.startsWith('🎉')?'var(--gold-light)':'var(--green-light)'};border-radius:var(--radius);padding:14px 16px;margin-bottom:10px;border-right:4px solid ${n.read?'var(--border)':n.msg.startsWith('⚠️')?'#F59E0B':n.msg.startsWith('🎉')?'var(--gold)':'var(--green)'};opacity:${n.read?'0.7':'1'}">
          <div style="font-size:0.88rem;line-height:1.7;font-family:'Noto Naskh Arabic',serif">${n.msg}</div>
          <div style="font-size:0.65rem;color:var(--sub);margin-top:4px">${n.read?'تمت القراءة':'جديد'}</div>
        </div>`).join('')}
      <button onclick="closeNotifPanel('${name}')" style="width:100%;margin-top:8px;background:linear-gradient(135deg,var(--green),var(--green2));color:#fff;border:none;border-radius:var(--radius);padding:13px;font-family:'Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;cursor:pointer">حسناً ✓</button>
    </div>`;
  panel.style.display = 'flex';
}

async function closeNotifPanel(name){
  const panel = document.getElementById('notif-panel');
  if(panel) panel.style.display = 'none';
  await dbMarkNotifsRead(name);
  if(_cache.notifs && _cache.notifs[name]) _cache.notifs[name].forEach(n=>n.read=true);
  const dot = document.getElementById('bell-dot');
  if(dot) dot.style.display = 'none';
}

function getAllNotifs(name){
  return (_cache.notifs && _cache.notifs[name]) || [];
}

async function openNotifPanel(){
  if(!currentUser||currentUser.role!=='student') return;
  const name = currentUser.name;
  // Always fetch fresh from DB
  try {
    const fresh = await dbGetNotifications(name);
    if(!_cache.notifs) _cache.notifs={};
    _cache.notifs[name] = fresh;
    if(fresh.length) renderNotifPanel(fresh, name, true);
    else showToast('لا توجد إشعارات');
  } catch(e){ showToast('لا توجد إشعارات'); }
}

// ════════════════════ TOAST ════════════════════
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg||'✓ تم';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

// ════════════════════════════════════════════════════════
// GOOGLE SHEETS SYNC
// Sheet structure expected (one row per student):
//   Col A: اسم الطالب
//   Col B-E:   الأسبوع 1 — الأحد، الاثنين، الثلاثاء، الأربعاء  (each cell: "حضور، تحضير، كتاب")
//   Col F:     الأسبوع 1 — تلخيص  ("نعم" / "لا" / "تم" / empty)
//   ... repeats for weeks 2-6 (5 cols per week: 4 days + 1 summary)
// Total data columns = 1 (name) + 6 weeks × 5 = 31
// ════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// Hardcoded Google Sheet — no manual input needed, syncs automatically
// ════════════════════════════════════════════════════════
// IMPORTANT — column layout: /export?format=csv was the endpoint verified
// to preserve this sheet's exact column structure (merged header cells for
// week/day names). gviz/tq was tested and found to reorder/misalign columns
// with this sheet's merged-cell headers, corrupting attendance data — DO NOT
// switch to gviz without re-verifying column alignment first.
//
// IMPORTANT — access method: /export consistently returned HTTP 400 in
// production (confirmed via direct browser test, with and without a Google
// account logged in, and via 3 different CORS proxies — all failed the same
// way, pointing to Google rejecting the /export endpoint itself in this
// context). Switched to the sheet's "Publish to web" CSV link instead, which
// is Google's endpoint designed specifically for public programmatic access
// and does not depend on Drive sharing permissions or account session state.
// This published link uses the SAME tab (gid=0) so column layout is identical.
const SHEET_PUBLISHED_ID = '2PACX-1vSPzPi4OtZkWtbi5HlxSbCn5mS8fZGgog6_6mqcLn8B4VqUaoMeVCbANUDIxO0mOiIdr8OVbCV9gNGv';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SHEET_PUBLISHED_ID}/pub?gid=0&single=true&output=csv`;
// Fallbacks, in case the published link ever breaks (e.g. republish needed)
const SHEET_ID = '1T45D8s0fvBN5HuJEGWrE9Et4fTvNMtbpSvYsNbbTe9s';
const SHEET_GID = '0';
const SHEET_EXPORT_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;
const SHEET_CSV_URL_PROXY2 = `https://api.allorigins.win/raw?url=${encodeURIComponent(SHEET_EXPORT_URL)}`;
const SHEET_CSV_URL_FALLBACK = SHEET_EXPORT_URL;

function getSheetUrl(){
  return SHEET_CSV_URL;
}

// Parse one CSV cell like "حضور، تحضير، كتاب" into {att,tah,kit}
// Parse a TRUE/FALSE-style cell into a boolean
function parseBoolCell(cell){
  const text = (cell||'').trim().toUpperCase();
  return text === 'TRUE' || text === '1' || text === 'نعم' || text === 'تم' || text === '✓' || text === '✅';
}

// Robust CSV line splitter (handles quoted cells with commas)
function splitCsvLine(line){
  const cells = [];
  let current = '';
  let inQuote = false;
  for(let i=0;i<line.length;i++){
    const ch = line[i];
    if(ch === '"'){ inQuote = !inQuote; continue; }
    if(ch === ',' && !inQuote){ cells.push(current.trim()); current=''; continue; }
    current += ch;
  }
  cells.push(current.trim());
  return cells;
}

// ── Sheet layout (matches the real exported template) ──
// Row 1: week names (merged)
// Row 2: day names (merged)
// Row 3: column labels — per day: الحضور، الزي(ignored)، الكتاب، التحضير — then التلخيصN per week
// Row 4+: data — col0 = '#', col1 = اسم الطالب, then TRUE/FALSE values
//
// Per week, 4 days × 4 cols (حضور/زي/كتاب/تحضير) = 16 cols, + 1 تلخيص col + 2 trailing blank cols = 19 cols/week
// Week 1 data starts at column index 2 (0-based), each subsequent week starts 19 columns later.
const SHEET_WEEK_START_COL = 2;
const SHEET_WEEK_STRIDE = 19;
const SHEET_DAY_STRIDE = 4; // حضور، الزي، الكتاب، التحضير
const SHEET_SUMMARY_OFFSET = 16; // offset from week base to التلخيص column
const SHEET_HEADER_ROWS = 3; // first 3 rows are headers, data starts at row index 3

// Validates that row 3 (column-label header) actually has "الحضور" and
// "الكتاب" at the column offsets our parser assumes for week 1. If this
// sheet's structure changed (columns added/removed/reordered), this catches
// it BEFORE we write wrong data into the database instead of corrupting it.
function validateSheetHeader(headerRow3Cells){
  const expectedAtt = (headerRow3Cells[SHEET_WEEK_START_COL] || '').trim();
  const expectedKit = (headerRow3Cells[SHEET_WEEK_START_COL + 2] || '').trim();
  const expectedTah = (headerRow3Cells[SHEET_WEEK_START_COL + 3] || '').trim();
  const ok = expectedAtt.includes('حضور') && expectedKit.includes('كتاب') && expectedTah.includes('تحضير');
  return { ok, expectedAtt, expectedKit, expectedTah };
}

function parseSheetCsv(csvText){
  const lines = csvText.split('\n').map(l=>l.replace(/\r$/,'')).filter(l=>l.trim()!=='');

  if(lines.length < SHEET_HEADER_ROWS + 1){
    throw new Error('الشيت لا يحتوي صفوف كافية (متوقع 3 صفوف رأس + بيانات)');
  }

  // Validate column alignment against row 3 (index 2) before trusting any offsets
  const headerRow3 = splitCsvLine(lines[2]);
  const validation = validateSheetHeader(headerRow3);
  if(!validation.ok){
    throw new Error(
      `بنية أعمدة الشيت لا تطابق المتوقع — توقفت المزامنة لحماية البيانات. ` +
      `(القيم الموجودة: "${validation.expectedAtt}", "${validation.expectedKit}", "${validation.expectedTah}")`
    );
  }

  const dataLines = lines.slice(SHEET_HEADER_ROWS);

  const students = getStudents();
  const results = [];

  for(const line of dataLines){
    const cells = splitCsvLine(line);
    const rawName = (cells[1]||'').trim();
    if(!rawName) continue;

    const matched = students.find(s =>
      s.name === rawName ||
      s.name.replace(/\s+/g,'') === rawName.replace(/\s+/g,'') ||
      s.name.replace(/\s+/g,'').startsWith(rawName.replace(/\s+/g,'')) ||
      rawName.replace(/\s+/g,'').startsWith(s.name.replace(/\s+/g,''))
    );

    const weeks = {};
    for(let w=1; w<=6; w++){
      const weekBase = SHEET_WEEK_START_COL + (w-1)*SHEET_WEEK_STRIDE;
      const days = {};
      ['d1','d2','d3','d4'].forEach((dk, di)=>{
        const dayBase = weekBase + di*SHEET_DAY_STRIDE;
        days[dk] = {
          att: parseBoolCell(cells[dayBase]),     // الحضور
          // dayBase+1 = الزي — ignored intentionally
          kit: parseBoolCell(cells[dayBase+2]),   // الكتاب
          tah: parseBoolCell(cells[dayBase+3])    // التحضير
        };
      });
      weeks['w'+w] = {
        ...days,
        sum: parseBoolCell(cells[weekBase + SHEET_SUMMARY_OFFSET]) // التلخيصN
      };
    }

    results.push({ rawName, matchedName: matched ? matched.name : null, weeks });
  }

  return results;
}

async function syncFromSheet(){
  const statusEl = document.getElementById('sheet-sync-status');
  if(statusEl){
    statusEl.innerHTML = '⏳ جاري سحب البيانات من الشيت...';
    statusEl.style.color = 'var(--text-soft)';
  }

  let csvText = null;
  let lastError = null;

  // Try multiple URLs in order — covers cases where one proxy/endpoint is blocked
  const urlsToTry = [SHEET_CSV_URL, SHEET_CSV_URL_PROXY2, SHEET_CSV_URL_FALLBACK];
  for(const url of urlsToTry){
    try {
      const res = await fetch(url, {cache:'no-store'});
      if(!res.ok) throw new Error('HTTP '+res.status);
      const text = await res.text();
      if(text.trim().startsWith('<')){
        throw new Error('الرابط أرجع صفحة HTML بدل CSV — تأكد أن الشيت "Anyone with the link can view"');
      }
      csvText = text;
      console.info('syncFromSheet: succeeded using', url);
      break; // success
    } catch(e){
      lastError = e;
      console.warn('syncFromSheet: failed for', url, '—', e.message);
    }
  }

  if(csvText === null){
    console.error('syncFromSheet: both URLs failed', lastError);
    if(statusEl){
      statusEl.innerHTML = '⚠️ تعذّر التحديث: ' + (lastError ? lastError.message : 'تحقق من اتصال الإنترنت أو صلاحيات مشاركة الشيت');
      statusEl.style.color = 'var(--aqeeq, #8B1A1A)';
    }
    return;
  }

  try {
    const parsed = parseSheetCsv(csvText);
    const matched = parsed.filter(r=>r.matchedName);
    const unmatched = parsed.filter(r=>!r.matchedName);

    if(!matched.length){
      if(statusEl){ statusEl.innerHTML = '❌ لم يتم العثور على أي طالب مطابق في الشيت'; statusEl.style.color = 'var(--aqeeq, #8B1A1A)'; }
      return;
    }

    if(statusEl) statusEl.innerHTML = `⏳ جاري الحفظ: 0/${matched.length}`;

    let saved = 0;
    for(const row of matched){
      if(!_cache.weekly) _cache.weekly = {};
      if(!_cache.weekly[row.matchedName]) _cache.weekly[row.matchedName] = {};

      const saves = [];
      for(let w=1; w<=6; w++){
        const wk = row.weeks['w'+w];
        const existing = _cache.weekly[row.matchedName]['w'+w] || {};
        // Merge: keep existing memorization numbers, overwrite att/tah/kit/sum from sheet
        const merged = {};
        ['d1','d2','d3','d4'].forEach(dk=>{
          const ex = existing[dk] || {};
          merged[dk] = { ...ex, att: wk[dk].att, tah: wk[dk].tah, kit: wk[dk].kit };
          saves.push(dbSaveDay(row.matchedName, w, dk, merged[dk]));
        });
        merged.sum = wk.sum;
        _cache.weekly[row.matchedName]['w'+w] = merged;
        saves.push(dbSaveWeeklySummary(row.matchedName, w, wk.sum));
      }

      try { await Promise.all(saves); } catch(e){ console.error('sync error for', row.matchedName, e); }

      const st = getState();
      recalcStudentScore(row.matchedName, st);
      saved++;
      if(statusEl) statusEl.innerHTML = `⏳ جاري الحفظ: ${saved}/${matched.length}`;
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString('ar-SA', {hour:'2-digit', minute:'2-digit'});
    if(statusEl){
      statusEl.innerHTML = `✅ آخر مزامنة: ${timeStr} — ${saved} طالب` + (unmatched.length ? ` — ⚠️ ${unmatched.length} غير مطابق` : '');
      statusEl.style.color = unmatched.length ? 'var(--gold)' : 'var(--green)';
    }

    renderAdminStudents();
    if(typeof renderStatsTable === 'function') renderStatsTable();
    // Refresh currently-open student form if any
    const currentSel = document.getElementById('adm-sel');
    if(currentSel && currentSel.value) loadWeekData();
  } catch(e){
    console.error('syncFromSheet error:', e);
    if(statusEl){
      statusEl.innerHTML = '⚠️ تعذّر التحديث: ' + (e.message || 'خطأ غير معروف');
      statusEl.style.color = 'var(--aqeeq, #8B1A1A)';
    }
  }
}


const _expose = {
  gotoLogin, gotoPortal, doLogin, doLogout,
  switchAdminTab, switchSec,
  setStatsFilter, setStatsSort, setStatsView, setBadgeFilter,
  selectAwardWeek, loadAwardState, saveAward,
  saveWeekly, saveStudent, loadAdmStu, deleteStudent, deleteStudentByName, confirmDelete,
  openAddModal, openEditModal, closeModal, closeModalDirect,
  openNotifPanel, closeNotifPanel,
  renderBadgesTable, selectWeek, loadWeekData,
  syncFromSheet
};
Object.assign(window, _expose);
