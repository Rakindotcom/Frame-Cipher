$ErrorActionPreference = "Stop"
$txt = "D:\Frame-Cipher\src\components\services\seo\ai-search-optimization\AI Search Optimization (AEO_GEO) Service in Bangladesh.txt"
$lines = Get-Content -LiteralPath $txt
$inFaq = $false
$pairs = [System.Collections.Generic.List[string]]::new()   # question
$cur = $null
$body = [System.Collections.Generic.List[string]]::new()
$faqBody = $null

for ($i = 0; $i -lt $lines.Count; $i++) {
  $t = $lines[$i] -replace "`r", ""
  $tt = $t.Trim()
  if ($tt -eq "Frequently Asked Questions") { $inFaq = $true; continue }
  if (-not $inFaq) { continue }

  # detect question: short line ending with "?" (14 known). Also detect known CTA-to-end markers
  if ($tt -match "Request an AI Search Consultation" -or $tt -match "Ready to improve how your business" -or $tt -match "Get Your AI Search") {
    # If we have a pending unfinished Q and this looks like the end marker AFTER faqs, keep pending faq body? Actually these markers appear at FAQ end.
    # This marker likely is part of an answer CTA line though. Keep collecting unless it's a fresh heading outside faq. For safety: only stop on the header-level "Ready to scale" which is post-FAQ.
  }
  if ($tt -match "^[A-Z]?[a-zA-Z0-9'(].*\?$" -and $tt.Length -lt 120 -and $tt.Length -gt 8 -and $tt -notmatch "request|Request" -and $tt -notmatch "^[0-9]") {
    # it's a question heading. Save previous pair.
    if ($null -ne $cur) {
      "Q: $cur"
      "A: " + (($body -join " ") -replace "\s{2,}", " ").Trim()
      ""
    }
    $cur = $tt
    $body.Clear()
  } else {
    if ($null -ne $cur) {
      # skip empty lines, buttons, and known end-of-page CTA marker
      if ($tt -eq "") { $body.Add(" ") ; continue }
      if ($tt -match "^\[.*\]$" -or $tt -match "^(Request|View|Talk to|Get|Start) ") {
        # button line inside an answer -> keep as text (it's a CTA inline). Actually FAQ answers here don't have buttons except last Q.
        $body.Add($tt)
        continue
      }
      $body.Add($tt)
    }
  }
}
if ($null -ne $cur) { "Q: $cur"; "A: " + (($body -join " ") -replace "\s{2,}", " ").Trim() }
