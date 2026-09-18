const articles = [
  ['arena-breakout-infinite-pc-guide','Guides','Arena Breakout: Infinite','Arena Breakout: Infinite on PC: A Smarter First Raid','A practical Windows guide to extraction basics, safe routes, gear decisions, and a cleaner first session.'],
  ['arena-breakout-infinite-beginner-guide','Guides','Arena Breakout: Infinite','Arena Breakout: Infinite Beginner Guide: Extract More, Lose Less','Learn a safer first-raid routine, choose sustainable gear, and build confidence before taking high-risk fights.'],
  ['arena-breakout-infinite-pc-settings','Reviews','Arena Breakout: Infinite','Arena Breakout: Infinite PC Review: Tactical Pressure Done Right','An honest PC look at extraction tension, controls, performance, and whether the risk-reward loop fits your play style.'],
  ['star-trek-fleet-command-pc-guide','Guides','Star Trek Fleet Command','Star Trek Fleet Command Beginner Guide: What to Upgrade First','A practical early-game route for your station, ships, officers, research, and daily resources on PC.'],
  ['raid-shadow-legends-pc-progression-guide','Guides','Raid: Shadow Legends','Raid: Shadow Legends Beginner Guide: A No-Waste PC Route','Build one reliable early team, protect scarce resources, and use the PC version to simplify progression.'],
  ['star-trek-fleet-command-pc-update','News','Star Trek Fleet Command','Star Trek Fleet Command on PC: The Update Notes Worth Your Time','A player-first way to read new updates without losing the changes that affect daily PC play.'],
  ['raid-shadow-legends-pc-roundup','News','Raid: Shadow Legends','Raid: Shadow Legends PC Roundup: Events, Value, and What to Skip','A clear way to sort weekly activity on PC: what fits your roster and what can wait.'],
  ['star-trek-fleet-command-pc-review','Reviews','Star Trek Fleet Command','Star Trek Fleet Command on PC Review: A Patient Strategy Loop','A measured review covering its long-term loop, interface comfort, and free-to-play pressure.'],
  ['raid-shadow-legends-pc-review','Reviews','Raid: Shadow Legends','Raid: Shadow Legends on PC Review: Strong Presentation, Heavy Grind','A polished roster builder with a satisfying core, but time and spending pressure deserve an honest verdict.'],
  ['best-budget-gaming-pc-upgrade-order','Setup','Gaming PC','Best Budget Gaming PC Upgrade Order: Where to Spend First','Find the real bottleneck and spend your upgrade budget where it will make the biggest difference.'],
  ['quiet-gaming-pc-setup','Setup','Gaming PC','How to Build a Quieter Gaming PC Setup','Reduce noise with cleaner airflow, measured fan curves, sensible power limits, and focused upgrades.'],
  ['pc-settings-for-high-refresh-gaming','Setup','Gaming PC','Best PC Settings for High-Refresh Gaming','Configure refresh rate, adaptive sync, frame caps, latency settings, and graphics options for smoother gaming.']
];
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const gameImages = { 'Arena Breakout: Infinite':'affiliate-assets/arena-breakout-banner.png', 'Star Trek Fleet Command':'affiliate-assets/star-trek-affiliate-clean.jpg', 'Raid: Shadow Legends':'affiliate-assets/raid-affiliate-clean.jpg' }; const articleImages = { 'arena-breakout-infinite-beginner-guide':'affiliate-assets/arena-breakout-banner.png', 'arena-breakout-infinite-pc-settings':'affiliate-assets/arena-breakout-banner.png', 'arena-breakout-infinite-pc-guide':'affiliate-assets/arena-breakout-banner.png', 'star-trek-fleet-command-pc-guide':'affiliate-assets/star-trek-affiliate-clean.jpg', 'raid-shadow-legends-pc-progression-guide':'affiliate-assets/raid-affiliate-clean.jpg', 'star-trek-fleet-command-pc-update':'gamerzeta-hero.png', 'raid-shadow-legends-pc-roundup':'affiliate-assets/raid-roundup-v2.png', 'star-trek-fleet-command-pc-review':'gamerzeta-guides.png', 'raid-shadow-legends-pc-review':'gamerzeta-hero.png', 'best-budget-gaming-pc-upgrade-order':'affiliate-assets/setup-budget.png', 'quiet-gaming-pc-setup':'affiliate-assets/setup-quiet.png', 'pc-settings-for-high-refresh-gaming':'affiliate-assets/setup-refresh.png' };
const feedPromo = "<section class=\"feed-promo\" aria-label=\"Featured Gamerzeta coverage\"><div class=\"feed-promo-visual\" aria-hidden=\"true\"></div><div class=\"feed-promo-copy\"><span class=\"mono\">FEATURED / GAMERZETA FIELD NOTE</span><h3>Build a better PC session</h3><p>Practical guides, honest reviews, and game-ready setup advice for your next session.</p><a class=\"btn\" href=\"article.html?slug=best-budget-gaming-pc-upgrade-order\">Read the field notes →</a></div></section>";
const card = a => `<article class="card"><div class="thumb" style="background-image:linear-gradient(135deg,rgba(8,11,20,.18),rgba(92,124,250,.72)),url('${articleImages[a[0]] || gameImages[a[2]] || 'gamerzeta-guides.png'}')"><span class="mono">${a[1].toUpperCase()} · ${esc(a[2])}</span></div><div class="card-body"><div class="meta"><span>GAMERZETA</span><span>06 MIN READ</span></div><h3><a href="article.html?slug=${a[0]}">${esc(a[3])}</a></h3><p>${esc(a[4])}</p></div></article>`;
const articleBodies = {"arena-breakout-infinite-beginner-guide":"<p>Arena Breakout: Infinite is easier to enjoy when every raid has a simple plan. Your first goal is not the biggest loot haul; it is learning a route, surviving contact, and extracting often enough to fund the next run.</p><h2>Start with one reliable route</h2><p>Learn the entrances, cover, exits, and quiet fallback paths on one map before chasing every objective. Familiarity reduces panic and gives you more choices when another squad appears.</p><h2>Keep your first kits sustainable</h2><p>Bring protection, healing, and ammunition you can replace. Leave room for loot, avoid spending your whole stash on one raid, and treat low-cost runs as practice rather than a failure.</p><h2>Take fights only with an exit plan</h2><p>Listen before crossing open ground, use cover while searching, and disengage when the position is poor. A clean extraction is more valuable than a fight that leaves you exposed.</p><h2>Gamerzeta recommendation</h2><p>Play slowly, learn one map, and measure progress by successful extractions. That rhythm turns a tense shooter into a rewarding PC routine.</p>","arena-breakout-infinite-pc-settings":"<p>Arena Breakout: Infinite stands out because every decision has a cost. On PC, the experience is strongest when controls, sound, and frame pacing stay predictable enough for you to read a dangerous situation quickly.</p><h2>Controls reward precision</h2><p>Set mouse sensitivity, keybinds, audio balance, and field of view before judging the game. Small changes to movement and audio comfort can make more difference than a higher graphics preset.</p><h2>Performance is part of the strategy</h2><p>Test frame-time consistency in a quiet area and during a busy fight. Reduce shadows and effects before sacrificing texture clarity, then cap the frame rate at a level your system can hold.</p><h2>The risk-reward loop works</h2><p>Finding gear feels meaningful because extraction is never guaranteed. The pressure is exciting when you choose your fights; it becomes tiring when every session turns into an expensive gamble.</p><h2>Gamerzeta verdict</h2><p>A focused tactical shooter for PC players who enjoy careful movement, sharp audio cues, and high-stakes decisions. It rewards discipline more than speed.</p>", "arena-breakout-infinite-pc-guide":"<p>Arena Breakout: Infinite rewards calm decisions more than reckless pushes. On PC, the strongest first sessions come from learning extraction routes, taking only useful fights, and returning with gear you can actually use.</p><h2>Build a safe first-raid routine</h2><p>Start with a simple objective: learn one route, collect a few useful items, and extract. Avoid chasing every sound or opening every fight until you understand the map and your escape options.</p><h2>Choose gear for the mission</h2><p>Bring a loadout you can replace. Keep healing, ammunition, and protection balanced, then leave space for loot. A cheaper kit that helps you learn is more valuable than expensive gear lost before you understand the route.</p><h2>Use sound and cover deliberately</h2><p>Move with a reason, listen before crossing open ground, and use cover whenever you stop to search. On PC, adjust audio and mouse sensitivity early so movement and threat detection feel predictable.</p><h2>Know when to extract</h2><p>Extraction is the win condition. Once you have completed the raid objective or found valuable gear, stop taking unnecessary fights and follow the safest known route back to an exit.</p><h2>Gamerzeta recommendation</h2><p>Arena Breakout: Infinite is a strong fit for PC players who enjoy tactical pressure and high-stakes decisions. Learn one map at a time, keep your kits sustainable, and let successful extractions fund the next step.</p>", "star-trek-fleet-command-pc-update":"<p>Update notes are most useful when they are translated into player decisions. For Star Trek Fleet Command, focus on changes that affect daily missions, resource planning, research, and fleet readiness.</p><h2>Read the update in three passes</h2><p>First check new systems and unlocks. Then look for balance changes that affect ships or crews. Finally review fixes to timers, interface behavior, and event tracking because these can change your routine without changing the headline.</p><h2>Protect your resources</h2><p>Do not spend speed-ups or premium currency immediately after an update. Test the new loop, compare its rewards with your existing route, and keep enough materials for the next research or ship milestone.</p><h2>Adjust the daily plan</h2><p>Choose one update feature to test for a few days. A short note about time, rewards, and friction will tell you whether it deserves a permanent place in your routine.</p><h2>Gamerzeta takeaway</h2><p>The best update is the one that improves your decisions. Read past the marketing headline, test the practical changes, and keep your fleet plan flexible.</p>","raid-shadow-legends-pc-progression-guide":"<p>Raid: Shadow Legends rewards focus more than a wide collection of half-built champions. On PC, the clearest route is to create one reliable team and invest around its next real milestone.</p><h2>Choose one carry project</h2><p>Pick a champion or core team that can clear the content you repeat most. Leveling one dependable carry usually creates more progress than spreading books, gear, and silver across the whole roster.</p><h2>Build around roles</h2><p>Cover damage, survival, speed control, and useful debuffs before chasing perfect statistics. A simple team with clear roles is easier to improve and easier to use across campaign and early dungeons.</p><h2>Spend with a plan</h2><p>Keep silver for upgrading promising gear and avoid forcing every item to its maximum level. Review equipment after each milestone so you are not protecting weak pieces only because they were upgraded early.</p><h2>Gamerzeta takeaway</h2><p>Progress feels better when every upgrade has a job. Build one dependable core, measure the next bottleneck, and let the roster grow from evidence.</p>","raid-shadow-legends-pc-roundup":"<p>Raid events can make a weekly schedule feel urgent, but not every reward improves your account. A PC player gets more value by filtering events through roster needs, resource cost, and available time.</p><h2>Start with the reward</h2><p>Check whether the headline reward solves a current problem before spending energy or gems. A useful book, champion, or gear upgrade is worth more than a lower-value reward that simply looks large.</p><h2>Know when to skip</h2><p>Skip events that require expensive detours or upgrades you would not make normally. Protect energy, silver, and shards for goals that move your main team forward.</p><h2>Use the PC advantage</h2><p>Keep the event page and your roster notes visible while you plan. The larger screen makes it easier to compare requirements, track points, and avoid accidental spending.</p><h2>Gamerzeta takeaway</h2><p>The best event strategy is selective participation. Choose rewards that fit your account now and let the rest pass without pressure.</p>","star-trek-fleet-command-pc-review":"<p>Star Trek Fleet Command is built around patient planning rather than constant action. Its PC presentation helps with a long-running strategy loop, but the game asks players to accept timers, maintenance, and regular resource decisions.</p><h2>The strategy loop is the hook</h2><p>Ship roles, research, crew combinations, missions, and territory systems give the game a steady sense of direction. Progress is satisfying when you plan several steps ahead instead of reacting to every notification.</p><h2>PC comfort matters</h2><p>The larger display makes menus, mission requirements, and timers easier to read. A stable window layout and a simple daily checklist reduce the friction of checking in repeatedly.</p><h2>Where patience is required</h2><p>Timers and upgrade costs can slow momentum, especially when several systems compete for the same resources. Players who prefer short, self-contained sessions may find the long-term structure demanding.</p><h2>Gamerzeta verdict</h2><p>A thoughtful PC strategy game for players who enjoy planning and steady account growth. It is rewarding when approached as a long campaign, less convincing when every delay feels like a chore.</p>","best-budget-gaming-pc-upgrade-order":"<p>A limited upgrade budget should remove the biggest bottleneck first. The right order depends on your games, resolution, and current parts, but a simple evidence-based process prevents wasted money.</p><h2>Measure before buying</h2><p>Check GPU usage, CPU usage, temperatures, RAM use, and frame-time consistency in the games you actually play. A component that looks old on paper may not be the part limiting your experience.</p><h2>Use this priority order</h2><p>Start with the component causing the visible problem, then consider storage and memory for overall responsiveness. Replace the power supply or improve cooling when reliability is the concern, not only when chasing more frames.</p><h2>Make the upgrade count</h2><p>Confirm compatibility, power requirements, case clearance, and motherboard support before ordering. After installation, update drivers and retest the same games so the improvement is measurable.</p><h2>Gamerzeta verdict</h2><p>The smartest budget build is not the one with the newest part. It is the one that removes your real bottleneck and leaves room for the next sensible upgrade.</p>","quiet-gaming-pc-setup":"<p>A quieter gaming PC is usually created by several small improvements rather than one expensive component. Start by reducing heat and unnecessary fan speed before replacing hardware.</p><h2>Fix airflow first</h2><p>Clear dust, keep intake paths open, and make sure front-to-back airflow is not blocked by cables or a wall. Lower component temperatures give fans less reason to ramp up.</p><h2>Tune the noise curve</h2><p>Use motherboard or GPU software to create a gradual fan curve instead of sudden jumps. Test stability during a demanding game and keep a safe temperature margin rather than chasing silence at any cost.</p><h2>Choose the right hardware change</h2><p>If noise remains high, prioritize a better CPU cooler, a quieter case fan, or a GPU profile that avoids unnecessary power spikes. Replace one source at a time so you know which change helped.</p><h2>Gamerzeta verdict</h2><p>Quiet gaming is a comfort upgrade with daily benefits. Improve airflow, tune gradually, and keep temperatures—not silence alone—as the main safety check.</p>","pc-settings-for-high-refresh-gaming":"<p>High-refresh gaming feels best when the whole chain is consistent: display mode, frame pacing, input latency, and enough GPU headroom. A high monitor refresh rate alone cannot fix uneven delivery.</p><h2>Set the display correctly</h2><p>Enable the monitor’s highest supported refresh rate in Windows and verify the correct cable and adaptive-sync mode. Use the native resolution unless performance testing gives you a clear reason to change it.</p><h2>Control frame pacing</h2><p>Use an in-game frame cap when it produces steadier delivery, and avoid settings that repeatedly push the GPU into a hard limit. Compare motion in the same scene instead of relying only on the counter.</p><h2>Reduce latency carefully</h2><p>Enable the game’s low-latency option when it is stable, keep background capture tools under control, and use a wired connection when network delay is part of the problem. Image quality still matters if it helps you read the action.</p><h2>Gamerzeta verdict</h2><p>The best high-refresh setup feels consistent, readable, and responsive. Tune for frame-time stability first, then spend remaining performance on visual quality.</p>"}; const qs = new URLSearchParams(location.search); const category = qs.get('category'); const slug = qs.get('slug');
if (document.body.dataset.page === 'category') { const cat = category ? category[0].toUpperCase()+category.slice(1) : 'Guides'; document.title = `${cat} — Gamerzeta`; document.querySelector('[data-title]').textContent=cat; document.querySelector('[data-dek]').textContent=`${cat} coverage for PC players: useful, current, and easy to act on.`; const items=articles.filter(a=>a[1]===cat); const insertAfter=items.length>=4?3:items.length-1; document.querySelector('[data-grid]').innerHTML=items.map((a,i)=>card(a)+(i===insertAfter?feedPromo:'')).join(''); }
if (document.body.dataset.page === 'home') { const homeGrid=document.querySelector('.cards#guides'); if(homeGrid && !homeGrid.querySelector('.feed-promo')) homeGrid.insertAdjacentHTML('beforeend',feedPromo); }
if (document.body.dataset.page === 'article') { const a=articles.find(x=>x[0]===slug)||articles[0]; document.title=`${a[3]} — Gamerzeta`; document.querySelector('[data-category]').textContent=a[1].toUpperCase(); document.querySelector('[data-game]').textContent=a[2]; document.querySelector('[data-title]').textContent=a[3]; document.querySelector('[data-dek]').textContent=a[4]; document.querySelector('.article-cover').style.backgroundImage=`linear-gradient(135deg,rgba(8,11,20,.1),rgba(8,11,20,.35)),url('${articleImages[a[0]] || gameImages[a[2]] || 'gamerzeta-hero.png'}')`; const bannerImage=document.querySelector('[data-banner-image]'); if(bannerImage){ bannerImage.src=articleImages[a[0]] || gameImages[a[2]] || 'affiliate-assets/arena-breakout-banner.png'; bannerImage.alt=`${a[2]} game artwork`; } document.querySelector('[data-body]').innerHTML=articleBodies[a[0]] || `<p>${esc(a[4])}</p><h2>What to check first</h2><p>Start with a stable PC baseline and change one decision at a time.</p><h2>Gamerzeta verdict</h2><p>This is direct, practical coverage for better PC sessions.</p>`; const anchor=document.getElementById('anchorAd'); if(anchor) window.addEventListener('scroll',()=>{if(window.scrollY>300) anchor.classList.add('is-visible')},{passive:true}); }
if (document.body.dataset.page === 'article') { const meta=document.querySelector('.article-meta'); const cover=document.querySelector('.article-cover'); const ad='<div class="ad-slot ad-rectangle article-hero-ad" aria-label="Advertisement" style="width:300px;height:250px;margin:24px 0 18px auto;transform:translateX(100px)"><span class="mono">ADVERTISEMENT</span><strong>300 × 250</strong></div>'; if(cover) cover.insertAdjacentHTML('afterend',ad); else if(meta) meta.insertAdjacentHTML('afterend',ad); }
const campaignVideo=document.querySelector('.campaign-media video'); if(campaignVideo){ campaignVideo.muted=true; campaignVideo.play().catch(()=>{}); }
if (document.body.dataset.page === 'article' && slug === 'star-trek-fleet-command-pc-guide') { const title='Star Trek Fleet Command on PC: Build Your First Fleet'; const dek='A practical early-game route for missions, research, upgrades, and a calmer daily loop on PC.'; document.title=`${title} — Gamerzeta`; document.querySelector('[data-title]').textContent=title; document.querySelector('[data-dek]').textContent=dek; document.querySelector('[data-body]').innerHTML=`<p>${dek}</p><h2>Choose one clear daily objective</h2><p>The early game can feel busy because every mission looks urgent. Pick one main goal for the day—unlocking a system, improving a ship, or moving a research branch forward—and let your smaller tasks support it.</p><h2>Build your economy before chasing power</h2><p>Prioritize upgrades that unlock new options or reduce repeat work. Keep a simple reserve of key resources so one timer or event does not force you to stop your main progression.</p><h2>Use your fleet as a system</h2><p>Think about ship roles, crew bonuses, repair time, and mission requirements together. A balanced early fleet is more useful than one expensive ship that cannot cover your next objective.</p><h2>Make the PC client work for you</h2><p>Use a readable window size, a short checklist, and a consistent routine. The larger screen makes it easier to compare missions, manage timers, and plan upgrades without rushing.</p><h2>Gamerzeta takeaway</h2><p>Star Trek Fleet Command is at its best when you treat progression as a sequence of small decisions. Build steadily, protect your resources, and let your next unlock guide the plan.</p>`; }
if (document.body.dataset.page === 'article' && slug === 'raid-shadow-legends-pc-review') { const title='Raid: Shadow Legends on PC: Great Core, Heavy Grind'; const dek='Our honest PC review of Raid: Shadow Legends, covering roster building, daily time, events, and spending pressure.'; document.title=`${title} — Gamerzeta`; document.querySelector('[data-title]').textContent=title; document.querySelector('[data-dek]').textContent=dek; document.querySelector('[data-body]').innerHTML=`<p>${dek}</p><h2>The team-building loop is the hook</h2><p>Raid is strongest when a new champion changes how you approach a stage. Comparing roles, skills, gear, and turn order gives the core battles a satisfying layer of planning.</p><h2>PC makes the routine easier</h2><p>The PC client is comfortable for roster management, inventory cleanup, and longer planning sessions. A larger display helps you compare stats and make upgrades without rushing through menus.</p><h2>The grind needs an honest warning</h2><p>Progress depends on repetition, energy, timers, and resource choices. Set a clear session goal before you start so daily tasks do not quietly take over your play time.</p><h2>Events and offers require discipline</h2><p>Events can give your roster direction, but not every offer fits your account. Check the reward, the time required, and the next useful milestone before spending.</p><h2>Gamerzeta verdict</h2><p>Raid delivers a polished collection RPG with a rewarding strategic core. It is worth trying on PC if you enjoy long-term roster building, but it is best experienced with firm limits on time and spending.</p>`; }
if (document.body.dataset.page === 'article') { const ad300=document.querySelector('.article-hero-ad'); if(ad300) ad300.insertAdjacentHTML('afterend','<aside class="ad-slot ad-sky" aria-label="Advertisement" style="float:right;width:160px;height:600px;margin:24px 0 24px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;transform:translateX(54px)"><span class="mono">ADVERTISEMENT</span><strong>160 × 600</strong></aside>'); }
const creativeBanner = '<div class="ad-slot ad-leaderboard" aria-label="Advertisement"><a class="ad-creative" href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img class="ad-slide ad-slide-a" src="arena-breakout-970x90.gif?v=arena-motion-3" alt="Arena Breakout: Infinite tactical PC artwork" width="970" height="90"><img class="ad-slide ad-slide-b" src="arena-breakout-970x90.gif?v=arena-motion-3" alt="" width="970" height="90" aria-hidden="true"><span class="ad-left-art" aria-hidden="true"></span></a></div>';
const creativeRectangle = '<div class="ad-slot ad-rectangle ad-creative-unit" aria-label="Advertisement"><a href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img src="affiliate-assets/arena-breakout-banner.png" alt="Arena Breakout: Infinite tactical PC artwork"><span class="ad-unit-copy mono">ARENA BREAKOUT: INFINITE / PC</span><span class="ad-unit-cta">READ GUIDE</span></a></div>';
const creativeSky = '<div class="ad-slot ad-sky ad-creative-unit" aria-label="Advertisement"><a href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img src="affiliate-assets/arena-breakout-160x600-no-cta.gif" alt="Arena Breakout: Infinite tactical PC artwork"><span class="ad-unit-copy mono">ARENA BREAKOUT: INFINITE / PC</span><span class="ad-unit-cta">READ GUIDE</span></a></div>';
const homepageRectangle = '<div class="ad-slot ad-rectangle ad-creative-unit" aria-label="Advertisement"><a href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img src="affiliate-assets/arena-breakout-banner.png" alt="Arena Breakout: Infinite promotional artwork"><span class="ad-unit-copy mono">ARENA BREAKOUT: INFINITE / PC</span><span class="ad-unit-cta">READ GUIDE</span></a></div>';
const homepageSky = '<div class="ad-slot ad-sky ad-creative-unit ad-slideshow" aria-label="Advertisement"><a href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img class="ad-unit-slide ad-unit-slide-a" src="affiliate-assets/arena-breakout-160x600-no-cta.gif" alt="Arena Breakout: Infinite tactical PC artwork"><img class="ad-unit-slide ad-unit-slide-b" src="affiliate-assets/arena-breakout-160x600-no-cta.gif" alt="Arena Breakout: Infinite tactical PC artwork"><img class="ad-unit-slide ad-unit-slide-c" src="affiliate-assets/arena-breakout-banner.png" alt="Arena Breakout: Infinite tactical PC artwork"><span class="ad-unit-copy mono">ARENA BREAKOUT: INFINITE / PC</span><span class="ad-unit-cta">READ GUIDE</span></a></div>';
const bottomCreative = '<a class="bottom-creative" href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Read Gamerzeta Arena Breakout: Infinite coverage"><img src="affiliate-assets/arena-breakout-banner.png" alt="Arena Breakout: Infinite tactical extraction artwork"><span class="bottom-creative-copy mono">ARENA BREAKOUT: INFINITE / PC GUIDE</span><span class="bottom-creative-cta">READ THE GUIDE</span></a><button type="button" aria-label="Close ad">×</button>';
if (document.body.dataset.page === 'article') { const main=document.querySelector('.article-page'); main.insertAdjacentHTML('afterbegin','<div class="ad-band">'+creativeBanner+'</div>'); const anchor=document.createElement('div'); anchor.className='ad-anchor'; anchor.innerHTML=bottomCreative; anchor.querySelector('button').onclick=()=>anchor.remove(); main.appendChild(anchor); window.addEventListener('scroll',()=>{if(window.scrollY>300) anchor.classList.add('is-visible')},{passive:true}); }

// Keep the standard banner placement consistent across all secondary pages.
if (!document.querySelector('.ad-band') && document.body.dataset.page !== 'home') {
  const main = document.querySelector('main');
  if (main) main.insertAdjacentHTML('afterbegin','<div class="ad-band">'+creativeBanner+'</div>');
}

// Give every non-article page the same separated rectangle + skyscraper rail.
if (!document.querySelector('.ad-rail') && document.body.dataset.page !== 'article' && document.body.dataset.page !== 'home') {
  const main = document.querySelector('main');
  const anchor = main && (main.querySelector('.hero') || main.firstElementChild);
  if (anchor) anchor.insertAdjacentHTML('afterend','<div class="ad-rail" aria-label="Advertisement"><div class="ad-slot ad-rectangle" aria-label="Advertisement"><span class="mono">ADVERTISEMENT</span><strong>300 × 250</strong></div><div class="ad-slot ad-sky" aria-label="Advertisement"><span class="mono">ADVERTISEMENT</span><strong>160 × 600</strong></div></div>');
}

if (document.body.dataset.page === 'article') { const articleTitle=document.querySelector('[data-title]'); if(articleTitle) articleTitle.style.fontSize='clamp(2rem,3.8vw,3.2rem)'; }

// Replace empty ad placeholders with the approved homepage creative asset.
const useHomepageCreative = ['home','article','category'].includes(document.body.dataset.page);
const rectangleMarkup = useHomepageCreative ? homepageRectangle : creativeRectangle;
const skyMarkup = useHomepageCreative ? homepageSky : creativeSky;
for (const [selector, markup] of [['.ad-rectangle:not(.ad-creative-unit)', rectangleMarkup], ['.ad-sky:not(.ad-creative-unit)', skyMarkup]]) {
  const template = document.createElement('template');
  template.innerHTML = markup;
  const content = template.content.firstElementChild.innerHTML;
  document.querySelectorAll(selector).forEach(ad => {
    ad.classList.add('ad-creative-unit');
    ad.innerHTML = content;
  });
}

// Restore the existing single bottom banner on article and guide pages.
if (['article','category'].includes(document.body.dataset.page) && !document.querySelector('.ad-anchor')) {
  const main = document.querySelector('main');
  if (main) {
    const anchor = document.createElement('div');
    anchor.className = 'ad-anchor';
    anchor.innerHTML = bottomCreative;
    anchor.querySelector('button').onclick = () => anchor.remove();
    main.appendChild(anchor);
    window.addEventListener('scroll', () => { if (window.scrollY > 300) anchor.classList.add('is-visible'); }, {passive:true});
  }
}

// Expanded cornerstone guides. Affiliate CTAs will be added only after the
// approved tracking URLs are supplied.
const cornerstoneGuides = {

  'star-trek-fleet-command-pc-guide': {
    title: 'Star Trek Fleet Command Beginner Guide: What to Upgrade First',
    game: 'Star Trek Fleet Command',
    dek: 'A practical early-game route for your station, ships, officers, research, and daily resources on PC.',
    body: `<p class="quick-answer"><strong>Quick answer:</strong> Build around one Operations milestone, keep construction and research active, unlock a second ship early, and create separate crews for combat and mining. Focused progress is more valuable than upgrading everything at once.</p>
      <h2>Upgrade your station with a purpose</h2>
      <p>Operations controls your overall progression and unlocks more buildings and systems, but rushing it can leave research and support buildings behind. Before increasing Operations, complete the important requirements that strengthen your current ships and economy.</p>
      <p>Keep construction and research active whenever possible. These two queues create steady account growth even when you only have time for a short session.</p>
      <h2>Build your second ship early</h2>
      <p>Scopely’s official Academy explains that the Orion Corvette can be unlocked through the second node of the combat research tree. Its blueprints can also appear from level 7–11 hostile chests. A second ship gives you more flexibility for missions, mining, and combat tasks.</p>
      <p>Survey ships are designed for mining. Explorers, Interceptors, and Battleships follow a combat triangle: Interceptors pressure Battleships, Battleships pressure Explorers, and Explorers pressure Interceptors.</p>
      <h2>Officers matter as much as ship power</h2>
      <p>Place an officer in the captain position to activate the Captain’s Maneuver. Bridge officers use their officer abilities, and compatible groups can add synergy. Build crews around a specific task—hostiles, mining, or survival—instead of choosing only the highest visible power number.</p>
      <h2>A simple daily route</h2>
      <ol><li>Collect completed building and research upgrades.</li><li>Start the next useful timer.</li><li>Check daily goals and current events.</li><li>Complete missions that unlock systems or required resources.</li><li>Use the correct ship and crew for mining or hostiles.</li><li>Recall ships and protect the station before leaving.</li></ol>
      <h2>Common beginner mistakes</h2>
      <p>Avoid upgrading every ship, spending premium currency to finish short timers, and ignoring research. Bookmark useful systems so you do not repeatedly search the galaxy map. Once station combat becomes available, understand shields and station protection before holding large exposed resources.</p>
      <h2>Gamerzeta recommendation</h2>
      <p>Focus on one Operations milestone, one combat ship, one survey ship, and research that supports your current goal. A narrow plan produces faster practical progress than reacting to every notification.</p>
      <p class="source-note">Sources: Scopely’s official <a href="https://startrekfleetcommand.com/academy/academy-game-overview/" rel="nofollow">Game Overview</a>, <a href="https://startrekfleetcommand.com/academy/academy-ships-combat/" rel="nofollow">Ships &amp; Combat</a>, Officer Guide, and Station Guide, checked September 2026.</p>`
  },
  'raid-shadow-legends-pc-progression-guide': {
    title: 'Raid: Shadow Legends Beginner Guide: A No-Waste PC Route',
    game: 'Raid: Shadow Legends',
    dek: 'Build one reliable early team, protect scarce resources, and use the PC version to simplify progression.',
    body: `<p class="quick-answer"><strong>Quick answer:</strong> Build one dependable campaign-focused champion first, support it with clear team roles, and save books, shards, gems, and silver for a defined progression goal.</p>
      <h2>Build one dependable core team</h2>
      <p>Your first objective is a champion who can clear campaign stages reliably and help level the rest of the roster. Support that carry with clear roles: speed control, defense or healing, useful debuffs, and enough damage to finish fights.</p>
      <p>Do not build several incomplete teams at the same time. A small group with defined roles will progress farther than a large collection of partially upgraded champions.</p>
      <h2>Make your first level 60 count</h2>
      <p>Taking one strong campaign-focused champion to level 60 is usually more valuable than stopping several champions at level 40 or 50. Higher rank improves base statistics and opens stronger progression. Commit food champions carefully and lock anything you may need later.</p>
      <h2>Upgrade artifacts for a reason</h2>
      <p>Early on, useful main stats and complete sets matter more than chasing perfect rarity. Speed helps champions act sooner, Accuracy helps debuffs land, and defensive statistics keep support champions alive. Stop upgrading an artifact when it no longer supports a clear role.</p>
      <h2>Protect scarce resources</h2>
      <p>Save books, shards, gems, and silver for a defined objective. Do not spend simply because an event is visible. Ask whether the reward improves your campaign farmer, core team, or next dungeon milestone.</p>
      <h2>Use the PC version effectively</h2>
      <p>Raid is available on PC through Plarium Play, Steam, Epic Games Store, and Microsoft Store. Plarium lists Windows 10 or newer, DirectX 11 or Vulkan-capable graphics, 8 GB RAM, and 5 GB minimum storage, with 8 GB recommended storage.</p>
      <p>The larger screen is useful for comparing champion skills, reviewing artifacts, and managing longer sessions. On older systems, Plarium recommends Medium or Low graphics and a 30 FPS limit.</p>
      <h2>Gamerzeta recommendation</h2>
      <p>Build one campaign carry, surround it with a functional support team, and spend only against the next measurable bottleneck. Progress becomes easier when every resource has a job.</p>
      <p class="source-note">Sources: Plarium’s official <a href="https://plarium.com/en/game/raid-shadow-legends/" rel="nofollow">Raid game page</a> and <a href="https://raid-support.plarium.com/hc/en-us/articles/360017238859-System-and-Device-Requirements" rel="nofollow">system requirements</a>, checked September 2026.</p>`
  },
  'best-budget-gaming-pc-upgrade-order': {
    title: 'Best Budget Gaming PC Upgrade Order: Where to Spend First',
    game: 'Gaming PC',
    dek: 'Find the real bottleneck, choose a performance target, and spend your upgrade budget where it will make the biggest difference.',
    body: `<p class="quick-answer"><strong>Quick answer:</strong> Fix stability first, add an SSD if you still use a hard drive, increase memory when normal gaming fills it, then choose a GPU or CPU upgrade based on measured limits in the games you actually play.</p>
      <h2>Start with your performance target</h2><p>Choose the resolution, quality level, and frame rate you want. A 1080p 60 FPS target needs a different balance than 1440p at 144 Hz. Test the games you play most rather than relying on one synthetic score.</p>
      <h2>Find the actual bottleneck</h2><p>Track frame rate, frame-time consistency, GPU usage, CPU usage, memory use, temperatures, and storage space. If the GPU remains near its limit while the processor has headroom, a graphics upgrade may help. If the GPU repeatedly waits while the CPU is heavily loaded, the processor or platform may be the limit.</p>
      <h2>A sensible upgrade order</h2><ol><li>Fix crashes, overheating, or power-supply problems.</li><li>Add an SSD if games or Windows still run from a hard drive.</li><li>Increase memory when normal gaming approaches full usage.</li><li>Upgrade the GPU for higher resolution, quality, or frame rate.</li><li>Upgrade the CPU and platform when processor limits hold back the GPU.</li><li>Improve cooling and acoustics after performance is stable.</li></ol>
      <h2>Check compatibility before buying</h2><p>Confirm motherboard support, power connectors, PSU capacity, case clearance, cooler clearance, memory type, and display connections. Measure twice before ordering a large graphics card or tower cooler.</p>
      <h2>What each upgrade changes</h2><p>A GPU usually makes the largest visual-performance difference when the rest of the system can support it. Memory and SSD upgrades often improve responsiveness and consistency rather than dramatically increasing average FPS.</p>
      <h2>Gamerzeta recommendation</h2><p>Measure first, solve the largest practical limit, and retest the same game after each change. Future affiliate links will be clearly labelled, with compatibility placed ahead of commission value.</p>`
  },
  'quiet-gaming-pc-setup': {
    title: 'How to Build a Quieter Gaming PC Setup',
    game: 'Gaming PC',
    dek: 'Reduce gaming PC noise with cleaner airflow, measured fan curves, sensible power limits, and upgrades that solve the loudest source first.',
    body: `<p class="quick-answer"><strong>Quick answer:</strong> Clean the airflow path, identify the loudest component, tune fan curves gradually, cap unnecessary frame rates, and replace only the part that remains noisy.</p>
      <h2>Identify the sound before buying</h2><p>A loud system may be dominated by the GPU, CPU cooler, case fans, power supply, vibration, or an aggressive software profile. Listen during idle and during a real game so you know which source changes under load.</p>
      <h2>Start with airflow and dust</h2><p>Clean filters, heatsinks, and fan blades. Make sure front intakes can breathe and that hot exhaust air is not trapped against a wall. Good airflow reduces the speed every fan needs to maintain safe temperatures.</p>
      <h2>Tune fan curves gradually</h2><p>Use a moderate curve that responds to sustained temperature instead of every short spike. Test a demanding game for at least ten minutes, watch temperatures, and change one curve at a time.</p>
      <h2>Control heat before replacing hardware</h2><p>A frame-rate cap can reduce unnecessary GPU power and fan noise in games that run far above the monitor’s useful range. A conservative power limit or undervolt can improve efficiency, but test stability carefully.</p>
      <h2>Replace the loudest component first</h2><p>A better CPU cooler helps only when the CPU cooler is the problem. Larger, slower case fans may help a restricted case, while a different case can be the better answer when every intake is blocked.</p>
      <h2>Quiet-PC checklist</h2><ul><li>Clean filters and heatsinks.</li><li>Confirm intake and exhaust direction.</li><li>Remove cables touching fan blades.</li><li>Set gradual fan curves.</li><li>Cap excessive frame rates.</li><li>Check temperatures during a real game.</li></ul>
      <h2>Gamerzeta recommendation</h2><p>Aim for comfortable noise with safe temperatures, not silence at any cost. The best quiet setup remains stable throughout a long gaming session.</p>`
  },
  'pc-settings-for-high-refresh-gaming': {
    title: 'Best PC Settings for High-Refresh Gaming',
    game: 'Gaming PC',
    dek: 'Configure refresh rate, adaptive sync, frame caps, latency settings, and graphics options for smoother PC gaming.',
    body: `<p class="quick-answer"><strong>Quick answer:</strong> Select the monitor’s highest refresh rate in Windows, use its native resolution, enable adaptive sync when supported, and cap frame rate at a level the PC can sustain consistently.</p>
      <h2>Set the display correctly</h2><p>Select the highest supported refresh rate in the operating system and game. Confirm the cable supports the intended resolution and refresh rate, then check that the game is using the correct display mode.</p>
      <h2>Configure adaptive sync</h2><p>Enable the monitor’s variable-refresh feature and the matching GPU setting when supported. Adaptive sync works best when frame rate remains inside the display’s supported range.</p>
      <h2>Use a stable frame target</h2><p>A consistent frame rate usually feels better than a higher number that swings constantly. Test a cap just below the refresh ceiling and compare frame-time smoothness in the same scene.</p>
      <h2>Reduce latency carefully</h2><p>Use the game’s built-in low-latency option when it is available and stable. Avoid stacking several driver and in-game latency controls without testing, and close heavy background capture tools.</p>
      <h2>Lower the settings that cost the most</h2><p>Shadows, volumetric effects, reflections, and ray tracing are often the first options to reduce. Texture quality can remain higher when the graphics card has enough video memory and the game is not showing streaming problems.</p>
      <h2>Final checklist</h2><ul><li>Select the highest refresh rate in Windows.</li><li>Confirm native resolution and cable support.</li><li>Enable adaptive sync when supported.</li><li>Choose a sustainable frame cap.</li><li>Keep GPU headroom in demanding scenes.</li><li>Compare motion clarity, not only the FPS counter.</li></ul>
      <h2>Gamerzeta recommendation</h2><p>Tune for consistent frame times first. Once the game feels stable and responsive, spend the remaining performance budget on the visual settings that help you read and enjoy the game.</p>`
  }
};

if (document.body.dataset.page === 'article' && cornerstoneGuides[slug]) {
  const guide = cornerstoneGuides[slug];
  document.title = `${guide.title} — Gamerzeta`;
  document.querySelector('[data-category]').textContent = 'GUIDE';
  document.querySelector('[data-game]').textContent = guide.game;
  document.querySelector('[data-title]').textContent = guide.title;
  document.querySelector('[data-dek]').textContent = guide.dek;
  document.querySelector('[data-body]').innerHTML = guide.body;
}

if (document.body.dataset.page === 'home') {
  const setupHeading = document.querySelector('#setup')?.closest('.section-head');
  const featureGrid = setupHeading?.nextElementSibling;

  if (setupHeading && featureGrid && !document.querySelector('.setup-guide-cards')) {
    const setupCards = document.createElement('section');
    setupCards.className = 'cards setup-guide-cards';
    setupCards.setAttribute('aria-label', 'Gaming PC setup guides');
    setupCards.innerHTML = `
      <article class="card">
        <div class="thumb coral"><img src="affiliate-assets/session-build.png" alt="Gaming PC components ready for an upgrade" loading="lazy"><span class="mono">SETUP · UPGRADE</span></div>
        <div class="card-body"><div class="meta"><span>08 MIN READ</span><span>BUDGET GUIDE</span></div><h3><a href="article.html?slug=best-budget-gaming-pc-upgrade-order">Best Budget Gaming PC Upgrade Order</a></h3><p>Find the real bottleneck and spend your upgrade budget where it will make the biggest difference.</p></div>
      </article>
      <article class="card">
        <div class="thumb"><img src="affiliate-assets/session-frames.png" alt="Gaming PC display and desk setup" loading="lazy"><span class="mono">SETUP · QUIET PC</span></div>
        <div class="card-body"><div class="meta"><span>07 MIN READ</span><span>COOLING</span></div><h3><a href="article.html?slug=quiet-gaming-pc-setup">How to Build a Quieter Gaming PC Setup</a></h3><p>Reduce noise with cleaner airflow, measured fan curves, sensible power limits, and focused upgrades.</p></div>
      </article>
      <article class="card">
        <div class="thumb mint"><img src="affiliate-assets/session-games.png" alt="Multi-display gaming setup for smooth high-refresh play" loading="lazy"><span class="mono">SETUP · 144HZ+</span></div>
        <div class="card-body"><div class="meta"><span>07 MIN READ</span><span>SMOOTHER PLAY</span></div><h3><a href="article.html?slug=pc-settings-for-high-refresh-gaming">Best PC Settings for High-Refresh Gaming</a></h3><p>Configure refresh rate, adaptive sync, frame caps, latency settings, and graphics options for smoother gaming.</p></div>
      </article>`;
    featureGrid.before(setupCards);
  }
}
// Make the archive visible across the whole site and power its search/filter controls.
document.querySelectorAll('nav').forEach(nav => { if (!nav.querySelector('a[href="archive.html"]')) nav.insertAdjacentHTML('beforeend','<a href="archive.html">Archive</a>'); });

if (document.body.dataset.page === 'archive') {
  const grid=document.querySelector('[data-archive-grid]'), search=document.querySelector('[data-archive-search]'), count=document.querySelector('[data-archive-count]'), empty=document.querySelector('[data-archive-empty]');
  let activeFilter='All';
  const renderArchive=()=>{ const term=(search.value||'').trim().toLowerCase(); const matches=articles.filter(a=>(activeFilter==='All'||a[1]===activeFilter)&&(!term||a.slice(1).join(' ').toLowerCase().includes(term))); grid.innerHTML=matches.map(card).join(''); count.textContent=`${matches.length} article${matches.length===1?'':'s'}`; empty.hidden=matches.length>0; };
  document.querySelectorAll('[data-archive-filter]').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.archiveFilter;document.querySelectorAll('[data-archive-filter]').forEach(item=>item.classList.toggle('is-active',item===button));renderArchive();}));
  search.addEventListener('input',renderArchive); renderArchive();
}

// Add one responsive promotional banner at the end of listing pages only.
if (['category','archive'].includes(document.body.dataset.page)) {
  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('.footer-ad-band')) {
    footer.insertAdjacentHTML('beforebegin', '<div class="wrap footer-ad-band"><div class="ad-band">'+creativeBanner+'</div></div>');
  }
}

// Focused game hubs: each title gets its own content feed and identity.
if (document.body.dataset.page === 'game') {
  const gameKey = qs.get('game') || 'arena-breakout-infinite';
  const gameConfig = {
    'arena-breakout-infinite': {
      name: 'Arena Breakout: Infinite',
      dek: 'PC guides, beginner tactics, settings, and first-session coverage.',
      intro: '<strong>Start here:</strong> Learn a safer first-raid routine, choose sustainable gear, and tune your PC before taking higher-risk fights.',
      heading: 'Arena Breakout coverage',
      label: 'ARENA BREAKOUT / PC COVERAGE'
    },
    'star-trek-fleet-command': {
      name: 'Star Trek Fleet Command',
      dek: 'PC guides, fleet planning, update notes, and a calmer route through long-term progression.',
      intro: '<strong>Start here:</strong> Build around one Operations milestone, keep research active, and grow your fleet without wasting early resources.',
      heading: 'Star Trek Fleet Command coverage',
      label: 'STAR TREK / PC COVERAGE'
    },
    'raid-shadow-legends': {
      name: 'Raid: Shadow Legends',
      dek: 'PC progression guides, roster decisions, event value, and honest reviews for long-term players.',
      intro: '<strong>Start here:</strong> Build one reliable early team, protect scarce resources, and make every upgrade serve your next milestone.',
      heading: 'Raid: Shadow Legends coverage',
      label: 'RAID / PC COVERAGE'
    }
  };
  const config = gameConfig[gameKey] || gameConfig['arena-breakout-infinite'];
  document.title = `${config.name} — Gamerzeta`;
  document.querySelectorAll('[data-title]').forEach(el => { el.textContent = config.name; });
  const dek = document.querySelector('[data-dek]');
  if (dek) dek.textContent = config.dek;
  const intro = document.querySelector('[data-game-intro]');
  if (intro) intro.innerHTML = config.intro;
  const heading = document.querySelector('[data-game-heading]');
  if (heading) heading.textContent = config.heading;
  const label = document.querySelector('[data-game-label]');
  if (label) label.textContent = config.label;
  const art = document.querySelector('[data-game-art]');
  if (art) art.style.backgroundImage = `linear-gradient(135deg,rgba(8,11,20,.12),rgba(8,11,20,.5)),url('${gameImages[config.name]}')`;
  const grid = document.querySelector('[data-game-grid]');
  if (grid) {
    const items = articles.filter(a => a[2] === config.name);
    if (gameKey === 'star-trek-fleet-command') {
      const update = items.find(a => a[0] === 'star-trek-fleet-command-pc-update');
      const remaining = items.filter(a => a[0] !== 'star-trek-fleet-command-pc-guide' && a[0] !== 'star-trek-fleet-command-pc-update');
      grid.innerHTML = (update ? `<article class="card game-text-card"><div class="card-body"><div class="meta"><span>NEWS</span><span>UPDATE WATCH</span></div><h3><a href="article.html?slug=${update[0]}">${esc(update[3])}</a></h3><p>${esc(update[4])}</p></div></article>` : '') + remaining.map(card).join('');
    } else {
      grid.innerHTML = items.map(card).join('');
    }
  }
}

// Add one footer promotional banner to focused game hubs and listing pages.
if (['category','archive','game'].includes(document.body.dataset.page)) {
  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('.footer-ad-band')) {
    footer.insertAdjacentHTML('beforebegin', '<div class="wrap footer-ad-band"><div class="ad-band">'+creativeBanner+'</div></div>');
  }
}
if (document.body.dataset.page === 'game') {
  document.querySelectorAll('.game-footer-banner, .footer-ad-band').forEach(el => el.remove());
}
// Arena Breakout footer creative: crisp single-image 970x250 unit, below content and above the footer.
if (document.body.dataset.page === 'game' && qs.get('game') === 'arena-breakout-infinite' && !document.querySelector('.arena-footer-ad')) {
  const footer = document.querySelector('footer');
  if (footer) {
    if (!document.getElementById('arena-footer-ad-styles')) {
      document.head.insertAdjacentHTML('beforeend', '<style id="arena-footer-ad-styles">.arena-footer-ad{width:min(970px,100%);aspect-ratio:970/250;height:auto;margin:30px auto 26px;border:1px solid #ff6b2c;background:#090c12;overflow:hidden}.arena-footer-link{display:block;position:relative;width:100%;height:100%;min-height:0;color:#f5f7fb;text-decoration:none}.arena-footer-visual{position:absolute;inset:0;overflow:hidden;background:#090c12}.arena-footer-visual img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.01)}.arena-footer-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(9,12,18,.08) 0%,rgba(9,12,18,.16) 38%,rgba(9,12,18,.88) 73%,#090c12 100%)}.arena-footer-copy{position:absolute;z-index:1;right:5%;top:50%;width:40%;transform:translateY(-50%);text-align:left}.arena-footer-copy .mono{display:block;color:#ff6b2c;font-size:.68rem;letter-spacing:.16em}.arena-footer-copy h3{margin:10px 0 8px;font-size:clamp(1.25rem,3vw,2.3rem);line-height:.96;text-transform:uppercase;letter-spacing:.02em}.arena-footer-copy p{margin:0 0 16px;color:#d2d7df;font-size:clamp(.72rem,1.2vw,.94rem);line-height:1.35}.arena-footer-cta{display:inline-block;background:#ff6b2c;color:#090c12;padding:9px 13px;font:700 .7rem/1 monospace;letter-spacing:.08em;text-transform:uppercase}@media(max-width:640px){.arena-footer-ad{margin:24px auto 20px}.arena-footer-visual:after{background:linear-gradient(90deg,rgba(9,12,18,.16),rgba(9,12,18,.88) 62%,#090c12 100%)}.arena-footer-copy{right:5%;width:55%}.arena-footer-copy h3{font-size:clamp(1rem,5vw,1.45rem)}.arena-footer-copy p{font-size:.68rem;margin-bottom:10px}.arena-footer-cta{padding:7px 9px;font-size:.58rem}}</style>');
    }
    footer.insertAdjacentHTML('beforebegin', '<section class="arena-footer-ad" aria-label="Advertisement"><a class="arena-footer-link" href="article.html?slug=arena-breakout-infinite-pc-guide" aria-label="Explore Arena Breakout: Infinite on Gamerzeta"><div class="arena-footer-visual"><img src="affiliate-assets/arena-breakout-banner.png" alt="Arena Breakout: Infinite tactical extraction artwork"></div><div class="arena-footer-copy"><span class="mono">FEATURED / ARENA BREAKOUT: INFINITE</span><h3>Plan the raid. Take the loot.</h3><p>Learn the safer route, tune your PC, and make every extraction count.</p><span class="arena-footer-cta">Explore the guide →</span></div></a></section>');
  }
}


if (document.body.dataset.page === 'article') {
  const removeArticleDownBanner = () => document.querySelectorAll('.ad-anchor').forEach(el => el.remove());
  removeArticleDownBanner();
  new MutationObserver(removeArticleDownBanner).observe(document.body, {childList:true});
}
