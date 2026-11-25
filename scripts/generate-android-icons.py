from pathlib import Path
from PIL import Image

source = Image.open("assets/duma-business-logo.webp").convert("RGBA")

# The supplied mark sits above the DUMA BUSINESS wordmark. Use the Africa/fingerprint
# emblem alone for the launcher icon so it remains recognisable at small sizes.
mark = source.crop((24, 0, 276, 245))
mark.thumbnail((430, 430), Image.Resampling.LANCZOS)
square = Image.new("RGBA", (512, 512), (255, 255, 255, 255))
square.alpha_composite(mark, ((512 - mark.width) // 2, (512 - mark.height) // 2))

res = Path("android/app/src/main/res")
densities = {
    "mdpi": 48,
    "hdpi": 72,
    "xhdpi": 96,
    "xxhdpi": 144,
    "xxxhdpi": 192,
}
for density, size in densities.items():
    folder = res / f"mipmap-{density}"
    folder.mkdir(parents=True, exist_ok=True)
    icon = square.resize((size, size), Image.Resampling.LANCZOS)
    icon.save(folder / "ic_launcher.png", optimize=True)
    icon.save(folder / "ic_launcher_round.png", optimize=True)

# Android adaptive icon foreground with safe margins.
adaptive = Image.new("RGBA", (432, 432), (0, 0, 0, 0))
foreground = square.resize((300, 300), Image.Resampling.LANCZOS)
adaptive.alpha_composite(foreground, ((432 - 300) // 2, (432 - 300) // 2))
for name in ("ic_launcher_foreground.png",):
    folder = res / "mipmap-xxxhdpi"
    folder.mkdir(parents=True, exist_ok=True)
    adaptive.save(folder / name, optimize=True)

anydpi = res / "mipmap-anydpi-v26"
anydpi.mkdir(parents=True, exist_ok=True)
(anydpi / "ic_launcher.xml").write_text(
    '<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n'
    '    <background android:drawable="@color/ic_launcher_background" />\n'
    '    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n'
    '</adaptive-icon>\n',
    encoding="utf-8",
)
(anydpi / "ic_launcher_round.xml").write_text(
    '<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n'
    '    <background android:drawable="@color/ic_launcher_background" />\n'
    '    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n'
    '</adaptive-icon>\n',
    encoding="utf-8",
)
values = res / "values"
values.mkdir(parents=True, exist_ok=True)
colors = values / "ic_launcher_background.xml"
colors.write_text(
    '<resources><color name="ic_launcher_background">#FFFFFF</color></resources>\n',
    encoding="utf-8",
)
print("Generated DUMA BUSINESS launcher icons.")
