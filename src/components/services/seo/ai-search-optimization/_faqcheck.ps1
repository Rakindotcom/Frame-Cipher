$ErrorActionPreference = 'Stop'
$txt = "D:\Frame-Cipher\src\components\services\seo\ai-search-optimization\AI Search Optimization (AEO_GEO) Service in Bangladesh.txt"
$htmlPath = "D:\Frame-Cipher\.next\server\app\services\seo\ai-search-optimization.html"
$faqPath = "D:\Frame-Cipher\src\components\services\seo\ai-search-optimization\FAQ.jsx"

$lines = Get-Content -LiteralPath $txt
$html = [System.IO.File]::ReadAllText($htmlPath)

# --- 1. FAQ questions from paste .txt (lines ending in '?' that aren't bullets/pricing/headings) ---
$pasteQ = @()
$inFaq = $false
for ($i = 0; $i -lt $lines.Count; $i++) {
  $t = $lines[$i].Trim()
  if ($t -match '^Frequently Asked Questions$') { $inFaq = $true; continue }
  if ($inFaq) {
    if ($t.Length -ge 5 -and $t.Length -le 200 -and $t.EndsWith('?') -and $t -notmatch '^[*-]') {
      $pasteQ += $t
    }
    if ($t -match '^Request an AI Search|^Ready to|^Can we|^[A-Z][a-z]+ & [A-Z]') { if ($t -match '^Request an AI Search') { break } }
  }
}

"=== FAQ questions in PASTE .txt (raw) ==="
$pasteQ | ForEach-Object { "  $_" }
"count: $($pasteQ.Count)"

# --- 2. FAQ questions actually in built HTML (details summary texts) ---
$htmlQ = @()
$dm = [regex]::Matches($html, '<details[^>]*>\s*<summary[^>]*>(.*?)</summary>', 'Singleline')
foreach ($m in $dm) {
  $t = $m.Groups[1].Value -replace '<[^>]+>', '' -replace '&amp;', '&' -replace '&#x27;', "'" -replace '&quot;', '"' -replace '&nbsp;', ' '
  $t = $t.Trim()
  if ($t) { $htmlQ += $t }
}
"`n=== FAQ questions in BUILT HTML (details/summary) ==="
$htmlQ | ForEach-Object { "  $_" }
"count: $($htmlQ.Count)"

# --- 3. Cross-check: which paste questions are missing from built HTML ---
"`n=== Paste FAQ questions MISSING from built HTML ==="
$a = @($pasteQ | ForEach-Object { $_.Trim() })
$b = @($htmlQ | ForEach-Object { $_.Trim() -replace '\s+', ' ' })
$missing = 0
foreach ($q in $a) {
  $norm = ($q -replace '\s+', ' ').Trim()
  $found = $false
  foreach ($hq in $b) {
    if ($hq -eq $norm -or $hq -like "$norm*" -or $norm -like "$hq*") { $found = $true; break }
  }
  if (-not $found) { "  MISSING: $q"; $missing++ }
}
"missing count: $missing / $($a.Count)"

# --- 4. CaseStudies field-item count in the live component + heading count in HTML ---
$csPath = "D:\Frame-Cipher\src\components\services\seo\ai-search-optimization\CaseStudies.jsx"
$csRaw = Get-Content -LiteralPath $csPath -Raw
$fieldCount = ([regex]::Matches($csRaw, "options|fields|items = \[", 'Singleline')).Count
$multiC = ([regex]::Matches($csRaw, "'")).Count
"`nCaseStudies.jsx: total single-quote delimiters (proxy for item count): $multiC"
"HTML 'AI Search Results' heading count: $((([regex]::Matches($html,'AI Search Results')).Count))"
"HTML 'View AI Search Case Studies' button count: $((([regex]::Matches($html,'View AI Search Case Studies')).Count))"
