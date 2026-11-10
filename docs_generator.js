/**
 * OCTEWYA CINEMATOGRAPHY - PDF & Document Generators
 * 1. Official Quotation / Invoice (on Letterhead)
 * 2. Legal Client Agreement & Contract Audit Document
 */

function printQuotation() {
  const booking = getActiveBooking();
  if (!booking) return;

  const quoteWin = window.open('', '_blank');
  const items = [];
  if (booking.selectedPackage) {
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

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OCTEWYA Quotation - ${booking.coupleTitle}</title>
  <style>
    @page { size: A4 portrait; margin: 0; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #111;
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page-sheet {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 135px 50px 140px; /* Aligned inside Letter Hed.jpg */
      background: url('Letter Hed.jpg') no-repeat center top;
      background-size: 100% 100%;
      position: relative;
    }
    .doc-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #D4AF37;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .doc-title {
      font-size: 24px;
      font-weight: 800;
      color: #000;
      letter-spacing: 1px;
    }
    .doc-sub {
      font-size: 11px;
      color: #666;
      margin-top: 3px;
    }
    .doc-meta {
      text-align: right;
      font-size: 12px;
      line-height: 1.5;
    }
    .doc-meta strong { color: #000; }
    .client-details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: #F9F9FA;
      border: 1px solid #E5E7EB;
      border-radius: 6px;
      padding: 14px 18px;
      margin-bottom: 24px;
      font-size: 12.5px;
    }
    .detail-item strong { color: #111; display: block; font-size: 11px; text-transform: uppercase; color: #888; }
    .detail-item span { font-weight: 600; color: #000; font-size: 13px; }
    
    table.invoice-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      font-size: 13px;
    }
    table.invoice-table th {
      background: #111;
      color: #D4AF37;
      text-align: left;
      padding: 10px 14px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    table.invoice-table td {
      padding: 10px 14px;
      border-bottom: 1px solid #E5E7EB;
    }
    table.invoice-table tr:nth-child(even) td {
      background: #FAFBFD;
    }
    .totals-box {
      float: right;
      width: 280px;
      margin-bottom: 20px;
    }
    .total-line {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 13px;
    }
    .total-line.bold {
      font-weight: 800;
      font-size: 16px;
      border-top: 2px solid #111;
      padding-top: 10px;
      color: #000;
    }
    .total-line.advance {
      color: #10B981;
      font-weight: 700;
    }
    .total-line.balance {
      color: #B45309;
      font-weight: 700;
      font-size: 14px;
    }
    .clear { clear: both; }
    .payment-instructions {
      background: #FEF3C7;
      border: 1px solid #F59E0B;
      border-radius: 6px;
      padding: 12px 16px;
      font-size: 12px;
      line-height: 1.5;
      margin-top: 20px;
    }
    .bank-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 6px;
      font-size: 11.5px;
    }
    .print-bar {
      background: #111;
      color: #fff;
      padding: 12px 20px;
      text-align: center;
    }
    .btn-print {
      background: #D4AF37;
      border: none;
      color: #000;
      font-weight: 700;
      padding: 8px 24px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
    }
    @media print {
      .print-bar { display: none; }
      body { background: transparent; }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <span>Click the button to download or print this official quotation: </span>
    <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
  </div>

  <div class="page-sheet">
    <div class="doc-header">
      <div>
        <div class="doc-title">OFFICIAL QUOTATION</div>
        <div class="doc-sub">OCTEWYA WEDDING CINEMATOGRAPHY</div>
      </div>
      <div class="doc-meta">
        <div><strong>Quote Ref:</strong> QUO-${booking.id}</div>
        <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB')}</div>
        <div><strong>Valid Until:</strong> Event Date</div>
      </div>
    </div>

    <div class="client-details-grid">
      <div class="detail-item">
        <strong>CLIENT / COUPLE</strong>
        <span>${booking.coupleTitle}</span>
      </div>
      <div class="detail-item">
        <strong>WEDDING DATE</strong>
        <span>${booking.weddingDate}</span>
      </div>
      <div class="detail-item">
        <strong>VENUE / LOCATION</strong>
        <span>${booking.weddingLocation}</span>
      </div>
      <div class="detail-item">
        <strong>CONTACT NUMBERS</strong>
        <span>${booking.bridePhone} / ${booking.groomPhone}</span>
      </div>
      ${booking.homecomingDate ? `
      <div class="detail-item">
        <strong>HOMECOMING DATE</strong>
        <span>${booking.homecomingDate}</span>
      </div>
      <div class="detail-item">
        <strong>HOMECOMING VENUE</strong>
        <span>${booking.homecomingLocation || booking.weddingLocation}</span>
      </div>` : ''}
      ${booking.preshootDate ? `
      <div class="detail-item">
        <strong>PRE-SHOOT DATE & LOCATION</strong>
        <span>${booking.preshootDate} - ${booking.preshootLocation || 'TBD'}</span>
      </div>` : ''}
    </div>

    <table class="invoice-table">
      <thead>
        <tr>
          <th>Description of Service</th>
          <th style="text-align: right; width: 140px;">Amount (LKR)</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(it => `
          <tr>
            <td><strong>${it.name}</strong></td>
            <td style="text-align: right;">${Number(it.price).toLocaleString()} LKR</td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <div class="totals-box">
      <div class="total-line bold">
        <span>Total Package:</span>
        <span>${Number(booking.totalAmount).toLocaleString()} LKR</span>
      </div>
      <div class="total-line advance">
        <span>Advance Paid:</span>
        <span>- ${Number(booking.advancePaid).toLocaleString()} LKR</span>
      </div>
      <div class="total-line balance">
        <span>Balance Due (Before Event):</span>
        <span>${Number(booking.balanceDue).toLocaleString()} LKR</span>
      </div>
    </div>

    <div class="clear"></div>

    <div class="payment-instructions">
      <strong>Payment Information:</strong>
      <div class="bank-grid">
        <div>
          <strong>Sampath Bank:</strong><br>
          Account: 103357000115 (Ratnapura)<br>
          Name: K A D K Piyatissa
        </div>
        <div>
          <strong>Bank of Ceylon (BOC):</strong><br>
          Account: 94413255 (Eheliyagoda)<br>
          Name: K A D K Piyatissa
        </div>
      </div>
      <div style="margin-top: 6px; font-size: 11px; color: #555;">
        * Note: Full payment must be made at least 3 days prior to the wedding event.
      </div>
    </div>
  </div>
</body>
</html>
  `;

  quoteWin.document.write(html);
  quoteWin.document.close();
}

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
