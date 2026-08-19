param(
  [string]$OutputPath = (Join-Path $PSScriptRoot '..\native\resources\LynxNotify.ico')
)

Add-Type -AssemblyName System.Drawing

function New-RoundedPath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = $Radius * 2
  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-IconPng {
  param([int]$Size)

  $bitmap = [System.Drawing.Bitmap]::new(
    $Size,
    $Size,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $scale = $Size / 256.0
  $graphics.ScaleTransform($scale, $scale)

  $backgroundBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#6757E8'))
  $backgroundPath = New-RoundedPath -X 18 -Y 18 -Width 220 -Height 220 -Radius 54
  $graphics.FillPath($backgroundBrush, $backgroundPath)

  $cardBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
  $cardPath = New-RoundedPath -X 61 -Y 67 -Width 134 -Height 119 -Radius 24
  $graphics.FillPath($cardBrush, $cardPath)

  $linePen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#6757E8'), 12)
  $linePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $linePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $graphics.DrawLine($linePen, 88, 111, 157, 111)
  $graphics.DrawLine($linePen, 88, 143, 139, 143)

  $accentBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#FFB86B'))
  $graphics.FillEllipse($accentBrush, 157, 83, 31, 31)

  $stream = [System.IO.MemoryStream]::new()
  $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)

  $result = [pscustomobject]@{
    Width = $Size
    Bytes = $stream.ToArray()
  }

  $stream.Dispose()
  $accentBrush.Dispose()
  $linePen.Dispose()
  $cardPath.Dispose()
  $cardBrush.Dispose()
  $backgroundPath.Dispose()
  $backgroundBrush.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
  return $result
}

$fullOutputPath = [System.IO.Path]::GetFullPath($OutputPath)
$outputDirectory = [System.IO.Path]::GetDirectoryName($fullOutputPath)
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$frames = @(16, 32, 48, 256 | ForEach-Object { New-IconPng -Size $_ })
$iconStream = [System.IO.MemoryStream]::new()
$writer = [System.IO.BinaryWriter]::new($iconStream)
$writer.Write([uint16]0)
$writer.Write([uint16]1)
$writer.Write([uint16]$frames.Count)

$dataOffset = 6 + (16 * $frames.Count)
foreach ($frame in $frames) {
  $dimension = if ($frame.Width -ge 256) { [byte]0 } else { [byte]$frame.Width }
  $writer.Write($dimension)
  $writer.Write($dimension)
  $writer.Write([byte]0)
  $writer.Write([byte]0)
  $writer.Write([uint16]1)
  $writer.Write([uint16]32)
  $writer.Write([uint32]$frame.Bytes.Length)
  $writer.Write([uint32]$dataOffset)
  $dataOffset += $frame.Bytes.Length
}

foreach ($frame in $frames) {
  $writer.Write($frame.Bytes)
}

$writer.Flush()
[System.IO.File]::WriteAllBytes($fullOutputPath, $iconStream.ToArray())
$writer.Dispose()
$iconStream.Dispose()
Write-Output "Generated $fullOutputPath"
