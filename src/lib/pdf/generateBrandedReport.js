import { contact } from '@/data/agency'

/**
 * generateBrandedPdfReport
 * Exports an executive agency-grade PDF report with Frame Cipher's official logo
 * on top, detailed financial & funnel forecasts, and full agency company information at the footer.
 */
export async function generateBrandedPdfReport({
  reportTitle = 'Advertising Media Plan & Performance Forecast',
  platformName = 'Paid Advertising',
  clientName = 'Confidential Client',
  preparedBy = 'Frame Cipher Media Team',
  currency = 'USD',
  country = 'Global',
  industry = 'General Commerce',
  summaryRows = [],
  funnelRows = [],
  scenarios = [],
  recommendations = [],
  summaryParagraph = '',
}) {
  const { default: jsPDF } = await import('jspdf')
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()

  const marginX = 40
  const marginTop = 60
  const marginBottom = 60
  const contentWidth = pageWidth - marginX * 2
  let y = marginTop
  let pageNumber = 1

  const toDataUrl = async (url) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      return await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    } catch {
      return null
    }
  }

  const logoData = await toDataUrl('/logo.png')

  const drawPageFooter = (pageNum) => {
    pdf.setDrawColor('#262626')
    pdf.setLineWidth(1)
    pdf.line(marginX, pageHeight - 44, pageWidth - marginX, pageHeight - 44)

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor('#71717A')
    const footerCompany = `FRAME CIPHER | ${contact.email} | ${contact.phone} | ${contact.location}`
    pdf.text(footerCompany, marginX, pageHeight - 28)
    pdf.text(`https://framecipher.com  |  Page ${pageNum}`, pageWidth - marginX - 130, pageHeight - 28)
  }

  const drawPageHeader = () => {
    // Header top band
    pdf.setFillColor('#0A0A0A')
    pdf.rect(0, 0, pageWidth, 48, 'F')

    if (logoData) {
      try {
        pdf.addImage(logoData, 'PNG', marginX, 10, 28, 28)
      } catch {
        // Fallback
        pdf.setFillColor('#A855F7')
        pdf.circle(marginX + 14, 24, 12, 'F')
      }
    } else {
      pdf.setFillColor('#A855F7')
      pdf.circle(marginX + 14, 24, 12, 'F')
    }

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(11)
    pdf.setTextColor('#A855F7')
    pdf.text('FRAME CIPHER // MEDIA SCIENCE & GROWTH INTELLIGENCE', marginX + 38, 22)

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor('#A1A1AA')
    pdf.text(`Platform: ${platformName}  |  Generated: ${new Date().toLocaleDateString()}`, marginX + 38, 34)

    y = marginTop + 10
  }

  const ensureSpace = (neededHeight = 24) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      drawPageFooter(pageNumber)
      pdf.addPage()
      pageNumber += 1
      drawPageHeader()
    }
  }

  // Draw initial Page 1 Header
  drawPageHeader()

  // Main Report Title Banner
  ensureSpace(40)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(16)
  pdf.setTextColor('#18181B')
  pdf.text(reportTitle.toUpperCase(), marginX, y)
  y += 18

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.setTextColor('#52525B')
  pdf.text(`Prepared for: ${clientName}   |   Strategist: ${preparedBy}`, marginX, y)
  y += 14
  pdf.text(`Target Market: ${country} (${currency})   |   Vertical: ${industry}`, marginX, y)
  y += 20

  pdf.setDrawColor('#E4E4E7')
  pdf.setLineWidth(1)
  pdf.line(marginX, y, pageWidth - marginX, y)
  y += 20

  const drawSectionHeading = (title) => {
    ensureSpace(28)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(12)
    pdf.setTextColor('#9333EA') // Frame accent purple
    pdf.text(title.toUpperCase(), marginX, y)
    y += 8
    pdf.setDrawColor('#E4E4E7')
    pdf.line(marginX, y, pageWidth - marginX, y)
    y += 16
  }

  const drawTableRow = (label, value) => {
    ensureSpace(20)
    pdf.setFillColor('#F4F4F5')
    pdf.rect(marginX, y - 10, contentWidth, 18, 'F')
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(9)
    pdf.setTextColor('#3F3F46')
    pdf.text(String(label), marginX + 8, y + 2)
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor('#18181B')
    pdf.text(String(value), marginX + 240, y + 2)
    y += 22
  }

  // 1. Financial KPIs
  if (summaryRows.length > 0) {
    drawSectionHeading('1. Financial Projections & Unit Economics')
    summaryRows.forEach(([k, v]) => drawTableRow(k, v))
    y += 12
  }

  // 2. Funnel Projections
  if (funnelRows.length > 0) {
    drawSectionHeading('2. Full-Funnel Throughput & Delivery Metrics')
    funnelRows.forEach(([k, v]) => drawTableRow(k, v))
    y += 12
  }

  // 3. Scenarios
  if (scenarios.length > 0) {
    drawSectionHeading('3. Scaling Scenarios (Budget Playbooks)')
    scenarios.forEach((sc) => {
      ensureSpace(45)
      pdf.setDrawColor('#9333EA')
      pdf.setFillColor('#FAFAFA')
      pdf.roundedRect(marginX, y - 8, contentWidth, 38, 4, 4, 'FD')

      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(10)
      pdf.setTextColor('#18181B')
      pdf.text(`${sc.label.toUpperCase()}: ${sc.budgetFormatted}`, marginX + 12, y + 6)

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8)
      pdf.setTextColor('#52525B')
      pdf.text(
        `Conversions: ${sc.conversions}  |  Revenue: ${sc.revenueFormatted}  |  Target ROAS: ${sc.roas}x  |  Profit: ${sc.profitFormatted}`,
        marginX + 12,
        y + 20
      )
      y += 46
    })
    y += 10
  }

  // 4. Algorithmic Recommendations
  if (recommendations.length > 0) {
    drawSectionHeading('4. Algorithmic Optimization Checklist')
    recommendations.forEach((rec, i) => {
      const splitText = pdf.splitTextToSize(`[${i + 1}] ${rec}`, contentWidth - 16)
      const boxHeight = splitText.length * 12 + 10
      ensureSpace(boxHeight + 6)
      pdf.setFillColor('#F9FAFB')
      pdf.rect(marginX, y - 8, contentWidth, boxHeight, 'F')
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8.5)
      pdf.setTextColor('#374151')
      pdf.text(splitText, marginX + 8, y + 4)
      y += boxHeight + 4
    })
    y += 10
  }

  // 5. Executive Synthesis
  if (summaryParagraph) {
    drawSectionHeading('5. Strategic Synthesis')
    const splitSummary = pdf.splitTextToSize(summaryParagraph, contentWidth - 16)
    const summaryHeight = splitSummary.length * 13 + 14
    ensureSpace(summaryHeight)
    pdf.setFillColor('#F3E8FF') // Light purple
    pdf.rect(marginX, y - 8, contentWidth, summaryHeight, 'F')
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor('#581C87')
    pdf.text(splitSummary, marginX + 8, y + 6)
    y += summaryHeight + 10
  }

  // Final page footer
  drawPageFooter(pageNumber)

  // Save PDF
  const safeFilename = `frame-cipher-${platformName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-report-${Date.now()}.pdf`
  pdf.save(safeFilename)
}
