
const CFG = window.WILKYBOT_CONFIG || (typeof WILKYBOT_CONFIG !== "undefined" ? WILKYBOT_CONFIG : {});

function renderFromConfig() {
 // Identitas
 document.querySelectorAll('.nav-brand-mark, .footer-brand .nav-brand-mark').forEach((img) => {
 if (CFG.logoPath) img.src = CFG.logoPath;
 });
 document.querySelectorAll('.nav-brand span:last-child, .footer-brand span:last-child').forEach((el) => {
 el.textContent = CFG.botName || el.textContent;
 });
 if (document.title && CFG.botName) {
 document.title = `${CFG.botName} — ${CFG.botTagline || ''}`;
 }

 // Hero text
 const heroTitle = document.getElementById('hero-title');
 if (heroTitle && CFG.botName && CFG.botTagline) {
 heroTitle.innerHTML = `Otomatisasi WhatsApp <em>Tanpa Ribet.</em>`;
 }
 const heroDesc = document.getElementById('hero-desc');
 if (heroDesc && CFG.botTagline) heroDesc.textContent = CFG.botTagline;

 // Link utama
 document.querySelectorAll('#btn-chat-bot, .nav-cta').forEach((el) => { if (CFG.linkChatBot) el.href = CFG.linkChatBot; });
 document.querySelectorAll('#btn-join-group').forEach((el) => { if (CFG.linkGrupWA) el.href = CFG.linkGrupWA; });
 const donasiAlt = document.getElementById('link-donasi-alt');
 if (donasiAlt && CFG.linkDonasiAlt) donasiAlt.href = CFG.linkDonasiAlt;

 // Status badge
 const statusBadge = document.getElementById('status-badge');
 const statusText = document.getElementById('status-text');
 if (statusBadge && statusText) {
 const isOnline = (CFG.botStatus || 'online') === 'online';
 statusBadge.classList.toggle('offline', !isOnline);
 statusText.textContent = isOnline ? 'Bot Online' : 'Bot Offline';
 }

 // Pembayaran
 if (CFG.dana) {
 setText('dana-holder', `a.n. ${CFG.dana.namaPenerima}`);
 setText('dana-number', CFG.dana.nomor);
 const btn = document.getElementById('dana-copy-btn');
 if (btn) btn.setAttribute('data-copy', CFG.dana.nomorRaw);
 }
 if (CFG.gopay) {
 setText('gopay-holder', `a.n. ${CFG.gopay.namaPenerima}`);
 setText('gopay-number', CFG.gopay.nomor);
 const btn = document.getElementById('gopay-copy-btn');
 if (btn) btn.setAttribute('data-copy', CFG.gopay.nomorRaw);
 }

 // Owner grid
 const ownerGrid = document.getElementById('owner-grid');
 if (ownerGrid && Array.isArray(CFG.owners)) {
 ownerGrid.innerHTML = CFG.owners.map((o) => `
 <div class="owner-card reveal">
 <div class="owner-avatar">
 <img src="${o.foto}" alt="Foto ${o.nama}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
 <span style="display:none;">${o.emojiFallback || ''}</span>
 </div>
 <h3>${o.nama}</h3>
 <p class="owner-role">${o.peran}</p>
 ${o.verified ? '<span class="owner-verified">✓ Verified Owner</span>' : ''}
 <p class="owner-number"> ${o.nomor}</p>
 <div class="owner-actions">
 <a href="${o.linkChat}" target="_blank" rel="noopener" class="btn-primary">Chat</a>
 <button class="btn-copy" data-copy="${o.nomorRaw}">Salin</button>
 </div>
 </div>
 `).join('');
 }

 // Command list
 const cmdList = document.getElementById('command-list');
 if (cmdList && Array.isArray(CFG.commands)) {
 cmdList.innerHTML = CFG.commands.map((c) => `
 <div class="command-row reveal">
 <span class="command-code">${c.cmd}</span>
 <span class="command-desc">${c.desc}</span>
 <button class="command-copy" data-copy="${c.cmd}" aria-label="Salin perintah ${c.cmd}"></button>
 </div>
 `).join('');
 }

 // FAQ
 const faqList = document.getElementById('faq-list');
 if (faqList && Array.isArray(CFG.faqs)) {
 faqList.innerHTML = CFG.faqs.map((f, i) => `
 <div class="faq-tw-item" style="
 background:rgba(24,20,38,0.85);
 border:1px solid rgba(201,162,39,0.10);
 border-radius:16px;
 overflow:hidden;
 transition:border-color 0.2s ease;
 backdrop-filter:blur(12px);
 ">
 <button onclick="toggleFaq(this)" style="
 width:100%;display:flex;align-items:center;gap:14px;
 padding:18px 20px;background:none;border:none;cursor:pointer;text-align:left;
 ">
 <span class="faq-num" style="
 min-width:36px;height:36px;border-radius:50%;
 background:linear-gradient(135deg,#c9a227,#c9a227);
 display:flex;align-items:center;justify-content:center;
 font-family:'JetBrains Mono',monospace;font-weight:800;font-size:12px;color:#000;
 flex-shrink:0;
 ">${String(i + 1).padStart(2, '0')}</span>
 <span style="flex:1;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:14px;color:#f2eef8;line-height:1.4;">${f.q}</span>
 <span class="faq-tw-icon" style="
 color:#c9a227;font-size:22px;flex-shrink:0;
 transition:transform 0.3s ease;line-height:1;font-weight:300;
 ">+</span>
 </button>
 <div class="faq-tw-answer" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
 <p style="padding:0 20px 20px 70px;font-size:14px;color:#a89fb8;line-height:1.7;margin:0;">${f.a}</p>
 </div>
 </div>
 `).join('');
 }

 // Leaderboard
 const leaderboard = document.getElementById('leaderboard');
 if (leaderboard && Array.isArray(CFG.topDonatur)) {
 const rankStyle = [
 'background:linear-gradient(135deg,#f59e0b,#ef4444);color:#000;',
 'background:linear-gradient(135deg,#94a3b8,#64748b);color:#000;',
 'background:linear-gradient(135deg,#d97706,#92400e);color:#fff;',
 ];
 leaderboard.innerHTML = `
 <div style="background:rgba(24,20,38,0.85);border:1px solid rgba(201,162,39,0.12);
 border-radius:20px;padding:28px 20px;backdrop-filter:blur(14px);">
 <h3 style="text-align:center;font-family:'JetBrains Mono',monospace;font-size:18px;
 font-weight:700;color:#f2eef8;margin:0 0 20px;"> Donatur Terbaik</h3>
 <div style="display:flex;flex-direction:column;gap:8px;">
 ${CFG.topDonatur.map((d,i) => `
 <div style="display:flex;align-items:center;gap:12px;
 background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px;">
 <span style="min-width:36px;height:36px;border-radius:50%;flex-shrink:0;
 display:flex;align-items:center;justify-content:center;
 font-family:'JetBrains Mono',monospace;font-weight:800;font-size:13px;
 ${rankStyle[i] || 'background:rgba(201,162,39,0.1);color:#c9a227;border:1px solid rgba(201,162,39,0.2);'}">
 ${i+1}
 </span>
 <span style="flex:1;font-weight:600;color:#f2eef8;font-size:14px;">${d.nama}</span>
 <span style="font-family:'JetBrains Mono',monospace;font-weight:700;
 color:#c9a227;font-size:13px;">${d.jumlah}</span>
 </div>
 `).join('')}
 </div>
 </div>`;
 }

 // Changelog
 const changelogList = document.getElementById('changelog-list');
 if (changelogList && Array.isArray(CFG.changelog)) {
 changelogList.innerHTML = CFG.changelog.map((c) => `
 <div class="changelog-item reveal">
 <div class="changelog-version">${c.versi}<span class="changelog-date">${c.tanggal}</span></div>
 <div class="changelog-note">${c.catatan}</div>
 </div>
 `).join('');
 }

 // Footer copyright
 const footerCopy = document.querySelector('.footer-copy');
 if (footerCopy && Array.isArray(CFG.owners)) {
 const names = CFG.owners.map((o) => o.nama).join(', ');
 footerCopy.textContent = `© 2026 ${CFG.botName}. Dibuat dengan  oleh ${names}.`;
 }
}

function setText(id, text) {
 const el = document.getElementById(id);
 if (el && text) el.textContent = text;
}

renderFromConfig();

// Re-observe after dynamic render
setTimeout(() => {
 document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}, 100);

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
 navbar.classList.toggle('scrolled', window.scrollY > 12);
});

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
 const isOpen = mobileMenu.classList.toggle('open');
 menuToggle.classList.toggle('open', isOpen);
 menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mobileMenu.querySelectorAll('a').forEach((link) => {
 link.addEventListener('click', () => {
 mobileMenu.classList.remove('open');
 menuToggle.classList.remove('open');
 menuToggle.setAttribute('aria-expanded', 'false');
 });
});

// Reveal observer
const revealObserver = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('in-view');
 revealObserver.unobserve(entry.target);
 }
 });
 },
 { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Toast
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
 toast.textContent = message;
 toast.classList.add('show');
 clearTimeout(toastTimer);
 toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
async function copyText(value) {
 try { await navigator.clipboard.writeText(value); }
 catch {
 const t = document.createElement('textarea');
 t.value = value; document.body.appendChild(t); t.select();
 document.execCommand('copy'); document.body.removeChild(t);
 }
 showToast('Berhasil disalin! ');
}
document.addEventListener('click', (e) => {
 const btn = e.target.closest('.btn-copy, .command-copy');
 if (btn) copyText(btn.getAttribute('data-copy'));
});

// Share button
const shareBtn = document.getElementById('btn-share');
if (shareBtn) {
 shareBtn.addEventListener('click', async () => {
 const shareData = { title: CFG.botName, text: `Coba ${CFG.botName} — bot WA paling pro!`, url: window.location.href };
 if (navigator.share) { try { await navigator.share(shareData); } catch {} }
 else { await copyText(window.location.href); showToast('Link disalin! '); }
 });
}

// Payment tabs
document.querySelectorAll('.pay-tab').forEach((tab) => {
 tab.addEventListener('click', () => {
 const target = tab.getAttribute('data-pay');
 document.querySelectorAll('.pay-tab').forEach((t) => {
 t.classList.toggle('active', t === tab);
 t.setAttribute('aria-selected', String(t === tab));
 });
 document.querySelectorAll('.pay-panel').forEach((panel) => {
 panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
 });
 });
});

// FAQ
document.addEventListener('click', (e) => {
 const q = e.target.closest('.faq-question');
 if (!q) return;
 const item = q.closest('.faq-item');
 const wasOpen = item.classList.contains('open');
 document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
 if (!wasOpen) item.classList.add('open');
});

// ══════════════════════════════════════════════════════════════════════════
// SEMUA RENDER DINAMIS — stats, testimoni, team, support, payment, pricing
// ══════════════════════════════════════════════════════════════════════════

// ── STATS COUNTER ────────────────────────────────────────────────────────────
;(function() {
 const statsGrid = document.getElementById('stats-grid');
 if (!statsGrid || !Array.isArray(CFG.stats)) return;

 statsGrid.innerHTML = CFG.stats.map(s => `
 <div style="background:rgba(24,20,38,0.85);border:1px solid rgba(201,162,39,0.10);border-radius:14px;padding:20px 18px;text-align:left;backdrop-filter:blur(12px);">
 <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#c9a227;letter-spacing:0.10em;font-weight:700;margin-bottom:8px;">${s.label.toUpperCase()}</div>
 <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}" data-decimal="${s.decimal||0}" style="font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:800;color:#fff;line-height:1;">0</div>
 <div style="font-size:11px;color:#a89fb8;margin-top:6px;font-weight:600;">${s.sub}</div>
 </div>
 `).join('');

 const counters = statsGrid.querySelectorAll('.stat-value');
 const obs = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (!entry.isIntersecting) return;
 const el = entry.target;
 const target = parseFloat(el.dataset.target);
 const suffix = el.dataset.suffix || '';
 const dec = parseInt(el.dataset.decimal) || 0;
 const dur = 1400, step = 16, steps = dur/step;
 let current = 0;
 const inc = target/steps;
 const timer = setInterval(() => {
 current += inc;
 if (current >= target) { current = target; clearInterval(timer); }
 el.textContent = (dec>0 ? current.toFixed(dec) : Math.floor(current).toLocaleString('id-ID')) + suffix;
 }, step);
 obs.unobserve(el);
 });
 }, { threshold: 0.3 });
 counters.forEach(c => obs.observe(c));
})();

// ── TESTIMONI CAROUSEL ───────────────────────────────────────────────────────
;(function() {
 const testiTrack = document.getElementById('testi-track');
 const testiDots = document.getElementById('testi-dots');
 let testiIdx = 0;

 window.renderTesti = function renderTesti() {
 const userTesti = JSON.parse(localStorage.getItem('wb-testi') || '[]');
 const list = [...(CFG.testimonials || []), ...userTesti];
 if (!testiTrack || !list.length) return;

 testiTrack.innerHTML = list.map((t) => {
 if (t.type === 'screenshot') {
 return `<div style="flex:0 0 100%;padding:4px;text-align:center;">
 <img src="${t.imagePath}" style="max-width:100%;border-radius:14px;border:1px solid rgba(201,162,39,0.15);" loading="lazy">
 ${t.caption ? `<p style="font-size:11px;color:#a89fb8;margin-top:8px;">${t.caption}</p>` : ''}
 </div>`;
 }
 const stars = '★'.repeat(t.rating||5) + '☆'.repeat(5-(t.rating||5));
 return `<div style="flex:0 0 100%;padding:4px;">
 <div style="background:rgba(24,20,38,0.9);border:1px solid rgba(201,162,39,0.12);border-radius:20px;padding:32px 24px;text-align:center;backdrop-filter:blur(14px);">
 <div style="width:64px;height:64px;border-radius:50%;margin:0 auto 16px;background:linear-gradient(135deg,#c9a227,#c9a227);display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:18px;color:#000;">
 ${t.initial||(t.nama||'').slice(0,2).toUpperCase()}
 </div>
 <div style="color:#fbbf24;font-size:18px;letter-spacing:2px;margin-bottom:14px;">${stars}</div>
 <p style="font-size:15px;color:#d0d8e8;line-height:1.7;font-style:italic;margin:0 0 18px;">"${t.quote||t.pesan||''}"</p>
 <strong style="font-family:'JetBrains Mono',monospace;font-size:14px;color:#f2eef8;">${t.nama}</strong>
 </div>
 </div>`;
 }).join('');

 if (testiDots) {
 testiDots.innerHTML = list.map((_, i) =>
 `<button class="testi-dot${i===0?' active':''}" data-index="${i}" style="width:8px;height:8px;border-radius:50%;background:${i===0?'#c9a227':'#4b5563'};border:none;cursor:pointer;padding:0;"></button>`
 ).join('');
 }
 if (testiIdx >= list.length) testiIdx = 0;
 if (testiTrack) testiTrack.style.transform = `translateX(-${testiIdx*100}%)`;
 };

 window.goTesti = function goTesti(idx) {
 const userTesti = JSON.parse(localStorage.getItem('wb-testi') || '[]');
 const list = [...(CFG.testimonials || []), ...userTesti];
 if (!list.length) return;
 testiIdx = ((idx % list.length) + list.length) % list.length;
 if (testiTrack) testiTrack.style.transform = `translateX(-${testiIdx*100}%)`;
 document.querySelectorAll('.testi-dot').forEach((d,i) => {
 const active = i === testiIdx;
 d.style.background = active ? '#c9a227' : '#4b5563';
 });
 };

 window.renderTesti();

 const prevBtn = document.getElementById('testi-prev');
 const nextBtn = document.getElementById('testi-next');
 if (prevBtn) prevBtn.addEventListener('click', () => window.goTesti(testiIdx - 1));
 if (nextBtn) nextBtn.addEventListener('click', () => window.goTesti(testiIdx + 1));

 document.addEventListener('click', (e) => {
 const dot = e.target.closest('.testi-dot');
 if (dot) window.goTesti(parseInt(dot.getAttribute('data-index'), 10));
 });

 setInterval(() => window.goTesti(testiIdx + 1), 4500);
})();

// ── TEAM GRID ─────────────────────────────────────────────────────────────────
;(function() {
 const teamGrid = document.getElementById('team-grid');
 if (!teamGrid || !Array.isArray(CFG.owners)) return;

 teamGrid.innerHTML = CFG.owners.map(o => `
 <div style="position:relative;background:rgba(24,20,38,0.85);border:1px solid rgba(201,162,39,0.12);border-radius:20px;padding:32px 24px 24px;text-align:center;backdrop-filter:blur(14px);transition:transform 0.25s ease,border-color 0.25s ease;"
 onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='rgba(201,162,39,0.35)'"
 onmouseout="this.style.transform='';this.style.borderColor='rgba(201,162,39,0.12)'">
 ${o.emoji ? `<span style="position:absolute;top:16px;right:16px;font-size:22px;">${o.emoji}</span>` : ''}
 <div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,#c9a227,#c9a227);padding:2.5px;margin:0 auto 16px;box-shadow:0 0 24px rgba(201,162,39,0.2);">
 <div style="width:100%;height:100%;border-radius:50%;background:#161328;display:flex;align-items:center;justify-content:center;overflow:hidden;">
 ${o.foto
 ? `<img src="${o.foto}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
 <span style="display:none;font-size:30px;font-weight:800;color:white;font-family:'JetBrains Mono',monospace;">${(o.initial||o.nama[0]).toUpperCase()}</span>`
 : `<span style="font-size:30px;font-weight:800;color:white;font-family:'JetBrains Mono',monospace;">${(o.initial||o.nama[0]).toUpperCase()}</span>`}
 </div>
 </div>
 <span style="display:inline-block;background:rgba(201,162,39,0.10);color:#c9a227;border:1px solid rgba(201,162,39,0.25);padding:4px 14px;border-radius:20px;font-size:11px;font-weight:700;font-family:'JetBrains Mono',monospace;letter-spacing:0.10em;margin-bottom:10px;">${o.title || o.peran}</span>
 <h3 style="font-size:18px;font-weight:700;color:#f2eef8;margin:0 0 4px;font-family:'JetBrains Mono',monospace;">
 ${o.nama} ${o.verified ? '<span style="color:#c9a227;font-size:14px;">✓</span>' : ''}
 </h3>
 <p style="font-size:12px;color:#a89fb8;margin:0 0 16px;">${o.peran}</p>
 <a href="${o.linkChat}" target="_blank" style="display:block;padding:9px;border-radius:10px;border:1px solid rgba(201,162,39,0.3);color:#c9a227;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:0.06em;text-decoration:none;transition:background 0.2s;"
 onmouseover="this.style.background='rgba(201,162,39,0.08)'" onmouseout="this.style.background=''">
 Chat
 </a>
 </div>
 `).join('');
})();

// ── SUPPORT GRID ──────────────────────────────────────────────────────────────
;(function() {
 const supportGrid = document.getElementById('support-grid');
 if (!supportGrid || !Array.isArray(CFG.support)) return;

 supportGrid.innerHTML = CFG.support.map(s => `
 <div style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;border-radius:16px;padding:24px;backdrop-filter:blur(14px);text-align:left;transition:transform 0.3s ease,border-color 0.3s ease;
 ${s.accent ? 'background:rgba(201,162,39,0.06);border:1px solid rgba(201,162,39,0.3);' : 'background:rgba(24,20,38,0.85);border:1px solid rgba(201,162,39,0.10);'}"
 onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='rgba(201,162,39,0.35)'"
 onmouseout="this.style.transform='';this.style.borderColor='${s.accent ? 'rgba(201,162,39,0.3)' : 'rgba(201,162,39,0.10)'}'">
 <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;background:rgba(201,162,39,0.08);border:1px solid rgba(201,162,39,0.2);">${s.icon}</div>
 <div>
 <h3 style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:14px;color:#fff;margin:0 0 6px;">${s.title}</h3>
 <p style="font-size:12px;color:#a89fb8;line-height:1.6;margin:0;">${s.desc}</p>
 </div>
 <a href="${s.href}" style="margin-top:auto;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:11px;letter-spacing:0.05em;text-decoration:none;transition:opacity 0.2s;
 ${s.accent ? 'color:#000;background:#c9a227;padding:8px 16px;border-radius:10px;' : 'color:#c9a227;'}">
 ${s.label} →
 </a>
 </div>
 `).join('');
})();

// ── PAYMENT CARDS (deep link, no raw number ditampilkan) ────────────────────
;(function() {
 const payCards = document.getElementById('payment-cards');
 if (!payCards || !Array.isArray(CFG.payments)) return;

 payCards.innerHTML = CFG.payments.map((p, i) => `
 <div style="background:rgba(24,20,38,0.85);border:1px solid rgba(201,162,39,0.10);border-radius:16px;padding:20px;backdrop-filter:blur(12px);transition:border-color 0.2s;display:flex;align-items:center;gap:16px;"
 onmouseover="this.style.borderColor='rgba(201,162,39,0.3)'" onmouseout="this.style.borderColor='rgba(201,162,39,0.10)'">
 <div style="width:52px;height:52px;border-radius:14px;flex-shrink:0;background:linear-gradient(135deg,${p.gradientFrom},${p.gradientTo});display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:13px;color:#fff;">${p.initial}</div>
 <div style="flex:1;">
 <h4 style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:16px;color:#f2eef8;margin:0 0 4px;">${p.name}</h4>
 <p style="font-size:12px;color:#a89fb8;margin:0;">${p.desc || ''}</p>
 </div>
 <button onclick="${p.webUrl ? `openWeb('${p.webUrl}')` : `openApp('${p.scheme}','${p.storeUrl}')`}"
 style="flex-shrink:0;padding:10px 18px;border-radius:10px;border:1px solid rgba(201,162,39,0.3);background:rgba(201,162,39,0.08);color:#c9a227;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:0.04em;white-space:nowrap;transition:background 0.2s;"
 onmouseover="this.style.background='#c9a227';this.style.color='#000'"
 onmouseout="this.style.background='rgba(201,162,39,0.08)';this.style.color='#c9a227'">
 Buka →
 </button>
 </div>
 `).join('');
})();

// ── PRICING GRID (harga tetap per durasi, ga ada toggle) ─────────────────────
;(function() {
 function fmtRupiah(n) {
 if (n === 0) return 'Gratis';
 return 'Rp' + n.toLocaleString('id-ID');
 }

 window.renderPricing = function renderPricing() {
 const pricingGrid = document.getElementById('pricing-grid');
 if (!pricingGrid || !Array.isArray(CFG.pricing)) return;

 pricingGrid.innerHTML = CFG.pricing.map(p => {
 const isFree = p.price === 0;
 const priceStr = fmtRupiah(p.price);

 return `
 <div style="position:relative;display:flex;flex-direction:column;border-radius:18px;padding:28px 24px;text-align:left;backdrop-filter:blur(14px);transition:transform 0.25s ease;
 ${p.highlight
 ? 'background:linear-gradient(160deg,rgba(201,162,39,0.10),rgba(201,162,39,0.04));border:1.5px solid rgba(201,162,39,0.5);box-shadow:0 0 40px rgba(201,162,39,0.12);'
 : 'background:rgba(24,20,38,0.85);border:1px solid rgba(255,255,255,0.08);'}"
 onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform=''">
 ${p.badge ? `<span style="position:absolute;top:20px;right:20px;background:#c9a227;color:#000;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:800;padding:3px 10px;border-radius:20px;letter-spacing:0.06em;">${p.badge}</span>` : ''}
 <p style="font-size:15px;font-weight:700;color:#f2eef8;margin:0 0 16px;">${p.name}</p>
 <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:4px;">
 <span style="font-family:'JetBrains Mono',monospace;font-weight:800;font-size:32px;color:#fff;line-height:1;">${priceStr}</span>
 </div>
 <p style="font-size:12px;color:#a89fb8;margin:0 0 22px;">${isFree ? 'Selamanya' : `Berlaku ${p.duration}`}</p>
 <a href="${p.ctaLink || '#'}" style="text-decoration:none;">
 <button style="width:100%;padding:12px;border-radius:10px;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;cursor:pointer;margin-bottom:22px;transition:opacity 0.2s;border:none;
 ${p.highlight ? 'background:#c9a227;color:#000;' : 'background:rgba(255,255,255,0.08);color:#f2eef8;'}"
 onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
 ${p.cta}
 </button>
 </a>
 <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:18px;"></div>
 <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
 ${p.features.map(f => `
 <li style="display:flex;align-items:center;gap:10px;font-size:13px;color:#c5cdd8;">
 <svg width="16" height="16" fill="none" stroke="${p.highlight ? '#c9a227' : '#a89fb8'}" stroke-width="2.4" viewBox="0 0 24 24" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
 ${f}
 </li>`).join('')}
 </ul>
 </div>`;
 }).join('');
 };

 window.renderPricing();
})();


// Testimoni — handled by renderTesti/goTesti in DOMContentLoaded
// Dot click → pakai goTesti global
document.addEventListener('click', function(e) {
 var dot = e.target.closest('.testi-dot');
 if (dot && window.goTesti) window.goTesti(parseInt(dot.getAttribute('data-index'), 10));
});

// Dark mode toggle — force dark
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
document.documentElement.setAttribute('data-theme', 'dark');
if (themeIcon) themeIcon.textContent = '';
if (themeToggle) themeToggle.addEventListener('click', () => showToast('Dark mode is always on '));


// FAQ accordion toggle
function toggleFaq(btn) {
 const item = btn.closest('.faq-tw-item');
 const answer = item.querySelector('.faq-tw-answer');
 const icon = item.querySelector('.faq-tw-icon');
 const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

 // Tutup semua
 document.querySelectorAll('.faq-tw-answer').forEach(a => { a.style.maxHeight = '0px'; });
 document.querySelectorAll('.faq-tw-icon').forEach(ic => { ic.textContent = '+'; ic.style.transform = 'rotate(0deg)'; });
 document.querySelectorAll('.faq-tw-item').forEach(it => { it.style.borderColor = 'rgba(201,162,39,0.10)'; });

 if (!isOpen) {
 answer.style.maxHeight = answer.scrollHeight + 'px';
 icon.textContent = '×';
 icon.style.transform = 'rotate(0deg)';
 item.style.borderColor = 'rgba(201,162,39,0.4)';
 item.style.boxShadow = '0 0 20px rgba(201,162,39,0.06)';
 } else {
 item.style.boxShadow = '';
 }
}

function copyPay(nomor, btn) {
 navigator.clipboard.writeText(nomor).then(() => {
 const orig = btn.textContent;
 btn.textContent = 'Tersalin ✓';
 btn.style.color = '#c9a227';
 btn.style.borderColor = 'rgba(201,162,39,0.4)';
 setTimeout(() => {
 btn.textContent = orig;
 btn.style.color = '';
 btn.style.borderColor = '';
 }, 2000);
 });
}


// ── TESTIMONI FORM ────────────────────────────────────────────────────────────
// Star picker
;(function(){
 var picker = document.getElementById('star-picker');
 if (!picker) return;
 var stars = picker.querySelectorAll('span');
 var val = 5;

 function paint(n) {
 stars.forEach(function(s, i) {
 s.style.color = i < n ? '#fbbf24' : '#4b5563';
 });
 }

 stars.forEach(function(s) {
 s.addEventListener('mouseover', function() { paint(+s.dataset.s); });
 s.addEventListener('click', function() {
 val = +s.dataset.s;
 picker.dataset.val = val;
 paint(val);
 });
 });
 picker.addEventListener('mouseleave', function() { paint(val); });
 paint(5);
})();

function submitTesti() {
 var name = (document.getElementById('tf-name') || {}).value || '';
 var msg = (document.getElementById('tf-msg') || {}).value || '';
 var rating = parseInt((document.getElementById('star-picker') || {dataset:{val:5}}).dataset.val) || 5;
 var status = document.getElementById('tf-msg-status');

 name = name.trim(); msg = msg.trim();
 if (!name || !msg) {
 if (status) { status.textContent = ' Nama dan ulasan wajib diisi.'; status.style.color='#f87171'; status.style.display='block'; }
 return;
 }

 // Simpan ke localStorage
 var saved = JSON.parse(localStorage.getItem('wb-testi') || '[]');
 var ini = name.split(' ').slice(0,2).map(function(w){ return w[0]; }).join('').toUpperCase();
 saved.push({ nama: name, initial: ini, rating: rating, quote: msg, fromUser: true });
 localStorage.setItem('wb-testi', JSON.stringify(saved));

 // Reset form
 document.getElementById('tf-name').value = '';
 document.getElementById('tf-msg').value = '';
 if (status) { status.textContent = '✓ Ulasan berhasil dikirim. Terima kasih!'; status.style.color='#c9a227'; status.style.display='block'; setTimeout(function(){ status.style.display='none'; }, 3000); }

 // Re-render carousel
 if (window.renderTesti) window.renderTesti();
 if (window.goTesti) window.goTesti((CFG.testimonials||[]).length + saved.length - 1);
}


// Deep link ke app pembayaran, fallback ke Play Store kalau app ga terinstall
function openApp(scheme, storeUrl) {
 var start = Date.now();
 window.location.href = scheme;
 setTimeout(function() {
 // Kalau setelah ~1.2 detik masih di halaman ini (app ga kebuka), redirect ke store
 if (Date.now() - start < 2000 && !document.hidden) {
 window.location.href = storeUrl;
 }
 }, 1200);
}

function openWeb(url) {
 window.open(url, '_blank');
}
