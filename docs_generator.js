/**
 * OCTEWYA CINEMATOGRAPHY - PDF & Document Generators
 * 1. Official Quotation / Invoice (on Letterhead)
 * 2. Legal Client Agreement & Contract Audit Document
 */

function printQuotation(type, customBooking) {
  let booking = customBooking;
  if (!booking && typeof getActiveBooking === 'function') {
    booking = getActiveBooking();
  }
  if (typeof type === 'object' && type !== null && !customBooking) {
    booking = type;
    type = 'advance';
  }
  if (typeof type === 'string' && typeof allBookings !== 'undefined') {
    const found = allBookings.find(b => b.id === type);
    if (found) {
      booking = found;
      type = 'advance';
    }
  }
  if (!booking) return;

  const quoteWin = window.open('', '_blank');
  const items = [];

  // Check if custom package
  if (booking.customPackageItems && booking.customPackageItems.length > 0) {
    booking.customPackageItems.forEach(cp => {
      items.push({ name: cp.name, price: cp.price });
    });
  } else if (booking.selectedPackage) {
    items.push({ name: booking.selectedPackage.name + " (Wedding Day Coverage)", price: booking.selectedPackage.price });
  }

  if (booking.selectedHomecoming) {
    items.push({ name: booking.selectedHomecoming.name, price: booking.selectedHomecoming.price });
  }
  if (booking.selectedEngagement) {
    items.push({ name: booking.selectedEngagement.name, price: booking.selectedEngagement.price });
  }
  if (booking.selectedPreshoot) {
    items.push({ name: booking.selectedPreshoot.name, price: booking.selectedPreshoot.price });
  }
  booking.selectedAddons?.forEach(a => {
    items.push({ name: a.name + " (" + (a.note || "Addon") + ")", price: a.price });
  });

  if (booking.expressDeliveryAccepted) {
    const isVip = booking.selectedPackage?.id === "pkg_03" || booking.selectedPackage?.id === "pkg_vip";
    items.push({ name: "Super Fast Editing Service (VIP Fast-Track)", price: isVip ? 15000 : 10000 });
  }

  if (booking.travelCharges?.enabled && booking.travelCharges.totalTravelCost > 0) {
    if (booking.travelCharges.weddingCost > 0) {
      items.push({
        name: `Travel & Outstation Charges - Wedding Day (${booking.travelCharges.weddingKm || 0} km @ 80 LKR/km)`,
        price: booking.travelCharges.weddingCost
      });
    }
    if (booking.travelCharges.homecomingCost > 0) {
      items.push({
        name: `Travel & Outstation Charges - Homecoming (${booking.travelCharges.homecomingKm || 0} km @ 80 LKR/km)`,
        price: booking.travelCharges.homecomingCost
      });
    }
    if (booking.travelCharges.preshootCost > 0) {
      items.push({
        name: `Travel & Outstation Charges - Pre-Shoot (${booking.travelCharges.preshootKm || 0} km @ 80 LKR/km)`,
        price: booking.travelCharges.preshootCost
      });
    }
    if (booking.travelCharges.robeCost > 0) {
      items.push({
        name: `Travel & Outstation Charges - ROBE Shoot (${booking.travelCharges.robeKm || 0} km @ 80 LKR/km)`,
        price: booking.travelCharges.robeCost
      });
    }
    if (booking.travelCharges.engagementCost > 0) {
      items.push({
        name: `Travel & Outstation Charges - Engagement Coverage (${booking.travelCharges.engagementKm || 0} km @ 80 LKR/km)`,
        price: booking.travelCharges.engagementCost
      });
    }
  }

  const isFullSettled = type === "full" || booking.isFullPaid || (booking.isAdvanceVerified && booking.balanceDue <= 0);
  const isAdvanceVerified = type === "advance" || booking.isAdvanceVerified;

  let docTitle = "OFFICIAL QUOTATION";
  let docRef = `QUO-${booking.id}`;
  let statusBadgeHtml = `<span style="background: #FFFBEB; color: #B45309; border: 1px solid #FCD34D; padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 11px; letter-spacing: 0.5px; display: inline-block;">PROVISIONAL ESTIMATE</span>`;

  if (isFullSettled) {
    docTitle = "OFFICIAL FINAL SETTLEMENT INVOICE";
    docRef = `INV-FULL-${booking.id}`;
    statusBadgeHtml = `<span style="background: #ECFDF5; color: #047857; border: 1px solid #6EE7B7; padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 11px; letter-spacing: 0.5px; display: inline-block;">100% FULLY PAID & SETTLED ✓</span>`;
  } else if (isAdvanceVerified) {
    docTitle = "OFFICIAL INVOICE & CONFIRMATION";
    docRef = `INV-${booking.id}`;
    statusBadgeHtml = `<span style="background: #EFF6FF; color: #1D4ED8; border: 1px solid #93C5FD; padding: 5px 12px; border-radius: 20px; font-weight: 700; font-size: 11px; letter-spacing: 0.5px; display: inline-block;">ADVANCE VERIFIED & BOOKING CONFIRMED ✓</span>`;
  }

  const primaryPhone = booking.primaryPhone || booking.bridePhone || booking.groomPhone || "";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${docTitle} - ${booking.coupleTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page { 
      size: A4 portrait; 
      margin: 0; 
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1E293B;
      background: #E2E8F0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .print-bar {
      background: #0F172A;
      color: #F8FAFC;
      padding: 14px 24px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .print-bar span {
      font-size: 13.5px;
      font-weight: 500;
      color: #CBD5E1;
    }
    .btn-print {
      background: linear-gradient(135deg, #D4AF37 0%, #AA8010 100%);
      border: 1px solid #FFE082;
      color: #0F172A;
      font-weight: 800;
      font-size: 13px;
      padding: 9px 24px;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(212,175,55,0.3);
      transition: all 0.2s ease;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .btn-print:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(212,175,55,0.45);
    }
    .page-sheet {
      width: 210mm;
      min-height: 297mm;
      margin: 20px auto;
      box-sizing: border-box;
      /* Top padding 240px leaves generous clearance below Letter Hed.jpg pre-printed artwork */
      padding: 240px 52px 100px;
      background: #FFFFFF url('Letter Hed.jpg') no-repeat center top;
      background-size: 100% 100%;
      position: relative;
      box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    }

    .doc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #D4AF37;
      padding-bottom: 14px;
      margin-bottom: 22px;
    }
    .doc-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 20px;
      font-weight: 800;
      color: #0F172A;
      letter-spacing: 1px;
      line-height: 1.2;
    }
    .doc-sub {
      font-size: 11px;
      font-weight: 600;
      color: #8892B0;
      letter-spacing: 1px;
      margin-top: 4px;
      text-transform: uppercase;
    }
    .doc-meta {
      text-align: right;
      font-size: 12px;
      line-height: 1.6;
    }
    .doc-meta-ref {
      font-family: 'Cinzel', Georgia, serif;
      font-weight: 700;
      color: #0F172A;
      font-size: 13px;
    }
    .doc-meta-date {
      color: #64748B;
      font-weight: 500;
      font-size: 11.5px;
    }

    /* Client Dossier Card */
    .client-details-card {
      background: #FAFAF9;
      border: 1px solid #E2E8F0;
      border-top: 3px solid #D4AF37;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 22px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    }
    .client-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    .client-item strong {
      display: block;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #64748B;
      margin-bottom: 3px;
    }
    .client-item span {
      font-weight: 700;
      color: #0F172A;
      font-size: 12.5px;
      line-height: 1.35;
      word-break: break-word;
    }
    .secondary-events-row {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed #E2E8F0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    /* Table */
    table.invoice-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 22px;
      font-size: 12.5px;
    }
    table.invoice-table thead th {
      background: #0F172A;
      color: #D4AF37;
      font-family: 'Cinzel', Georgia, serif;
      text-align: left;
      padding: 11px 14px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-top: 2px solid #D4AF37;
      border-bottom: 2px solid #D4AF37;
    }
    table.invoice-table tbody td {
      padding: 10px 14px;
      border-bottom: 1px solid #E2E8F0;
      color: #334155;
      vertical-align: middle;
    }
    table.invoice-table tbody tr:nth-child(even) td {
      background: #F8FAFC;
    }
    table.invoice-table tbody tr:last-child td {
      border-bottom: 2px solid #CBD5E1;
    }
    .item-idx {
      width: 32px;
      color: #94A3B8;
      font-weight: 600;
      font-size: 11px;
    }
    .item-desc {
      font-weight: 600;
      color: #0F172A;
    }
    .item-amount {
      text-align: right;
      width: 140px;
      font-weight: 700;
      color: #0F172A;
    }

    /* Totals Box */
    .totals-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    .totals-box {
      width: 350px;
      background: #FAFAF9;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 14px 18px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    }
    .total-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 0;
      font-size: 12.5px;
      color: #475569;
    }
    .total-line.total-main {
      font-family: 'Cinzel', Georgia, serif;
      font-weight: 800;
      font-size: 15px;
      color: #0F172A;
      border-top: 2px solid #0F172A;
      padding-top: 10px;
      margin-top: 6px;
    }
    .total-line.advance {
      color: #047857;
      font-weight: 700;
    }
    .total-line.balance {
      font-weight: 800;
      font-size: 14px;
      color: #B45309;
      border-top: 1px dashed #CBD5E1;
      padding-top: 8px;
      margin-top: 6px;
    }
    .total-line.settled {
      color: #047857;
    }

    /* Bank & Signature Grid */
    .bottom-section-grid {
      margin-top: 10px;
      clear: both;
    }
    .bank-card {
      background: #FAFAF9;
      border: 1px solid #E2E8F0;
      border-left: 4px solid #D4AF37;
      border-radius: 8px;
      padding: 12px 16px;
    }
    .bank-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 11.5px;
      font-weight: 700;
      color: #0F172A;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .bank-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      font-size: 11px;
      line-height: 1.45;
    }
    .bank-item {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 8px 10px;
    }
    .bank-item strong {
      color: #0F172A;
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }
    .bank-note {
      margin-top: 8px;
      font-size: 10px;
      color: #64748B;
      line-height: 1.4;
    }



    @media print {
      body {
        background: transparent;
      }
      .print-bar {
        display: none !important;
      }
      .page-sheet {
        margin: 0 !important;
        box-shadow: none !important;
        /* Exact print padding ensuring flawless alignment with Letter Hed.jpg */
        padding: 240px 52px 100px !important;
        width: 210mm !important;
        min-height: 297mm !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <span>Official OCTEWYA Letterhead Document ready to print or export:</span>
    <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
  </div>

  <div class="page-sheet">
    <div class="doc-header">
      <div>
        <div class="doc-title">${docTitle}</div>
        <div class="doc-sub">OCTEWYA WEDDING CINEMATOGRAPHY • DASUN KAVINDA</div>
      </div>
      <div class="doc-meta">
        <div class="doc-meta-ref">Ref: ${docRef}</div>
        <div class="doc-meta-date">Date: ${new Date().toLocaleDateString('en-GB')}</div>
        <div style="margin-top: 5px;">${statusBadgeHtml}</div>
      </div>
    </div>

    <div class="client-details-card">
      <div class="client-grid">
        <div class="client-item">
          <strong>Client / Couple</strong>
          <span>${booking.coupleTitle}</span>
        </div>
        <div class="client-item">
          <strong>Wedding Date</strong>
          <span>${booking.weddingDate}</span>
        </div>
        <div class="client-item">
          <strong>Primary Venue</strong>
          <span>${booking.weddingLocation}</span>
        </div>
        <div class="client-item">
          <strong>PRIMARY WHATSAPP (UPDATES)</strong>
          <span>${primaryPhone}</span>
        </div>
      </div>

      ${(booking.homecomingDate || booking.preshootDate) ? `
      <div class="secondary-events-row">
        ${booking.homecomingDate ? `
        <div class="client-item">
          <strong>Homecoming Date & Venue</strong>
          <span>${booking.homecomingDate} • ${booking.homecomingLocation || booking.weddingLocation}</span>
        </div>` : ''}
        ${booking.preshootDate ? `
        <div class="client-item">
          <strong>Pre-Shoot Date & Location</strong>
          <span>${booking.preshootDate} • ${booking.preshootLocation || 'Studio Choice'}</span>
        </div>` : ''}
      </div>` : ''}
    </div>

    <table class="invoice-table">
      <thead>
        <tr>
          <th class="item-idx">#</th>
          <th>Description of Service</th>
          <th style="text-align: right; width: 140px;">Amount (LKR)</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((it, idx) => `
          <tr>
            <td class="item-idx">${String(idx + 1).padStart(2, '0')}</td>
            <td class="item-desc">${it.name}</td>
            <td class="item-amount">${Number(it.price).toLocaleString()} LKR</td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <div class="totals-wrap">
      <div class="totals-box">
        <div class="total-line">
          <span>Subtotal & Selected Services:</span>
          <strong>${Number(booking.totalAmount).toLocaleString()} LKR</strong>
        </div>
        <div class="total-line advance">
          <span>Advance Paid ${isAdvanceVerified ? '(Verified ✓)' : '(Pending Verification)'}:</span>
          <strong>${isAdvanceVerified ? `- ${Number(booking.advancePaid).toLocaleString()} LKR` : `0 LKR (${Number(booking.advancePaid).toLocaleString()} LKR Pending)`}</strong>
        </div>
        <div class="total-line ${isFullSettled ? 'balance settled' : 'balance'}">
          <span>${isFullSettled ? 'Settlement Status:' : 'Remaining Balance Due:'}</span>
          <span>${isFullSettled ? '<span style="color:#047857;">0 LKR (SETTLED ✓)</span>' : `${Number(isAdvanceVerified ? booking.balanceDue : booking.totalAmount).toLocaleString()} LKR`}</span>
        </div>
        <div class="total-line total-main">
          <span>Total Package Value:</span>
          <span>${Number(booking.totalAmount).toLocaleString()} LKR</span>
        </div>
      </div>
    </div>

    <div class="bottom-section-grid">
      <div class="bank-card">
        <div class="bank-title">Payment & Direct Bank Transfer Details</div>
        <div class="bank-grid">
          <div class="bank-item">
            <strong>Sampath Bank</strong>
            Account: <strong>103357000115</strong><br>
            Branch: Ratnapura Super Branch<br>
            Name: K A D K Piyatissa
          </div>
          <div class="bank-item">
            <strong>Bank of Ceylon (BOC)</strong>
            Account: <strong>94413255</strong><br>
            Branch: Eheliyagoda Branch<br>
            Name: K A D K Piyatissa
          </div>
        </div>
        <div class="bank-note">
          * Full payment must be settled at least 3 days prior to the wedding event.<br>
          * Official inquiries & payment confirmation: <strong>Dasun Kavinda (071 4 277 276)</strong>.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  quoteWin.document.write(html);
  quoteWin.document.close();
}

window.generateLetterheadInvoice = printQuotation;


/**
 * 2. LEGAL CLIENT AGREEMENT & CONTRACT AUDIT DOCUMENT
 */
function printLegalAgreement() {
  const booking = getActiveBooking();
  if (!booking) return;

  const agreeWin = window.open('', '_blank');
  const tAndC = TERMS_AND_CONDITIONS['si'];

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OCTEWYA Legal Agreement - ${booking.coupleTitle}</title>
  <style>
    @page { size: A4 portrait; margin: 15mm; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #111;
      background: #fff;
      font-size: 12px;
      line-height: 1.5;
    }
    .legal-header {
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      color: #000;
      letter-spacing: 1px;
    }
    .contract-badge {
      background: #111;
      color: #D4AF37;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 700;
      border-radius: 4px;
    }
    .contract-info-box {
      background: #F3F4F6;
      border: 1px solid #D1D5DB;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      font-size: 11.5px;
    }
    .contract-info-box strong { color: #374151; }
    .terms-section h3 {
      font-size: 14px;
      border-bottom: 1px solid #E5E7EB;
      padding-bottom: 4px;
      margin-bottom: 10px;
      color: #111;
    }
    .terms-item {
      margin-bottom: 10px;
      text-align: justify;
    }
    .terms-item strong {
      color: #111;
      display: block;
      margin-bottom: 2px;
      font-size: 11.5px;
    }
    .critical-clause {
      background: #FEF2F2;
      border: 1px solid #FCA5A5;
      padding: 10px;
      border-radius: 4px;
    }
    .verification-seal {
      margin-top: 24px;
      background: #ECFDF5;
      border: 1px solid #10B981;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 11.5px;
      line-height: 1.5;
    }
    .sig-row {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      padding-top: 10px;
    }
    .sig-box {
      width: 220px;
      text-align: center;
      border-top: 1px dashed #666;
      padding-top: 6px;
      font-size: 11px;
    }
    .print-bar {
      background: #111;
      color: #fff;
      padding: 10px;
      text-align: center;
      margin-bottom: 15px;
    }
    .btn-print {
      background: #D4AF37;
      border: none;
      color: #000;
      font-weight: 700;
      padding: 6px 20px;
      border-radius: 20px;
      cursor: pointer;
    }
    @media print {
      .print-bar { display: none; }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <button class="btn-print" onclick="window.print()">Print / Save Agreement as PDF</button>
  </div>

  <div class="legal-header">
    <div>
      <div class="brand-title">OCTEWYA CINEMATOGRAPHY</div>
      <div style="font-size: 11px; color: #555;">OCTEWYA VIDEO PRODUCTION & ADVERTISING | REG NO: R/KURU/3295</div>
    </div>
    <div class="contract-badge">CLIENT CONTRACT & AGREEMENT AUDIT</div>
  </div>

  <div class="contract-info-box">
    <div><strong>Booking Reference ID:</strong> ${booking.id}</div>
    <div><strong>Contract Date:</strong> ${booking.createdAt || new Date().toLocaleDateString('en-GB')}</div>
    <div><strong>Couple / Client:</strong> ${booking.coupleTitle}</div>
    <div><strong>Contact Numbers:</strong> ${booking.bridePhone} (Bride) / ${booking.groomPhone} (Groom)</div>
    <div><strong>Wedding Date & Venue:</strong> ${booking.weddingDate} at ${booking.weddingLocation}</div>
    <div><strong>Selected Package:</strong> ${booking.selectedPackage?.name} (${Number(booking.totalAmount).toLocaleString()} LKR)</div>
    <div><strong>Advance Remitted:</strong> ${Number(booking.advancePaid).toLocaleString()} LKR (${booking.isAdvanceVerified ? 'Verified by Studio' : 'Recorded'})</div>
    <div><strong>Balance Outstanding:</strong> ${Number(booking.balanceDue).toLocaleString()} LKR</div>
  </div>

  <div class="terms-section">
    <h3>ගිවිසුම්ගත නියමයන් සහ කොන්දේසි (Legally Acknowledged Terms)</h3>
    <div class="terms-list">
      ${tAndC.items.map(it => `
        <div class="terms-item ${it.title.includes('11') ? 'critical-clause' : ''}">
          <strong>${it.title}</strong>
          <span>${it.text}</span>
        </div>
      `).join("")}
    </div>
  </div>

  <div class="verification-seal">
    <strong>DIGITAL AUDIT & ACCEPTANCE CERTIFICATION:</strong><br>
    මෙම ලේඛනය මඟින් සහතික කරනුයේ, <strong>${booking.coupleTitle}</strong> විසින් <strong>${booking.id}</strong> දරන Booking පත්‍රිකාව සම්පූර්ණ කර, අත්තිකාරම් මුදල තැන්පත් කරමින් ඉහත සඳහන් සියලු නියමයන් සහ කොන්දේසි (විශේෂයෙන්ම 11 වන වගන්තිය වන තාක්ෂණික උපකරණ සහ දත්ත සුරක්ෂිතභාවය පිළිබඳ වගකීම් සීමාව) කියවා බලා ඊට පූර්ණ එකඟතාවය පළකළ බවයි.
  </div>

  <div class="sig-row">
    <div class="sig-box">
      <strong>OCTEWYA CINEMATOGRAPHY</strong><br>
      Dasun Kavinda Cinematography<br>
      Authorized Studio Signature
    </div>
    <div class="sig-box">
      <strong>CLIENT / COUPLE</strong><br>
      ${booking.coupleTitle}<br>
      Digitally Acknowledged & Confirmed
    </div>
  </div>
</body>
</html>
  `;

  agreeWin.document.write(html);
  agreeWin.document.close();
}
