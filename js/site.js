/* 1. Database of Campus Outfits */
const outfitsDatabase = [
  { id: "rew-01", title: "Kanjivaram Metallic Silk Drape", category: "ethnic", occasion: "culturals", style: "regal", type: "rent", retailPrice: 9500, rentPrice: 699, size: "Free Size Drape", lender: "Sneha R. (Anna Univ)", matchScore: 99, node: "chennai_south", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80", badge: "Most Cycled in Fests" },
  { id: "rew-02", title: "Obsidian Structured Velvet Tuxedo", category: "formal", occasion: "farewell", style: "noir", type: "rent", retailPrice: 7999, rentPrice: 649, size: "M (Chest 38-40)", lender: "Aditya K. (SRM Tech)", matchScore: 97, node: "chennai_south", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80", badge: "Farewell Favorite" },
  { id: "rew-03", title: "Mirror-Work Gujarati Fusion Kurta", category: "ethnic", occasion: "ethnic", style: "boho", type: "swap", retailPrice: 4200, rentPrice: 449, size: "L (Chest 42)", lender: "Karan M. (VIT Chennai)", matchScore: 94, node: "chennai_south", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80", badge: "Swap Vault Certified" },
  { id: "rew-04", title: "Indo-Western Asymmetrical Sherwani", category: "formal", occasion: "culturals", style: "indowestern", type: "rent", retailPrice: 8500, rentPrice: 749, size: "M (Chest 40)", lender: "Varun T. (Loyola)", matchScore: 96, node: "chennai_central", image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&auto=format&fit=crop&q=80", badge: "Stage Ready" },
  { id: "rew-05", title: "Midnight Blue Georgette Lehenga", category: "ethnic", occasion: "farewell", style: "regal", type: "swap", retailPrice: 11000, rentPrice: 899, size: "S / M (Waist 28-30)", lender: "Pooja D. (Stella Maris)", matchScore: 98, node: "chennai_central", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80", badge: "Swap Vault Certified" },
  { id: "rew-06", title: "Matte Black Double-Breasted Blazer", category: "formal", occasion: "music", style: "noir", type: "rent", retailPrice: 5500, rentPrice: 499, size: "M (Slim Fit)", lender: "Rohan S. (OMR Node)", matchScore: 93, node: "omr_belt", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80", badge: "High Versatility" },
  { id: "rew-07", title: "Ivory Chikankari Embroidered Set", category: "ethnic", occasion: "ethnic", style: "regal", type: "rent", retailPrice: 6200, rentPrice: 520, size: "L (Chest 42)", lender: "Harish N. (Anna Univ)", matchScore: 95, node: "chennai_south", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80", badge: "Ethnic Day Pick" },
  { id: "rew-08", title: "Sequined Metallic Party Corset Gown", category: "formal", occasion: "music", style: "indowestern", type: "swap", retailPrice: 6800, rentPrice: 580, size: "S (Bust 34)", lender: "Tara J. (VIT Chennai)", matchScore: 91, node: "chennai_south", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80", badge: "Swap Vault Certified" }
];

/* 2. Catalog Renderer */
function renderCatalogCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  items.forEach(item => {
    const savings = Math.round(((item.retailPrice - item.rentPrice) / item.retailPrice) * 100);
    const card = document.createElement("div");
    card.className = "group rounded-3xl bg-surface-card border border-surface-border overflow-hidden hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="relative aspect-[3/4] overflow-hidden">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute top-3 left-3 flex flex-col gap-1.5">
            <span class="px-2 py-1 rounded-lg bg-obsidian/90 backdrop-blur text-[10px] font-mono font-semibold text-accent-lime border border-accent-lime/30">${item.badge}</span>
          </div>
          <div class="absolute top-3 right-3 px-2 py-1 rounded-lg bg-obsidian/90 backdrop-blur text-[10px] font-mono font-bold text-white border border-surface-border">
            ${item.matchScore}% Fit
          </div>
        </div>
        <div class="p-4 space-y-1.5">
          <h4 class="text-sm font-display font-bold text-white leading-snug">${item.title}</h4>
          <div class="text-[11px] text-zinc-400 font-mono">${item.size} • ${item.lender}</div>
          <div class="flex items-baseline gap-2 pt-1">
            <span class="text-lg font-bold text-accent-lime font-mono">₹${item.rentPrice}</span>
            <span class="text-xs text-zinc-500 line-through font-mono">₹${item.retailPrice}</span>
            <span class="text-[10px] text-emerald-400 font-mono">${savings}% off retail</span>
          </div>
        </div>
      </div>
      <div class="p-4 pt-0">
        ${item.type === 'swap'
          ? `<button onclick="openSwapRequest('${item.id}')" class="w-full py-2.5 rounded-xl bg-surface border border-accent-violet/40 text-accent-violet text-xs font-semibold hover:bg-accent-violet hover:text-white transition-all">Request Swap</button>`
          : `<button onclick="openRentModal('${item.id}')" class="w-full py-2.5 rounded-xl bg-accent-lime text-black text-xs font-semibold hover:bg-accent-limeDark transition-all">Reserve for ₹${item.rentPrice}</button>`}
      </div>
    `;
    container.appendChild(card);
  });
  if (window.lucide) lucide.createIcons();
}

/* 3. Filter Catalog */
function filterCatalog(filter) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.className = btn.dataset.tab === filter
      ? "cat-btn active px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-accent-lime text-black"
      : "cat-btn px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-all";
  });
  let filtered = outfitsDatabase;
  if (filter === 'rental') filtered = outfitsDatabase.filter(i => i.type === 'rent');
  else if (filter === 'swap') filtered = outfitsDatabase.filter(i => i.type === 'swap');
  else if (filter === 'ethnic') filtered = outfitsDatabase.filter(i => i.category === 'ethnic');
  else if (filter === 'formal') filtered = outfitsDatabase.filter(i => i.category === 'formal');
  renderCatalogCards(filtered, 'mainCatalogGrid');
}

/* 4. AI Stylist Algorithm */
function runAiStylistMatch() {
  const eventVal = document.getElementById('aiEvent').value;
  const vibeVal = document.getElementById('aiVibe').value;
  const budgetVal = parseInt(document.getElementById('aiBudget').value, 10);
  const nodeVal = document.getElementById('aiNode').value;
  const btn = document.getElementById('aiMatchBtn');

  btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Processing Neural Weights...`;
  lucide.createIcons();

  setTimeout(() => {
    let results = outfitsDatabase.filter(item => item.rentPrice <= budgetVal);
    results = results.map(item => {
      let score = 84;
      if (item.occasion === eventVal) score += 9;
      if (item.style === vibeVal) score += 5;
      if (item.node === nodeVal) score += 2;
      return { ...item, matchScore: Math.min(score, 99) };
    });
    results.sort((a, b) => b.matchScore - a.matchScore);
    const topPicks = results.slice(0, 3);
    renderCatalogCards(topPicks, 'aiOutfitsGrid');
    document.getElementById('aiMatchSummary').textContent = `${topPicks.length} Optimal Matches Found`;
    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Match Refreshed`;
    lucide.createIcons();
    showToast("AI Matchmaker Recalibrated", "Vector scores adjusted for your occasion criteria.");
  }, 350);
}

/* 5. Dynamic Yield Calculator */
function initYieldCalculator() {
  const priceSlider = document.getElementById('calcPrice');
  const rentsSlider = document.getElementById('calcRents');
  function update() {
    const retail = parseInt(priceSlider.value, 10);
    const count = parseInt(rentsSlider.value, 10);
    document.getElementById('calcPriceDisplay').textContent = `₹${retail.toLocaleString()}`;
    document.getElementById('calcRentsDisplay').textContent = `${count} ${count === 1 ? 'time' : 'times'}`;
    const ratePerWear = Math.round(retail * 0.12);
    const totalGross = ratePerWear * count;
    const ownerEarnings = Math.round(totalGross * 0.85);
    const recoveryRate = ((ownerEarnings / retail) * 100).toFixed(1);
    document.getElementById('calcRateDisplay').textContent = `₹${ratePerWear} / wear`;
    document.getElementById('calcEarnDisplay').textContent = `₹${ownerEarnings.toLocaleString()}`;
    document.getElementById('calcRecovDisplay').textContent = `${recoveryRate}%`;
  }
  priceSlider.addEventListener('input', update);
  rentsSlider.addEventListener('input', update);
  update();
}

/* 6. Modal-driven conversion actions */
function openRentModal(outfitId) {
  const outfit = outfitsDatabase.find(o => o.id === outfitId);
  if (!outfit) return;
  document.getElementById('rentModalTitle').textContent = `Reserve: ${outfit.title}`;
  document.getElementById('rentModalImg').src = outfit.image;
  document.getElementById('rentModalPrice').textContent = `₹${outfit.rentPrice} / 48 hrs`;
  document.getElementById('rentModalSize').textContent = `Size: ${outfit.size} • Lender: ${outfit.lender}`;
  document.getElementById('bookingBaseFee').textContent = `₹${outfit.rentPrice}`;
  document.getElementById('bookingTotalFee').textContent = `₹${outfit.rentPrice + 300}`;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('bookingDate').value = tomorrow.toISOString().split('T')[0];
  openModal('rentModal');
}

function openSwapRequest(outfitId) {
  const outfit = outfitsDatabase.find(o => o.id === outfitId);
  showToast("Swap Request Dispatched", `1 Token trade ticket created for '${outfit.title}'. Peer will confirm within 2 hours.`);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  closeModal('rentModal');
  showToast("Reservation Confirmed!", "Locker PIN code dispatched to student email. Ready at campus node.");
  const bagCount = document.getElementById('bagCounter');
  bagCount.textContent = parseInt(bagCount.textContent, 10) + 1;
}

function handleListingSubmit(e) {
  e.preventDefault();
  closeModal('listModal');
  showToast("Listing Published!", "Garment queued for CleanCheck™ verification scan. Live on Campus Wardrobe.");
}

function removeItemFromBag(btn) {
  const itemEl = btn.closest('div.flex');
  if (itemEl) itemEl.remove();
  document.getElementById('bagSubtotal').textContent = "₹0";
  document.getElementById('bagTotal').textContent = "₹0";
  document.getElementById('bagCounter').textContent = "0";
  showToast("Bag Updated", "Outfit removed from locker queue.");
}

function checkoutBag() {
  closeModal('bagModal');
  showToast("Order Dispatched", "Campus Locker PIN #8841 generated. Pickup before 9 PM today.");
}

function switchCampusNode(nodeName) {
  showToast("Campus Node Switched", `Inventory filtered for ${nodeName.replace('_', ' ').toUpperCase()}`);
}

/* Lifecycle Init */
window.addEventListener('DOMContentLoaded', () => {
  const budgetSlider = document.getElementById('aiBudget');
  const budgetDisplay = document.getElementById('budgetValue');
  budgetSlider.addEventListener('input', (e) => { budgetDisplay.textContent = `₹${e.target.value}`; });

  renderCatalogCards(outfitsDatabase, 'mainCatalogGrid');
  runAiStylistMatch();
  initYieldCalculator();
  lucide.createIcons();
});
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  const isOpen = !answer.classList.contains('hidden');

  // Close all other open items
  document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-180'));

  // Toggle current item
  if (!isOpen) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180');
  }
}
